//index.js
//获取应用实例
import chartWrap from '../canvas/chartWrap'  //获取chartWrap.js文件
import getConfig from './getConfig'
var app = getApp()//获取app.js文件
Page({
    data: {},
    onLoad: function () {

    },
    onShow: function () {// 页面显示
        let pageThis=this  
        //console.log(app)//检查app数据
        app.deviceInfo.then(function(deviceInfo){//提取app内deviceInfo数据后传参
            console.log('设备信息',deviceInfo)//检查参数是否传入
            let labels=["11-01", "11-02", "11-03", "11-04", "11-05", "11-06","11-07", "十二月"]  //X轴显示数据
            let data=[221,12,55555,123,1234,12345,123456,12345] //图形实际获取的数据
            //Math.floor    用作向下取整。
            //320-（320/750）*10*2=311
            let width=Math.floor(deviceInfo.windowWidth-(deviceInfo.windowWidth/750)*10*2)//canvas宽度
            // console.log(width)       311
            let height=Math.floor(width/1.6)//这个项目canvas的width/height为1.6
            // console.log(height)      194
            let canvasId='myCanvas'
            let canvasConfig={//将数据存放在canvasConfig中
                width:width,
                height:height,
                id:canvasId
            }
             //console.log(canvasConfig)    //311/194/myCanvas
            let config=getConfig(canvasConfig,labels,data)//
                // console.log(config)
            chartWrap.bind(pageThis)(config)//将数据绑定到chartWrap.js中
            // console.log(a)
        })
    }
})