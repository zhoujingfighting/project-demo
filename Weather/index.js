
const city = '杭州';
const button = document.getElementById("button")
const input = document.getElementById("input")
var option = {
    cityname : city ,
    key: '05eaf356f8c8c6b6a7d860deb3750f19'
};
// var option = {
//     model : "c1" ,
//     key: '25ac8683096e19d688d64d0c23a8ccfb' ,
//     subject : 1
// };
//这个在后面可以改变
function getData(opt){
    return new Promise( (resolve , reject) =>{
        $.get('/api/weather',opt,function(data){
            resolve(data)
            //依据城市的不同获取不同的结果,而且是先获得结果,然后再渲染
          });
    })
}
function choseFont(str){
    //07:小雨
    //00:晴
    //01:多云
    //02:阴天
    //03:阵雨
    //04:雷电
    if(str=="01"){
        return "&#xe62f;";
    }
    else if(str=="00"){
        return "&#xe613;";
    }
    else if(str=="02"){
        return "&#xe614;"
    }
    else if(str=="03"){
        return "&#xe617;";
    }
    else if(str=="04"){
        return "&#xe61b;";
    }
    else if(str=="05"){
        return "&#xe61c;";
    }
    else if(str=="06"){
        return "&#xe616;";
    }
    else if(str=="07"){
        return "&#xe61d;";
    }
    else{
        return "&#xe615;";
    }     
  }
// tianqiData.cityname = decodeURI(encodeURI(tianqiData.cityname));
function infoChange(data){
    var obj = {1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"日"}
    //下面是获得每个要更新数据得节点
    var day_week = document.body.getElementsByClassName("day-week")[0]//周几
    var day_date = document.body.getElementsByClassName("day-date")[0]//具体日期
    var city = document.body.getElementsByClassName("city")[0]//城市名字
    var des = document.body.getElementsByClassName("description")[0]
///天气图标还得更新,写一个方程判断是啥图标,看情况放图标
    var temp = document.body.getElementsByClassName("temp")[0]//温度
    var des = document.body.getElementsByClassName("detail")[0]//温度
    var description =  document.body.getElementsByClassName("description")[0]
    
    day_week.innerHTML = "星期" + obj[new Date().getDay()]
    day_date.innerHTML = data.realtime.date
    city.innerHTML = " " + data.realtime.city_name
    temp.innerHTML = data.realtime.weather.temperature + '℃'
    des.innerHTML = data.pm25.pm25.des
    // description.innerHTML = choseFont(data.weather[0].icon2)

    //下面开始处理右边
    var PM = document.body.getElementsByClassName("PM-data")[0]//pm数据
    var tem = document.body.getElementsByClassName("temp-data")[0]//pm数据
    var wind = document.body.getElementsByClassName("wind-data")[0]//pm数据
    PM.children[1].innerHTML = data.pm25.pm25.pm25
    tem.children[1].innerHTML = data.realtime.wind.direct
    wind.children[1].innerHTML = data.realtime.weather.humidity

     //处理未来几天得数据
     var day2 = document.getElementById("day2")
     var day3 = document.getElementById("day3")
     var day4 = document.getElementById("day4")
     var day5 = document.getElementById("day5")
     for(let i = 2 ; i <=5 ; i ++){
    document.getElementById(`day${i}`).children[0].innerHTML= choseFont(data.realtime.weather.img)
    document.getElementById(`day${i}`).children[1].innerHTML = "星期" + data.weather[i-1].week
    document.getElementById(`day${i}`).children[2].innerHTML = data.weather[i-1].nongli
     }
}
window.onload = () => {
    (async function init(){
       let res = await getData(option)//获取初始数据
       res = res.result.data
       console.log(res)
       infoChange(res)
    })()
    $.ajax({
        url:'a.json',
        type :"GET",
        success:function(data){
            console.log(data)
        }
    })
}
button.addEventListener('click', async function(){
    //得先判断输入是否合法
    option.cityname = input.value
    let res = await getData(option)//获取初始数据
    res = res.result.data
    console.log( res )
    infoChange(res)
} ,false)

   



