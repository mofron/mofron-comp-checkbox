# mofron-comp-checkbox
checkbox web component for mofron

# Install

```bash
npm install --save-dev mofron
```

# Quick Start
require webpack

```html
<html>
    <head></head>
    <body style="margin:0px;padding:0px;"></body>
    <script src='./path/to/webpack/output.js'></script>
</html>
```

example
```javascript
require("mofron");
require("mofron-comp-checkbox");

/* simple use */
new mofron.comp.Checkbox().visible(true);

/* default checked */
var def_chk = new mofron.comp.Checkbox(true);
def_chk.visible(true);

/* set chenge event */
var chg_evt = new mofron.comp.Checkbox();
chg_evt.changeEvent(function(chk_obj){
    alert(chk_obj.check());  // get check status
});
chg_evt.visible(true);

/* change checked */
var chg_chk = new mofron.comp.Checkbox();
chg_chk.visible(true);
chg_chk.check(true);  // checked
```

#class specification

| Method          | Parameter                                                                    |    Description                  |
|:------------------|:-----------------------------------------------------------------|:-------------------------------|
| changeEvent | function : function for change event                         |set change event function |
| check              | boolean : check state (option)                                    |  check setter / getter |
