const app = new Vue({
    el: '#app',
    data: {
        todo: '',
        todoArr: [],
    },
    methods: {
        add: function () {
            if (this.todo === '') return alert('內容不能為空')
            this.todoArr.push(this.todo)
            localStorage.setItem('todoList', this.todoArr)
            this.todo = ''
        },
        remove: function (index) {
            if (confirm(`確認要刪除 ${this.todoArr[index]} 嗎`)) {
                this.todoArr.splice(index, 1)
                localStorage.setItem('todoList', this.todoArr)
            }
        },
        clear: function () {
            if (confirm(`確認要清除所有列表嗎`)) {
                this.todoArr = []
                localStorage.setItem('todoList', this.todoArr)
            }
        }
    }
})