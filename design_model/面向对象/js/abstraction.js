/**
 * @description 抽象
 * 隐藏方法的实现
 */

/**
 * @description eg：localStorage
 * 方法类--调用者类
 */
// 抽象类
class IStorage {
  save() {
    throw new Error("必须实现该方法");
  }
  read() {
    throw new Error("必须实现该方法");
  }
}
// 方法实现
class LocalStorage extends IStorage {
  save(key, value) {
    localStorage.setItem(key, value);
  }
  read(key) {
    return localStorage.getItem(key);
  }
}

// 调用者
class User {
  constructor(name, storage) {
    this.name = name;
    this.storage = storage;
  }
  save(key, value) {
    this.storage.save(key, value);
  }
  read(key) {
    return this.storage.read(key);
  }
}

let user = new User("张三", new LocalStorage());
// 只需关注方法，不需要关注实现
user.save();
user.read();
