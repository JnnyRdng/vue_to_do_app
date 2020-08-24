const ToDo = function (name, priority, complete = false) {
    this.name = name;
    this.priority = priority;
    this.complete = complete;
}

ToDo.prototype.toggleComplete = function () {
    this.complete = !this.complete;
}

module.exports = ToDo;