<template>
  <div>
    <!--<q-splitter
      v-model="splitterModel"
      style="height: 250px"
    >-->
    <q-splitter
      v-model="splitterModel"
      style="border-top: 1px solid rgb(217, 221, 233);"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
          style="height: 800px"
        >
          <q-tab name="Special Selection" label="Special Selection" />
          <q-tab name="current-stock" icon="mail" label="current-stock" />
          <q-tab name="future-stock" icon="alarm" label="future-stock" />
          <q-tab name="all-stock" icon="movie" label="all-stock" />
          <q-tab name="great-on-gas" icon="movie" label="great-on-gas" />
          <q-tab name="2016-or-newer" icon="movie" label="2016-or-newer" />
          <q-tab name="luxury" icon="movie" label="Luxury" />
          <q-tab name="4x4" icon="movie" label="4x4" />
          <q-tab name="good-value" icon="movie" label="good-value" />
          <q-tab name="under-10k" icon="movie" label="under-10k" />
          <q-tab name="under-20k" icon="movie" label="under-20k" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="current-stock">
          <current-stock ></current-stock>
          </q-tab-panel>

          <q-tab-panel name="future-stock">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="all-stock">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="great-on-gas">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="2016-or-newer">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="luxury">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="4X4">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="good-value">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="under-10k">
            <div></div>
          </q-tab-panel>

          <q-tab-panel name="under-20k">
            <div></div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import CurrentStock from './tabs/CurrentStock'

export default {
  name: 'VerticalTabs',
  components: { CurrentStock },
  data () {
    return {
      tab: 'current-stock',
      splitterModel: 20,
      drawerLeft: this.$q.screen.width > 700
    }
  }
}
</script>

<style scoped>
  >>>.q-splitter__panel.q-splitter__before{
    width: 20.5185%;
    height: 73vh;
    min-height: 200px;
    overflow: hidden;
    position: sticky;
    top: 10%;
  }
  .q-tab{
    border-bottom: 1px solid rgb(217, 221, 233);
  }
</style>
