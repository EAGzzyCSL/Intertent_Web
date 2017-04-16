<template>
  <div id="part_tab">
    <mu-paper class="demo-paper" :zDepth="1">
      <!-- tabs -->
      <mu-tabs :value="ui_state.tab_active_tab" @change="ui_tab_handleTabChange">
        <mu-tab value="tab1" title="远程输入"/>
        <mu-tab value="tab2" title="TAB TWO"/>
        <mu-tab value="tab3" title="TAB ACTIVE"/>
      </mu-tabs>
      <div v-if="ui_state.tab_active_tab === 'tab1'" class="tab_panel">
        <fun-input></fun-input>
      </div>
      <div v-if="ui_state.tab_active_tab === 'tab2'" class="tab_panel">
        <fun-file></fun-file>
      </div>
      <div v-if="ui_state.tab_active_tab === 'tab3'" class="tab_panel">
        <fun-chat></fun-chat>
      </div>
    </mu-paper>
  </div>

</template>
<script>
import FunChat from './FunChat'
import FunFile from './FunFile'
import FunInput from './FunInput'
export default {
  data () {
    return {
      ui_state: {
        tab_active_tab: 'tab1'
      }
    }
  },
  methods: {
    ui_tab_handleTabChange (val) {
      this.ui_state.tab_active_tab = val
    }
  },
  components: {
    FunChat,
    FunFile,
    FunInput
  }
}
</script>
<style scoped>
#part_tab{
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
}
#part_tab>div{
  flex: 1 0 0;
}
.mu-paper{
  display: flex;
  flex-direction: column;
}
.tab_panel{
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
}
</style>
