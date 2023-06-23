let likeState = {
  render() {
    Element.innerHtml = 'xx'
  }
}

class Button {
  constructor(contsaier) {
    this.like = false
    this.state = likeState
    this.render
  }
  setState(state) {
    this.state = state
    this.render()
  }
  render() {
    this.state.render(this.element)
  }
}

