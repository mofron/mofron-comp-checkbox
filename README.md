# mofron-comp-checkbox
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

checkbox component for mofron

## Feature
 - checkbox text size is automatically changed when the height is changed.

# Install
```
npm install mofron mofron-comp-checkbox
```

# Sample
```html
<setting>
    <tag load="mofron-comp-checkbox">CheckBox</tag>
</setting>

<script run=init>
let chg_evt = (p1,p2,p3) => { console.log(p2); }
</script>

<CheckBox change-event=@chg_evt>Check</CheckBox>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | value | boolean | same as 'check' |
| | check | boolean | true: check |
| | | | false: uncheck |
| | | | undefined: call as getter |
| ◯  | text | mixed | string: check text string |
| | | | mofron-comp-text: check text component |
| | | | undefined: call as getter |
| | clear | ||| | size | string (size) | check box size (both height and width) |
| | | | undefined: call as getter |
| | height | string (size) | check box height |
| | | | undefined: call as getter |

