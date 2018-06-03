<template>
    <q-modal v-model="opened">
        <h4>BASIC MODAL</h4>
        <q-btn
            color="primary"
            icon="send"
            @click="opened=false"
        />
    </q-modal>
</template>

<script>
    export default {
        data(){
            return{
                opened:true
            }
        }
    }
</script>
