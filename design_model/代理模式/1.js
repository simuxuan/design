/**
 * @description 代理模式（类）
 */
class Google {
  constructor() {}
  get() {
    return 'google'
  }
}

class Proxy {
  constructor() {
    this.google = new Google()
  }
  get() {
    return this.google.get()
  }
}