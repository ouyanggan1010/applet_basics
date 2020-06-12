// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello mina",
    num: 1000,
    isGirl: false,
    person: {
      age: 74,
      height: 145,
      weight: 200,
      nane: '富婆'
    },
    isChecked: false,
    lists: [{
      id: 0,
      name: "id_0",
      arrys:['12','89']
    }, {
      id: 1,
      name: "id_1",
      arrys: ['45', '78']
    }, {
      id: 2,
      name: "id_2",
      arrys: ['25', '21','69']
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