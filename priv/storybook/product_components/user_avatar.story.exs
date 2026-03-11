defmodule Storybook.ProductComponents.UserAvatar do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.ProductComponents.user_avatar/1

  def doc do
    Storybook.Doc.markdown("""
User avatars display initials, icons, or photos with tooltips.
Use image avatars for known users and icon avatars for groups.
""")
  end

  @avatar_image "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc5NicgaGVpZ2h0PSc5Nicgdmlld0JveD0nMCAwIDk2IDk2Jz4KICA8cmVjdCB3aWR0aD0nOTYnIGhlaWdodD0nOTYnIGZpbGw9JyNlMGUwZTAnLz4KICA8Y2lyY2xlIGN4PSc0OCcgY3k9JzM4JyByPScxOCcgZmlsbD0nIzhkOGQ4ZCcvPgogIDxyZWN0IHg9JzIwJyB5PSc2Micgd2lkdGg9JzU2JyBoZWlnaHQ9JzIyJyByeD0nMTEnIGZpbGw9JyM4ZDhkOGQnLz4KPC9zdmc+"

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{
          name: "Thomas J. Watson",
          tooltip_text: "TW, Thomas J. Watson user profile",
          tooltip_alignment: "right",
          size: "md",
          background_color: "order-1-cyan",
          theme: "light"
        }
      },
      %Variation{
        id: :with_icon,
        attributes: %{
          name: "Thomas J. Watson",
          tooltip_text: "TW, Thomas J. Watson user profile",
          tooltip_alignment: "right",
          size: "md",
          background_color: "order-1-cyan",
          theme: "light"
        },
        slots: [
          ~S|<:rendericon>
  <Graphene.CarbonComponents.icon name="group" size={16} />
</:rendericon>|
        ]
      },
      %Variation{
        id: :with_image,
        attributes: %{
          image: @avatar_image,
          image_description: "Avatar",
          tooltip_text: "TW, Thomas J. Watson user profile",
          tooltip_alignment: "right",
          size: "md",
          theme: "light"
        }
      }
    ]
  end
end
