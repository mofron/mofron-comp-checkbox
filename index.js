/**
 * @file checkbox.js
 * @author simpart
 */
require("mofron-comp-form");
require("mofron-comp-text");
require("mofron-event-common");
require("mofron-layout-horizon");

/**
 * @class comp.Checkbox
 * @brief checkbox component class
 */
mofron.comp.Checkbox = class extends mofron.comp.Form {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Checkbox');
            this.m_chgevt = null;
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, disp) {
        try {
           chd.style({'float' : 'none'});
           
           var elem = new mofron.comp.Checkbox_element({
                          param    : this,
                          index    : this.child().length,
                          addChild : new mofron.Param(chd, disp)
                      });
           elem.addEvent(
               new mofron.event.Common({
                   handler : new mofron.Param(
                                 function(obj) {
                                     try {
                                         var chg_evt = obj[0].changeEvent();
                                         if (null !== chg_evt) {
                                             chg_evt(obj[1].index(), obj[0]);
                                         }
                                     } catch (e) {
                                         console.error(e.stack);
                                         throw e;
                                     }
                                 },
                                 [this,elem]
                             ),
                   eventName : 'onchange'
               })
           );
           super.addChild(elem, disp);
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
            
            if (null === prm) {
                return;
            }
            
            if ('string' === typeof prm) {
                this.addChild(new mofron.comp.Text(prm));
            } else if ('object' === typeof prm) {
                if (undefined === prm[0]) {
                    this.addChild(prm);
                } else {
                    for (var idx in prm) {
                        if ('string' === typeof prm[idx]) {
                            this.addChild(new mofron.comp.Text(prm[idx]));
                        } else if (true === mofron.func.isInclude(prm[idx])) {
                            this.addChild(prm[idx]);
                        } else {
                            throw new Error('invalid parameter');
                        }
                    }
                }
            } else {
                throw new Error('invalid parameter');
            }
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
    
    check (idx, chk) {
        try {
//            if (undefined === chk) {
//                /* getter */
//                if (undefined === idx) {
//                    return this.m_check;
//                } else {
//                    if ('number' !== typeof idx) {
//                        throw new Error('invalid parameter');
//                    }
//                    if (true === this.isRendered()) {
//                        return this.child()[idx].target().getRawDom().checked;
//                    } else {
//                        return this.m_check[idx];
//                    }
//                }
//            }
//            /* setter */
//            if ('boolean' !== (typeof chk)) {
//                throw new Error('invalid parameter');
//            }
//            if ('number' !== typeof idx) {
//                throw new Error('invalid parameter');
//            }
//            if (this.m_check.length !== idx) {
//                this.m_check.push(false);
//            }
//            this.m_check[idx] = chk;
//            if (false === this.isRendered()) {
//                return;
//            }
//            this.child()[idx].target().getRawDom().checked = chk;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value () {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.checkbox = {};
module.exports = mofron.comp.Checkbox;


mofron.comp.Checkbox_element = class extends mofron.Component {
    constructor (prm_opt) {
        try {
            super();
            this.m_index = null;
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            this.name('Checkbox_element');
            
            this.vdom().addChild(
                new mofron.Dom({
                    tag       : 'input',
                    component :  prm,
                    attr      : {'type'  : 'checkbox'},
                    style     : {'float' : 'left'}
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    index (idx) {
        try {
            if (undefined === idx) {
                /* getter */
                return this.m_index;
            }
            /* setter */
            if ('number' !== typeof idx) {
                throw new Error('invalid parameter');
            }
            this.m_index = idx;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
