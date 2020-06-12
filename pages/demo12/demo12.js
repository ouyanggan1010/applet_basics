// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示，比onReady先触发
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏，不是应用隐藏
   * 1.应用隐藏的时候也代表页面隐藏
   * 2.跳转到其他页面的时候，也是页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   * 可以用超链接来看效果，只不过open-type的属性值必须要关闭当前页面跳转
   * 关闭页面就是页面卸载，不会执行onHide事件
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 页面的数据或效果，重新刷新
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   * 页面出现滚动条并拉到最底部时才会执行该事件
   * 上拉加载下一页数据
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  /**
   * 页面一滚动就触发，需要有滚动条
   */
  onPageScroll: function (options) {
    console.log("onPageScroll222")
    //options = {scrollTop: 99}
    console.log(options)
  },

  /**
   * 页面尺寸发生改变的时候触发
   * 小程序发生横屏竖屏切换的时候，触发该事件
   * 目前测试需要在真机中才能看到效果
   */
  onResize: function (options) {
    // options = {
    // deviceOrientation: "landscape",
    //   size:{
    //     screenHeight: 360,
    //     screenWidth: 601,
    //     windowHeight: 312,
    //     windowWidth: 601
    //   }
    // }
    console.log('屏幕方向旋转', options)
  },

  /**
   * 1 必须要求当前页面时tabbar页面
   * 2 点击自己的tab item 时才触发
   */
  onTabItemTap: function (options) {
    // options = {
    //   index: 4,
    //   pagePath: "pages/demo12/demo12",
    //   text: "搜索"
    // }
    console.log('onTabItemTap', options)
  },
})