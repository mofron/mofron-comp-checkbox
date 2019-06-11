# mofron-comp-checkbox
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

checkbox component for [mofron](https://mofron.github.io/mofron/).

## feature
Checkbox text size is automatically changed when the height is changed.

# Install

```:bash
npm install mofron mofron-comp-checkbox
```

# Sample
```html
<require>
    <tag module="mofron-comp-checkbox">CheckBox</tag>
    <tag module="mofron-comp-text">Text</tag>
</require>

<script run=init>
let chg_evt = (p1,p2,p3) => { console.log(p2); }
</script>

<CheckBox name=chkbx changeEvent=chg_evt size="0.2rem">
    <text>
        <Text weight=900>Check Box</Text>
    </text>
</CheckBox>
```
# Parameter

| Simple<br>Param | Parameter Name     | Type                               |    Description                         |
|:---------------:|:-------------------|:-----------------------------------|:---------------------------------------|
|                 | value              | boolean                            | the function same as 'check'           |
|                 | check              | boolean                            | true: check                            |
|                 |                    |                                    | false: uncheck (default)               |
|        ◯        | text               | string/mofron-comp-text            | check text contents                    |
|                 | size               | string (size)                      | check box size (both height and width) |
