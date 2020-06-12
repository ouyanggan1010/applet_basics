//app.js
App({
  // 1 应用第一次启动就会触发的事件
  // onLaunch(options) {
  //   // 可以在应用第一次启动时获取当前用户信息
  //   console.log("onLaunch");
  //   console.log(options)
  //   //不能触发onPageNotFound事件
  //   // wx.navigateTo({
  //   //   url: './pages/demo23/demo23'
  //   // })
  //   //可以在编译莫模式那里悬着自定义编译
  // },
  // // 2 应用被用户看到，切换到其他地方又切换回来或打开该小程序，理论上就是当前小程序展示在用户面前就会触发
  // onShow(options) {
  //   // 对应用的数据或页面效果重置
  //   console.log("onShow");
  //   console.log(options)
  // },
  // // 3 应用隐藏，切换到其他页面时，看不到当前小程序页面则会触发该事件
  // onHide() {
  //   // 暂停或清除定时器，以免浪费内存
  //   console.log("onHide")
  // },
  // // 4 应用代码发生了报错的时候就会触发
  // onError(err) {
  //   //在应用发生代码报错的时候，手机用户的错误信息，通过异步请求，将错误的信息发送到后台去
  //   //当该应用要升级或修复代码的时候，根绝这些错误信息做针对性的处理
  //   console.log("onError");
  //   console.log(err)
  // },
  // // 5 页面找不到就会触发
  // //应用第一次启动的时候，如果找不到第一个入口文件，才会触发该事件
  // onPageNotFound(options) {
  //   //如果页面不存在了，通过js的方式重新跳转页面，重新跳到第二个首页。但是不能跳到tabbar页面，导航组件类似
  //   wx.navigateTo({
  //     url: './pages/demo05/demo05'
  //   });
  //   console.log("onPageNotFound");
  //   console.log(options)
  // },
})