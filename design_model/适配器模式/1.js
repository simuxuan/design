class Power{
  charge() {
    return '220V';
  }
}

class Adapter{
  constructor() {
    this.power=new Power();
  }
  // 适配
  charge() {
    let power=this.power.charge();
    return `${power} => 12V`;
  }
}

class Client{
  constructor() {
    this.adapter=new Adapter();
  }
  use() {
    console.log(this.adapter.charge());
  }
}
new Client().use();