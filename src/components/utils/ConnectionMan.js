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
    ws.onmessage = function (msg) {
      let json = JSON.parse(msg.data)
      switch (json.type) {
        case DataPack.type.clipboard : {
          GlobalBus.emit(GlobalBus.event.clipboard_setText, json.event)
          break
        }
        case DataPack.type.msg : {
          GlobalBus.emit(GlobalBus.event.msg, json.event)
          break
        }
        case DataPack.type.all_msg_his : {
          GlobalBus.emit(GlobalBus.event.all_msg_his, json.event)
          break
        }
      }
    }
  },
  disConnect () {
    ws.close()
  },
  sendInput (data) {
    ws.send(DataPack.pack(DataPack.type.input, data))
  },
  sendCall (data) {
    ws.send(DataPack.pack(DataPack.type.call, data))
  },
  sendClipboard (data) {
    ws.send(DataPack.pack(DataPack.type.clipboard, data))
  },
  sendMouse (data) {
    ws.send(DataPack.pack(DataPack.type.mouse, data))
  },
  sendMsg (data) {
    ws.send(DataPack.pack(DataPack.type.msg, data))
  }
}
