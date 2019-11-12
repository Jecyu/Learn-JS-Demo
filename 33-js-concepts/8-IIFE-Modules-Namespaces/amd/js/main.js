require.config({
  // baseUrl: "js/util", // 可以配置基础路径
  paths: {
    math: "util/math",
    "jquery.scroll": "lib/jquery.scroll"
  },
  // 使用 shim 加载非规范的模块
  shim: {
    "jquery.scroll": {
      deps: ["lib/jquery"],
      exports: "jQuery.fn.scroll" // 输出的变量值
    }
  }
});
require(["math", "jquery.scroll"], function(math, jqueryScroll) {
  alert(math.add(1, 1));
});
