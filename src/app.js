import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                { name: "Do some coding", priority: "high", complete: true },
                { name: "Drink coffee", priority: "high", complete: false },
                { name: "Don't forget to eat", priority: "low", complete: false }
            ],
            newTodo: "",
            priority: "high"
        },
        methods: {
            addTodo: function () {
                const todo = { name: this.newTodo, priority: this.priority, complete: false };
                this.todos.push(todo);
                this.newTodo = "";

            },
            markComplete: function (index) {
                this.todos[index].complete = !this.todos[index].complete;
            },
            deleteItem: function (index) {
                this.todos.splice(index, 1);
            },
            sortItemsByPriority: function (todos) {
                return todos.sort((a, b) => {
                    if (a.priority > b.priority) {
                        return 1;
                    } else if (a.priority < b.priority) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }
        }
    });
});