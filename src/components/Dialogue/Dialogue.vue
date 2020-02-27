<template>
<span>
   <q-dialog
     v-model="initialDialogue"
     persistent
     :maximized="maximizedToggle"
     transition-show="slide-up"
     transition-hide="slide-down"
   >
      <q-card class="">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup >
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div>
            <!--    <q-btn outline color="primary" label="Outline" />-->

            <q-carousel
              swipeable
              animated
              v-model="slide"
              :autoplay="autoplay"
              navigation
              infinite
              ref="carousel"
              class="border-bottom"
              id="dialogue-cover"
            >
              <!--<q-carousel-slide :name="1" img-src="https://cdn.pixabay.com/photo/2014/07/31/23/33/driving-407181_960_720.jpg" />-->
              <q-carousel-slide :name="1" img-src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/concept-cars/pb18-e-tron/1920x1080-desktop-concept-cars-pb18etron-4.jpg?downsize=1210px:*&imwidth=1210" />
              <q-carousel-slide :name="2" :img-src="img"  />
              <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
              <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
              <template v-slot:control>
                <q-carousel-control
                  style="background: rgba(0,0,0,0.35);width: 100%;height:100%;margin:0;"
                >
                  <div  class="text-left " style="position: relative; float: left">
                    <h2 class="dia-text">2016 FORD</h2>
                    <h2 class="dia-text">f150 SUPERCREW CAB</h2>
                    <p class="dia-text">XLT PICKUP 4D 6 1/2 ft</p>
                    <!--                    <q-btn  outline class="q-pa-sm q-px-lg button"  label="Explore" />-->
                  </div>
                  <div  class="text-center row" style="position: relative; float: right">
                    <div class=" offset-md-8 col-md-4" style="padding-bottom: 20px;padding-top: 20px;"><q-icon name="far fa-share-square" style="font-size: 21px" />Share</div>
                    <div><h6 style="height: 25px;padding-left: 0" class="dia-text col-md-4">$27,000</h6><div>50,000 miles</div></div>
                    <q-btn  outline class="q-pa-sm q-px-lg button col-md-3 offset-md-1"  label="Buy" />
                    <q-btn  outline class="q-pa-sm q-px-lg button col-md-3 offset-md-1"  label="Delivery" />
                  </div>
                  <!--            <div class="row gutter items-start wrap justify-stretch content-center text-center q-pa-lg">-->

                  <!--            <div class="column">
                  <div class="col">
                    One of three rows
                  </div>
                    <div  class="text-center  col-md-12  " >
                      <h2>COMPANY X INNOVATION</h2>
                      <p >The future of cars</p>
                      <q-btn  outline class="q-pa-sm q-px-lg button"  label="Explore" />
                  </div>
                  </div>-->

                  <!--            </div>-->
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
            <div class="row gutter items-start wrap justify-stretch content-center text-center">
              <q-img
                id="images"
                class="text-center content-center justify-center images col-md-4 border-right border-bottom"
                src='https://lh3.googleusercontent.com/FVAoaS7TFtuTjZfhkaqygL_xjYeHWD-9fBLKPLCycsBzp7AFb75opR3LG-WMGDOo5NCN50Zz5glD9EwGlRsGDw8K1FYLkkXOVE-iNwlwiDHM0ALuJNgGJ2gwgdVSp8bGSKrM3n2_6gkY5R8yPyOjwh2dkLmDjvVAXUieFMSvxYLf8C1s92-g6MdV-HTvdOfATQJXNgZ5VOGXYjEPjgvMozloSDEeipkXL24k8QJYmpQl0ATWCOLGP3Vsy-lW-VBty0cP3i7GtOHQdxUWoc9drBJ1uDnYmmqUO2QyWc4u4szIfE1hcsoqeyKy6y7VZ-2Fn9o5SL2JEY1rHgb3DSNmir1hJ74_U4GpUNeFpkIrpYJf_mkefwHEVyXpwAE9EebFc1rebvUTDI3SIeTHjJB-BEGN6bXU-ZkUB2FwS5eja1eZwAEpp1uMifUoJM6sZDHOGrmcv5MyuuWDDgd-ZuR25Q40j8UOJl9LudiEuhWAXSa8avnMDQlf_2nE4ZNI-3HcOK3wXxcrtj44lNauEd6zpgA8gM9T4VUMBEqyZv6GNAvNJVZuw8_bfKxftDeMizicO84sHyGxIJrObSNFZU490zwlBwlEvSH18FPXNNdKn28s93yZZvrlPXEd0qCQN8CJw_qT2V0FluQwSRPwvm5ad25G82-VsvbrTlq1wxSxwOfQYF1Hv5oPyA=w615-h920-no'
              >
                <!--:src='"statics/assets/5.jpg"'-->
                <div class="absolute-full flex flex-center text-white content-center text-center">
                  <h2> Try Before you Buy</h2>
                  <p>Not sure ? we can deliver the car to you</p>
                </div>
              </q-img>
              <!--<q-img
                  class="col-md-4 border-right border-bottom"
                  :src='"../assets/1.jpg"'
                ></q-img>-->
              <!--  <div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                  Default
                </div>-->
              <q-img
                class="col-md-4 border-right border-bottom"
                src='https://lh3.googleusercontent.com/Jb5zMpIJpifczRmkQt8nikEb6dfJP3SDYiIAbZEkVAhX8a6ljLrAPbE-xhEOt3o-xqNB8Q49Thqm_lbcgcUz9Cv8qqBwj8OyBAh-7G3lJZf503tlCV3XFtCXLox1WMi-DOGpG6U1578KpTUk-IIXsul76yhsb9VvZF3gFw0n6y2T8b2OeujkQWqfUEfF3P5cZhP-39IbQFf5C0Xpb8efDmQQFuCTeFtg-k-ZS9l2KYKo6uPXw-CEvGSzyysOg6uUJFWGOuO7dXs0XeI3VDJEeSjruND6W-SiRt0SO2cZ5uXiPiEs7HLKfYqsDOt__go3PAwe_HlXdd3hfptigo0MZdsmK1LBvyoSq8pnNArSU7WJh5NmDfFaRoiHy7xOnljea__3OR6C5WsPgD37E1Ibem-LaWg5KHNddT4H-g1onIM4s1PGy8yi4xaUNqbEJaXtlbREvsTaKD_Avodnh19YknxRyDFP4iBfc-MCsmKoV-rslsgJiuCGTu8VniF0uKiKagZSH2jmUENznftTVHxwp8hQGC_4z4_EGAG02h_eyHhnlvfFkL3l6i-OOSf2VMQ_UNwCBz6_92B-C9M997yFMeCuLhpGEZu9HDV5r0z9E3iKpRuPwa759uVyhFNdzKDkvMonNDbAJgE_RkoCS0VeEG29LisbwGzu6zUKBXAcLLvO47bIVaQvXg=w937-h626-no'>
                <!--:src='"statics/assets/MaxPixel.net-Transportation-Vehicle-Sedan-Car-Interior-2607626.jpg"'-->
                <div class="absolute-full flex flex-center text-white content-center text-center">
                  <h2> 24 hour decision</h2>
                  <p> Once we drop the vehicle off at you house, You have 24 hours to decide</p>
                </div>
              </q-img>
              <!--<div class="absolute-bottom text-subtitle1 text-center q-pa-xs">
                Default
              </div>-->
              <q-img
                id="images3"
                class="col-md-4 border-right border-bottom dream-img"
                src="https://lh3.googleusercontent.com/6o9E-cdXuoyX1rhVnwgMvYQ9f2Ej0ykRTGdtPmfMkY1lt_h_TiQkTPdO2ibxyWQ8wpfiPOqZzVco3HN6x0ih7oAwvySYVlfCODb7jshKhl8QHaEJ4nDrBir9Wa-TBHcIeFhq5owbe4zr77UaZ7PXkcV3R6lbA17hTKOcVRyvXieUCGeXRYuGj0xuNqhXUqW-k9Aofmliqplt9qmP005VKMWUYo0XT1sgcqfBdDsoABWkUc5kJAiFR7Q53D8Bs7ycO_abqY2U_RVeVZbP50DyniCC_2eh_KqiC0Tx1J1OhcR7G1-N9VtzM54xhv_sOEIFk_uGMBL8yDEHLM4_Zn2wfiGsN0bB3xPrPNVu8wn9lGwdyRzYFWnFnfO_tlex0vQ2YS56CKxZCbtiZskaD8Lu2o0c23Cscg7IX42tVugA7yo3_3s5e596i2J1brMFUUCK4hWzfDHKRUNU52bVsjGIbREK3eKRiq7F5Hv1ulZVae2XPlfZZfGS1cpZh2DPasTxVA8xX-i5Eq47jCsy-PV_9JZdOT0ns3gHSvh-9kM6K4awGBdfBJ9Nj4lyYQT9ul7evLw8izM8Vgslq3IKZb7ICFVVh_o4mnnsJE43eEw-IYn4lgkj_uSCoQTUtW3D8eqjOTesK2rp5yq-CUR23EroZS67HYE-tOKrsrIhWm4Fq2RoVCMGe9JIMw=w937-h527-no">
                <!--:src='"statics/assets/MaxPixel.net-Sports-Car-V10-Audi-Business-Woman-R8-829498 .jpg"'-->
                <div class="absolute-full flex flex-center text-white content-center text-center">
                  <h2> Keep or return</h2>
                  <p> If you like it you keep it, if not then we will come get the car no charge</p>
                </div>
              </q-img>
              <div class="col-md-12" >
                <div class="row gutter items-start wrap justify-stretch content-center text-center" style="background-color: #F9F9F9;">
                  <div class="col-md-6">
                    <h2>HIGHLIGHTS</h2>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="row">
                          <q-img class="highlights col-md-6 offset-md-2" src="https://media.carfax.com//svg/icons/2019_one_owner_logo.svg" ></q-img>
                          <div class="col-md-6 offset-md-1 ">
                            <h6 style="margin: 0">ONE CAR OWNER</h6>
                            <p class="text-caption">NO ACCIDENTS</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="row">
                          <q-img class="col-md-6 offset-md-2" style="width: 10%;" src="https://media.carfax.com/img/vhr/ico_noAccident.gif"></q-img>
                          <div class="col-md-6  ">
                            <p>NO ACCIDENTS</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <p>For The full report. Please click here</p>
                        <q-img style="width: 40%" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1IiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMzc5IDcxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgNzFoMzc4LjhWMEgweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03LjEgMEMzLjIgMCAwIDMuMSAwIDd2NTdjMCAzLjggMy4yIDcgNy4xIDdoMzUxLjRjMy45IDAgNy4xLTMuMSA3LjEtN1Y3YzAtMy44LTMuMi03LTcuMS03SDcuMXoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMyA2NFY3YzAtMi4yIDEuOC0zLjkgNC4xLTMuOWgzNTEuNGMyLjIgMCA0LjEgMS44IDQuMSAzLjl2NTdjMCAyLjItMS44IDMuOS00LjEgMy45SDcuMUM0LjggNjcuOSAzIDY2LjIgMyA2NHpNNy4xIDBDMy4yIDAgMCAzLjEgMCA3djU3YzAgMy44IDMuMiA3IDcuMSA3aDM1MS40YzMuOSAwIDcuMS0zLjEgNy4xLTdWN2MwLTMuOC0zLjItNy03LjEtN0g3LjF6IiBmaWxsPSIjMDAwIi8+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iIzAwMCIgbWFzaz0idXJsKCNiKSIgZD0iTTY1LjYgNjUuMWg1Ni43VjUuOTAxSDY1LjZ6bTU5LjEgMGg1Ni43VjUuOTAxaC01Ni43em01OS42IDBIMjQxVjUuOTAxaC01Ni43em01OS41IDBoNTYuN1Y1LjkwMWgtNTYuN3oiLz48cGF0aCBkPSJNMzU4LjEgNjMuNWgtOC41bC0xMS45LTE3IDEzLjctMTkuMmgtMTMuNmwtMi40IDMuOGMtMS41IDIuNS0zLjIgNS4xLTQuMiA3LjItLjktMi4xLTIuNi00LjctNC4xLTcuMmwtMi40LTMuOGgtMTMuOWwxMy43IDE5LjUtMTIuMiAxNi43aC03LjhWNy4zaDUzLjZ2NTYuMnoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjMDAwIiBtYXNrPSJ1cmwoI2IpIiBkPSJNNiA2NS4xaDU2LjdWNS45MDFINnoiLz48cGF0aCBkPSJNMzUuNyA1Ni4zYy0xMS44IDAtMTgtOC43LTE4LTIwLjQgMC0xMi43IDcuNS0yMC40IDE4LjEtMjAuNCA5LjcgMCAxMy42IDQuMiAxNi4zIDExLjZsLTEwIDMuOWMtMS40LTMuNy0yLjgtNi02LjQtNi00LjYgMC02LjYgNC42LTYuNiAxMC45IDAgNi4xIDEuOSAxMC45IDYuNyAxMC45IDMuNCAwIDQuOS0xLjkgNy4xLTUuNmw5LjMgNC45Yy0yLjcgNS4xLTcuMSAxMC4yLTE2LjUgMTAuMm03OC4zLTEuMUw5OS42IDE1LjZIODguNUw3NC4xIDU1LjJIODZsMi4xLTdIMTAwbDIuMSA3SDExNHpNOTcuMyAzOS41aC02LjZsLjctMi42YzEuNC01IDItNy4yIDIuNS05LjkuNSAyLjcgMS4xIDQuOCAyLjUgOS45bC45IDIuNnptNzMgMTUuOWwtNy45LTE1LjFjNC40LTIgNy4xLTUuNiA3LjEtMTEuNiAwLTkuNC02LjItMTIuOS0xNS40LTEyLjloLTE3Ljd2MzkuNmgxMC44VjQyaDQuNGw2LjUgMTMuNGgxMi4yek0xNTguNiAyOWMwIDIuOC0xLjQgNC40LTUgNC40aC02LjV2LTguN2g2LjZjMy42IDAgNC45IDEuOCA0LjkgNC4zem00OS4yLTMuOXY1LjVoMTIuNHY5LjNoLTEyLjR2MTUuNWgtMTAuOVYxNS44aDMxLjN2OS4zem04My45IDMwLjRsLTE0LjQtMzkuNmgtMTEuMWwtMTQuMyAzOS42aDExLjhsMi4xLTdoMTEuOWwyLjEgN2gxMS45ek0yNzUgMzkuOGgtNi42bC43LTIuNmMxLjQtNSAyLTcuMiAyLjUtOS45LjUgMi43IDEuMSA0LjggMi41IDkuOWwuOSAyLjZ6IiBmaWxsPSIjRkZGIiBtYXNrPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTM1OC4xIDYzLjVoLTguNWwtMTEuOS0xNyAxMy43LTE5LjJoLTEzLjZsLTIuNCAzLjhjLTEuNSAyLjUtMy4yIDUuMS00LjIgNy4yLS45LTIuMS0yLjYtNC43LTQuMS03LjJsLTIuNC0zLjhoLTEzLjlsMTMuNyAxOS41LTEyLjIgMTYuN2gtNy44VjcuM2g1My42djU2LjJ6bS0zMi40IDBsMS0xLjRjMS42LTIuNSAzLjItNS4yIDQuMi03LjMgMS4xIDIuMSAyLjYgNC44IDQuMSA3LjNsLjkgMS40aC0xMC4yek0zMDIuOSA2NWg1Ni43VjUuOGgtNTYuN1Y2NXoiIGZpbGw9IiMwMDAiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMzczLjIgNS4yYy45IDAgMS42IDAgMS42LTEgMC0uOC0uNy0uOS0xLjQtLjloLTEuM3YxLjloMS4xem0tMi0yLjhoMi40YzEuNCAwIDIuMS42IDIuMSAxLjggMCAxLjEtLjcgMS42LTEuNyAxLjdsMS44IDIuN2gtMUwzNzMuMSA2aC0xdjIuNmgtMVYyLjRoLjF6bTYuNiAzLjFjMC0yLjUtMi00LjUtNC40LTQuNS0yLjUgMC00LjQgMi00LjQgNC41czIgNC41IDQuNCA0LjVjMi40IDAgNC40LTIgNC40LTQuNXpNMzczLjQuMWMzIDAgNS40IDIuNCA1LjQgNS40IDAgMy0yLjQgNS40LTUuNCA1LjQtMyAwLTUuNC0yLjQtNS40LTUuNCAwLTMgMi40LTUuNCA1LjQtNS40eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjwvZz48L3N2Zz4="></q-img>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h2>VEHICLE DETAILS</h2>
                    <div class=" offset-md-2 col-md-4 heading-block text-left" >
                      <div class="q-pa-md">
                        <Table
                          ref="table">
                        </Table>
                      </div>
                    </div>
                  </div>
              <div class="col-md-12" >
                <div class="row gutter items-start wrap justify-stretch content-center text-center" style="background-color: #F9F9F9;">
                  <div class=" offset-md-3 col-md-1" style="padding-left: 20px;color: rgb(24, 53, 88);font-size: 14px;font-weight: 700;line-height: 1;" >
                    <br>
                    <br>
                    VEHICLE
                    <br>
                    PACKAGES
                  </div>
                  <div class=" col-md-8" >
                     <div class="q-pa-md" >
                      <q-list>
                        <q-item>
                          <q-item-section class="col-md-6"  style="    color: #757575;align-items: flex-start;">
                            <q-item-label><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Bright Side Roof Rails</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6"  style="color: #757575;align-items: flex-start;">
                            <q-item-label caption class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
