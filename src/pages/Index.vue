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
        <q-carousel-slide :name="1" img-src="https://cdn.pixabay.com/photo/2016/11/22/20/10/adorable-1850465_960_720.jpg" />
        <q-carousel-slide :name="2" :img-src="img"  />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        <template v-slot:control>
          <q-carousel-control
           style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
          >

            <div  class="text-center" style="position: relative; right:334px;top:180px;">
              <h2>COMPANY X INNOVATION</h2>
            <p >The future of cars</p>
            <q-btn  outline class="q-pa-sm q-px-lg button"  label="Explore" />
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    <div class="row gutter items-start wrap justify-stretch content-center text-center">
      <q-img
        id="images"
        class="text-center content-center justify-center images col-md-4 border-right border-bottom"
        src='../assets/home/1.jpg'
      >
        <!--:src='"statics/assets/5.jpg"'-->
          <div class="absolute-full flex flex-center text-white content-center text-center">
            <h2> Company X Cares</h2>
            <p> Let us create a great car buying experience for you</p>
          </div>
        </q-img>
        <q-img
          class="col-md-4 border-right border-bottom"
          src='../assets/home/2.jpg'>
          <div class="absolute-full flex flex-center text-white content-center text-center">
            <h2> Company X Instant Quotes</h2>
            <p> Let us create financial freedom for you</p>
          </div>
        </q-img>

        <q-img
          id="images3"
          class="col-md-4 border-right border-bottom dream-img"
          src="../assets/home/3.jpg">
          <div class="absolute-full flex flex-center text-white content-center text-center">
            <h2> Fulfill Your Dreams</h2>
            <p> Let us help you drive off in your dream car</p>
          </div>
        </q-img>
      <div class="col-md-12" >
        <div class="row gutter items-start wrap justify-stretch content-center text-center" style="background-color: #F9F9F9;">
          <q-img class="col-md-4"
                 src="../assets/home/4.jpg">
          </q-img>
          <div class=" offset-md-2 col-md-4 heading-block text-left" >
            <h3>OUR CARS
                <br>
                YOUR DREAMS
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
      <div class="col-md-12">
        <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;">
          <div class=" offset-md-1 col-md-3 heading-block text-left" >
            <h3 style="font-size: 37px;">
              OUR CARS
              <br>
              Come Flawless
            </h3>
            <br>
            <br>
            <div class="col-md-2 offset-md-12 heading-block" >
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                We at Company X have a 360 approach to inspecting our vehicles.
                Every car in our inventory gets a thorough inspection.
                Our Vehicle will also go through a safety test to insure that our clients are safe.
                Rain, hail and all our vehicles are number 1 in reliability.
              </p>
            </div>
          </div>
          <q-img class="col-md-3"
                 src='../assets/home/5.png'>
          ></q-img>
          <div class=col-md-4 style="height: 660px">
            <div class="row gutter items-start wrap justify-stretch content-center text-center" >
              <div class=col-md-12>
                <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class="col-md-3 tec heading-block" >
                  <br>
                  <br>
                  <q-icon style="font-size: xx-large; padding-left: 0px" name="fab fa-searchengin" />
                </div>
                <div class="col-md-8 heading-block" >
                  <p style="line-height: 1.8;font-size: 17px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                    Lightning Fast inspections
                  </p>
                  <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                  Every car is inspected and made sure to be safe for the road. Your safety is our number one priority.
                  </p>
               </div>
                </div>
              </div>
              <div class=col-md-12>
                <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                  <div class="col-md-3 tec heading-block" >
                    <br>
                    <br>
                    <q-icon style="font-size: xx-large; padding-left: 0px" name="fas fa-wrench" />
                  </div>
                  <div class="col-md-8 heading-block" >
                    <p style="line-height: 1.8;font-size: 17px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                      Mechanically Sound
                    </p>
                    <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                      We Guarantee and stand behind out products
                    </p>
                  </div>
                </div>
              </div>
              <div class=col-md-12>
                <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                  <div class="col-md-3 tec heading-block" >
                    <br>
                    <br>
                    <q-icon style="font-size: xx-large; padding-left: 0px" name="fas fa-phone" />
                  </div>
                  <div class="col-md-8 heading-block" >
                    <p style="line-height: 1.8;font-size: 17px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                      Customers come first
                    </p>
                    <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                      we at Company X aim to be the best in the business and in order for us to do that we make sure our customers can reach
                      out to us for any issues
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div class="col-md-12" >
          <div class="row gutter items-start wrap justify-stretch content-center text-center" >
            <!--                img not free-->
            <q-img class="col-md-12"
                 src="https://thegenius.co/html/loanplus/preview/asset/img/slider-1.jpg">
            <div class="absolute-full flex-center text-white content-center text-center" >
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <p> Let us create financial freedom for you</p>
              <h2> Are you looking for a <br> car loan?</h2>
              <div class="col-md-12">
                <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                  <div class="offset-md-5 col-md-1">
              <q-btn color="green-6"   class="q-pa-sm q-px-lg button"  label="Apply" />
                  </div>
                  <div class="col-md-1">
              <q-btn  outline class="q-pa-sm q-px-lg button"  label="Contact" />
                  </div>
                </div>
              </div>
            </div>
          </q-img>
            <q-banner class="bg-primary text-white col-md-12" style="height:125px">
              <template v-slot:action>
                  <div class="col-md-2" offset-md-5>
                    <q-icon flat color="white"  style="font-size: xx-large;" name="far fa-clock" />
                    <span style="font-weight: 600;font-size: 18px;padding-left: 10px;">Quick & Easy Loan
                    <br>
                    Approvals
                    </span>
                  </div>
                  <div class=" col-md-2">
                    <q-icon flat color="white"  style="font-size: xx-large;" name="fas fa-user-friends" />
                    <span style="font-weight: 600;font-size: 18px;padding-left: 10px;">Quick & Easy Loan
                    <br>
                    Approvals
                    </span>
                  </div>
                  <div class=" col-md-2">
                    <q-icon flat color="white"  style="font-size: xx-large;" name="fas fa-camera-retro" />
                    <span style="font-weight: 600;font-size: 18px;padding-left: 10px;">Quick & Easy Loan
                    <br>
                    Approvals
                    </span>
                  </div>
                  <div class=" col-md-2">
                    <q-icon flat color="white"  style="font-size: xx-large;" name="fas fa-map-marker-alt" />
                    <span style="font-weight: 600;font-size: 18px;padding-left: 10px;">Quick & Easy Loan
                    <br>
                    Approvals
                    </span>
                  </div>
                <div class=" col-md-2">
                </div>
              </template>
            </q-banner>
          </div>
        </div>
        <div class="col-md-12" style="background-color: #F9F9F9;" >
          <div class="row gutter items-start wrap justify-stretch content-center text-center" >
            <div class="col-md-12" >
              <h2 style="font-weight: 700;font-size: 40px;color: black">Simple Loan Process</h2>
              <p style="line-height: 1.8; font-size: 15px; margin-bottom: 30px; font-family: 'Open Sans', sans-serif; color: rgb(85, 85, 85);">We have a seamless 4 step process</p>
            </div>
          <div class="offset-md-2 col-md-2">
            <div class="row gutter items-start wrap justify-stretch content-center text-center" >
              <div class="offset-md-2 col-md-12">
            <div class="circle ">
            <q-icon style="font-size: xx-large; padding-left: 0px"  name="far fa-clipboard" />
            </div>
              </div>
            </div>
            <br>
            <div class="col-md-12">
            <p style="line-height: 1.8;font-size: 17px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
              Choose a Car
            </p>
            <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
              We Guarantee and stand <br>behind out products
            </p>
            </div>
            <div class="col-md-12">
              <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class=" offset-md-2 col-md-2">
            <q-btn dense color="blue" round  class="q-ml-md">
              <q-badge color="red" floating>1</q-badge>
            </q-btn>
                </div>
                <div style="padding-top: 9px;width: 66%"  class="col-md-8">
                  <hr class="dash">
                </div>
              </div>
            </div>
          </div>
            <div class="col-md-2">
              <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class="offset-md-2 col-md-12">
                  <div class="circle " style="border-right-width: 13px">
                    <q-icon style="font-size: xx-large; padding-left: 0px;" name="far fa-clipboard" />
                  </div>
                  <br>
                </div>
                <div class="col-md-12">
              <p style="line-height: 1.8;font-size: 17px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                Provide Documents
              </p>
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                We Guarantee and stand<br> behind out products
              </p>
            </div>
                <div class="col-md-12">
                  <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                    <div style="padding-top: 9px;width: 10%" class="col-md-2">
                      <hr class="dash">
                    </div>
                    <div class="col-md-2">
                      <q-btn dense color="blue" round  class="q-ml-md">
                        <q-badge color="red" floating>2</q-badge>
                      </q-btn>
                    </div>
                    <div style="padding-top: 9px" class="col-md-8">
                      <hr class="dash">
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <div class="col-md-2">
              <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class="offset-md-2 col-md-12">
                  <div class="circle " style="border-right-width: 31px">
                    <q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" />
                  </div>
                  <br>
                </div>
                <div class="col-md-12">
              <p style="line-height: 1.8;font-size: 17px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                Approved Loan
              </p>
              <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                We Guarantee and stand<br> behind out products
              </p>
                </div>
                <div class="col-md-12">
                  <div class="row gutter items-start wrap justify-stretch content-center text-center rowpad" >
                    <div style="padding-top: 9px;" class="col-md-2">
                      <hr class="dash">
                    </div>
                    <div class="col-md-2">
                      <q-btn dense color="blue" round  class="q-ml-md">
                        <q-badge color="red" floating>3</q-badge>
                      </q-btn>
                    </div>
                    <div style="padding-top: 9px" class="col-md-8">
                      <hr class="dash">
                    </div>
                  </div>
                </div>
            </div>
          </div>
            <div class="col-md-2">
              <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class="offset-md-2 col-md-12">
                  <div class="circle bg-blue-grey-2" >
                    <q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" />
                  </div>
                  <br>
                </div>
                <div class="col-md-12">
                <p style="line-height: 1.8;font-size: 17px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                  Get your Money
                </p>
                <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                  We Guarantee and stand<br> behind out products
                </p>
              </div>
              <div class="col-md-12">
                <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                  <div style="padding-top: 9px" class="col-md-2">
                    <hr class="dash">
                  </div>
                  <div class="col-md-2">
                    <q-btn dense color="blue" round  class="q-ml-md">
                      <q-badge color="red" floating>4</q-badge>
                    </q-btn>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <q-img class="col-md-12"
            src="https://thegenius.co/html/loanplus/preview/asset/img/get-bg.jpg">
              <div class="absolute-full flex-center text-white content-center text-center" >
                <p style="padding-top: 20px">Get free consultations</p>
                <h4>Checking your loan options does not affect<br>
                  your credit score</h4>
              </div>
            </q-img>
            <div class="col-md-12" style="background: white">
              <br>
              <br>
              <br>
              <br>
              <br>
              <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <div class="card-space offset-md-3 col-md-2">
                  <q-card class="my-card  text-black" >
                    <div class="fit row wrap justify-start items-start content-start">
                      <div class="col-md-3 full-height bg-blue-grey-1" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="card-space col-md-2">
                  <q-card class="my-card  text-black" >
                    <div class="fit row wrap justify-start items-start content-start">
                      <!--                    <div class="col-md-3" >gg<br>ee</div>-->
                      <div class="col-md-3 full-height bg-blue-grey-1" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px;height: 35px !important;" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="card-space col-md-2">
                  <q-card class="my-card  text-black" >
                    <div class="fit row wrap justify-start items-start content-start">
                      <!--                    <div class="col-md-3" >gg<br>ee</div>-->
                      <div class="col-md-3 full-height bg-blue-grey-1" style="height: 100% !important" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px;height: 33px!important;" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="card-space offset-md-3 col-md-2">
                  <q-card class="my-card  text-black" style="padding-bottom: 0!important;">
                    <div class="fit row wrap justify-start items-start content-start">
                      <!--                    <div class="col-md-3" >gg<br>ee</div>-->
                      <div class="col-md-3 full-height bg-blue-grey-1" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="card-space col-md-2">
                  <q-card class="my-card  text-black" >
                    <div class="fit row wrap justify-start items-start content-start">
                      <div class="col-md-3 full-height bg-blue-grey-1" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
                <div class="card-space col-md-2">
                  <q-card class="my-card  text-black" >
                    <div class="fit row wrap justify-start items-start content-start">
                      <div class="col-md-3 full-height bg-blue-grey-1" ><br><br><br><q-icon style="font-size: xx-large; padding-left: 0px" name="far fa-clipboard" /></div>
                      <div class="col-md-9 full-height">
                        <p style=" padding-top:15px;font-size: 1.25rem;margin-bottom: 0px;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold">Excellent Credit</p>
                        <p style="font-size: 0.9rem;line-height: 2rem;letter-spacing: 0.0125em;font-weight: bold;margin-bottom: 0px;" >Zero Down Minimum</p>
                        <p style="font-size: 0.9rem;line-height: 1.2rem;letter-spacing: 0.0125em;font-weight: bold" >With Excellent credit you can buy a loy of enchilladas</p>
                      </div>
                    </div>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12" >
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      <q-img class="col-md-12"
             src="http://reisen.themerex.net/wp-content/uploads/2016/09/slider1_1.jpg">
        <div class="absolute-full flex-center text-white content-center text-center" >
          <br>
          <br>
          <br>
          <p> Let us give you a peace of mind </p>
          <h5 style="margin-bottom: 0;margin-top: 0"> Company X WARRANTY </h5>
          <h2> Are you looking for<br>  long term protection?</h2>
          <div class="col-md-12">
            <div class="row gutter items-start wrap justify-stretch content-center text-center" >
              <div class="offset-md-5 col-md-1">
                <q-btn color="green-6"   class="q-pa-sm q-px-lg button"  label="Apply" />
              </div>
              <div class="col-md-1">
                <q-btn  outline class="q-pa-sm q-px-lg button"  label="Contact" />
              </div>
            </div>
          </div>
        </div>
        <!--:src='"statics/assets/bg1.png"'-->
      </q-img>
        <div class="col-md-12">
          <div class="row gutter items-start wrap justify-stretch content-center text-center" >
            <div class="col-md-4" style="background: #e2e3e4">
            <div class="row gutter items-start wrap justify-stretch content-center text-center" >
              <div class="col-md-7" style="background-image:url(http://reisen.themerex.net/wp-content/uploads/2016/09/banner-3.jpg);background-repeat:repeat;height: 261px"></div>
              <div class="col-md-5">
                <h3 style="margin: 1.12em 0 0.37em;text-align: center;font-size: 2em;font-weight: 700;text-transform: none;">ZUM BASIC</h3>
                <P style="font-family: inherit;font-size: 100%;font-style: inherit;font-weight: inherit;line-height: inherit;border: 0;outline: 0;-webkit-font-smoothing: antialiased;-ms-word-wrap: break-word;word-wrap: break-word;">The act of inspecting or testing the condition of car subsystems and servicing</P>
                <q-btn unelevated rounded color="primary" label="Unelevated Rounded" style="font-size: 11px" />
              </div>
            </div>
            </div>
        <div class="col-md-4" style="background: rgb(246, 247, 249);">
          <div class="row gutter items-start wrap justify-stretch content-center text-center"  >
        <div class="col-md-7" style="background-image: url(http://reisen.themerex.net/wp-content/uploads/2016/09/banner-2.jpg);background-repeat: repeat;height: 261px">
        </div>
            <div class="col-md-5">
              <h3 style="margin: 1.12em 0 0.37em;text-align: center;font-size: 2em;font-weight: 700;text-transform: none;">ZUM PLUS</h3>
              <P style="font-family: inherit;font-size: 100%;font-style: inherit;font-weight: inherit;line-height: inherit;border: 0;outline: 0;-webkit-font-smoothing: antialiased;-ms-word-wrap: break-word;word-wrap: break-word;">The act of inspecting or testing the condition of car subsystems and servicing</P>
              <q-btn unelevated rounded color="primary" label="Unelevated Rounded" style="font-size: 11px" />
            </div>
          </div>
          </div>
            <div class="col-md-4" style="background: #e2e3e4">
              <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-bottom: 0!important;"  >
                <div class="col-md-7" style="background-image: url(http://reisen.themerex.net/wp-content/uploads/2016/09/banner-1.jpg);background-repeat: repeat;height: 261px">
                </div>
                <div class="col-md-5">
                  <h3 style="margin: 1.12em 0 0.37em;text-align: center;font-size: 2em;font-weight: 700;text-transform: none;">ZUM CARE</h3>
                  <P style="font-family: inherit;font-size: 100%;font-style: inherit;font-weight: inherit;line-height: inherit;border: 0;outline: 0;-webkit-font-smoothing: antialiased;-ms-word-wrap: break-word;word-wrap: break-word;">The act of inspecting or testing the condition of car subsystems and servicing</P>
                  <q-btn unelevated rounded color="primary" label="Unelevated Rounded" style="font-size: 11px" />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
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
      <q-carousel-slide :name="1" img-src="https://lh3.googleusercontent.com/_ka9ZLd7OhQMIeQbR2ZUx4gt_lDmof3EoTIwvRFzMU87Xp_s9TSkewglx4kF7fUchWjrsosrdXOE_J3TpFvS-IGZy3NYwaPuHTqWfy3cxVV5CFk7ZUAWU275pJz0n112VRmz1tlgtxLKoeHYWRzb_InW778iADi97MBemgpz5-YBR9RDrveJSx2EGqCMq9QgQonLbDV7y7WHstz4gHavx-0swxkAYTLgbbSogksUDr189FoYcVBVk4t6YxarafSkLKuLTkqW7lNac40E65rFEq3IHEdtMdO-N8pdunbtKZqv5RMuZtHdcfRgbEYXYc1rtlSirMVwNRQjaWqn_LAVhSCe45chtM88SAqoTWo5XEqtJtXfHEk--T8h94CAIrrlMXPOXUbPT7cGTVoiVqPlWvCvXpbY4YWME3iVnCY0jyus1Q-K_uTgHmzKwpfwp5QMKy2DM6KkoIccpHLD2BjIPcO27vWqg_0xvpDsFoW9dAKbZrjBduT2KyOCLUxF1p5PgYsNwCJru0xymb0EmvHQIK3yyHGezF_J8-_w96t08ROK6e4DSJ1WJ_lgV3wzSvRhdc38Xqp1EnOP_pytvkFw6wzu7KqVrR0RkO_U5t8jVpcJ9iaUgwL3VMV8p-YEN2syyrYfClxqi1gMrJnYsLhRtVthG90o6BEJnpL6JN1jXTMDQI3_RrozcQ=w937-h528-no"/>
      <q-carousel-slide :name="2" :img-src="img"  />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="top-left"
          class="q-gutter-xs"
          style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
        >
          <!--            :offset="[370, 180]"-->
          <div  class="text-center" style="position: relative; right:334px;top:180px;">
            <h2>COMPANY X INNOVATION</h2>
            <p >The future of cars</p>
            <q-btn  outline class="q-pa-sm q-px-lg button"  label="Explore" />
          </div>
          <!-- <q-btn
             push round dense color="orange" text-color="black" icon="arrow_left"
             @click="$refs.carousel.previous()"
           />
           <q-btn
             push round dense color="orange" text-color="black" icon="arrow_right"
             @click="$refs.carousel.next()"
           />-->
        </q-carousel-control>
      </template>
    </q-carousel>
    </div>
<!--  </q-page>-->
</template>

<style scoped>
  >>>#images > div:nth-child(1),>>>#images3 > div:nth-child(1){
    padding-bottom: 66.8%!important;
  }
  .q-carousel {
    height: 926px;
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

</style>

<script>
export default {
  name: 'PageIndex',
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
