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
    >
      <q-carousel-slide :name="1" img-src="https://lh3.googleusercontent.com/S553BirPn_OIBHP5wrs55PCkdvAC9Jqh9E9hOQm-sqZFn3o5FFfuiH5LP_OidBs4rqF0wv0OWsV3ACxo7ECIoFGgkmIUWyiiRGOkI3hUje-x_HoyvkZm8KvRiPBCt0q4BQNomYUyPgiON1_Za9HbaRLX5afH6rMSh5-9IGbPin6BHUAsyEYo7REXKLziJUnURsN87_8z7SFePYuuA62CI5BRz7WgYlWRNmQMJPL02ypwOAX-bKOZCjKyH20XWFnVG5WPLIfktYHCNw7Wc8nSbYmyPFTLj7DvcSgb4_Td7h_XFLvZ17BiN5-aNuZBlwUNHC4bf_pREtZuj2tyAnLEc5s6RNlop_nsDd-zjUQAdEPX8qfXRnr6rkZgXe2HOYyb_MHf9GcnXqfCxIMoIwuS7XN2ww5FdzVNjH9lKXxTGOZzeotA0qgxJYOteUUn4yeVbFsdikN-wCEluk1tyLVhieYG3zbk_tPfmCYGL8ro5v_6TwsLYFd0Bcm2HtjbtZFMmRejx_Qnm0we92Xqs6tifbgpWeTmCzvil-orw2WVi9RfNOzpJzD-pHW7SjluwonUILWMdUondvcaXYjFVzGD5Prwzni8ahlQJUhxGqimGjsFBnumHbHxCmQi3Urw6GcCN7nWt396w3gHJ57noeVjZ8gUol9O4LnkDVIVG2Jx-Fig4PpDI6j0Bxi1K34Y6_EB-6z8UJ2fEmTIOEs39LWdQL74NyTKWrGdl6uy8N9VVLrqKL0=w1170-h781-no" />
      <q-carousel-slide :name="2" :img-src="img"  />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="top"
          class="q-gutter-xl"
          style="background: rgba(0,0,0,0.80);width: 100%;height:100%;margin:0;"
        >
          <div class="row gutter items-start wrap justify-stretch content-center text-center q-pa-lg">
          <div  class="text-center col-md-4 offset-md-2" >
            <h2>Get a Instant offer<br> in minutes</h2>
            <p >let us do all the work. Just sit back and relax</p>
          </div>
          <div  class="text-center q-pa-md col-md-4" style=" background:white;max-width: 400px;width:100%;max-height: 275px;height:100%;top:10%">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md row"
            >
              <div class="col-md-12">
                <div style="color:gray;">
                Enter your Plate number
                <br> to get an Offer
                </div>
                <q-btn-toggle
                  v-model="model"
                  class="my-custom-toggle"
                  no-caps
                  rounded
                  unelevated
                  toggle-color="primary"
                  color="white"
                  text-color="primary"
                  :options="[
          {label: 'PLATE', value: 'one'},
          {label: 'VIN', value: 'two'}
        ]"
                />
              </div>
              <q-input
                class="col-md-8"
                filled
                v-model="name"
                label="LICENSE PLATE"
                hint="Name and surname"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                class="col-md-3"
                filled
                type="number"
                v-model="age"
                label="STATE"
                lazy-rules
                :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
              />
              <div class="col-md-12">
                <q-btn label="Submit" type="submit" @click="carousel = true" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </div>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="row gutter items-start wrap justify-stretch content-center text-center">
      <q-img
        id="images"
        class="text-center content-center justify-center images col-md-4 border-right border-bottom"
        src='https://mommybunch.com/wp-content/uploads/2012/04/vehicle-woman-mechanic-reduced-stockunlimited1927511-1200x640.jpg'
      >
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Get Your Instant Offer</h2>
          <p> An instant Quote will be provided to you.</p>
        </div>
      </q-img>
      <q-img
        class="col-md-4 border-right border-bottom"
        src='https://www.omvic.on.ca/portal/Portals/0/images/OMVICBlog/handing%20over%20keys%202.jpg'>
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Trade Or Sell</h2>
          <p> We can pay you cash or use the credit towards a  vehicle puchase</p>
        </div>
      </q-img>
      <q-img
        id="images3"
        class="col-md-4 border-right border-bottom dream-img"
        src="../../assets/Get-Paid-Online-715x451.png">
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Time to get Paid</h2>
          <p> We will cut you a check so you can have some financial freedom</p>
        </div>
      </q-img>
      <div class="col-md-12" >
        <div class="row gutter items-start wrap justify-stretch content-center text-center" >
          <q-img class="col-md-4"
                 src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2016/05/how-to-get-the-best-deal-at-car-auction.jpg">
          </q-img>
          <div class=" offset-md-2 col-md-4 heading-block text-left" >
            <h3 style="font-size: 45px;">Don't be fooled
              <br>
              by the dealerships
            </h3>
            <br>
            <br>
            <div class="col-md-2 offset-md-10 heading-block" >
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                Company X strives to present the customer with the best car buying experience that we have to offer.
                With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
                Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
                can feel confident that we have their best interest, at Company X we care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" >
        <div class="row gutter items-start wrap justify-stretch content-center text-center" >
          <q-img class=" offset-md-1 col-md-3"
                 src="https://storybydata.com/wp-content/uploads/2019/01/Cutt-out-middle-man-Spanish-Tutor-Sites.jpg">
          </q-img>
          <div class=" offset-md-2 col-md-4 heading-block text-left" >
            <h3 style="font-size: 45px;">let's Cut the
              <br>
              middle man out
            </h3>
            <br>
            <br>
            <div class="col-md-2 offset-md-10 heading-block" >
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                Company X strives to present the customer with the best car buying experience that we have to offer.
                With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
                Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
                can feel confident that we have their best interest, at Company X we care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" >
        <div class="row gutter items-start wrap justify-stretch content-center text-center" >
          <q-img class=" offset-md-1 col-md-3"
                 src="http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/09/handshake.jpg">
          </q-img>
          <div class=" offset-md-2 col-md-4 heading-block text-left" >
            <h3 style="font-size: 45px;">let's Maximize
              <br>
              your profits
            </h3>
            <br>
            <br>
            <div class="col-md-2 offset-md-10 heading-block" >
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                Company X strives to present the customer with the best car buying experience that we have to offer.
                With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
                Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
                can feel confident that we have their best interest, at Company X we care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
