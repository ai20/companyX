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
      <q-carousel-slide :name="1" img-src="https://jituchauhan.com/borrow/bootstrap-4/images/slider-5.jpg" />
      <q-carousel-slide :name="2" :img-src="img"  />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="top-left"
          class="q-gutter-xs"
          style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
        >
          <div  class="text-center" style="position: relative; right:334px;top:73px;">
            <h2 class="cover-font">Company X Loans for any situation.<br> We have 100% say</h2>
            <q-btn  outline class="q-pa-sm q-px-lg button"  label="Explore" />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 100px">
      <q-img
        id="images"
        class="text-center content-center justify-center images offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 border-right border-bottom form-exp q-pa-md"
        src='https://s3.envato.com/files/dbba2d24-29eb-45f3-bf66-3263c4ff6c2c/inline_image_preview.jpg'
      >
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Easy Form</h2>
          <p> Fill out a Company X easy form online</p>
        </div>
      </q-img>
      <div class="col-md-1 content-right text-right form-exp">
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
        <q-btn dense color="blue" round style="margin-right: -15px;" class="q-ml-md">
          <q-badge color="red" floating>1</q-badge>
        </q-btn>
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
      </div>
      <div class=" offset-md-1 col-md-4 heading-block text-left form-exp" >
        <h3>OUR CARS
          <br>
          YOUR DREAMS
        </h3>
        <br>
        <br>
        <div class="col-md-2 offset-md-10 heading-block" >
          <p style="line-height: 1.8;font-size: 15px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
            Company X strives to present the customer with the best car buying experience that we have to offer.
            With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
            Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
            can feel confident that we have their best interest, at Company X we care.
          </p>
        </div>
      </div>
      <div class="col-md-12"></div>
      <q-img
        class="offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 border-right border-bottom form-exp"
        src='https://i0.wp.com/www.dignited.com/wp-content/uploads/2018/10/forms.jpeg?resize=768%2C512&ssl=1'>
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Company X Instant Quotes</h2>
          <p> Let us create financial freedom for you</p>
        </div>
      </q-img>
      <div class="col-md-1 content-right text-right form-exp">
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
        <q-btn dense color="blue" round style="margin-right: -15px;" class="q-ml-md">
          <q-badge color="red" floating>2</q-badge>
        </q-btn>
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
      </div>
      <div class=" offset-md-1 col-md-4 heading-block text-left form-exp" >
        <h3>OUR CARS
          <br>
          YOUR DREAMS
        </h3>
        <br>
        <br>
        <div class="col-md-2 offset-md-10 heading-block" >
          <p style="line-height: 1.8;font-size: 15px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
            Company X strives to present the customer with the best car buying experience that we have to offer.
            With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
            Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
            can feel confident that we have their best interest, at Company X we care.
          </p>
        </div>
      </div>
      <q-img
        id="images3"
        class="offset-xl-1 offset-lg-1 offset-md-1 offset-sm-1 offset-xs-1 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 border-bottom dream-img form-exp"
        src="https://www.earljones.com/wp-content/uploads/driver_thumbs-up.jpg">
        <div class="absolute-full flex flex-center text-white content-center text-center">
          <h2> Fulfill Your Dreams</h2>
          <p> Let us help you drive off in your dream car</p>
        </div>
      </q-img>
      <div class="col-md-1 content-right text-right form-exp">
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
        <q-btn dense color="blue" round style="margin-right: -15px;" class="q-ml-md">
          <q-badge color="red" floating>3</q-badge>
        </q-btn>
        <hr style="width: 0; height: 100px;border: 1px dashed #838383;margin-right: 0px;" />
      </div>
      <div class=" offset-md-1 col-md-4 heading-block text-left form-exp" >
        <h3>OUR CARS
          <br>
          YOUR DREAMS
        </h3>
        <br>
        <br>
        <div class="col-md-2 offset-md-10 heading-block" >
          <p style="line-height: 1.8;font-size: 15px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
            Company X strives to present the customer with the best car buying experience that we have to offer.
            With Company Xs Flash service, Customer have the ability to not only get instant online quotes but
            Have a fast and seamless car buying experience. We inspect and service every vehicle so the consumer
            can feel confident that we have their best interest, at Company X we care.
          </p>
        </div>
      </div>
      <div class="col-md-12 border-right border-bottom">
      </div>
    </div>
    <div class="row gutter items-start wrap justify-stretch content-center text-center" >
    <div class="  col">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      navigation
      infinite
      ref="carousel"
      class="border-bottom col-md-12 "
      style="height: 900px;"
    >
      <q-carousel-slide :name="1" img-src="../../assets/loan/1.jpg" />
      <q-carousel-slide :name="2" :img-src="img"  />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <template v-slot:control>
        <q-carousel-control
          class="row gutter items-start wrap justify-stretch content-center text-center"
          style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
        >
          <div  class="text-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style="position: relative;bottom:25%;" >
            <h2 class="cover-font">Lets take back your Financial freedom.<br> Company X Is here to make your dream come true</h2>
            <q-btn  outline class="q-pa-sm q-px-lg button"  label="Try now" />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    </div>
    </div>
  </div>
</template>

<style scoped>
  >>>#images > div:nth-child(1),>>>#images3 > div:nth-child(1) {
    padding-bottom: 66.8% !important;
  }
  .q-carousel {
    height: 500px;
  }
  .cover-font{
    font-size:34px;
  }
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
    margin-top: 25px;
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
  .form-exp{
    margin-bottom: 60px;
  }

</style>

<script>
export default {
  name: 'Loan',
  data () {
    return {
      slide: 1,
      img: '../assets/four.jpg',
      autoplay: false,
      show: false
    }
  }
}
</script>
