class Plant{
  constructor(name) {
      this.name=name;
  }
  grow() {
      console.log('growing~~~~~~');    
  }
}
class Apple extends Plant{
  constructor(name) {
      super(name);
      this.taste='甜';
  }
}
class Orange extends Plant{
  constructor(name) {
      super(name);
      this.taste='酸';
  }
}
class Factory{
  // 工厂创建函数 
  static create(name) {
      switch (name) {
          case 'apple':
              return new Apple('苹果');
          case 'orange':
              return new Orange('橘子');
          default:
              throw new Error('你要的我没有') 
      }
  }
}

// 为什么不直接new？
// 工厂模式优点：（1）解决耦合 ， （2）不依赖具体的实现
// 1. 假设未来某天new的类需要删除，此时客户端在使用，也删除不了，而简单工厂模式，加了一个工厂创建函数，可以对其做一个兜底
//    即工厂模式，只对一个Factory耦合，直接new则对每个类都产生耦合
// 2. 隐藏具体的实现，只需要调用，不需要关心如何实现，减少业务代码和工具库代码的耦合
let apple= Factory.create('apple');
console.log(apple);
let orange= Factory.create('orange');
console.log(orange);