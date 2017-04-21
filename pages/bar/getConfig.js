/**
 * Created by xiabingwu on 2016/11/21.
 */
import Chart from '../canvas/chart'
export default function(canvasConfig){
    //console.log(canvasConfig)//传入index.js中传输的数据
    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };
// console.log(chartColors)
    var randomScalingFactor = function () {
        //Math.random() 随机数
        //Math.round（）返回最接近的整数
        //Math.random() * 100       math.random()函数是取从0至1之间的随机数,乘100以后就是取0到100之间的随机数
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }
    // console.log(randomScalingFactor())上面返回是随机数  
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     //console.log(Chart)   //一个函数
       // console.log(Chart.helpers)
    var color = Chart.helpers.color;
    // console.log(color)
    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],//雷达图的x轴坐标
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),//雷达图的颜色
            borderColor: chartColors.red,
            borderWidth: 1,

            data: [
                randomScalingFactor(),//随机数
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]//趋势图，线上各点的值（Y坐标）
        }, 
        {//第二条数据
            label: 'Dataset 2',//页面显示出的内容
            backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
            borderColor: chartColors.blue,
            borderWidth: 1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }
        ]
    };
    // console.log(barChartData)
    //化趋势图
    var chartConfig={//将数据以图形展示出来
        type: 'bar',
        data: barChartData,//将上面的数据图形放入
        options: {
            responsive: true,
            legend: {
                position: 'top',
                
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    };
    // console.log(chartConfig)
    return {//将数据返回页面
        chartConfig:chartConfig,
        canvasConfig:canvasConfig
    }
}