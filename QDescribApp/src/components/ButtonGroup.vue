<template>
<div class="q-mb-lg flex  row justify-between ">
    <div v-for="button in buttons" :key="button.icon" class="flex column items-center">
        <q-btn
            round
            color="white"
            class="fabBtn"
            :icon="button.icon"
            text-color="primary"
            @click="handleRoute(button.route)"
        />
        <p class="q-mt-xs text-primary">{{button.text}}</p>
    </div>
    <slot/>
</div>
    

</template>


<script>
import {mapGetters} from 'vuex';
    export default {
        props:['buttons'],
        methods:{
            handleRoute(e){
                console.log(e);
                if(e==='info'){  
                    this.$router.push(`dashboard/${e}/${this.getID}`);
                    return;
                }else if(e==='info/ajustador'){
                    console.log(this.getAjustadorID);
                    
                    this.$router.push(`dashboard/info/${this.getAjustadorID}`);
                    return;
                }
                this.$router.push(`dashboard/${e}`);
            },
        },
        computed:{
            ...mapGetters(['getID','getAjustadorID'])
        }

    }
</script>

<style lang="stylus">
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
