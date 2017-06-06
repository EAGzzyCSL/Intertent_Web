<template>
<div id="div_file">
  <div id="left_list">
    <!-- <mu-list>
      <mu-sub-header>最近聊天记录</mu-sub-header>
      <mu-list-item title="Mike Li">
      </mu-list-item>
    </mu-list>
    <mu-divider/> -->
    <mu-list>
      <mu-sub-header>书签</mu-sub-header>
      <mu-list-item title="下载">
      </mu-list-item>
    </mu-list>
  </div>
  <div id="div_browser">
    <div class="one_file" v-for="file in files" @click="">
      <div v-if="file.dir" @click="open(file.name)">
        <mu-icon  value="folder"/>
        <span class="file_name">{{file.name}}</span>
      </div>
      <a v-else download  v-bind:href="link + '/fl?file=' + currentPath + '/' + file.name">
        <mu-icon  value="insert_drive_file"/>
        <span class="file_name">{{file.name}}</span>
      </a>
    </div>
  </div>

</div>
</template>
<script>
import GlobalBus from '../utils/GlobalBus.js'
import ConnectionMan from '../utils/ConnectionMan.js'

export default {
  data () {
    return {
      files: [],
      currentPath: '/storage/emulated/0',
      link: ''
    }
  },
  methods: {
    open (path) {
      this.currentPath = this.currentPath + '/' + path
      ConnectionMan.sendGetFileList({
        path: this.currentPath
      })
      // console.log(path)
    }
  },
  created () {
    this.link = 'http://' + ConnectionMan.getAddress()
    ConnectionMan.sendGetFileList({
      path: this.currentPath
    })
    GlobalBus.on(GlobalBus.event.send_file_list, (msg) => {
      this.files = msg
      // console.log(msg)
    })
  }
}
</script>
<style lang="scss" scoped>
#div_file{
  flex: 1 0 0;
  display: flex;
}
#left_list{
  width: 18em;
  border-right: 1px solid black;
}
#div_browser{
  flex: 1 0 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  .one_file{
    height: 7em;
    width: 5em;
    margin: 1em;
    flex: 0 0 5em;
    div,a{
      height: 100%;
      width: 100%;
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
    }
  }
  .file_name{

  }
}

</style>
