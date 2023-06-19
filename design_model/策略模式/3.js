/**
 * @description 策略模式
 */
class Customer {
  constructor(kind) {
    this.kind = kind; // 策略对象
  }
  cost(amount) {
    return this.kind.discount(amount);
  }
}
class Kind {}
// 策略类
class Normal extends Kind {
  discount(amount) {
    return amount;
  }
}
class Member extends Kind {
  discount(amount) {
    return amount * 0.9;
  }
}
class VIP extends Kind {
  discount(amount) {
    return amount * 0.8;
  }
}
let c1 = new Customer(new Normal());
console.log(c1.cost(100));
c1.kind = new Member();
console.log(c1.cost(100));
c1.kind = new VIP();
console.log(c1.cost(100));
