# `stack`

### horizontal

```heex
<.stack orientation="horizontal" gap="4">
  <Graphene.CarbonComponents.tag type="green">One</Graphene.CarbonComponents.tag>
  <Graphene.CarbonComponents.tag type="blue">Two</Graphene.CarbonComponents.tag>
  <Graphene.CarbonComponents.tag type="red">Three</Graphene.CarbonComponents.tag>
</.stack>
```

```html
<cds-stack gap="4" orientation="horizontal" id="stack-single-horizontal">
  
  <cds-tag open size="md" title="Clear filter" type="green">
  One
</cds-tag>
<cds-tag open size="md" title="Clear filter" type="blue">
  Two
</cds-tag>
<cds-tag open size="md" title="Clear filter" type="red">
  Three
</cds-tag>

</cds-stack>
```

### vertical

```heex
<.stack orientation="vertical" gap="3">
  <Graphene.CarbonComponents.tag type="purple">Alpha</Graphene.CarbonComponents.tag>
  <Graphene.CarbonComponents.tag type="cool-gray">Beta</Graphene.CarbonComponents.tag>
</.stack>
```

```html
<cds-stack gap="3" orientation="vertical" id="stack-single-vertical">
  
  <cds-tag open size="md" title="Clear filter" type="purple">
  Alpha
</cds-tag>
<cds-tag open size="md" title="Clear filter" type="cool-gray">
  Beta
</cds-tag>

</cds-stack>
```

### tight

```heex
<.stack orientation="horizontal" gap="2">
  <Graphene.CarbonComponents.tag type="magenta">A</Graphene.CarbonComponents.tag>
  <Graphene.CarbonComponents.tag type="cyan">B</Graphene.CarbonComponents.tag>
  <Graphene.CarbonComponents.tag type="teal">C</Graphene.CarbonComponents.tag>
</.stack>
```

```html
<cds-stack gap="2" orientation="horizontal" id="stack-single-tight">
  
  <cds-tag open size="md" title="Clear filter" type="magenta">
  A
</cds-tag>
<cds-tag open size="md" title="Clear filter" type="cyan">
  B
</cds-tag>
<cds-tag open size="md" title="Clear filter" type="teal">
  C
</cds-tag>

</cds-stack>
```
