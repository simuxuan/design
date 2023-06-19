/**
 * @description 继承
 * 子类继承父类的属性和方法
 */

// Dog继承Animal可以使用父类的所有方法
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat`);
  }
  speak() {}
}
let animal = new Animal("动物");
animal.eat();

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  speak() {
    console.log(`${this.name} is barking!`);
  }
}
let dog = new Dog("🐶", 5);
dog.eat();
dog.bark();
