;(function(){
    let clock = document.getElementById("clock")
    ctx = clock.getContext("2d")//第一个学习的点
    hours = [3,4,5,6,7,8,9,10,11,12,1,2]
    let cwidth = ctx.canvas.width;
    let cheight = ctx.canvas.height;
    t = null
    //Canvas API
    class Clock{
        constructor(){
            this.r = cwidth / 2
        }
        init(){//ES6也得好好看
            this.draw()
            t = setInterval(this.draw.bind(this) , 1000)
        }
        draw(){
            ctx.clearRect(0,0,cwidth,cheight)
            var {hours , minutes , seconds} = getTime()//用一个对象接受返回值
            ctx.save()//重绘之前得保存状态
            this.drawPanel()//画板
            this.drwaHournumbers()
            this.hourindicator(hours,minutes)
            this.minuteindicator(minutes)
            this.secondindicator(seconds)            
            this.drawCetnerpoints()
            ctx.restore()//画完恢复画板状态
        }
        drawPanel(){
            ctx.beginPath()
            ctx.translate(this.r,this.r)//已经平移过了
            ctx.fillStyle = "#fff"
            ctx.arc(0,0,this.r - 30,0,2*Math.PI,false)
            ctx.fill()
        }
        drwaHournumbers(){
            ctx.beginPath()
            var radius,
                x,
                y;
            //void ctx.fillText(text, x, y [, maxWidth]);
            ctx.fillStyle = "#000"
            ctx.font = "40px sans-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            hours.forEach((element , index) => {
                radius = 2 * Math.PI / 12 * index//每个数字应该转的角度
                x = (this.r - 60) * Math.cos(radius)
                y = (this.r - 60) * Math.sin(radius)
                ctx.fillText(element,x,y)//会沿用上一笔颜色
            });
        }
        drawCetnerpoints(){
            ctx.beginPath()//
            ctx.fillStyle = "#333"
            ctx.arc(0,0,6,0,2*Math.PI,false)
            ctx.fill()
            ctx.fillStyle = "#666"
            ctx.arc(0,0,13,0,2*Math.PI,false)
            ctx.fill()
        }
        hourindicator(hours,minutes){
            var radius = 2 * Math.PI / 12 * hours,
                mradius = 2 * Math.PI / 12 / 60 * minutes
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = "10"
            ctx.lineCap = "round"//圆角
            ctx.rotate(radius + mradius)
            ctx.moveTo(0,0);//起点坐标
            ctx.lineTo(0,-this.r/2.5);//终点坐标
            ctx.stroke()
            ctx.restore()
        }
        minuteindicator(minutes){
            var radius = 2 * Math.PI / 60 * minutes
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = "5"
            ctx.lineCap = "round"//圆角
            ctx.rotate(radius)
            ctx.moveTo(0,0);//起点坐标
            ctx.lineTo(0,-this.r/1.8);//终点坐标
            ctx.stroke()
            ctx.strokeStyle = "violet"
            ctx.restore()
        }
        secondindicator(seconds){
            var radius = 2 * Math.PI / 60 * seconds
            ctx.save()
            ctx.beginPath()
            ctx.lineWidth = "5"
            ctx.lineCap = "round"//圆角
            ctx.rotate(radius)
            ctx.moveTo(0,0);//起点坐标violet
            ctx.lineTo(0,-this.r/1.55);//终点坐标
            ctx.stroke()
            ctx.strokeStyle = "orange"
            ctx.restore()
        }
    }
    function getTime(){
        var d = new Date()
        return {
            hours:d.getHours(),
            minutes:d.getMinutes(),
            seconds:d.getSeconds()
        }
    }
    window.Clock = Clock;
})();