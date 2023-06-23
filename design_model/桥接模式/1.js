class A {
  constructor(bridge) {
    this.bridge = bridge  // 链接桥梁
  }
  go () {
    console.log(`从${this.from()}到${this.bridge.to()}`)
  }
}
class A1 extends A {
  from () {
    return 'A1'
  }
}
class A2 extends A {
  from () {
    return 'A2'
  }
}
class A3 extends A {
  from () {
    return 'A3'
  }
}
// 抽象类---桥梁
class B {
  to () { }
}
class B1 extends B {
  to () {
    return 'B1'
  }
}
class B2 extends B {
  to () {
    return 'B2'
  }
}
class B3 extends B {
  to () {
    return 'B3'
  }
}
let b = new B3()
let a = new A2(b)
a.go()