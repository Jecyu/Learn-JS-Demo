// 观察者模式
// 一种一对多的依赖，当一个对象的状态发生改变时，所以依赖它的对象都将得到通知
// 关于“观察者模式”的设计模式，也是vue响应式实现的核心，订阅发布模式是观察者模式的升级版，dojo的Topic，vue的eventBus这些就是用的发布订阅模式

class Observer {
  constructor() {
    this.subs = [];
  }
  subscribe(target, cb) {
    target.subs.push(cb);
  }

  publish() {
    this.subs.forEach(sub => sub());
  }
}

const ob1 = new Observer();
const ob2 = new Observer();
const ob3 = new Observer();

ob2.subscribe(ob1, function() {
  console.log('ob2 添加了对 ob1 的依赖，ob1 通知了我会响应');
})

ob3.subscribe(ob1, function() {
  console.log('ob3 添加了对 ob1 的依赖，ob1 通知了我会响应');
})

ob1.publish(); // ob1 发起了通知


// 发布——订阅
// 发布——订阅 是观察者的升级版
// 发布——订阅 拥有一个调度中心
// 如果用 发布——订阅，上面 Observer 类的 subscribe 和 publish 方法都在 observer 对象（调度中心）进行管理

const observer = {
  subs: Object.create(null),
  subscribe(type, cb) {
    (this.subs[type] || (this.subs[type] = [])).push(cb);
  },
  publish(type, ...args) {
    (this.subs[type] || []).forEach(cb => cb.apply(null, args));
  }
}

observer.subscribe('foo', function() {
  console.log('foo 事件被订阅了，可以发布');
})

observer.subscribe('bar', function() {
  console.log('bar 事件被订阅了，可以发布');
})

observer.publish('foo');
observer.publish('bar');