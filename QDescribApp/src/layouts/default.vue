<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn> -->

        <q-toolbar-title>
          DescribApp
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="logout">
          <q-item-side icon="power_settings_new" />
          <q-item-main label="Logout" sublabel="" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs inverted class="fixed-bottom">
        <q-tab slot="title" name="tab-1" icon="account_circle"/>
        <q-tab slot="title" name="tab-2" icon="message"/>
        <q-tab @click.native="logout" slot="title" name="tab-3" icon="power_settings_new"/>
      </q-tabs>
    </q-layout-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('auth/logout',{$router:this.$router});
    }
  }
}
</script>

<style>
</style>
