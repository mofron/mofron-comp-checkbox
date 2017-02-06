/**
 * @file checkbox.js
 * @author simpart
 */

/**
 * @class mofron.comp.Checkbox
 * @brief Accordion Component class
 */
mofron.comp.Checkbox = class extends mofron.Component {
    
    constructor (prm,opt) {
        try {
            super(prm);
            this.setBaseName('Checkbox');
            this.name('Checkbox');
            
            this.def_chk = false;
            this.chg_evt = null;
            
            if (null !== opt) {
                this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     * 
     * @param vd : (mofron.util.Vdom) vdom object
     */
    initDomConts (prm) {
        try {
            if (null !== prm) {
                if ('boolean' !== (typeof chk)) {
                    throw new Error('invalid parameter');
                }
                this.def_sel = prm;
            }
            var chk = new mofron.util.Vdom('input',this);
            chk.attr('type','checkbox');
            this.vdom().addChild(chk);
            this.target(this.vdom());
            
            this.addEvent(
                new mofron.event.Click(function(obj) {
                    try {
                        var evt = obj.changeEvent();
                        if (null !== evt) {
                            evt(obj);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this)
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setCompConf () {
        try {
            this.check(this.def_chk);
            super.setCompConf();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getEventTgt() {
        try {
            return this.vdom().getChild(0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    changeEvent (fnc) {
        try {
            if (undefined === fnc) {
                return this.chg_evt;
            }
            if (null === fnc) {
                throw new Error('invalid parameter');
            }
            this.chg_evt = fnc;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    check (chk) {
        try {
            if (undefined === chk) {
                return this.vdom().getChild(0).getDom().checked;
            }
            if ('boolean' !== (typeof chk)) {
                throw new Error('invalid parameter');
            }
            
            if (null === this.vdom()) {
                this.def_chk = chk;
                return;
            }
            this.vdom().getChild(0).getDom().checked = chk;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
