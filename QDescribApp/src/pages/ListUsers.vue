<template>
    <q-page>
        <q-list highlight>
            <q-item  v-for="user in users" :key="user._id" :to="'/dashboard/info/'+user._id">
                <q-item-side>
                    <q-item-tile avatar>
                        <img src="../assets/boy-avatar.png" alt="">
                    </q-item-tile>
                </q-item-side>
                    <q-item-main :label="user.firstName+' '+user.lastName"/>
                    <q-item-side right>
                        <q-item-tile icon="done" color="primary">

                        </q-item-tile>
                    </q-item-side>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
import {mapGetters} from 'vuex';

    export default {
        async created(){
           this.users=await this.$store.dispatch('getUsers',this.getID);
           
        },
        data(){
            return{
                users:[]
            }
        },
        computed:{
            ...mapGetters(['getID'])
        }

    }    
</script>

<style lang="stylus">

</style>
