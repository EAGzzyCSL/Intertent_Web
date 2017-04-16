<template>
  <div id="div_chat">
    <div id="chat_list">
      <div class="side" v-for="side in chatHis" v-bind:class="{right:side.from==='pc'}">
        <mu-paper class="demo-paper" circle :zDepth="1">
          <mu-icon v-if="side.from==='phone'" value="android"/>
          <mu-icon v-else value="computer"/>
        </mu-paper>
        <div class="msgList" >
          <div v-if="msg.type==='text'" v-for="msg in side.his">
            <p>
              {{msg.value}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="chat_input">
      <mu-icon-button icon="sentiment_satisfied" type="file"/>
      <textarea id="textarea_input"></textarea>
      <mu-icon-button icon="attach_file" @click="pick_file"/>
      <mu-icon-button icon="add_a_photo" @click="pick_image"/>
      <mu-icon-button icon="send"/>
      <div id="div_input_file">
        <input type="file" ref="pick_file" />
        <input type="file" ref="pick_image"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chatHis: [
        {
          from: 'phone',
          his: [
            {
              type: 'text',
              value: 'hello world'
            },
            {
              type: 'text',
              value: 'hello world'
            }
          ]
        },
        {
          from: 'pc',
          his: [
            {
              type: 'text',
              value: 'lalala'
            },
            {
              type: 'text',
              value: 'hello world'
            }
          ]
        }
      ]
    }
  },
  methods: {
    pick_image () {
      this.$refs.pick_image.click()
    },
    pick_file () {
      this.$refs.pick_file.click()
    }
  }
}

</script>
<style scoped>
#div_chat{
  display: flex;
  flex-direction: column;
  flex:1 0 0;
  padding: 1em;
}
#chat_list{
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
}
.side{
  display: flex;
  border: solid 1px pink;
  padding:0.5em;
}
.side>.mu-paper{
  height: 3em;
  width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;

}
.side.right{
  flex-direction: row-reverse;
}
.side.right>.mu-paper{
  margin-left: 1em;
}
.msgList{
  display: flex;
  flex-direction: column;
  border: 1px solid black;

}
#chat_input{
  background-color: #f0f0f0;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1em;
}
#chat_input>i{
  margin: 0 0.2em;
}
#textarea_input{
  background-color: green;
  height: 5.5em;
  outline: none;
  border: none;
  word-wrap: break-word;
  align-self: center;
  flex: 1 0 0;
  margin: 0 0.5em;
  border-radius: 0.3em;
  background-color: white;
  box-shadow: 1px 1px 5px #ccc;
  resize: none;
  line-height: 1.5em;
  /* overflow: auto; */
  padding: 0.5em;
}
#div_input_file{
  display: none;
}
</style>
