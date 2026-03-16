defmodule Storybook.CodeGen.ProductComponents.Interstitialscreenbody do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.interstitial_screen_body/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :interstitial_screen_body
end
