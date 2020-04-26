<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <HelloWorld msg />
    <menu id="anchor">
      <div class="box">
        <a href="#button" @click="setActive(0)" :class="{active: this.activeIndex == 0}">按钮</a>
        <a href="#button-nav" @click="setActive(1)" :class="{active: this.activeIndex == 1}">按钮导航</a>
        <a href="#goods-list" @click="setActive(2)" :class="{active: this.activeIndex == 2}">商品列表</a>
        <a href="#cell" @click="setActive(3)" :class="{active: this.activeIndex == 3}">单元格</a>
        <a href="#tabs" @click="setActive(4)" :class="{active: this.activeIndex == 4}">tab标签页</a>
        <a href="#selectRdio" @click="setActive(5)" :class="{active: this.activeIndex == 5}">上拉菜单</a>
        <a href="#steps" @click="setActive(6)" :class="{active: this.activeIndex == 6}">步骤条</a>
      </div>
    </menu>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  name: 'App',
  data() {
    return {
      activeIndex: 0
    };
  },
  mounted () {
  },
  methods: {
    setActive(ai) {
      this.activeIndex = ai;
    }
  }
}
</script>

<style lang="scss" src="@/style/scss/app.scss"></style>

<style lang="scss">
body {
  margin: 0;
}
menu#anchor {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #355873;
  color: #fff;
  z-index: 999;
  box-sizing: border-box;
  font-size: 15px;
  margin: 0;
  padding: 0;
  height: 38px;
  overflow-x: auto;
  overflow-y: hidden;
}
#anchor .box {
  /* width: 485px; */
}
#anchor a {
  display: inline-block;
  padding: 8px;
  color: rgba(255, 255, 255, 0.5);
}

#anchor a.active,
#anchor a:hover {
  color: rgba(255, 255, 255, 1);
}
header#header {
  position: fixed;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  top: 0;
  left: 0;
  padding-left: 120px;
  width: 100%;
  box-sizing: border-box;
  background-color: #355873;
  color: #fff;
  z-index: 1001;
}

header#header .logo {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 15px;
  line-height: 20px;
  background-color: #203e55;
  width: 130px;
  height: 60px;
}

header#header .logo .txt1 {
  padding-top: 10px;
}

header#header .logo .txt2 {
  font-size: 13px;
}

header#header .tab {
  color: rgba(255, 255, 255, 0.5);
}

header#header .tab a {
  color: rgba(255, 255, 255, 0.5);
  padding: 0 20px;
}

header#header .tab a:hover,
header#header .tab a.active {
  color: rgba(255, 255, 255, 1);
}
article {
  padding-top: 40px;
}
</style>
