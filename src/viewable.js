export class Viewable {

  constructor({ model, data, context }) { // ViewModel, ViewContext
    this.model    = model
    this.data     = data
    this.context  = context || this
    this.bound    = false
    this.bindings = {}
  }

  bind(data?) {
    this.bound = true
  }

  unbind() {

  }

  compile() {

  }

  mount() {
    this.compile()
    this.bind()
  }

}
