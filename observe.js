const target = this.spreadHostDom;
// 创建观察者对象
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.type);
    console.log(mutation.attributeName);
    if (mutation.attributeName === 'class') {
      debugger;
    }
  });
});

// 配置观察选项:
const config = { attributes: true, childList: true, characterData: true }
// 传入目标节点和观察选项
observer.observe(target, config);