# design

## 设计原则

### 面向对象：抽象、继承、封装、多态

1. 抽象：隐藏方法的实现，调用者只关心功能
2. 继承：继承父类，抽取共有逻辑
3. 封装：属性私有、公开
4. 多态：不同方法不同实现

## 设计模式

### 工厂模式
1. 简单工厂：一般就是一个工厂函数返回产品的实例，根据参数返回不同的实例（重要）
2. 工厂方法：多了工厂类，创建产品，需要创建此工厂的实例，再通过create方法创建产品
3. 抽象工厂：一个工厂可以创建多种产品


### 单例模式

1. 创建单例实例（核心：闭包）
2. 对象字面量---命名空间，模块化 export default

作用：
全局唯一---redux，vuex
命名空间---模块化

### 适配器模式
不改变原来的函数，为了实现某个功能，创建一个新函数（类），对原有函数|类方法进行改造（api不同）

### 代理模式
和装饰器类似
1. 原本的功能不变，也不改变原来的api名，改变原来的方法的效果（新增|修改功能）
2. 装饰器模式原来的功能不变还可以使用，代理模式使用新功能代替旧功能
3. 装饰器模式强调增强自身，代理模式强调访问控制，客户端不关注原本的功能，只关注当前代理可以实现需求
  
1、装饰器模式强调的是增强自身，在被装饰之后你能够在被增强的类上使用增强后的功能。增强后你还是你，只不过能力更强了而已；代理模式强调要让别人帮你去做一些本身与你业务没有太多关系的职责（记录日志、设置缓存）。代理模式是为了实现对象的控制，因为被代理的对象往往难以直接获得或者是其内部不想暴露出来。

2、装饰模式是以对客户端透明的方式扩展对象的功能，是继承方案的一个替代方案；代理模式则是给一个对象提供一个代理对象，并由代理对象来控制对原有对象的引用；

3、装饰模式是为装饰的对象增强功能；而代理模式对代理的对象施加控制，但不对对象本身的功能进行增强；

### 装饰器模式
1. 比类更灵活--类似hoc可以自由组合嵌套
2. 保留原有的结构和api（类-->原有的类（函数）不动，创建新类,函数通过装饰符增强），
3. 适配器方法api可以跟原来不一样，装饰器必须一样，因为不能影响原本的功能
  
应用：
1. AOP编程--装饰抽象，组合调用（装饰符）
2. 自动化埋点--点击，before去发送埋点
3. 表单校验--before不断嵌套
4. vue，事件修饰符

### 状态模式
1. 对象有自己的状态
2. 不同状态下执行的逻辑不一样，实际上就是将内部状态抽取出来,状态有自己的改变回调,然后单独定义改变状态的方法
3. 状态值 + 状态类|状态函数(存放回调)

### 外观模式
1. 为复杂的模块或子系统提供外界访问的模块(例如,使用一个index.js将多个模块进行统一暴露)
2. 子系统相互独立

### 桥接模式
1. 分离变化---分离不同职能的代码，再通过桥梁函数|类统一起来

### 模板方法
1. 一般有两部分组成，第一部分是抽象父类，第二部分是具体的实现子类
2. 好莱坞原则，子类放弃了控制权，改由父类来调用
  ○ 发布订阅
  ○ 回调函数
即：
（1）需要子类重写复用的写成抽象类
（2）需要子类直接使用的模板，可以在父类直接实现，然后子类直接调用父类方法
