/**
 * @file mofron-comp-checkbox/index.js
 * @brief checkbox component for mofron
 * @feature checkbox text size is automatically changed when the height is changed.
 * @license MIT
 */
const FormItem = require("mofron-comp-formitem");
const Text     = require("mofron-comp-text");
const onCommon = require("mofron-event-oncommon");
const Click    = require("mofron-event-click");
const comutl   = mofron.util.common;
const ConfArg  = mofron.class.ConfArg;

module.exports = class extends FormItem {
    /**
     * initialize conponent
     * 
     * @param (mixed) short-form parameter
     *                key-value: component config
     * @short text
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("CheckBox");
            this.shortForm("text");
            
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.horizon(true);
            
	    let chk = new mofron.class.Dom({
                          tag: "input", component: this,
                          attrs : { type : "checkbox" }
                      });
            this.child(
	        new mofron.class.Component({
                    style: { "display" : "flex" },
		    childDom: new mofron.class.PullConf({ child: chk }),
		    child: this.text()
	        })
            );
            this.childDom(chk);
            
	    /* set change event */
	    let chkbx = this;
	    let onchg = () => {
                try {
		    let chg_evt = chkbx.changeEvent();
		    for (let cidx in chg_evt) {
		        chg_evt[cidx][0](chkbx,chkbx.checked(),chg_evt[cidx][1]);
		    }
		} catch (e) {
                    console.error(e.stack);
		    throw e;
		}
	    }
            this.event(new onCommon(onchg,"onchange"), { private:true });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check status setter/getter
     *
     * @param (boolean) same as 'check'
     * @return (boolean) check status
     * @type parameter
     */
    value (prm) {
        try {
	    return this.check(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check status setter/getter
     *
     * @param (boolean) true: check
     *                  false: uncheck
     *                  undefined: call as getter
     * @return (boolean) check status
     * @type parameter
     */
    checked (flg) {
        try {
            let sts = this.childDom().props("checked");
	    if (undefined === flg) {
                return sts;
	    }
            /* setter */
	    if ("boolean" !== typeof flg) {
                throw new Error("invalid parameter");
            }
	    this.childDom().props({ checked : flg });
            if (flg !== sts) {
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
     * check text setter/getter
     *
     * @param (mixed) string: check text string
     *                mofron-comp-text: check text component
     *                undefined: call as getter
     * @return (mofron-comp-text) check text contents
     * @type parameter
     */
    text (prm) {
        try {
            if (true === comutl.isinc(prm, "Text")) {
                prm.event(
                    new Click(
		        new ConfArg(
		            (cp1,cp2,cp3) => { cp3.checked(!cp3.checked()) },
                            this
                        )
                    )
                );
            } else if ('string' === typeof prm) {
                this.text().text(prm);
                return;
            }
            return this.innerComp('text', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * clear check
     *
     * @type function
     */
    clear () {
        try {
	    this.checked(false);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box size
     *
     * @param (string (size)) check box size (both height and width)
     *                        undefined: call as getter
     * @return (mixed) string(size): check box size
     *                 null: not set
     * @type parameter
     */
    size (prm) {
        try {
	    let ret = super.size(prm, prm);
	    return (undefined === ret) ? ret : ret[0]
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box height setter/getter
     *
     * @param (string (size)) check box height
     *                        undefined: call as getter
     * @return (mixed) string(size): check box height
     *                 null: not set
     * @type parameter
     */
    height (prm) {
        try {
            let ret = super.height(prm);
            if (undefined !== prm) {
                this.text().height(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
