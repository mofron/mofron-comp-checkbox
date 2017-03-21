/**
 * @file checkbox.js
 * @author simpart
 */
require("mofron-comp-form");
require("mofron-comp-text");
require("mofron-event-common");
require("mofron-event-click");
require("mofron-layout-horizon");

/**
 * @class comp.Checkbox
 * @brief checkbox component class
 */
mofron.comp.Checkbox = class extends mofron.comp.Form {
    
    addChild (chd, disp) {
        try {
           chd.style({'float' : 'none'});
           var Elem = this.getCheckElem();
           var elem = new Elem({
                          param    : this,
                          index    : this.child().length,
                          addChild : new mofron.Param(chd, disp)
                      });
           
           /* set checked event */
           elem.addEvent(
               new mofron.event.Common({
                   handler : new mofron.Param(
                                 function(obj) {
                                     try {
                                         var chg_evt = obj[0].changeEvent();
                                         if (null !== chg_evt) {
                                             chg_evt(
                                                 obj[1].index(),
                                                 obj[0].check(obj[1].index())
                                             );
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
           
           /* set contents click event */
           chd.addEvent(
               new mofron.event.Click(
                   function () {
                       try {
                           alert("click");
                       } catch (e) {
                           console.error(e.stack);
                           throw e;
                       }
                   }
               )
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
                /* getter */
                return (undefined === this.m_chgevt) ? null : this.m_chgevt;
            }
            if ('function' !== typeof fnc) {
                throw new Error('invalid parameter');
            }
            this.m_chgevt = fnc;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    check (idx, flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return this.value(idx);
            }
            /* setter */
            if ( ('boolean' !== typeof flg) ||
                 ('number'  !== typeof idx) ) {
                throw new Error('invalid parameter');
            }
            var chd = this.child();
            for (var elm_idx in chd) {
                if (idx === chd[elm_idx].index()) {
                    chd[elm_idx].check(flg);
                    return;
                }
            }
            
            throw new Error('invalid parameter');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (idx) {
        try {
            var chd = this.child();
            var ret_val = null;
            if (undefined === idx) {
                ret_val = new Array();
                var checked = false;
                for (var elm_idx in chd) {
                    ret_val.push(chd[elm_idx].check());
                    if (true === chd[elm_idx].check()) {
                        checked = true;
                    }
                }
                if ( (true === this.require()) && (false === checked) ) {
                    ret_val = null;
                }
            } else {
                for (var elm_idx in chd) {
                    if (idx === chd[elm_idx].index()) {
                        ret_val = chd[elm_idx].check();
                        break;
                    }
                }
            }
            return ret_val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getCheckElem () {
        return class extends mofron.Component {
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
                        return (undefined === this.m_index) ? null : this.m_index;
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
            
            check (flg) {
                try {
                    if (undefined === flg) {
                        /* getter */
                        var ret_chk = this.vdom().child()[0].prop('checked');
                        return (null === ret_chk) ? false : ret_chk;
                    }
                    /* setter */
                    if ('boolean' === typeof flg) {
                        throw new Error('invalid parameter');
                    }
                    this.vdom().child()[0].prop('checked', flg);
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
        }
    }
}
mofron.comp.checkbox = {};
module.exports = mofron.comp.Checkbox;
