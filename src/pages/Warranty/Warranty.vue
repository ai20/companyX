<template>
 <div>
   <template>
           <v-card
             style="border-color: black;background: #c85e51"
             v-model="hover"
             :elevation="hover"
             class="mx-auto"
             height="350"
             max-width="350"
             v-on:mouseover="mouseover"
             v-on:mouseleave="mouseleave"
           >
             <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
               Open Delay (Mouse enter){{hover}}
             </v-card-text>
           </v-card>
   </template>
 </div>
</template>

<script>
export default {
  name: 'Warranty',
  data () {
    return { hover: 2
    }
  },
  methods: {
    mouseover: function () {
      this.hover = 16
    },
    mouseleave: function () {
      this.hover = 2
    }
  }
}
</script>

<style scoped>

</style>
