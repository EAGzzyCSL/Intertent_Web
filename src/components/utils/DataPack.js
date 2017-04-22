export default {
  pack (type, data) {
    return type + '|' + JSON.stringify(data)
  },
  type: {
    input: 'input',
    call: 'call',
    clipboard: 'clipboard'
  }
}
