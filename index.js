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
            
            this.m_check  = new Array();
            this.m_chgevt = null;
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, disp) {
        try {
           chd.style('float', 'none');
           var elem = new mofron.comp.Checkbox_element();
           elem.addChild(chd,disp);
           
           var onChange = new mofron.event.Common(
                          function(obj) {
                              try {
                                  var chg = obj[0];
                                  var elm = obj[1];
                                  
                                  var child = chg.child();
                                  for (var idx in child) {
                                      if (child[idx].target().getId() === elm.target().getId()) {
                                          var evt = chg.changeEvent();
                                          if (null !== evt) {
                                              evt(parseInt(idx), chg);
                                          }
                                      }
                                  }
                              } catch (e) {
                                  console.error(e.stack);
                                  throw e;
                              }
                          },
                          [this,elem]);
           onChange.eventName('onchange');
           elem.addEvent(onChange);
           
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
                        } else if ('object' === typeof prm[idx]) {
                            this.addChild(prm[idx]);
                        }
                    }
                }
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
            if (undefined === chk) {
                /* getter */
                if (undefined === idx) {
                    return this.m_check;
                } else {
                    if ('number' !== typeof idx) {
                        throw new Error('invalid parameter');
                    }
                    if (true === this.isRendered()) {
                        return this.child()[idx].target().getRawDom().checked;
                    } else {
                        return this.m_check[idx];
                    }
                }
            }
            /* setter */
            if ('boolean' !== (typeof chk)) {
                throw new Error('invalid parameter');
            }
            if ('number' !== typeof idx) {
                throw new Error('invalid parameter');
            }
            if (this.m_check.length !== idx) {
                this.m_check.push(false);
            }
            this.m_check[idx] = chk;
            if (false === this.isRendered()) {
                return;
            }
            this.child()[idx].target().getRawDom().checked = chk;
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
    
    enable (flg) {
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
            this.name('Checkboxi_element');
            
            this.m_check  = new Array();
            this.m_chgevt = null;
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            var check = new mofron.Dom('input');
            check.attr('type','checkbox');
            check.style('float', 'left');
            this.vdom().addChild(check);
            this.target(check);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
