<template>
  <div id="part_phone">
    <div id="phone_layer">
      <video id="phone_projection" controls></video>
      <div id="touchScreen" @mousemove="onMouseMove" @click="onClick"></div>
    </div>
    <div id="div_hard_key">
      <mu-icon-button icon="keyboard_backspace"/>
      <mu-icon-button icon="home"/>
      <mu-icon-button icon="menu"/>
      <mu-icon-button icon="power_settings_new"/>
      <mu-icon-button icon="volume_down"/>
      <mu-icon-button icon="volume_up"/>
    </div>
  </div>
</template>
<script>
import ConnectionMan from '../utils/ConnectionMan.js'
export default {
  data () {
    return {}
  },
  methods: {
    onMouseMove (event) {
      // console.log(event)
      let data = {
        action: 'move',
        x: event.offsetX / event.target.offsetWidth,
        y: event.offsetY / event.target.offsetHeight
      }
      // console.log(data)
      ConnectionMan.sendMouse(data)
    },
    onClick () {
      ConnectionMan.sendMouse({
        action: 'click',
        x: 0,
        y: 0
      })
    }
  }
}
</script>
<style scoped>
#part_phone{
  width: 27em;
  /*background-color: lightgray;*/
  display: flex;
  flex-direction: column;
}
#div_hard_key{
  flex: 1 0 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
#phone_layer{
  flex:0 0 48em;
  height: 48em;
  width: 100%;
  /*display: flex;*/
  /*flex-direction: column;*/
}
#phone_projection{
  flex: 1 0 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
#touchScreen{
  flex:1 0 0;
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  background-color: rgba(30,144,255,0.4);
}
</style>
