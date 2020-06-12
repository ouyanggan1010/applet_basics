// pages/demo07/demo07.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //1.标签字符串最常用的
    html: '<div>1245<p style="color:red">淡饭黄齑可使肌肤</p><img src="//game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" /></div>',
    //2.对象字符串
    nodes: [{
      //div标签，name属性来指定是什么标签
      name: "div",
      //该标签上有哪些属性
      attrs: {
        // 标签上的属性 class style
        class: "my_div",
        style: "color:red"
      },
      // 子节点，children要接收的数据类型和nodes第二种渲染方式的数据类型一致
      children: [{
        name: "p",
        attrs:{
          style:"color:blue"
        },
        //在p标签中放入文本
        children: [{
          type: "text",
          text: "hello world"
        }]
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})