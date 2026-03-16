defmodule Storybook.CodeGen.ProductComponents.Interstitialscreenbodyitem do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.interstitial_screen_body_item/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :interstitial_screen_body_item
end
