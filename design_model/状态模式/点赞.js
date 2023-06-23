// 两种状态定义---这些状态单独定义可以用策略模式优化--放到一个对象里
let likeState = {
  // 自己的render(状态回调)
  render (element) {
    element.innerHTML = "赞👍"
  },
}
let likedState = {
  render (element) {
    element.innerHTML = "取消"
  },
}

class Button {
  constructor(container) {
    this.liked = false
    this.state = likeState
    this.element = document.createElement("button")
    container.appendChild(this.element)
    this.render()
  }
  // 改变状态方法
  setState (state) {
    this.state = state
    this.render()
  }
  render () {
    this.state.render(this.element)
  }
}

let button = new Button(document.body)
button.element.addEventListener("click", () => {
  button.setState(button.liked ? likeState : likedState)
  button.liked = !button.liked
})
