//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    user:[],
  },
  //事件处理函数
  overbtn: function() {
   
  },
  btnGraph:function(e){
    // console.log(e)
    wx.navigateTo({
      url: '../graph/graph',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
   acatterMultiAxis:function(e){
    // console.log(e)
    wx.navigateTo({
      url: '../bar/index',//柱状图
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
   btnPie:function(e){
    // console.log(e)
    wx.navigateTo({
      url: '../pie/index',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  onLoad: function () {
     var that = this;
    wx.request({
      url:'https://app.aitagene.com/aita/init.php',
      method:'POST',
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        // console.log(res);
        that.setData({user:res.data});
        // console.log(that.data.user);
      }
    })
  }
})
