defmodule Storybook.Art.Icons do
  use PhoenixStorybook.Story, :component
  use Graphene, [:html, :live]

  def function, do: &Graphene.Icons.icon/1

  def variations do
    [
      %Variation{id: :default, attributes: %{name: "3d-cursor"}},
      %VariationGroup{
        id: :sizes,
        variations:
          for type <- [:mini, :small, :normal, :large] do
            size =
              case type do
                :mini -> 16
                :small -> 20
                :normal -> 24
                :large -> 32
              end

            %Variation{id: type, attributes: %{name: "3d-cursor", size: size}}
          end
      }
    ]
  end
end
