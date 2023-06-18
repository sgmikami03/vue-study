const app = Vue.createApp({
    data: ()=> ({
        basePrice: 100
    }),
    computed: {
        taxIncrution: function () {
            return Math.floor(this.basePrice * 1.1)
        }
    }
})
app.mount("#app")