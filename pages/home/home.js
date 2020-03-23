// pages/home/home.js
var commonJS=require('../../common/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      { src:'/images/home/swiper_new(1).jpeg'},
      { src:'/images/home/swiper_new(2).jpeg'},
      { src:'/images/home/swiper_new(3).jpeg'}],
    newsList:[]      
  },
  //点击class为new_item的view组件跳转到新闻的具体内容的方法
  goToDeatil(event){
  //  console.log(event);
  //获取携带data-id的数据
  let NewsID=event.currentTarget.dataset.id
  //携带新闻id进行对应得页面跳转
  wx.navigateTo({
    url: '/pages/detail/detail?id='+NewsID,
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let newsList=commonJS.getNewsList();
   this.setData({
     newsList:newsList
   })
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