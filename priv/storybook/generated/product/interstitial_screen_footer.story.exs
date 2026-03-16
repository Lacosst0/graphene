defmodule Storybook.CodeGen.ProductComponents.Interstitialscreenfooter do
  use Graphene, [:html, :live]
  use Graphene.CodeGen.Component.Story,
    func: &Graphene.ProductComponents.interstitial_screen_footer/1,
    component_module: Graphene.Internal.ProductCoreComponents,
    component_name: :interstitial_screen_footer
end
