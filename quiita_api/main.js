const app = Vue.createApp({
    data: ()=> ({
        keyword: "",
        message: "",
        items: null,
    }),
    watch: {
        keyword: function (newKeyword) {
            console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    mounted: function() {
        //this.keyword = 'JavaScript'
        //this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.keyword == "") {
                console.log("karamozi");
                this.items = null
                return
            }
            this.message = "Loading"
            const vm = this
            const parms = {page: 1, per_page: 20, query: this.keyword}
            axios.get("https://qiita.com/api/v2/items", {parms})
                .then(function (responce) {
                    console.log(responce.data);
                    vm.items = responce.data
                })
                .catch(function(){
                    vm.message = "eroor:" + console.error();
                })
                .finally(function(){
                    vm.message = ""
                })
        }
    }
})
app.mount("#app")