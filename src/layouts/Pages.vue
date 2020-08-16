<template>
  <div>
    <navbar />
    <h1>Pages</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'pages-layout',

  components: {
    navbar: () => import('../components/Navbar')
  }
}
</script>
