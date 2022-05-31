<template>
  <div>
    <button>{{btnTxt}}</button>
  </div>
</template>

<script>
export default {
  name: 'BtnComp',
  props:{
    btnTxt: String,
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/vars';

  button{
    font-size: 10px;
    font-weight: bolder;
    color: white;
    padding: 15px 20px;
    border: 0;
    border-radius: 50px;
    background-color: $red;
  }
</style>