<!--                            <q-icon name="star" color="yellow" />-->
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"> <q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </div>
                  </div>
                  <div class="offset-md-3 col-md-8">
                     <q-separator spaced inset />
                  </div>
                  <div class="col-md-1">
                  </div>
                  <div class=" offset-md-3 col-md-1" style="padding-left: 20px;color: rgb(24, 53, 88);font-size: 14px;font-weight: 700;line-height: 1;" >
                    <br>
                    <br>
                    EXTRA
                    <br>
                    FEATURES
                  </div>
                    <div class=" col-md-8" >
                     <div class="q-pa-md" >
                      <q-list>
                        <q-item>
                          <q-item-section class="col-md-6"  style="    color: #757575;align-items: flex-start;">
                            <q-item-label><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Bright Side Roof Rails</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6"  style="color: #757575;align-items: flex-start;">
                            <q-item-label caption class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                            <!--                            <q-icon name="star" color="yellow" />-->
                          </q-item-section>
                        </q-item>
                        <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"> <q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                         <q-item>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet"><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 4-Way Driver Lumbar Adjust</q-item-label>
                          </q-item-section>
                          <q-item-section class="col-md-6" style="color: #757575;align-items: flex-start;">
                            <q-item-label class="bullet" caption><q-btn class="gt-xs" size="12px" flat dense round icon="done" /> Power 8-Way Driver Seat / Manual Passenger Seat</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;">
                   <div class="col-md-12">
                    <div class="q-px-lg q-pb-md">
                      <Timeline></Timeline>
                    </div>
                   </div>
                </div>
                <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;background-color: rgb(249, 249, 249);">
                  <div class="offset-md-2 col-md-8">
                    <Calculator></Calculator>
                  </div>
                </div>
                 <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;background-color: rgb(249, 249, 249);">
                  <div class="offset-md-2 col-md-8">
                    <Details></Details>
                  </div>
                </div>
                <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;background-color: rgb(249, 249, 249);">
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
                <!--:src='"statics/assets/bg1.png"'-->
            </q-img>
              <q-banner class="bg-primary text-white col-md-12" style="height:125px">
  <!--              Unfortunately, the credit card did not go through, please try again.-->
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
              <!--<div class=col-md-12  >
              <div class="row gutter items-start wrap justify-stretch content-center text-center" style="background-color: #F9F9F9;" >
                <div class="offset-md-1 col-md-2">
                <q-img
                  class="col-md-12"
                  src="https://st4.depositphotos.com/7781012/19834/v/1600/depositphotos_198344484-stock-illustration-loan-application-form-document-isolated.jpg"/>
                  <br>
                  <br>
                  <p style="line-height: 1.8;font-size: 17px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                    Customers come first
                  </p>
                  <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                    we at Company X aim to be the best in the business and in order for us to do that we make sure our customers can reach
                    out to us for any issues
                  </p>
                </div>
                <div class="offset-md-2 col-md-2">
                <q-img
                  class="col-md-12"
                  :src=' "../assets/text-mining.png" '/>
                  <br>
                  <br>
                  <p style="line-height: 1.8;font-size: 17px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom: 10px;font-family: 'Open Sans', sans-serif;color: black;" class="content-center text-left">
                    Customers come first
                  </p>
                  <p style="line-height: 1.8;font-size: 15px;margin-bottom: 30px;font-family: 'Open Sans', sans-serif;color: #555;" class="content-center text-left">
                    we at Company X aim to be the best in the business and in order for us to do that we make sure our customers can reach
                    out to us for any issues
                  </p>
                </div>
                <div class="offset-md-2 col-md-3">
                  <div class="row gutter items-start wrap justify-stretch content-center text-center" >
                <q-img
                  :src='"../assets/loan-approved.png"'/>
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
            </div>-->
            </div>
          </div>
                </div>
                  <div class="row gutter items-start wrap justify-stretch content-center text-center" style="padding-top: 50px;padding-bottom: 70px;background-color: rgb(249, 249, 249);">
                  <div class="col-md-12">
