import GlobalBus from './GlobalBus.js'
import DataPack from './DataPack.js'
var ws = null
export default {
  connect (ipAndPort) {
    ws = new WebSocket('ws://' + ipAndPort + '/ws')
    ws.onopen = function () {
      GlobalBus.emit(GlobalBus.event.ws_con_open)
    }
    ws.onerror = function () {
      GlobalBus.emit(GlobalBus.event.ws_con_error)
    }
    ws.onclose = function () {
      GlobalBus.emit(GlobalBus.event.ws_con_close)
    }
    ws.onmessage = function () {
      console.log('message')
    }
  },
  sendInput (data) {
    ws.send(DataPack.pack(DataPack.type.input, data))
  }
}
