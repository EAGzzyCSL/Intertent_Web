<template>
<div id="div_connect">
  <mu-paper class="demo-paper" :zDepth="1">
    <div id="div_input">
      <mu-auto-complete hintText="x.x.x.x:x" labelFloat label="输入ip与端口" :dataSource="url_his" v-model="ip_and_port"/>
      <mu-icon-button icon="call_made" @click="beginConnect"/>
    </div>
    <div class="div_qr">
      <div id="div_or">
        <hr />
        <span id="span_or">OR</span>
        <hr />
      </div>
      <img id="img_qr" v-bind:src="qr_code" />
      <p>
        关于二维码的<a href="#">更多</a>
      </p>
    </div>
    <mu-flat-button label="获取安卓app" icon="android" primary @click="getAndroidApp"/>
  </mu-paper>
</div>
</template>
<script>
// import GlobalBus from '../utils/GlobalBus.js'
import ConnectionMan from '../utils/ConnectionMan.js'
export default {
  data () {
    return {
      qr_code: '',
      url_his: [],
      ip_and_port: ''
    }
  },
  created () {
    this.url_his = JSON.parse(localStorage.getItem('url_his')) || []
    this.getQrCode()
  },
  methods: {
    beginConnect () {
      this.saveHis()
      ConnectionMan.connect(this.ip_and_port)
    },
    check () {
    },
    saveHis () {
      let arr = JSON.parse(localStorage.getItem('url_his')) || []
      if (arr.indexOf(this.ip_and_port) === -1) {
        arr.push(this.ip_and_port)
      }
      localStorage.setItem('url_his', JSON.stringify(arr))
    },
    getAndroidApp () {
      window.location.replace('/WebAccess/Intertent-debug.apk')
    },
    getQrCode () {
      fetch('http://localhost:1994/getQrCode', {
        methods: 'get',
        mode: 'cors'
      }).then(res => {
        res.text().then(text => {
          this.qr_code = text
        })
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
#div_connect {
  /*border: 1px solid black;*/
  height: 36em;
  width: 30em;
}

#div_connect>div {
  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}
#div_input{
  display: flex;
  align-items: center;
}
#div_or {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#div_or>hr {
  flex: 1 0 0;
  box-sizing: content-box;
  border: none;
  height: 1px;
  width: 5em;
  background-color: gray;
}

#span_or {
  margin: 0 0.5em;
}

#img_qr {
  height: 16em;
  width: 16em;
}
.div_qr{
  display: none;
}
</style>
