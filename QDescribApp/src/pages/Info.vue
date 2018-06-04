<template>
    <div class=" flex items-center column">
        <div class=" color flex justify-center full-width">
            <q-icon  color="white" name="face" size="80px"/>

        </div>
         <p class="q-my-lg">Nombre: {{user.firstName}}</p>
         <p class="q-mb-lg">Apellidos: {{user.lastName}}</p>
         <p class="q-mb-lg">Email: {{user.email}}</p>
         <p class="q-mb-lg">Edad: {{user.age}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
    export default {
        async created(){
            this.user=await this.$store.dispatch('getUser',this.$route.params._id);
            console.log(this.user);
            
        },
        data(){
            return{
                user:{}

            }
        },
        computed:{
            ...mapGetters([
                'getFirstname','getLastname',
                'getEmail','getAge'
                ])
        }



    }


</script>


<style lang="stylus">
@import '~variables'
    .color
        background $primary
        height 40vh
</style>
