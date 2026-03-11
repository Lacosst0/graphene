defmodule Storybook.CarbonComponents.PasswordInput do
  use PhoenixStorybook.Story, :component

  defoverridable doc: 0

  def function, do: &Graphene.CarbonComponents.password_input/1

  def doc do
    Storybook.Doc.markdown("""
Password inputs mask sensitive text while allowing reveal and hide. Use them in
authentication and security settings forms.

Pair .password_input with .form validation and helper text to communicate
password requirements.
""")
  end

  

  def variations do
    [
      %Variation{
        id: :default,
        attributes: %{name: "password-input-default"},
        slots: [
          ~S|<:label_text>Password</:label_text>|
        ]
      },
      %Variation{
        id: :helper_text,
        attributes: %{name: "password-input-helper"},
        slots: [
          ~S|<:label_text>New password</:label_text>
<:helper_text>Minimum 8 characters</:helper_text>|
        ]
      },
      %Variation{
        id: :invalid,
        attributes: %{name: "password-input-invalid", invalid: true, invalid_text: "Required"},
        slots: [
          ~S|<:label_text>Password</:label_text>|
        ]
      }
    ]
  end
end
