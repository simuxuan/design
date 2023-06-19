/**
 * @description 策略模式
 */

class Customer {
  constructor(type) {
    this.type = type;
  }
  // 逻辑复杂
  // 定义不同的type类,将需要抽取的方法,给不同的type实现
  pay(amount) {
    if (this.type == "会员顾客") {
      return amount * 0.9;
    } else if (this.type == "VIP顾客") {
      return amount * 0.8;
    }
    return amount;
  }
}
let c1 = new Customer("普通顾客");
console.log(c1.pay(100));
let c2 = new Customer("会员顾客");
console.log(c2.pay(100));
let c3 = new Customer("VIP顾客");
console.log(c3.pay(100));
