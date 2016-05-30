

export class Partial {

  constructor({url, html}) {
    this.url   = url
    this.html  = html
  }

  compile() {

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
        request.get(ops, (error, response, body) => {
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