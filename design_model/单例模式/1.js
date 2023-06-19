/**
 * @description eg：创建全局的单例window
 */

class Window {
  constructor(name) {
    this.name = name || "window";
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Window(name);
    }
    return this.instance;
  }
}

var w1 = Window.getInstance();
var w2 = Window.getInstance();
console.log(w1 === w2);
