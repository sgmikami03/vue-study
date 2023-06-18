const app = Vue.createApp({
    data: ()=> ({
        m: 0,
        km: 0,
    }),
    watch: {
        m: function(newValue){
            this.km = newValue / 1000
        },
        km: function(newValue){
            this.m = newValue * 1000
        }
    }
})
app.mount("#app")

const app2 = Vue.createApp({
    data: ()=> ({
        m: 0,
        km: 0,
    }),
    computed: {
       set_m: function () {
            return this.km / 1000
        },
        set_km: function () {
            return this.m * 1000
        },
    }
})
app2.mount("#app2")