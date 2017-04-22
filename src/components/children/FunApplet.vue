<template>
  <div id="div_applet">
    <applet-call></applet-call>
    <applet-clipboard></applet-clipboard>
    <applet-blank></applet-blank>
    <applet-blank></applet-blank>

  </div>
</template>
<script>
import AppletCall from './AppletCall'
import AppletBlank from './AppletBlank'
import AppletClipboard from './AppletClipboard'
export default {
  data () {
    return {}
  },
  components: {
    AppletBlank,
    AppletCall,
    AppletClipboard
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
  width: 45%;
  height: 45%;
  margin:0 1em 1em;
}
</style>
