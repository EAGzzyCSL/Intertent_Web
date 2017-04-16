<template>
<div id="div_control">
  <!-- app bar -->
  <mu-appbar title="Title">
    <mu-icon-button icon="menu" slot="left" @click="ui_drawer_toggle"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="菜单 1"/>
      <mu-menu-item title="菜单 2"/>
      <mu-menu-item title="菜单 3"/>
      <mu-menu-item title="菜单 4"/>
      <mu-menu-item title="菜单 5"/>
    </mu-icon-menu>
  </mu-appbar>
  <!-- drawer -->
  <mu-drawer left :open="ui_state.drawer_open" @close="ui_drawer_toggle()">
    <mu-appbar title="Muse UI"/>
    <mu-list>
      <mu-list-item title="Menu Item 1"/>
      <mu-list-item title="Menu Item 2"/>
      <mu-list-item title="Menu Item 3"/>
      <mu-list-item @click.native="ui_drawer_toggle()" title="Close"/>
    </mu-list>
  </mu-drawer>
  <div id="div_main">
    <part-phone></part-phone>
    <part-info></part-info>
    <part-tab></part-tab>
  </div>

</div>
</template>
<script>
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
import PartPhone from './PartPhone'
import PartTab from './PartTab'
import PartInfo from './PartInfo'
export default {
  data () {
    return {
      ui_state: {
        drawer_open: false,
        tab_active_tab: 'tab1'
      }
    }
  },
  methods: {
    ui_drawer_toggle () {
      this.ui_state.drawer_open = !this.ui_state.drawer_open
    },
    ui_tab_handleTabChange (val) {
      this.ui_state.tab_active_tab = val
    }
  },
  components: {
    PartPhone,
    PartTab,
    PartInfo
  }
}
</script>
<style scoped>
#div_main{
  padding: 4em;
  display: flex;
  flex: 1 0 0;
}
#div_control{
  display:flex;
  flex-direction: column;
}
</style>
