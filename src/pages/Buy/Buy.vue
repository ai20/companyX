<template>
  <div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      navigation
      infinite
      ref="carousel"
      class="border-bottom"
      id="cover"
      height="400px"
    >
      <q-carousel-slide :name="1" :img-src="imgs[0]" />
      <template v-slot:control>
        <q-carousel-control
          position="top-left"
          class="q-gutter-xs"
          style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
        >
          <div  class="text-center" style="position: relative; left:190px;top:150px;width: 75%">
            <div class="q-pa-md  shadow-15 " style="    background: rgba(0, 0, 0, 0.5);height: 125px">
              <div class="q-gutter-md row q-py-md">
                <div class="col-md-2 col-sm-2">
                  <div class="button-font" >CONDITION</div>
                  <q-btn-toggle
                    v-model="model"
                    class="my-custom-toggle"
                    no-caps
                    unelevated
                    toggle-color="primary"
                    color="grey-3"
                    text-color="grey-6"
                    :options="[
          {label: 'Newer', value: 'newer'},
          {label: 'Used', value: 'used'}
        ]"
                  />
                </div>

                <div class="col-md-2 col-sm-2">
                  <div class="button-font" >MAKE</div>
                  <q-btn-dropdown style="width: 100%;" class="no-shadow" color="grey-3" text-color="grey-6" label="Dropdown Button">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Photos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Videos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Articles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>

                <div class="col-md-3 col-sm-3">
                  <div class="button-font" >MODEL</div>
                  <q-btn-dropdown style="width: 100%;" class="no-shadow" align="left" color="grey-3" text-color="grey-6"  label="Dropdown Button">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Photos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Videos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Articles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>

                <div class="col-md-2 col-sm-3">
                  <div class="button-font" >TYPE</div>
                  <q-btn-dropdown style="width: 100%;" class="no-shadow" align="left" color="grey-3" text-color="grey-6"  label="Dropdown Button">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Photos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Videos</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Articles</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>

                <div class="col-md-2 col-sm-2">
                  <div class="button-font " ><br></div>
                  <q-btn color="secondary" text-color="grey-1" class="q-pa-sm q-px-lg " size="13px" label="Search">
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    <vertical-tabs style="padding-top: 50px"></vertical-tabs>
  </div>
</template>

<script>

import VerticalTabs from '../../components/vertical_tabs/VerticalTabs'
export default {
  name: 'List',
  components: { VerticalTabs },
  data () {
    return {
      separator: 'vertical',
      slide: 1,
      imgs: [
        'http://themes.potenzaglobalsolutions.com/cardealer-wp/wp-content/uploads/2018/05/17.jpg'
      ],
      model: 'one',
      hover: ['no-shadow', 'no-shadow', 'no-shadow', 'no-shadow', 'no-shadow', 'no-shadow'],
      hiLight: [
        'color: black', 'color: black', 'color: black', 'color: black', 'color: black', 'color: black'
      ],
      fixed: false,
      dialog: false,
      maximizedToggle: true
    }
  },
  methods: {
    mouseover: function (num) {
      this.hover.splice(num, num + 1, 'shadow-15')
      this.hiLight.splice(num, num + 1, ' color: #31ccec')
    },
    mouseleave: function (num) {
      this.hover.splice(num, num + 1, 'no-shadow')
      this.hiLight.splice(num, num + 1, 'color: black')
      // this.hover.splice(num, num + 2, 'no-shadow')
      // this.hiLight.splice(num, num + 2, 'black')
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>

<style scoped>
  >>>#images > div:nth-child(1),>>>#images3 > div:nth-child(1){
    padding-bottom: 66.8%!important;
  }
  #dialogue-cover.q-carousel {
    height: 926px;
  }
  .dia-text{
    margin-bottom: 0px;
    margin-top: 0px;
    padding-left: 25px;
  }
  >>> .rowpad{
    padding-bottom: 14.6667%!important
  }

  .heading-block{
    margin-bottom: 50px;
  }
  .heading-block h3{
    margin-bottom: 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #333;
  }
  h3{
    font-size: 64px;
    line-height: 56px;
  }
  p{
    font-size: 18px;
    margin-bottom: 20px;
    font-family: 'Mukta Vaani', sans-serif;
  }
  .button{
    font-family: 'Mukta Vaani', sans-serif;
  }
  .border-right {
    border-right: 1px solid #dee2e6;
  }
  .border-bottom {
    border-bottom: 1px solid #dee2e6;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }
  .circle {
    background-color:#fff;
    border:1px solid #cfd8dc;
    height:60px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:60px;
    padding: 10px;
  }
  .dash {
    border:none;
    border-top:1px dashed #838383;
    color:#fff;
    background-color:#fff;
    height:1px;
    /*width:50%;*/
    width: 131%;
  }
  [data-v-4bc9d7de] div.row.gutter.items-start.wrap.justify-stretch.content-center.text-center > div:nth-child(3) > div:nth-child(1) {
    padding-bottom: 15.6667%!important;
  }
  .card-space{
    padding-top: 22px;
  }
  .card-sep{
    background: #000000 !important;
  }
  div > div.row.gutter.items-start.wrap.justify-stretch.content-center.text-center > div:nth-child(5) > div:nth-child(3) > div > div.q-img.overflow-hidden.col-md-12 > div.q-img__content.absolute-full > div {
    background: rgba(0, 0, 0, 0.85);
  }
  .q-table__card {
    box-shadow:none;
  }
  .highlights{
    width: 20%;
  }

  /********************************************/
  .greyish{
    color: #888;
  }
  .subtext{
    font-size: 13px;
    display: block;
    margin-top: 3px;
    color: #888;
  }
  .filter-p-pricing {
    right: 0;
    background: #5191c8;
    color: #FFF;
    padding: 19px 15px;
    z-index: 1;
    font-family: 'Mukta Vaani';
  }
  .filter-p-pricing:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: -14px;
    height: 100%;
    width: 32px;
    background-color: #5191c8;
    -moz-transform: skew(-23deg,0deg);
    -o-transform: skew(-23deg,0deg);
    -ms-transform: skew(-23deg,0deg);
    -webkit-transform: skew(-23deg,0deg);
    transform: skew(-23deg,0deg);
    z-index: -1;
  }
  .status{
    right: 0;
    background: #5191c8;
    color: #FFF;
    padding: 19px 15px;
    z-index: 1;
    font-family: 'Mukta Vaani';
  }
  .solid {
    border:none;
    border-top:1px solid #DDD;
    color:#fff;
    background-color:#fff;
    height:1px;
  }
  .q-carousel[data-v-f267f06a] {
    height: 300px;
  }
  .my-card{
    height: auto;
    width: 100%;
    max-width: 449px

  }
  .class-button{
    font-family: 'Mukta Vaani', sans-serif;
    font-size: 13px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #555;
    margin-bottom: 10px;
    cursor: pointer;
  }
  h2 {
    text-transform: none;
    letter-spacing: 0;
    line-height: 1;
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 30px;
    font-weight: 600;
  }
  #cover.q-carousel {
    height: 200px;
  }
  .card{
    padding-bottom: 50px;
  }
  .pointer {cursor: pointer;}

</style>
