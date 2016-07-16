export class Viewable {

  constructor({ model, data, context }) { // ViewModel, ViewContext
    this.model    = model || _ => _
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

  // mounts compiled and bound viewable element to document
  mount() {
    this.compile()
    this.bind()
  }

  // apply model against current scope data
  refresh() {
    return this.model(this.data)
  }

}
