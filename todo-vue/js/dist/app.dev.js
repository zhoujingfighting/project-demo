"use strict";

(function (window) {
  'use strict';

  var todos = [// {task : "英语" , state : ""} , 
    // {task : "语文" , state : ""}  , 
    // {task : "数学" , state : ""}
  ];
  var app = new Vue({
    el: "#app",
    data: {
      title: "番茄时钟",
      todo: todos,
      data: "",
      state: ""
    },
    methods: {
      add: function add(e) {
        var _this = this;

        if (this.data == "") {
          window.alert("输入为空,请重新输入");
        } else {
          var i = true;
          this.todo.forEach(function (it) {
            if (it.task == _this.data) {
              i = false;
              window.alert("已有此任务 , 请重新输入任务");
              _this.data = "";
            }
          });

          if (i == true) {
            todos.push({
              task: this.data,
              state: ""
            });
            this.data = "";
          }
        }
      },
      changeState: function changeState(e, a) {
        var indi = 0; //只需要改变当前list的状态,要拿到下标

        this.todo.forEach(function (item, index) {
          if (item.task == a) {
            indi = index;
          }
        });

        if (e.target.checked) {
          this.todo[indi].state = "completed";
        } else {
          this.todo[indi].state = "";
        }
      },
      destroy: function destroy(e, a) {
        var indi = 0; //只需要改变当前list的状态,要拿到下标

        this.todo.forEach(function (item, index) {
          if (item.task == a) {
            indi = index;
          }
        });
        this.todo.splice(indi, 1);
      },
      change: function change(e, a) {
        console.log(1);
        var indi = 0,
            flag = false; //只需要改变当前list的状态,要拿到下标

        this.todo.forEach(function (item, index) {
          if (item.task == a) {
            indi = index;
          }
        });

        if (a.trim() == "") {
          window.alert("输入为空,默认删除此任务,请重新添加");
          this.todo.splice(indi, 1);
        } else {
          flag = true;
        }

        if (flag) {
          this.todo[indi].state = "";
        }
      }
    },
    computed: {
      todolist: function todolist() {
        return this.todo.filter(function (it) {
          return it.state != "completed";
        }).length;
      },
      show: function show() {
        return this.todo.length;
      }
    }
  }); // Your starting point. Enjoy the ride!
})(window);