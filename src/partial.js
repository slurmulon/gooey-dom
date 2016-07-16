import Viewable from './viewable'
import handlebars from 'handlebars'
import request from 'request'

export class Partial extends Viewable {

  constructor({ url, contents, data, slots }) {
    super({ data, contents })

    this.url   = url
    this.slots = slots
  }

  compile() {
    const contents    = this.url ? got(this.url) : Promise(this.contents)
    const transcluded = this.transclude(contents)

    // TODO
  }

  transclude(contents = this.contents) {
    return contents ? handlebars.compile(contents)(this.data) : ''
  }

  /**
   * Load data from URL or return static content if necessary
   */
  load(url = this.url) {
    return Promise((resolve, reject) => {
      if (this.html) {
        resolve(this.contents)
      } else {
        request.get(url, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            reject(error)
          } else {
            resolve(body)
          }
        })
      }
    })
  }

}
