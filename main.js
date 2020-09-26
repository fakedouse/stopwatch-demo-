const randId = () => Math.random().toString(36).substr(2)
const Stopwatch = {
    template: '#sw',
    data() {return{
        fulsec: 0,
        playing: false
    }},
    computed: {
        seconds() {
            // Обнуление каждые 60 секунд
            return this.fulsec ? this.fulsec % 60 : 0
        },
        minutes() {
            // Делим количество секунд на 60 без остатка, обнуляем при 60 минутах 
            return this.fulsec ? Math.trunc(this.fulsec/60) % 60 : 0
        },
        hours() {
            return this.fulsec ? Math.trunc(this.fulsec/3600) : 0
        }
    },
    methods: {
        play() {
            this.playing = setInterval(() => ++this.fulsec, 1000)
        },
        pause() {
            clearInterval(this.playing)
            this.playing = false
        },
        playpause() {
            this.playing ? this.pause() : this.play()
        },
        stop() {
            this.pause()
            this.fulsec = 0
        }
    }
}

const App = {
    data() {return {
        timers: [
            {id: randId()}
        ]
    }},
    components: {
        Stopwatch
    },
    methods: {
        addtimer() {
            this.timers.push({ id: randId()})
        }
    }
}


Vue.createApp(App).mount('#app')