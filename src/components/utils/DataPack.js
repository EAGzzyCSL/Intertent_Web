export default {
  pack (type, data) {
    return type + '|' + JSON.stringify(data)
  },
  type: {
    input: 'input',
    call: 'call',
    clipboard: 'clipboard',
    mouse: 'mouse',
    msg: 'msg',
    all_msg_his: 'all_msg_his',
    send_file_list: 'send_file_list',
    get_file_list: 'get_file_list'
  }
}
