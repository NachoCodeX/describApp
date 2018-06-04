<template>
  <q-layout view="lHh Lpr lFf">
  
    <q-layout-header>
      <q-toolbar
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="handleBack"
          aria-label="Menu"
        >
          <q-icon name="keyboard_arrow_left" />
        </q-btn>

        <q-toolbar-title>
          DescribApp
          <!-- {{getFirstname}} {{getLastname}} -->
          <div slot="subtitle">{{getFirstname}} {{getLastname}}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <!-- <q-layout-drawer
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
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <q-tabs inverted class="fixed-bottom">
        <q-route-tab to="/dashboard" slot="title" name="tab-1" icon="account_circle"/>
        <q-route-tab :count="getAccidents.length" to="/notifications" slot="title" name="tab-2" icon="message"/>
        <!-- <q-tab slot="title" name="tab-3" icon="offline_bolt"/> -->
        <q-tab @click.native="logout" slot="title" name="tab-4" icon="power_settings_new"/>
      </q-tabs>
    </q-layout-footer>

  </q-layout>
</template>

<script>
 import {mapGetters} from 'vuex';

export default {

  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
      ,countAccidents:0
    }
  },
  methods: {
    handleBack(){
      this.$router.push('/dashboard');
    },
    logout(){
      const data={
        $socket:this.$socket,
        $router:this.$router,
        _id:this.$store.state.auth.user._id
      }
      this.$store.dispatch('auth/logout',data);
    },
      
  },
  computed:{
    ...mapGetters(['getAccidents','getFirstname','getLastname'])
  },
  sockets:{
    testing(data){
      console.log("TESTING EMIT SPECIFIC CLIENT");
      console.log(data);
      
    }
  }
}
</script>

<style>
</style>
