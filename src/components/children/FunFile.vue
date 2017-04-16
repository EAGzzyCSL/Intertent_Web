<template>
<div id="div_file">
  <div id="left_list">
    <mu-list>
      <mu-sub-header>最近聊天记录</mu-sub-header>
      <mu-list-item title="Mike Li">
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>历史聊天记录</mu-sub-header>
      <mu-list-item title="Gaia Zhou">
      </mu-list-item>
    </mu-list>
  </div>
  <div id="div_browser">
    <div id="">
    </div>
    <div id="">

    </div>
  </div>

</div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
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
}
</style>
