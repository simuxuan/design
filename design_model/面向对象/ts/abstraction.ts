(function () {
  /**
   * @description 抽象
   * 隐藏方法的实现
   */

  interface IStorage {
    save(key: any, value: any): void;
    read(key: any): void;
  }

  class LocalStorage implements IStorage {
    save(key: any, value: any) {
      localStorage.setItem(key, value);
    }
    read(key: any) {
      return localStorage.getItem(key);
    }
  }

  // 调用者
  class User {
    constructor(public name: string, public storage: IStorage) {
      this.name = name;
      this.storage = storage;
    }
    save() {
      this.storage.save("username", JSON.stringify(this));
    }
    read() {
      return this.storage.read("username");
    }
  }

  let user = new User("张三", new LocalStorage());
  // 只需关注方法，不需要关注实现
  user.save();
  user.read();
})();