<!--                    <current-stock></current-stock>-->
                    <Luxury initCol="offset-md-1 col-sm-2 col-md-2 col-lg-2" :small="true"  ></Luxury>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
             <q-card>
        <q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Buy" color="positive" v-close-popup />
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-card>
    </q-dialog>
<!--    <q-dialog v-model="fixed" style="height: 100px">
      <q-card>
        <q-card-section>
          <div class="text-h6">Terms of Agreement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p v-for="n in 15" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>-->
</span>
</template>

<script>
import Table from '../Table/Table'
import Timeline from '../Timeline'
import Calculator from '../Form/Calculator'
import Details from '../Table/Inspection/Inspection'
import Luxury from '../vertical_tabs/tabs/Luxury'
// import CurrentStock from '../vertical_tabs/tabs/CurrentStock'
export default {
  name: 'Dialogue',
  components: { Luxury, Details, Calculator, Timeline, Table },
  props: ['initialDialogue'],
  data () {
    return {
      slide: 1,
      fixed: false,
      dialog: this.initialDialogue,
      maximizedToggle: true,
      model: '2019-02-22 21:02'
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
  /*  >>> div.q-img.overflow-hidden.images.col-md-4.border-right.border-bottom > div:nth-child(1){
      padding-bottom: 66.6667%!important;
    }*/
  /* .dream-img{
     padding-bottom: 66.6667%!important;
    }*/
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
  /*  .my-card{
      width: 100%;
      max-width: 240px;
      height: 160px;
    }*/
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
  .bullet{
    list-style-position: outside;
  }

</style>
