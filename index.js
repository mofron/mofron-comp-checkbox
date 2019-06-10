/**
 * @file mofron-comp-checkbox/index.js
 * @brief checkbox component for mofron
 * @feature Checkbox text size is automatically changed when the height is changed.
 * @author simpart
 */
const mf       = require("mofron");
const FormItem = require("mofron-comp-formitem");
const Text     = require("mofron-comp-text");
const evCommon = require("mofron-event-oncommon");
const Click    = require("mofron-event-click");

mf.comp.CheckBox = class extends FormItem {
    
    /**
     * constructor
     * 
     * @param (string) 'text' function parameter
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("CheckBox");
            this.prmMap("text");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     * 
     * @param vd : (string) check text
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
            this.horizon(true);
            
            /* init input contents */
            let chk = new mf.Dom({
                          tag: "input", component: this,
                          attr : { type : "checkbox" }
                      });
            
            this.target().addChild(
                new mf.Dom({
                    tag: "div", component: this,
                    style: { "display" : "flex" }, addChild: chk
                })
            );
            this.target(chk);
            
            let chg_evt = (p1,p2,p3) => {
                try {
                    let cbx_evt = p1.changeEvent();
                    for (let cb_idx in cbx_evt) {
                        cbx_evt[cb_idx][0](p1, p1.check(), cbx_evt[cb_idx][1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            this.event(new evCommon(chg_evt, "onchange"));
            this.child(this.text());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) the same as 'check' parameter
     * @return (boolean) check status
     * @type tag parameter
     */
    value (prm) {
        try { return this.check(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) true: check
     *                  false: uncheck
     * @return (boolean) check status
     * @type tag parameter
     */
    check (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                let ret = this.target().prop("checked");
                return (null === ret) ? false : ret;
            }
            /* setter */
            if ("boolean" !== typeof flg) {
                throw new Error("invalid parameter");
            }
            let chk_buf = this.check();
            this.target().prop("checked", flg);
            if (chk_buf !== flg) {
                let chg_evt = this.changeEvent();
                for (let cidx in chg_evt) {
                    chg_evt[cidx][0](this, flg, chg_evt[cidx][1]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check text
     *
     * @param (string/mofron-comp-text) check text contents
     * @return (mofron-comp-text) check text contents
     */
    text (prm) {
        try {
            if (true === mf.func.isInclude(prm, "Text")) {
                prm.event(
                    new Click([
                        (cp1,cp2,cp3) => { cp3.check(!cp3.check()) },
                        this
                    ])
                );
            } else if ('string' === typeof prm) {
                this.text().option({ text: prm });
                return;
            }
            return this.innerComp('text', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * clear item value
     *
     * @type private
     */
    clear () {
        try { this.check(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box size
     *
     * @param (string (size)) check box size (both height and width)
     * @return (string (size)) check box size
     * @type tag parameter
     */
    size (prm) {
        try { super.size(prm, prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box height
     *
     * @param (string (size)) check box height
     * @type tag parameter
     */
    height (prm) {
        try {
            let ret = super.height(prm);
            if (undefined !== prm) {
                this.text().size(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.CheckBox;
/* end of file */
