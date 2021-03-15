(function (window) {
	'use strict';
	var todos = [
		// {task : "英语" , state : ""} , 
		// {task : "语文" , state : ""}  , 
		// {task : "数学" , state : ""}
	]
	const app =  new Vue({
		el : "#app" , 
		data : {
			title : "番茄时钟" , 
			todo : todos ,
			data : "",
			state: "",
		},
		methods : {
			add : function(e){
				if(this.data==""){
					window.alert("输入为空,请重新输入")
				}
				else{
					let i = true
					this.todo.forEach(it=>{
						if(it.task == this.data){
							i = false
							window.alert("已有此任务 , 请重新输入任务")
							this.data = ""
						}
					})
					if(i==true){
						todos.push({task : this.data , state : ""})
					this.data = ""
					}
				}
			},
			changeState:function(e , a){
				let indi = 0
				//只需要改变当前list的状态,要拿到下标
				this.todo.forEach(function(item,index){
					if(item.task == a){
						indi = index
					}
				})
				if(e.target.checked){	
					this.todo[indi].state = "completed"
				}
				else{
					this.todo[indi].state = ""
				}
				
			} , 
			destroy:function(e , a){
				let indi = 0
				//只需要改变当前list的状态,要拿到下标
				this.todo.forEach(function(item,index){
					if(item.task == a){
						indi = index
					}
				})
				this.todo.splice(indi,1)
			} , 
			change : function(e,a){
				console.log(1)
				let indi = 0 , flag = false
				//只需要改变当前list的状态,要拿到下标
				this.todo.forEach(function(item,index){
					if(item.task == a){
						indi = index
					}
				})
				if(a.trim() == ""){
					window.alert("输入为空,默认删除此任务,请重新添加")
					this.todo.splice(indi,1)
				}else{
					flag = true
				}
				if(flag) {this.todo[indi].state = ""}
			}
		},
		computed : {
			todolist:function(){
				return this.todo.filter(it=>it.state!="completed").length
			} , 
			show : function(){
				return this.todo.length
			}
		}
	})
	// Your starting point. Enjoy the ride!

})(window);
