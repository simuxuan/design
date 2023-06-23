// 单独将状态回调抽取出去--策略模式重要
const States = {
  'show': function () {
    console.log("banner显示，点击可以关闭")
    this.setState({
      currentState: "hide"
    })
  },
  'hide': function () {
    console.log("banner隐藏，点击可以打开")
    this.setState({
      currentState: "show"
    })
  }
}
class Banner extends React.Component {
  state = { currentState: 'show' }
  toggle = () => {
    let s = this.state.currentState
    // 重要: 策略抽取出去,指向回调
    States[s] && States[s].apply(this)
  }
  render () {
    return (
      <div>
        {this.state.currentState == 'show' && <nav>导航</nav>}
        <button onClick={this.toggle}>隐藏</button>
      </div>
    )
  }
}
ReactDOM.render(<Banner />, document.getElementById('root'))