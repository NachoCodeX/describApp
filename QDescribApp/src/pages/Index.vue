<template>
  <q-page  class="color flex flex-center column-inline">
    <SignInForm/>
  </q-page>
</template>

<script>
import SignInForm from '../components/SignInForm';
export default {
  components:{SignInForm},
  name: 'PageIndex',

}
</script>

<style lang="stylus">
  @import '~variables';
  .color
    background $primary

</style>
