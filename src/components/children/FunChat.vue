<template>
  <div id="div_chat">
    <div id="chat_list">
      <div class="side" v-for="side in chatHis" v-bind:class="{right:side.from===0}">
        <mu-paper class="demo-paper" circle :zDepth="1">
          <mu-icon v-if="side.from===0" value="android"/>
          <mu-icon v-else value="computer"/>
        </mu-paper>
        <div class="msgList" >
          <div v-for="msg in side.his">
            <template v-if="msg.msgType===0">
              <p>
                {{msg.value}}
              </p>
            </template>
            <template v-else-if="msg.msgType===1">
              <img v-bind:src="'/fl?file=' + msg.value" />
            </template>
            <template v-else-if="msg.msgType===2">
              <a v-bind:href="link + '/fl?file=' + msg.value" download="hello">xiazai</a>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div id="chat_input">
      <mu-icon-button icon="sentiment_satisfied" type="file"/>
      <textarea id="textarea_input" v-model="textMsg"></textarea>
      <mu-icon-button icon="attach_file" @click="pick_file"/>
      <mu-icon-button icon="add_a_photo" @click="pick_image"/>
      <mu-icon-button icon="send" @click="sendText"/>
      <div id="div_input_file">
        <input type="file" ref="pick_file" />
        <input type="file" ref="pick_image"/>
      </div>
    </div>
  </div>
</template>
<script>
import ConnectionMan from '../utils/ConnectionMan.js'
import GlobalBus from '../utils/GlobalBus.js'
export default {
  data () {
    return {
      textMsg: '',
      chatHis: [],
      node: {
        chatList: null
      },
      link: ''
    }
  },
  created () {
    GlobalBus.on(GlobalBus.event.msg, (msg) => {
      this.insertAndroidMsg(msg)
    })
    GlobalBus.on(GlobalBus.event.all_msg_his, (msg) => {
      this.initMsgList(msg)
    })
    this.link = 'http://' + ConnectionMan.getAddress()
  },
  mounted () {
    this.node.chatList = this.$el.querySelector('#chat_list')
    this.scrollToBottom()
  },
  methods: {
    pick_image () {
      this.$refs.pick_image.click()
    },
    pick_file () {
      this.$refs.pick_file.click()
    },
    sendText () {
      let msg = {
        time: Date.now(),
        msgType: 0,
        value: this.textMsg,
        sourceType: 0
      }
      ConnectionMan.sendMsg(msg)
      this.insertPcMsg(msg)
    },
    insertPcMsg (msg) {
      // pc:0 android: 1
      if (this.chatHis.length === 0 ||
        this.chatHis[this.chatHis.length - 1].from === 1
      ) {
        this.chatHis.push({
          from: 0,
          his: []
        })
      }
      this.textMsg = ''
      this.chatHis[this.chatHis.length - 1].his.push(msg)
      this.scrollToBottom()
    },
    insertAndroidMsg (msg) {
      if (this.chatHis.length === 0 ||
        this.chatHis[this.chatHis.length - 1].from === 0
      ) {
        this.chatHis.push({
          from: 1,
          his: []
        })
      }
      this.chatHis[this.chatHis.length - 1].his.push(msg)
      this.scrollToBottom()
    },
    initMsgList (list) {
      console.log(list)
      let listInUi = []
      if (list.length > 0) {
        let preSourceType = list[0].sourceType
        listInUi.push({
          from: preSourceType,
          his: []
        })
        list.forEach(function (item) {
          if (item.sourceType !== preSourceType) {
            preSourceType = item.sourceType
            listInUi.push({
              from: preSourceType,
              his: []
            })
          }
          listInUi[listInUi.length - 1].his.push(item)
        })
      }
      this.chatHis = listInUi
    },
    scrollToBottom () {
      setTimeout(() => {
        this.node.chatList.scrollTop = this.node.chatList.scrollHeight
      }, 5)
    }
  }
}

</script>
<style lang="scss" scoped>
#div_chat{
  display: flex;
  flex-direction: column;
  flex:1 0 0;
  padding: 1em;
}
#chat_list{
  // display: flex;
  // flex-direction: column;
  flex: 1 0 0;
  overflow: auto;
}
.side{
  display: flex;
  // border: solid 1px pink;
  padding:0.5em;
  .mu-paper{
    height: 3em;
    width: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
  }
  &.right{
    flex-direction: row-reverse;
    .mu-paper{
      margin-left: 1em;
    }
  }
  .msgList{
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    div{
      p{
        margin: 0;
        padding: 1em;
        background-color: lightgray;
      }
      margin-bottom: 1em;

    }
  }

}
#chat_input{
  background-color: #f0f0f0;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1em;
  i{
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
}


</style>
