import Vue from "vue";
const ToDo = require("./models/todo.js");

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                new ToDo("Do some coding", "high", true),
                new ToDo("Drink coffee", "high"),
                new ToDo("Don't forget to eat", "low"),
                new ToDo("Don't forget to sleep", "low")
            ],
            newTodo: "",
            priority: "high"
        },
        methods: {
            addTodo: function () {
                this.todos.push(new ToDo(this.newTodo, this.priority));
                this.newTodo = "";
            },
            markComplete: function (index) {
                this.todos[index].toggleComplete();
            },
            deleteItem: function (index) {
                this.todos.splice(index, 1);
            },
            sortItemsByPriority: function (todos) {
                return todos.sort((a, b) => (a.priority >= b.priority) ? 1 : -1);
            },
            deleteAll: function () {
                this.todos = [];
            },
            deleteCompleted: function () {
                this.todos = this.todos.filter(todo => !todo.complete);
            }
        }
    });
});