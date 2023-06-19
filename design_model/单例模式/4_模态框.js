/**
 * @description eg：模态窗口--全局唯一
 */
class Login {
  constructor() {
    // 初始化创建实例
    this.element = document.createElement("div");
    this.element.innerHTML = `
                    用户名 <input type="text"/>
                    <button>登录</button>
                    `;
    this.element.style.cssText =
      "width: 100px; height: 100px; position: absolute; left: 50%; top: 50%; display: block;";
    document.body.appendChild(this.element);
  }
  show() {
    this.element.style.display = "block";
  }
  hide() {
    this.element.style.display = "none";
  }
}

let createSingle = function (Constructor) {
  let instance = null;
  return function () {
    if (!instance) instance = new Constructor(...arguments);
    return instance;
  };
};
