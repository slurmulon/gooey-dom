import * as gooey from 'gooey-core'
import { Viewable } from './viewable'

export const kinds = ['elem', 'attr', 'comment']

export class Component extends Viewable {

  constructor(
    name  : string,
    view  : Partial,
    data  : Object,
    when  : Object,
    kind  : string   = 'elem',
    model : Function = _ => _,
    needs : Object   = [],
    slots : Object   = {},
    url   : String
  ) {
    super({ model, data })

    this.name  = name
    this.view  = view
    this.data  = data
    this.kind  = kind
    this.model = model
    this.when  = when  // collection of subscriptions that respond to particular events {pattern: on}
    this.needs = needs // list of services by name, OR allow for resolve block-like functionality (set up Service state before entering component)
    this.slots = slots // mapping of transclusion slot names to expected component
    this.url   = url

    this._service   = gooey.service({ name, model }) // parent? children? should be infered at run-time based on view
    this._enabled   = true
    this._bound     = false
    this._listening = false

    if (!kinds.includes(kind)) {
      throw 'unknown component kind ${kind}'
    }
  }

  // acquire "needs" Service dependencies and optionally bind them to the data scope
  // TODO: subscribe component as a child to each "needs" service
  resolve(bind: boolean = false) {
    const needs    = gooey.util.values(this.needs)
    const pool     = gooey.services()
    const resolved = {}

    needs.forEach(req => resolved[req] = pool[req])

    if (bind) {
      Object.assign(this.data, dependencies)
    }

    return resolved
  }

  // bind "when" subscriptions
  // TODO: global/root listener for general changes..?
  listen() {
    for (let condition in this.when) {
      const action = this.when[condition]

      this._service.on(condition, action)
    }

    this._listening = true
  }

  compile() {
    // X - 1. prepare data (dynamically inject "needs" if necessary?)
    // X - 2. load partial (either literal HTML or from URL)
    // 3. "compile" root DOM Element of template into Components, triggering a cascade of nested compilations
    // 4. parse and "compile" components of sub-DOM elements
    // 4. perform transclusion if necessary (low priority)
    // 5. call "_bind"
    this.view.load()
    this.resolve(true)
  }

  bind() {
    this.resolve(true)
    this.listen()
    this.refresh()
  }

  unbind() {
    // 1. unsubscribe component and sub-components
    // 2. refresh
  }

}

export const component = ({name, view, when, kind, model, needs, url}) => new Component(name, view, when, kind, model, needs, url)
