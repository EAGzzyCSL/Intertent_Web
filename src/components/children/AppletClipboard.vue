<template>
<div id="div_clipboard">
  <mu-paper :zDepth="1">
    <mu-text-field label="远程粘贴版" labelFloat hintText="粘贴版的文字"
     multiLine :rows="3" :rowsMax="6" v-model="clipboard_text" />
    <div id="actions">
      <mu-raised-button class="demo-raised-button" labelPosition="before"
       label="from Android" icon="call_received" @click="fromAndroid" />
      <mu-raised-button class="demo-raised-button" labelPosition="before"
       label="to Android" icon="call_made" @click="toAndroid" />
    </div>
  </mu-paper>
</div>
</template>
<script>
import ConnectionMan from '../utils/ConnectionMan.js'
import GlobalBus from '../utils/GlobalBus.js'
export default {
  data () {
    return {
      clipboard_text: ''
    }
  },
  created () {
    GlobalBus.on(GlobalBus.event.clipboard_setText, (event) => {
      this.clipboard_text = event.value
    })
  },
  methods: {
    toAndroid () {
      ConnectionMan.sendClipboard({
        action: 'set',
        value: this.clipboard_text
      })
    },
    fromAndroid () {
      ConnectionMan.sendClipboard({
        action: 'get',
        value: ''
      })
    }
  }
}
</script>
<style scoped>
#div_clipboard{
  display: flex;
}
#div_clipboard>div{
  display: flex;
  flex:1 0 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
