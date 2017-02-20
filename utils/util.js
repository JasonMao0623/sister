function http(url,appid,sign,resType,page,callback){
    wx.request({
      url:url,
      data: {
          "showapi_appid":appid,
          "showapi_sign":sign,
          "type":resType,
          "page":page
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        callback(res.data.showapi_res_body.pagebean)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}
module.exports={
    http:http
}