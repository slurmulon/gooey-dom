export class DomElement extends Viewable {

  // constructor({id, clazz, name, attrs}) {
  //   this.id = id
  //   this.clazz = clazz
  //   this.name = name
  //   this.attrs = attrs
  // }

  // constructor(selector) {
  //   this.selector = selector
  // }

  get attrs() {

  }

  get elem() {

  }

  bind(data?) {
    // 1. inject element based on type
    // 2. bind watchers defined in this.when
    // 3. call `model(model, elem, attrs)
    // 4. call `onBind`
    // 5. set `_bound` to true
  }

  unbind() {

  }

  compile() {
    // 1. prepare data (dynamically inject if necessary?)
    // 2. "compile" DOM element by mapping it to an instance of gooey.dom.DomElement
    // 3. call "_bind"
  }

  parent() {

  }

  children() {

  }

  find(query) {

  }

  enable() {
    this._enabled = true
  }

  disable() {
    this._enabled = false
  }

  prependTo(elem: DomElement) {

  }

  appendTo(elem: DomElement) {
    
  }

  toString() {

  }

}
