/**
 * @description 策略模式
 */
class Customer {
  constructor(type) {
    this.type = type;
    // 经典策略对象
    this.kind = {
      normal: function () {
        return 1;
      },
      member: function () {
        return 0.8;
      },
      vip: function () {
        return 0.6;
      },
    };
  }
  pay(amount) {
    return amount * this.kind[this.type]();
  }
}

let c1 = new Customer("normal");
console.log(c1.pay(100));
let c2 = new Customer("member");
console.log(c2.pay(100));
let c3 = new Customer("vip");
console.log(c3.pay(100));
