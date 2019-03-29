var vueArguments = {
    el: '#app',
    data: {
        title: 'Hello VueJS!'
    },
    methods: {
        getText: function () {
            return "Some Text";
        },
        changeTitle: function (event) {
            this.title = this.getText() + ":  " + event.target.value;
        }
    }
}
new Vue(vueArguments);