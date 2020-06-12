// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  // input事件
  handleInput(e){
    //设置data中属性的值，一定要通过this.setData，而不是this.data
    this.setData({
      num: e.detail.value
    })
  },
  // button点击事件
  handletap(e){
    const { operation } = e.target.dataset;
    // 获取data的某个属性通过this.data来获取
    const oldNum = parseFloat(this.data.num);
    let condition = oldNum > 0;
    if (operation > 0){
      condition = oldNum >= 0;
    }
    this.setData({
      num: condition ? oldNum + operation : oldNum
    })
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