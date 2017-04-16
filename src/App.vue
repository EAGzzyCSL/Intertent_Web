<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
}
html,body{
  height: 100%;
  margin: 0;
}
#app{
  height: 100%;
  width: 100%;
}
/*scrollBar*/

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(169, 169, 169, 0.2);
}

::-webkit-scrollbar-track {
    border-radius: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    border-radius: 8px;
    height: 8px;
    background: rgba(169, 169, 169, 0.8);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(169, 169, 169, 0.4);
}
</style>
