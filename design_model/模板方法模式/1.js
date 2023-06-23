// 定义抽象类
class Person {
  dinner () {
    this.buy()
    this.cook()
    this.eat()
  }
  buy () { }
  cook () { }
  eat () { }
}
class Jiangwen extends Person {
  buy () { console.log('买黄瓜') }
  cook () { console.log('拍黄瓜') }
  eat () { console.log('吃黄瓜') }
}
let j = new Jiangwen()
j.dinner()