class Battery {
  constructor(state) {
    this.amoute = 'high'
    this.state = new SuccessState()
    this.settings = {
      'high': () => {
        this.amoute = 'middle'
        this.setState(new WarningState())
      },
      'middle': () => {
        this.amoute = 'low'
        this.setState(new DangerState())
      },
      'low': () => {
        this.amoute = 'high'
        this.setState(new SuccessState())
      }
    }
  }
  show () {
    this.state.show()
    this.settings[this.amoute]()
  }
  setState (state) {
    this.state = state
  }
}
class SuccessState {
  constructor(battery) {
    this.battery = battery
  }
  show () {
    console.log(`绿色 ${battery.amount}`)
  }
}
class WarningState {
  constructor(battery) {
    this.battery = battery
  }
  show () {
    console.log(`黄色 ${battery.amount}`)
  }
}
class DangerState {
  constructor(battery) {
    this.battery = battery
  }
  show () {
    console.log(`红色 ${battery.amount}`)
  }
}

let battery = new Battery();
// 立即执行函数记得添加分号
(function () {
  let count = 0
  let timer = null
  timer = setInterval(() => {
    if (count > 5) {
      clearInterval(timer)
      timer = null
    }
    battery.show()
    count++
  }, 1000)
})()



