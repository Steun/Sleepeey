'esversion: 6'

export default {
  name: 'app',
  data () {
    return {
      sleepCycleHours: 1, // Hours in one sleepcycle
      sleepCycleMinutes: 30, // Minutes in one sleepcycle
      cycleCount: 6, // how many cycles
      fallAsleepTime: 14, // Time it takes to fall asleep, in minutes
      givenTime: '09:30',
      bedtimes: [],
      waketimes: [],
      mode: '',
      timeTitle: ''
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

    cleanTimes () {
      this.waketimes = []
      this.bedtimes = []
      this.timeTitle = ''
    },

    calculateWakeTime () {
      // reset
      this.mode = 'waketime'
      this.cleanTimes()

      let now = new Date()
      for (let i = 0; i < this.cycleCount; i++) {
        now.setHours(now.getHours() + this.sleepCycleHours)
        now.setMinutes(now.getMinutes() + this.sleepCycleMinutes)
        this.waketimes.push({ id: i, date: now, value: this.prettyHour(now) })
      }
      this.timeTitle = 'You should try to wake up at'
    },

    calculateBedTime () {
      // reset
      this.cleanTimes()
      if (this.givenTime === '') return

      // convert time to date object
      let t = new Date()
      t.setHours(this.givenTime.split(':')[0], this.givenTime.split(':')[1])

      for (let i = 0; i < this.cycleCount; i++) {
        t.setHours(t.getHours() - this.sleepCycleHours)
        t.setMinutes(t.getMinutes() - this.sleepCycleMinutes)
        if (i === 0) t.setMinutes(t.getMinutes() - this.fallAsleepTime)
        this.bedtimes.unshift({ id: i, date: t, value: this.prettyHour(t) })
      }
      this.timeTitle = 'You should try to go to sleep at'
    },

    openBedTimeBar () {
      this.cleanTimes()
      this.mode = 'bedtime'
    }
  }
}
