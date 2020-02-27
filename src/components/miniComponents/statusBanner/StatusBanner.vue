<template>
  <div :class='this.status.availability.class[0]' :style='this.status.availability.style'>
    <span :class='this.status.availability.class[1]'> {{this.status.availability.msg[0]}} </span>
    <span :class='this.status.availability.class[2]'> {{this.status.availability.msg[1]}} <strong> {{this.status.availability.msg[2]}} </strong></span>
  </div>
</template>

<script>
export default {
  name: 'StatusBanner',
  props: ['status']
}
</script>

<style scoped>

</style>
