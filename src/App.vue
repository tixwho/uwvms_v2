<template>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to='/homepage'>Homepage</router-link>
  </div>
  <router-view/>
   -->
  <div id="app">
    <!--main -->
    <a-layout id="demo">
      <!--sider -->
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <!--header -->
        <a-layout-header class="layout-header"> </a-layout-header>

        <div></div>

        <!--left menu-->
        <a-menu theme="dark" mode="inline" v-model="selected_keys">
          <a-menu-item
            ><router-link to="/profile">My Profile</router-link></a-menu-item
          >
          <a-menu-item
            ><router-link to="/homepage">Upcoming Events</router-link></a-menu-item
          >
          <a-menu-item
            ><router-link to="/construction">Volunteer Hours</router-link></a-menu-item
          >
          <a-menu-item
            ><router-link to="/construction">Calendar View</router-link></a-menu-item
          >
          <a-menu-item
            ><router-link to="/construction">Forms</router-link></a-menu-item
          >
          <a-menu-item
            ><router-link to="/construction">Show Project</router-link></a-menu-item
          >
        </a-menu>
      </a-layout-sider>
      <a-layout id="app">
        <!--content -->
        <a-layout-content :style="{ background: ffffff }" class="kibana">
          <keep-alive>
            <router-view keep-alive style="padding: 10px"></router-view>
          </keep-alive>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return{
      collapsed: false,
      selected_keys: [],
      ffffff: "ffffff"

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 800px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
