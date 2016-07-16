export class Viewable {

  constructor({ model, data, node, contents }) {
    this.model    = model || _ => _
    this.data     = data
    this.node     = node
    this.contents = contents
    this.bound    = false
    this.bindings = {}
  }

  bind() { // TODO
    this.bound = true
  }

  unbind() { // TODO
    this.bound = false
  }

  compile() { // TODO
    // iterate through nodes (elements and attribute) and
    // make them instances of Viewable
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
