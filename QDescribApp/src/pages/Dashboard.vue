<template>
<q-page class=" flex justify-center">
    <div class="flex column test">
            
        <ButtonGroup :buttons="[buttons[0],buttons[1]]" v-if="getRole==='USER'"/>
        <ButtonGroup :buttons="[buttons[4],buttons[6]]" v-if="getRole==='USER'"/>
        <ButtonGroup :buttons="[buttons[0],buttons[2]]"  v-if="role==='AJUSTADOR'"/>
        <ButtonGroup :buttons="[buttons[3],buttons[4]]"  v-if="role==='AJUSTADOR'"/>
        <ButtonGroup :buttons="[buttons[5],buttons[6]]"  v-if="role==='AJUSTADOR'"/>
        <!-- <ButtonGroup :buttons="buttons[3]"  v-if="role==='USER'"/> -->
        
            <div v-if="role==='USER'"  class="flex  row justify-center ">
          
                <div  class="flex column items-center">
                    <q-btn
                        @click.native="handleAccident"
                        round
                        color="negative"
                        class="fabBtn fabBtn__accident"
                        icon="track_changes"
                        text-color="white"
                    />
                </div>

            </div>
    </div>

</q-page>
</template>

<script>
    import ButtonGroup from '../components/ButtonGroup';
    import { mapGetters } from 'vuex';

    export default {
        components:{ButtonGroup},
        created(){
            document.addEventListener('deviceready',this.onDeviceReady,false);
        },
        data(){
            return{
                role:this.$store.state.auth.user.role,
                position:{},
                buttons:[
                        {icon:'accessibility',route:`info`,text:'Info'},
                        {icon:'face',route:'info/ajustador',text:'Ajustador'},
                        {icon:'face',route:'users',text:'Usuarios'},
                        {icon:'search',route:'search',text:'Buscar'},
                        {icon:'phone_in_talk',route:'contacts',text:'Contactos'},
                        {icon:'timeline',route:'help',text:'Ayuda'}, 
                        {icon:'contact_support',route:'help',text:'Ayuda'}
                ]
            }
        },
        computed:{
            ...mapGetters(['getID','getRole'])
        },
        methods:{
            // handleRoute(e){
            //     this.$router.push(`dashboard/${e}`);
            // },
            onSuccess(position){
                console.log(position);
                this.position=position
            },
            onError(e){
                alert(e.message);
                console.log(e);
                
            },
            onDeviceReady(){
                navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
            },
            handleAccident(){
               const data={
                   data:{
                    user:this.$store.state.auth.user._id,
                    ajustador:this.$store.state.auth.user.ajustador,
                    position:this.position
                   },
                   $socket:this.$socket
               }
               this.$q.dialog({
                   title:'Warning',
                   message:'¿Esta usted seguro?',
                   ok:true,
                   cancel:true,
                   preventClose:true,
               })
               .then(()=>this.$store.dispatch('sendAlert',data))
            // .catch(()=>{});
            }
        },

    }
</script>

<style lang="stylus">
    @import '~variables';
    .color
        background $primary
    .test
        width 80%
        padding 10px
        //background red
        margin 10px
        height 100vh
        p
            font-size 14px
    

</style>

