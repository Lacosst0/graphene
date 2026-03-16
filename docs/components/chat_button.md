# `chat_button`

### default

```heex
<.chat_button >
  Start chat
</.chat_button>
```

```html
<cds-chat-button kind="primary" size="lg" id="chat-button-single-default">
  
  Start chat

</cds-chat-button>
```

### quick_action

```heex
<.chat_button is_quick_action>
  Quick action
</.chat_button>
```

```html
<cds-chat-button is-quick-action kind="primary" size="lg" id="chat-button-single-quick-action">
  
  Quick action

</cds-chat-button>
```

### selected

```heex
<.chat_button is_quick_action is_selected>
  Selected
</.chat_button>
```

```html
<cds-chat-button is-quick-action is-selected kind="primary" size="lg" id="chat-button-single-selected">
  
  Selected

</cds-chat-button>
```

### group: sizes

```heex
<.chat_button size="sm">
  Chat button
</.chat_button>
<.chat_button size="md">
  Chat button
</.chat_button>
<.chat_button size="lg">
  Chat button
</.chat_button>
```

```html
<cds-chat-button kind="primary" size="sm" id="chat-button-sizes-sm">
  
  Chat button

</cds-chat-button>
<cds-chat-button kind="primary" size="md" id="chat-button-sizes-md">
  
  Chat button

</cds-chat-button>
<cds-chat-button kind="primary" size="lg" id="chat-button-sizes-lg">
  
  Chat button

</cds-chat-button>
```
