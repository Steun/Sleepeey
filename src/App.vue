<template>
  <div id="app">

    <main>
      <!-- <input type="time"> -->
      <button @click="calculateBedtime()" class="btn">SLEEP</button>

      <div class="container">
        <span v-if="pressed">wake up at:</span>
        <ul class="list">
          <li class="item" v-for="time in bedtimes" v-bind="bedtimes.id">{{time.value}}</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sleepCycle: 1.5, // Time for one sleepcycle
      cycleCount: 7, // how many cycles
      fallAsleepTime: 14, // Time it takes to fall asleep, in minutes
      givenTime: new Date(),
      bedtimes: [],
      pressed: false
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

    calculateBedtime () {
      // reset
      this.givenTime = new Date()
      this.bedtimes = []
      let now = this.givenTime

      for (let i = 0; i < this.cycleCount; i++) {
        now.setHours(now.getHours() + this.sleepCycle)
        now.setMinutes(now.getMinutes() + this.fallAsleepTime)
        this.bedtimes.push({id: i, date: now, value: this.prettyHour(now)})
        this.pressed = true
      }
    }
  }
}
</script>

<style>

html {
  font-family: sans-serif; /* 1 */
  letter-spacing: .43pt;
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: block;
}

body {
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: pink;
  background: #000;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;
  letter-spacing: 3px;
}

main {
  text-align: center;
  display: block;
  box-sizing: border-box;
}

h1 {
  margin: 0;
  text-align: center;
  font-size: 7vw;
}

.btn {
  color: mediumpurple;
  font-weight: bold;
  background: pink;
  border: 2px solid aqua;
  letter-spacing: 5px;
  padding: 20px 40px;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
  display: inline-block;
}


ul {
  padding: 0;
  margin: 0;
  margin-top: 20px;
}

li {
  padding: 5px;
  margin: 0;
  display: block;
  font-size: 17px;
  box-sizing: border-box;
}
</style>
