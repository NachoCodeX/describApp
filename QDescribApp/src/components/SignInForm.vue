<template>
    <form @keydown.enter="handleSubmit" class="col-md-4 col-sm-6 col-xs-10">
        <q-field
          icon-color="white"
          class="q-mb-lg"
          icon="face"
        >
          <q-input
            dark
            color="white"
            float-label="Email"
            type="email"
            v-model="user.email"
          >

          </q-input>
        </q-field>

        <q-field
          icon-color="white"
          class="q-mb-lg"
          icon="fingerprint"
        >
          <q-input
            dark
            float-label="Password"
            color="white"
            type="password"
            v-model="user.password"
          >

          </q-input>
        </q-field>
        
        <div class="full-width flex items-end justify-end">
            <q-btn text-color="secondary"  @click.prevent="handleSubmit" :loading="isLoading" color="white">Login</q-btn>
        </div>

      </form>
</template>

<script>
    export default {
        data(){
            return{
                isLoading:false,
                user:{
                    email:'',
                    password:''
                }
            }   
        },
        methods:{
            handleSubmit(){
                this.isLoading=true;
                const {user,$router,$socket}=this;
                this.$store.dispatch('auth/signin',{...user,$socket,$router});
                setTimeout(()=>this.isLoading=false,1000);
            }
        },
    }
</script>

<style lang="stylus">
</style>
