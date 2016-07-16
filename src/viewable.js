export class Viewable {

  constructor({ model, data, nodes, contents }) {
    this.model    = model || _ => _
    this.data     = data  || { }
    this.nodes    = nodes || [ ]
    this.contents = contents
    this.bound    = false
    this.bindings = { }
  }

  bind() {
    // TODO: subscribe to parent Viewable if it exists
    // TODO: recursively call `bind` on child Viewables
    this.bound = true
  }

  unbind() { // TODO
    this.bound = false
  }

  compile() { // TODO
    // iterate through nodes (elements and attribute) and
    // make them instances of Viewable
    for (let node of nodes) {
      
    }
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
