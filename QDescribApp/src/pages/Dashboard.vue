<template>
    <q-page class="color flex justify-center ">


        <div class="flex column test justify-center">
        <div class="flex  row justify-between ">
            <div class="flex column items-center">
                <q-btn
                    round
                    color="white"
                    class="fabBtn"
                    icon="accessibility"
                    text-color="primary"
                />
                <p class="q-mt-xs text-white">Información</p>
            </div>

            <div class="flex column items-center">
        
                <q-btn
                    round
                    color="white"
                    class="fabBtn"
                    icon="contact_support"
                    text-color="primary"
                />
                <p  class="q-mt-xs text-white">Ayuda</p>
            </div>


        </div>
        <div class="flex  row justify-center ">
            
        <div class="flex column items-center">
        
        
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
 import Modal from '../components/Modal';

    export default {
        created(){
            document.addEventListener('deviceready',this.onDeviceReady,false);
        },
        components:{Modal},
        data(){
            return{
                position:{},
            }
        },
        methods:{
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
    .test2
        color red
    .color
        background $primary
    .test
        width 80%
        padding 10px
        // background red
        height 50vh
    .fabBtn
        $s=60px
        width $s
        height $s
        margin 0px 0px 0px 0px
        &__accident
            $s2=80px
            width $s2
            height $s2
            margin-top 0px
    .q-icon
        font-size 30px !important

</style>

