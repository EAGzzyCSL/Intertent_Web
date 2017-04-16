<template>
  <div id="div_input">
    <div id="input_box">
      <mu-text-field label="浮动标签" labelFloat hintText="简介" multiLine :rows="3" :rowsMax="6" v-model="inputText"/>
      <mu-icon-button icon="send" @click="sendText"/>
    </div>
    <div id="input_spec">
      <mu-raised-button class="demo-raised-button"
       label="光标左移" icon="keyboard_arrow_left"
       @click="cursorLeft"/>
      <mu-raised-button class="demo-raised-button"
       label="光标右移" icon="keyboard_arrow_right"
       @click="cursorRight"/>
      <mu-raised-button class="demo-raised-button"
       label="退格" icon="backspace"
       @click="actionBackspace"/>
      <mu-raised-button class="demo-raised-button"
       label="回车" icon="keyboard_return"
       @click="actionEnter"/>
    </div>
  </div>
</template>
<script>
// import GlobalEvent from '../utils/GlobalEvent.js'
import ConnectionMan from '../utils/ConnectionMan.js'
export default {
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    sendText () {
      ConnectionMan.sendInput({
        type: 'input',
        value: this.inputText
      })
      this.inputText = ''
    },
    cursorLeft () {
      ConnectionMan.sendInput({
        type: 'cursorLeft',
        value: ''
      })
    },
    cursorRight () {
      ConnectionMan.sendInput({
        type: 'cursorRight',
        value: ''
      })
    },
    actionBackspace () {
      ConnectionMan.sendInput({
        type: 'backspace',
        value: ''
      })
    },
    actionEnter () {
      ConnectionMan.sendInput({
        type: 'enter',
        value: ''
      })
    }
  }
}
</script>
<style scoped>
#div_input{
  display: flex;
  flex:1 0 0;
  flex-direction: column;
  align-items: center;

}
#input_box{
  margin-top: 3em;
  display: flex;
  align-items: center;
}
#input_spec{

}

</style>
