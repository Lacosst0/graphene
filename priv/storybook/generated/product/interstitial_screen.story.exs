defmodule Storybook.CodeGen.ProductComponents.Interstitialscreen do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.interstitial_screen/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :interstitial_screen
end
