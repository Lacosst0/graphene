defmodule DemoWeb.InfrastructureLive do
  use DemoWeb, :live_view

  alias Demo.CloudData
  alias Demo.CloudEvents

  import DemoWeb.CloudHelpers

  @impl true
  def mount(_params, _session, socket) do
    clusters = CloudData.clusters()

    {:ok,
     assign(socket,
       active_page: :infrastructure,
       page_title: "Infrastructure · Nimbus Cloud",
       clusters: clusters,
       search: ""
     )}
  end

  @impl true
  def handle_event("scale_cluster", %{"id" => id}, socket) do
    {clusters, scaled} =
      update_cluster(socket.assigns.clusters, id, &Map.update!(&1, :nodes, fn v -> v + 2 end))

    if scaled do
      CloudEvents.broadcast(%{
        id: "evt-#{System.unique_integer([:positive])}",
        time: current_time(),
        service: "Clusters",
        event: "Scaled #{scaled.name} to #{scaled.nodes} nodes",
        severity: "Medium",
        status: "Completed"
      })
    end

    {:noreply,
     socket
     |> assign(:clusters, clusters)
     |> put_flash(:info, "Scaling initiated for #{scaled && scaled.name}")}
  end

  @impl true
  def handle_event("restart_cluster", %{"id" => id}, socket) do
    {clusters, restarted} =
      update_cluster(socket.assigns.clusters, id, &Map.put(&1, :status, "Maintenance"))

    if restarted do
      CloudEvents.broadcast(%{
        id: "evt-#{System.unique_integer([:positive])}",
        time: current_time(),
        service: "Clusters",
        event: "Restart scheduled for #{restarted.name}",
        severity: "Low",
        status: "Queued"
      })
    end

    {:noreply,
     socket
     |> assign(:clusters, clusters)
     |> put_flash(:info, "Restart scheduled for #{restarted && restarted.name}")}
  end

  defp update_cluster(clusters, id, fun) do
    {updated, match} =
      Enum.map_reduce(clusters, nil, fn cluster, acc ->
        if cluster.id == id do
          updated = fun.(cluster)
          {updated, updated}
        else
          {cluster, acc}
        end
      end)

    {updated, match}
  end

  defp current_time do
    DateTime.utc_now() |> Calendar.strftime("%H:%M")
  end

  defp filtered_clusters(clusters, query) do
    query = String.trim(String.downcase(query || ""))

    if query == "" do
      clusters
    else
      Enum.filter(clusters, fn cluster ->
        String.contains?(String.downcase(cluster.name), query) or
          String.contains?(String.downcase(cluster.region), query) or
          String.contains?(String.downcase(cluster.environment), query)
      end)
    end
  end

  defp handle_search(%{"search" => query}, socket) do
    assign(socket, :search, query || "")
  end

  defp handle_search(_payload, socket), do: socket

  @impl true
  def render(assigns) do
    clusters = filtered_clusters(assigns.clusters, assigns.search)

    assigns = assign(assigns, :filtered_clusters, clusters)

    ~H"""
    <.page_header>
      <:breadcrumb>
        <.breadcrumb size="sm">
          <:item href={~p"/demo"} text="Cloud Admin" />
        </.breadcrumb>
      </:breadcrumb>
      <:content title="Infrastructure">
        <.tag type="blue">Kubernetes</.tag>
      </:content>
      <:content_text subtitle="Manage multi-region clusters, node pools, and workload scaling." />
    </.page_header>

    <.grid full_width row_gap="07">
      <:column span="16">
        <.grid>
          <:column sm="4" md="4" lg="4">
            <.tile>
              <.stack gap="2">
                <.stack orientation="horizontal" gap="2">
                  <p>Compute pools</p>
                  <.tag type="green">Stable</.tag>
                </.stack>
                <h3>42</h3>
                <p>6 reserved for failover</p>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="4">
            <.tile>
              <.stack gap="2">
                <p>Edge clusters</p>
                <h3>18</h3>
                <p>4 under maintenance</p>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="4">
            <.tile>
              <.stack gap="2">
                <p>Patch compliance</p>
                <h3>92%</h3>
                <.progress_bar value={92} />
                <p>Next window in 6 days</p>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="2">
                <.stack orientation="horizontal" gap="2">
                  <p>Ingress capacity</p>
                  <.tag type="blue">Moderate</.tag>
                </.stack>
                <h3>68%</h3>
                <.progress_bar value={68} />
                <p>Route shift recommended in 2 regions</p>
              </.stack>
            </.tile>
          </:column>
          <:column sm="4" md="4" lg="8">
            <.tile>
              <.stack gap="2">
                <.stack orientation="horizontal" gap="2">
                  <p>Snapshot backlog</p>
                  <.tag type="red">Action</.tag>
                </.stack>
                <.stack gap="2">
                  <.stack orientation="horizontal" gap="2">
                    <span>Database Aurora - 12 pending</span>
                    <span>ETA 45m</span>
                  </.stack>
                  <.stack orientation="horizontal" gap="2">
                    <span>Object storage - 3 pending</span>
                    <span>ETA 30m</span>
                  </.stack>
                </.stack>
              </.stack>
            </.tile>
          </:column>
        </.grid>
      </:column>

      <:column span="16">
        <.data_table
          id="cluster-table"
          rows={@filtered_clusters}
          row_id={& &1.id}
          size="sm"
          on_search={&handle_search/2}
        >
          <:title>Clusters</:title>
          <:description>Manage scaling, status, and version alignment.</:description>
          <:toolbar>
            <.table_toolbar>
              <.table_toolbar_content>
                <.table_toolbar_search
                  placeholder="Search clusters"
                  value={@search}
                  size="sm"
                />
                <.overflow_menu toolbar_action>
                  <:icon>
                    <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
                  </:icon>
                  <:tooltip_content>Filters</:tooltip_content>
                  <:item>Environment</:item>
                  <:item>Status</:item>
                </.overflow_menu>
              </.table_toolbar_content>
            </.table_toolbar>
          </:toolbar>
          <:col :let={cluster} label="Cluster">{cluster.name}</:col>
          <:col :let={cluster} label="Region">{cluster.region}</:col>
          <:col :let={cluster} label="Env">{String.capitalize(cluster.environment)}</:col>
          <:col :let={cluster} label="Nodes">{cluster.nodes}</:col>
          <:col :let={cluster} label="Version">{cluster.version}</:col>
          <:col :let={cluster} label="Status">
            <.tag type={status_kind(cluster.status)}>
              {cluster.status}
            </.tag>
          </:col>
          <:action :let={cluster}>
            <.overflow_menu toolbar_action flipped>
              <:icon>
                <Graphene.Icons.icon fit="width" name="overflow-menu--horizontal" />
              </:icon>
              <:tooltip_content>Actions</:tooltip_content>
              <:item
                phx-click="scale_cluster"
                phx-value-id={cluster.id}
              >
                Scale +2
              </:item>
              <:item
                phx-click="restart_cluster"
                phx-value-id={cluster.id}
              >
                Restart
              </:item>
            </.overflow_menu>
          </:action>
        </.data_table>
      </:column>
    </.grid>
    """
  end
end
