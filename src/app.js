import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: ["Learn Vue", "Write Vue", "Master Vue"]
        }
    });
});