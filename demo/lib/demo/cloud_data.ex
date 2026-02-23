defmodule Demo.CloudData do
  @moduledoc false

  def summary_metrics do
    %{
      clusters: 12,
      workloads: 186,
      uptime: 99.98,
      monthly_spend: 184_320,
      budget: 220_000,
      risk_score: 84
    }
  end

  def clusters do
    [
      %{
        id: "clu-aurora",
        name: "Aurora",
        region: "us-east-1",
        environment: "production",
        nodes: 12,
        version: "1.28.4",
        status: "Healthy",
        owner: "Platform"
      },
      %{
        id: "clu-borealis",
        name: "Borealis",
        region: "eu-west-1",
        environment: "production",
        nodes: 9,
        version: "1.28.3",
        status: "Healthy",
        owner: "Data"
      },
      %{
        id: "clu-helix",
        name: "Helix",
        region: "us-west-2",
        environment: "staging",
        nodes: 6,
        version: "1.27.9",
        status: "Degraded",
        owner: "Experience"
      },
      %{
        id: "clu-ion",
        name: "Ion",
        region: "ap-southeast-1",
        environment: "production",
        nodes: 8,
        version: "1.28.4",
        status: "Healthy",
        owner: "Edge"
      },
      %{
        id: "clu-kepler",
        name: "Kepler",
        region: "us-central-1",
        environment: "dev",
        nodes: 4,
        version: "1.27.7",
        status: "Maintenance",
        owner: "DevEx"
      }
    ]
  end

  def services do
    [
      %{name: "API Gateway", sla: 99.99, status: "Healthy", latency_ms: 84},
      %{name: "Auth", sla: 99.97, status: "Healthy", latency_ms: 112},
      %{name: "Event Bus", sla: 99.95, status: "Degraded", latency_ms: 240},
      %{name: "Object Storage", sla: 99.98, status: "Healthy", latency_ms: 66},
      %{name: "Observability", sla: 99.92, status: "Healthy", latency_ms: 97}
    ]
  end

  def incidents do
    [
      %{
        id: "inc-1024",
        title: "Event Bus delivery lag",
        severity: "High",
        status: "Investigating",
        owner: "SRE",
        opened_at: "08:12 UTC"
      },
      %{
        id: "inc-1011",
        title: "Staging cluster node churn",
        severity: "Medium",
        status: "Monitoring",
        owner: "Platform",
        opened_at: "06:44 UTC"
      },
      %{
        id: "inc-1003",
        title: "Edge ingress saturation",
        severity: "Low",
        status: "Resolved",
        owner: "Network",
        opened_at: "Yesterday"
      }
    ]
  end

  def policies do
    [
      %{name: "MFA Required", coverage: 98, status: "Passing"},
      %{name: "Encryption at Rest", coverage: 100, status: "Passing"},
      %{name: "Public Storage", coverage: 92, status: "Needs Review"},
      %{name: "Privileged Access", coverage: 87, status: "Needs Review"}
    ]
  end

  def cost_centers do
    [
      %{id: "cc-platform", name: "Platform", month: "Sep", spend: 82_400, change: 4.2},
      %{id: "cc-data", name: "Data", month: "Sep", spend: 46_210, change: -1.4},
      %{id: "cc-edge", name: "Edge", month: "Sep", spend: 32_500, change: 6.8},
      %{id: "cc-experience", name: "Experience", month: "Sep", spend: 23_800, change: 3.1}
    ]
  end

  def audit_events do
    [
      %{id: "evt-9001", actor: "J. Park", action: "Updated firewall policy", time: "09:21"},
      %{id: "evt-9000", actor: "C. Alvarez", action: "Scaled cluster Aurora", time: "08:55"},
      %{id: "evt-8997", actor: "S. Gupta", action: "Rotated API key", time: "08:10"},
      %{id: "evt-8995", actor: "System", action: "Applied OS patching", time: "07:44"}
    ]
  end

  def activity_seed do
    [
      %{
        id: "act-120",
        time: "09:32",
        service: "Event Bus",
        event: "Consumer lag normalized",
        severity: "Info",
        status: "Healthy"
      },
      %{
        id: "act-119",
        time: "09:21",
        service: "Network",
        event: "Firewall policy updated",
        severity: "Low",
        status: "Applied"
      },
      %{
        id: "act-118",
        time: "08:55",
        service: "Clusters",
        event: "Aurora scaled to 12 nodes",
        severity: "Medium",
        status: "Completed"
      }
    ]
  end

  def regions do
    [
      %{id: "us-east-1", label: "US East (N. Virginia)"},
      %{id: "us-west-2", label: "US West (Oregon)"},
      %{id: "eu-west-1", label: "EU West (Ireland)"},
      %{id: "ap-southeast-1", label: "AP Southeast (Singapore)"}
    ]
  end

  def support_plans do
    [
      %{id: "essential", label: "Essential"},
      %{id: "growth", label: "Growth"},
      %{id: "enterprise", label: "Enterprise"}
    ]
  end

  def devices do
    File.read!("./lib/demo/snapshot.json")
    |> Jason.decode!(keys: :atoms)
  end
end
