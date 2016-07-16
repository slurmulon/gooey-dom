import Viewable from './viewable'
import request from 'request'

export class Partial extends Viewable {

  constructor({ url, contents, data, slots }) {
    super({ data, contents })

    this.url   = url
    this.slots = slots
  }

  compile() {
    const contents = this.url ? got(this.url) : Promise(this.html)
    // TODO: const transcluded
  }

  transclude() {

  }

  bind(data?) {

  }

  unbind() {

  }

  /**
   * Load data from URL or return static content if necessary
   */
  load(url = this.url) {
    return Promise((resolve, reject) => {
      if (this.html) {
        resolve(this.html)
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
