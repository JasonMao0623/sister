// pages/index/index.js
var app = getApp();
var util = require('../../utils/util.js')
var curPage = 1;
var firstLoad=true;
Page({
  data: {
  },
  onLoad: function (options) {
    util.http('http://route.showapi.com/255-1',app.globalData.appid,app.globalData.apiKey,app.globalData.tVideo,curPage.toString(),this.processData)
  },
  processData:function(data){
    console.log(data);
    var sisterData=[];
    var contentList=data.contentlist;
    for(var idx in contentList){
      var content=contentList[idx];
      var name=content.name;
      if(name.length>6){
        name=name.substring(0,6)+".."
      }
      var str={
        userAvator:content.profile_image,
        userName:name,
        time:content.create_time,
        videoUrl:content.video_uri,
        love:content.love,
        hate:content.hate,
        text:content.text
      }
      sisterData.push(str)
    }
    var temArray=[];
    if(firstLoad){
      temArray=sisterData;
      firstLoad=false;
      curPage++;
    }else{
      temArray=this.data.videoData.concat(sisterData);
      curPage++;
    }
    this.setData({
      videoData:temArray
    })
    wx.hideNavigationBarLoading();
  },
  onReachBottom:function(){
    wx.showNavigationBarLoading();
    util.http('http://route.showapi.com/255-1',app.globalData.appid,app.globalData.apiKey,app.globalData.tVideo,curPage.toString(),this.processData)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})