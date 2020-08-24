import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                { name: "Learn Vue", priority: "high", complete: true },
                { name: "Write Vue", priority: "high", complete: false },
                { name: "Master Vue", priority: "low", complete: false }
            ],
            newTodo: "",
            priority: "high"
        },
        methods: {
            addTodo: function () {
                const todo = { name: this.newTodo, priority: this.priority, complete: false };
                this.todos.push(todo);
                this.newTodo = "";
            }
        }
    });
});