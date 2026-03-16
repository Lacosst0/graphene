defmodule Storybook.ProductComponents.FullPageError do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.full_page_error/1

  def doc do
    Storybook.Doc.markdown("""
Full page errors explain blocked states such as 403/404 or custom failures.
Provide a clear title, brief description, and recovery links.
""")
  end

  def variations do
    [
      %Variation{
        id: :custom,
        attributes: %{
          kind: "custom",
          label: "Error ###",
          title: "[Error title]",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        slots: [
          ~S|<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 1</Graphene.CarbonComponents.link>
<br />
<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 2</Graphene.CarbonComponents.link>|
        ]
      },
      %Variation{
        id: :error_403,
        attributes: %{
          kind: "403",
          label: "Error 403",
          title: "Access denied",
          description:
            "You are not authorized to access the requested page. Verify access permissions and sign-in status."
        },
        slots: [
          ~S|<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 1</Graphene.CarbonComponents.link>
<br />
<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 2</Graphene.CarbonComponents.link>|
        ]
      },
      %Variation{
        id: :error_404,
        attributes: %{
          kind: "404",
          label: "Error 404",
          title: "Page not found",
          description:
            "The requested page moved or is unavailable. Check the URL or search the site for content."
        },
        slots: [
          ~S|<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 1</Graphene.CarbonComponents.link>
<br />
<Graphene.CarbonComponents.link href="#" size="LARGE">– Forwarding link 2</Graphene.CarbonComponents.link>|
        ]
      }
    ]
  end
end
