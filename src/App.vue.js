'esversion: 6'

export default {
  name: 'app',
  data () {
    return {
      sleepCycle: 1.5, // Time for one sleepcycle
      cycleCount: 6, // how many cycles
      fallAsleepTime: 14, // Time it takes to fall asleep, in minutes
      givenTime: '09:30',
      bedtimes: [],
      waketimes: [],
      pressed: false,
      mode: ''
    }
  },
  computed: {
    currentHours () {
      return new Date().getHours()
    }
  },
  methods: {
    prettyHour (hour) {
      let h = new Date(hour)
      if (h.getMinutes() < 10) {
        return `${h.getHours()}:0${h.getMinutes()}`
      } else {
        return `${h.getHours()}:${h.getMinutes()}`
      }
    },

    calculateWakeTime () {
      // reset
      this.mode = 'waketime'
      this.waketimes = []

      let now = new Date()
      for (let i = 0; i < this.cycleCount; i++) {
        now.setHours(now.getHours() + this.sleepCycle)
        now.setMinutes(now.getMinutes() + this.fallAsleepTime)
        this.waketimes.push({ id: i, date: now, value: this.prettyHour(now) })
        this.pressed = true
      }
    },

    calculateBedTime (time) {
      console.log(time)
      // reset
      this.mode = 'bedtime'
      this.bedtimes = []

      // convert time to date object
      let t = new Date()
      t.setHours(time.split(':')[0], time.split(':')[1])

      for (let i = 0; i < 6; i++) {
        t.setHours(t.getHours() - this.sleepCycle)
        t.setMinutes(t.getMinutes() - this.fallAsleepTime)
        this.bedtimes.unshift({ id: i, date: t, value: this.prettyHour(t) })
        this.pressed = true
      }
    }
  }
}
