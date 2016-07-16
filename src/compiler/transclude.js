import handlebars from 'handlebars'

export default function Transclude (elem, slots) {
  if (elem) {
    let template

    if (elem.constructor === String) {
      // TODO: compile elem, then transclude
    }

    return handlebars.compile(elem)
  }
}
