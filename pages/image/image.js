// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imagePath:'',
  },
  uploadImage(){
    // console.log('选择图片');
    //用系统API让用户在相册中选择图片或者拍照
    wx.chooseImage({
      success: (res)=>{
        console.log(res);
        //取出图片的路径
        const tempFilePaths=res.tempFilePaths[0];
        //把取出的图片保存到变量imagePath中
        this.setData({
          imagePath:tempFilePaths
        })

      },
    })
  },
  handleScroll(event){
    console.log(event);
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