<!--      <CarouselDialogue :carousel="carousel"></CarouselDialogue>-->
    </div>
  </div>
</template>

<style scoped>
  >>>#images > div:nth-child(1),>>>#images3 > div:nth-child(1){
    padding-bottom: 66.8%!important;
  }
  .q-carousel {
    height: 926px;
  }
  /*  >>> div.q-img.overflow-hidden.images.col-md-4.border-right.border-bottom > div:nth-child(1){
      padding-bottom: 66.6667%!important;
    }*/
  /* .dream-img{
     padding-bottom: 66.6667%!important;
    }*/
  >>> .rowpad{
    padding-bottom: 14.6667%!important
  }
  h2{
    text-transform: none;
    letter-spacing: 0;
    line-height: 1;
    font-size: 48px;
    line-height: 1.3;
    margin-bottom: 30px;
    font-weight: 700;
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
  .my-card{
    width: 100%;
    max-width: 240px;
    height: 160px;
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
  .q-panel > div {
    height: 100%;
    width: 100%;
  }
  .q-carousel {
    background-color: inherit;
    /*height: 100%;*/
    height:400px;
  }
  .my-custom-toggle {
    border: 1px solid #027be3
  }

</style>

<script>
import {
  QInput
} from 'quasar'

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import Store from '../../store/CarVin/carVin'
// import CarouselDialogue from '../../components/Dialogue/Carousel'

export default {
  name: 'SellOrTrade',
  components: {
    QInput
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      slide: 1,
      img: '../assets/four.jpg',
      autoplay: false,
      show: false,
      name: null,
      age: null,
      accept: false,
      model: 'one',
      carousel: false
    }
  },
  methods: {
    onSubmit () {
      /* if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      } */
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
      // eslint-disable-next-line no-console
      console.log(this.getVehicle('zzzzz'))
    },
    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    },
    getVehicle (data) {
      Store.dispatch('setCarInfo', data)
      // return Store.getters.getCarInfo
      return setTimeout(function () { this.slowGetter() }.bind(this), 100)
    },
    slowGetter (data) {
      // console.log('get')
      // console.log(Store)
      // eslint-disable-next-line no-console
      console.log(Store.getters.getCarInfo)
      return Store.getters.getCarInfo
    }
  },
  computed: {
    ...mapState,
    ...mapMutations([
      'setCarInfo',
      'getCarInfo'
    ]),
    ...mapActions([
      'setCarInfo',
      'getCarInfo'
    ]),
    ...mapGetters([
      'getCarInfo'
    ])
  }
}
</script>

<style scoped>

</style>
