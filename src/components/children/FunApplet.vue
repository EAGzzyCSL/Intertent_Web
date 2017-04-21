<template>
  <div id="div_applet">
    <applet-call></applet-call>
    <applet-blank></applet-blank>
    <applet-blank></applet-blank>
    <applet-blank></applet-blank>

  </div>
</template>
<script>
import AppletCall from './AppletCall'
import AppletBlank from './AppletBlank'
export default {
  data () {
    return {}
  },
  components: {
    AppletBlank,
    AppletCall
  }
}
</script>
<style scoped>

#div_applet{
  flex: 1 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#div_applet>div{
  width: 40%;
  height: 40%;
  margin:1em;
}
</style>
