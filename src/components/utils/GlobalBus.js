import Vue from 'vue'
const bus = new Vue()
export default {
  event: {
    ws_con_open: 'ws_con_open',
    ws_con_error: 'ws_con_error',
    ws_con_close: 'ws_con_close',
    clipboard_setText: 'clipboard_setText',
    msg: 'msg',
    all_msg_his: 'all_msg_his'
  },
  on (name, data) {
    bus.$on(name, data)
  },
  emit (name, data) {
    bus.$emit(name, data)
  }
}
