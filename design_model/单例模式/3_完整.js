/**
 * @description eg：创建全局的单例window
 */

function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  console.log(this.name);
};

let createSingle = function (Constructor) {
  let instance = null;
  let SingleConstructor = function () {
    if (!instance) instance = new Constructor(...arguments);
    return instance;
  };
  return SingleConstructor;
};

let CreateWindow = createSingle(Window);
let window1 = new CreateWindow("zfpx"); // 创建一个空的this指针指向空对象
let window2 = new CreateWindow("zfpx");
window1.getName();
console.log(window1 === window2);
