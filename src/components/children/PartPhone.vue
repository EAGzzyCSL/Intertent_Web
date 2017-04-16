<template>
  <div id="part_phone">
    <video src="http://localhost/test/video.mp4" controls></video>
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
export default {
  data () {
    return {}
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
video{
  width: 100%;
}
#div_hard_key{
  flex: 1 0 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
</style>
