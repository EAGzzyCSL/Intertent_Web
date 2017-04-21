<template>
  <div id="div_wraper">
    <mu-paper :zDepth="1">
      <div id="div_call">
        <mu-auto-complete hintText="18899996666" labelFloat label="输入电话号码点击以拨号" :dataSource="phone_his" v-model="phone_number"/>
        <mu-icon-button icon="call" @click="phoneCall"/>
      </div>
    </mu-paper>
  </div>
</template>
<script>
import ConnectionMan from '../utils/ConnectionMan.js'
export default {
  data () {
    return {
      phone_number: '',
      phone_his: []
    }
  },
  methods: {
    phoneCall () {
      ConnectionMan.sendCall({
        phone_number: this.phone_number
      })
    }
  }
}
</script>
<style scoped>
#div_wraper{
  display: flex;

}
#div_wraper>div{
  flex:1 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#div_call{

}
</style>
