<template>
    <form @keydown.enter="handleSubmit" class="col-md-4 col-sm-6 col-xs-10">
        <q-field
          class="q-mb-md"
          icon="account_circle"
        >
          <q-input
            type="email"
            float-label="Email"
            v-model="user.email"

          >

          </q-input>
        </q-field>

        <q-field
          class="q-mb-md"
          icon="fingerprint"
        >
          <q-input
            type="password"
            float-label="Password"
            v-model="user.password"
          >

          </q-input>
        </q-field>
        
        <q-field class="">
            <q-btn @click.prevent="handleSubmit" :loading="isLoading" color="primary" class="full-width">Submit</q-btn>
        </q-field>

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
                this.$socket.emit('login','AAAAAA');
                this.$store.dispatch('auth/signin',{...user,$socket,$router});
                setTimeout(()=>this.isLoading=false,1000);
            }
        },
    }
</script>

<style lang="stylus">


</style>
