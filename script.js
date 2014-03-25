	var vm = new Vue({ 
	el:"#todoapp",
	data:{
		todos:[
		{
			content : "a",
			done:true
		},
		{
			content : "b",
			done:false
		},
		{
			content : "c",
			done:true
		}

		],
		newTodo:''
	},
	methods:{
		addTodo:function(){
			this.$data.todos.push({content:this.$data.newTodo,done:false});
			this.$data.newTodo = '';
		},
		removeTodo:function(todo){
			this.todos.$remove(todo.$data);
		}
	}

 });