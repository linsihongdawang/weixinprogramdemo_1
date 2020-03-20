// pages/home/home.js
//弹幕生成随机颜色的函数
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
   videoList:[
     {id:'1',
     title:'第一个视频',
       videoUrl:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'},
     {
       id: '2',
       title: '第二个视频',
       videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
     },
     {
       id: '3',
       title: '第三个视频',
       videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
     }  
   ],
   src:'',
   danmuTxt:''
  },
  //这里是获取弹幕的事件
  getDanmu(txtValue){
    console.log(txtValue)
    this.setData({
      danmuTxt:txtValue.detail.value
    })
  },
  //这里是发送弹幕的事件
  sendDanmu(){
    let text=this.data.danmuTxt
    this.videoCtx.sendDanmu({
      text:text,
      color:getRandomColor()
    })

  },
  //这里是播放视频的事件
  playVideo(event){
  // console.log(event)  
  //停止之前正在播放的视频
   this.videoCtx.stop();
   //更新新的视频的播放地址
   this.setData({
     src:event.currentTarget.dataset.url
   })
   //播放新的视频
   this.videoCtx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('video_1')
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