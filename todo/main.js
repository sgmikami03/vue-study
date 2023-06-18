const app = Vue.createApp({
    data: ()=> ({
        newItem: "",
        todos: []
    }),
    methods: {
        addItem: function(event) {
            console.log("click");
            if (this.newItem === "") return
            let todo = {
                item: this.newItem,
                isDone: false,
            }
            this.todos.push(todo)
            this.newItem = ""
        },
        deleteItem: function(key){
            this.todos.splice(key, 1)
        }
    }
})
app.mount("#app")