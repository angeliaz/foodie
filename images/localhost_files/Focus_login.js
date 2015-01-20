define('Focus_login', ["F_glue", 'F_WidgetBase', 'Focus_login/template', 'public_login'],
    function (glue, WidgetBase, template, public_login) {
     
  var Focus_login = WidgetBase.extend({
    // 版本标识，请勿删除与更改
    version: '@VERSION',
    // 组件类型，请勿删除与更改
    type: 'Focus_login',

    // 创建组件内部数据
    createModel: function () {
      // model声明方式
      // this.modelName = glue.modelFactory.define(function (vm) {
      //   vm.propertyName = '';
      //   vm.arrayPropertyName = [];
      // });
      
      // 普通属性声明
      // this.propertyName = '';
    },

    // 创建并解析模板
    resolveTemplate: function () {
      // 以jquery为例
      // 使用模板
      // this.ownerNode = template.tmplateName(data);
    },

    // 绑定dom事件
    bindDomEvent: function () {
      // 以jquery为例
      // var _this = this;
      // this.ownerNode.on('eventName', 'delegateElement', function (e) {
      //   _this.method();
      // })
      
    },

    // 为数据模型绑定数据监听事件
    bindDataEvent: function () {
      // 监控属性变更
      // var _this = this;
      // this.watch(this.model, 'propertyName', function (newValue) {
      //   _this.method(newValue);
      // });

      // 监控数组方法(现在支持push, pop, shift, unshift)
      // this.watch(this.modelName.arrayPropertyName, 'push', function (newValue) {
      //   _this.method(newValue);
      // });
    },

    // 绑定自定义事件
    bindCustomEvent: function () {
      // 创建一个自定义事件
      // var _this = this;
      // this.on('customName', function (message) {
      //   _this.method(message);
      // });
    },

    // 绑定消息注册
    bindObserver: function () {
      // 创建一个消息监听
      // var _this = this;
      // this.observer('notifyName', function (message) {
      //   _this.method(message);
      // });
    },

    // 渲染组件。
    renderer: function () {
      // 以jquery为例
      // $(this.container).append(this.ownerNode);
    },

    // 创建完成后的处理。
    createComplete: function () {

    },

    // 销毁组件
    destroy: function () {
      Focus_login.superclass.destroy.call(this);
      // 以jquery为例
      // $(this.container).empty();
    },

    // 组件内部方法
    
    // 检测是否登录
    isLogin: function() {
      return window['IS_LOGIN']();
    }
    
  });

  return Focus_login;
});