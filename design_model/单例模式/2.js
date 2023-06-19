/**
 * @description eg：创建全局的单例window
 */

let Window = function (name) {
  this.name = name;
};

Window.prototype.getName = function () {
  console.log(this.name);
};

Window.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) instance = new Window(name);
    return instance;
  };
})();

let window = Window.getInstance("zfpx");
window.getName();
