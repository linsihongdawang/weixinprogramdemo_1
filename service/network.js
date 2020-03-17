//对网络请求进行集体封装
export default function request(options){
return new Promise((resolve,reject)=>{
  wx.request({
    url: options.url,
    method: options.method || 'get',
    data: options.data || {},
    success: function (res) {
         resolve(res)
    },
    fail: function (err) {
         reject(err)
    }
  })
})
}