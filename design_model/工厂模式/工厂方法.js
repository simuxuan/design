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
// 工厂一般是接口，规定子类的实现方法
class Factory {
  create() {}  
}
class AppleFactory extends Factory{
  create() {
    return new Apple();
  }
}
class OrangeFactory extends Factory{
  create() {
    return new Orange();
  }
}
// 集合所有的产品工厂类
const settings = {
  'apple': AppleFactory,
  'orange':OrangeFactory
}

// 直接去调用具体产品的工厂类
let apple=new settings['apple']().create();
console.log(apple);
let orange=new settings['orange']().create();
console.log(orange);