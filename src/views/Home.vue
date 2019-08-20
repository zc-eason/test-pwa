<!--
 * @Description: 
 * @Date: 2019-08-20 14:50:42
 * @Author: zhengshaowen
 * @LastEditors: zhengshaowen
 * @LastEditTime: 2019-08-20 17:07:58
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>test</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
