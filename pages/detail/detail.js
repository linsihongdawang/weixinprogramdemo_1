// pages/detail/detail.js
var commonJS = require('../../common/common.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      article:{
        id:'1',
        title:'“马航370”失踪之谜再引热议，这部纪录片无限接近谜底了',
        poster:'/images/detail/poster_image(1).jpeg',
        content: '2014年，马来西亚航空公司的航班MH370在飞行途中突然与地面失联。飞机的不知所踪引发了轩然大波，也留下了迄今为止人类航空史上最大的谜团。6年已过，马航MH370依然下落不明，机上乘客已无生还的可能。但是，仍有很多组织和个人在进行着调查，势要找到答案。不久前，美国国家地理频道推出了纪录片《寻找马航MH370》，详细讲述了调查团队在MH370的搜索过程中所尝试采用的各种方法和新技术，尽可能地还原了MH370的失事过程。2014年3月8日，马航MH370自吉隆坡起飞，预计6小时后，它将会抵达北京。然而，当航班飞到越南上空时，这架载有239名乘客的波音777在雷达系统中突然消失了，没有留下呼救信号。MH370的无故失踪，让上百个家庭支离破碎，也引起了全世界的关注。',
        add_date:'2020-3-16'
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newsID=options.id
    let result = commonJS.getNewsDetail(newsID)
    if(result.code=='200'){
      this.setData({
        article:result.news
      })
    }
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