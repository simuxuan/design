class Duck{
  eat(food) {
    console.log('吃${food}');
  }
}

// 不过装饰器是在原来的类上，添加新功能
class TangDuck{
  constructor() {
    this.duck = new Duck();  // 取出原本的类
  }
  // 保持一样的api，并添加新功能
  eat() {
    this.duck.eat();
    console.log('谢谢');
  }
}