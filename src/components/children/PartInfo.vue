<template>
  <div id="div_info">
    <mu-paper class="demo-paper" :zDepth="1">

    </mu-paper>
    <mu-paper class="demo-paper" :zDepth="1">

    </mu-paper>
    <mu-paper class="demo-paper" :zDepth="1">

    </mu-paper>
    <mu-paper class="demo-paper" :zDepth="1">

    </mu-paper>
    <mu-paper class="demo-paper" :zDepth="1">

    </mu-paper>
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
#div_info{
  width: 0em;
  background-color: lightblue;
  margin: 0 3em;
  display: flex;
  flex-direction: column;
}
#div_info>div{
  /*margin-bottom: 1em;*/
  flex: 1 0 0;
}

</style>
