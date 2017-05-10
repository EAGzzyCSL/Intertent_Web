<template>
<div id="div_wrap">
  <panel-control v-if="connected"></panel-control>
  <panel-connect v-else></panel-connect>
  <div id="div_snack">
    <mu-snackbar v-if="ui.snack_show" :message="ui.snack_msg" action="×"/>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import PanelConnect from './children/PanelConnect.vue'
import PanelControl from './children/PanelControl.vue'
Vue.use(MuseUI)
import GlobalBus from './utils/GlobalBus.js'
export default {
  data () {
    return {
      connected: true,
      ui: {
        snack_msg: '',
        snack_show: false,
        snack_timer: null
      }
    }
  },
  created () {
    GlobalBus.on(GlobalBus.event.ws_con_open, () => {
      this.showConnected()
    })
    GlobalBus.on(GlobalBus.event.ws_con_close, () => {
      console.log('connection close')
      this.showDisconnected()
    })
  },
  methods: {
    ui_show_snack (msg) {
      this.ui.snack_msg = msg
      if (this.ui.snack_timer) {
        clearTimeout(this.ui.snack_timer)
      }
      this.ui.snack_show = true
      this.ui.snack_timer = setTimeout(() => {
        this.ui.snack_show = false
      }, 2000)
    },
    showConnected () {
      this.ui_show_snack('连接成功')
      this.connected = true
    },
    showDisconnected () {
      this.ui_show_snack('连接已断开')
      this.connected = false
    }
  },
  components: {
    PanelControl,
    PanelConnect
  }
}
</script>
<style>
#div_wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
#div_wrap>div{
  height: 100%;
  width: 100%;
}
#div_snack{
  height:0;
  width: 0;
  flex: 0 0 0;
}
</style>
