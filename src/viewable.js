export class Viewable {

  constructor({ model, data, context, node }) {
    this.model    = model || _ => _
    this.data     = data
    this.context  = context || this
    this.node     = node
    this.bound    = false
    this.bindings = {}
  }

  bind(data?) { // TODO
    this.bound = true
  }

  unbind() { // TODO
    this.bound = false
  }

  compile() { // TODO

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
