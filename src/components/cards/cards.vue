<template>
 <div class="q-pa-md row items-start " >
   <div v-for="(obj ,index) in Obj" :key="index"  class="card" :class="offSet(index)" @click="click">
     <q-card v-on:mouseover="mouseover(index)"
             v-on:mouseleave="mouseleave(index)"
             class="pointer my-card"
             :class="[obj.hover , obj.on_fire]">
       <q-img :src="obj.src">
         <status-banner :status="obj.status"></status-banner>
         <div class="absolute-bottom">
           <div class="row">
             <div class="col-md-2">
               <q-spinner-audio
                 color="secondary"
                 size="2em"
               />
               <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
             </div>
             <div class="col-md-2">
               <q-spinner-hearts
                 color="red"
                 size="2em"
               />
               <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
             </div>
             <div class="col-md-2">
               <q-spinner-comment
                 color="primary"
                 size="2em"
               />
               <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
             </div>
           </div>
         </div>
         <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
           <span class="p-price t700 ls1">$32,568</span>
           <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
         </div>
       </q-img>
       <q-card-section v-if="!small">
         <div class="text-h6 text-center" style="color: black" :style="obj.hiLight" ><a>Our Changing Planet</a></div>
         <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
       </q-card-section>
       <hr class="solid">
       <q-card-section>
         <!--{{ lorem }}-->
         <div class="q-gutter-md row">
           <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
           <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
           <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
           <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
           <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
           <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
         </div>
       </q-card-section>
     </q-card>
   </div>
<!--    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      <q-card v-on:mouseover="mouseover(0)"
              v-on:mouseleave="mouseleave(0)"
              class="pointer my-card"
              :class="hover[0]">
        <q-img src="https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #26a69a">
            <span class="p-price t700 ls1">Reserve</span>
            <span class="p-price-msrp"> The Vehicle : <strong>Available</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>
        <q-card-section>
          <div class="text-h6 text-center" style="color: black" :style="hiLight[0]" ><a>Our Changing Planet</a></div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card "  @click="click">
      &lt;!&ndash;        <q-card class="my-card  no-shadow">&ndash;&gt;
      <q-card @mouseover="mouseover(1)"
              @mouseout="mouseleave(1)"
              class="pointer on-fire my-card"
              :class="hover[1]">
        <q-img src="https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: rgb(244, 67, 54)">
            <span class="p-price t700 ls1">Vehicle</span>
            <span class="p-price-msrp"> Is : <strong> HOT! </strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[1]" >Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(2)"
              v-on:mouseleave="mouseleave(2)"
              class="pointer my-card"
              :class="hover[2]">
        <q-img src="https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #f44336">
            <span class="p-price t700 ls1">Sorry Vehicle</span>
            <span class="p-price-msrp"> Has Been  :<strong>Sold</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[2]" >Our Changing Planet  </div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(3)"
              v-on:mouseleave="mouseleave(3)"
              class="pointer on-fire my-card"
              :class="hover[3]">
        <q-img src="https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #ff9800">
            <span class="p-price t700 ls1">Vehicle</span>
            <span class="p-price-msrp"> Is Reserved :<strong>Contingent</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>
        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[3]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(4)"
              v-on:mouseleave="mouseleave(4)"
              class="pointer my-card"
              :class="hover[4]">
        <q-img src="https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #26a69a">
            <span class="p-price t700 ls1">Reserve</span>
            <span class="p-price-msrp"> The Vehicle : <strong>Available</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[4]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow ">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(5)"
              v-on:mouseleave="mouseleave(5)"
              class="my-card pointer"
              :class="hover[5]">
        <q-img class="col-md-4 col-md-4" src="https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #f44336">
            <span class="p-price t700 ls1">Sorry Vehicle</span>
            <span class="p-price-msrp"> Has Been  :<strong>Sold</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[5]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      <q-card v-on:mouseover="mouseover(6)"
              v-on:mouseleave="mouseleave(6)"
              class="my-card pointer"
              :class="hover[6]">
        <q-img src="https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #26a69a">
            <span class="p-price t700 ls1">Reserve</span>
            <span class="p-price-msrp"> The Vehicle : <strong>Available</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>
        <q-card-section>
          <div class="text-h6 text-center" style="color: black" :style="hiLight[6]" ><a>Our Changing Planet</a></div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card  no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(7)"
              v-on:mouseleave="mouseleave(7)"
              class="my-card pointer"
              :class="hover[7]">
        <q-img src="https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #ff9800">
            <span class="p-price t700 ls1">Vehicle</span>
            <span class="p-price-msrp"> Is Reserved :<strong>Contingent</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[7]" >Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(8)"
              v-on:mouseleave="mouseleave(8)"
              class="my-card pointer"
              :class="hover[8]">
        <q-img src="https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #f44336">
            <span class="p-price t700 ls1">Sorry Vehicle</span>
            <span class="p-price-msrp"> Has Been  :<strong>Sold</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[8]" >Our Changing Planet  </div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(9)"
              v-on:mouseleave="mouseleave(9)"
              class="my-card pointer"
              :class="hover[9]">
        <q-img src="https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #ff9800">
            <span class="p-price t700 ls1">Vehicle</span>
            <span class="p-price-msrp"> Is Reserved :<strong>Contingent</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>
        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[9]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(10)"
              v-on:mouseleave="mouseleave(10)"
              class="my-card pointer"
              :class="hover[10]">
        <q-img src="https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #26a69a">
            <span class="p-price t700 ls1">Reserve</span>
            <span class="p-price-msrp"> The Vehicle : <strong>Available</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[10]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4 card" @click="click">
      &lt;!&ndash;        <q-card class="my-card no-shadow ">&ndash;&gt;
      <q-card v-on:mouseover="mouseover(11)"
              v-on:mouseleave="mouseleave(11)"
              class="my-card pointer"
              :class="hover[11]">
        <q-img class="col-md-4 col-md-4" src="https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no">
          <div class="absolute-top-right text-subtitle2 status" style="background: #f44336">
            <span class="p-price t700 ls1">Sorry Vehicle</span>
            <span class="p-price-msrp"> Has Been  :<strong>Sold</strong></span>
          </div>
          <div class="absolute-bottom">
            <div class="row">
              <div class="col-md-2">
                <q-spinner-audio
                  color="secondary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">100 people are currently viewing</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-hearts
                  color="red"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">43 people have favorited</q-tooltip>
              </div>
              <div class="col-md-2">
                <q-spinner-comment
                  color="primary"
                  size="2em"
                />
                <q-tooltip :offset="[0, 8]">Inquire about this vehicle</q-tooltip>
              </div>
            </div>
          </div>
          <div class="absolute-bottom-right text-subtitle2 filter-p-pricing">
            <span class="p-price t700 ls1">$32,568</span>
            <span class="p-price-msrp">MSRP : <strong>$35,698</strong></span>
          </div>
        </q-img>

        <q-card-section>
          <div class="text-h6 text-center" :style="hiLight[11]">Our Changing Planet</div>
          <div class="text-subtitle2 subtext">Dramatically synthesize parallel applications vis-a-vis revolutionary e-tailers. Monotonectally incubate cooperative partnerships.</div>
        </q-card-section>
        <hr class="solid">
        <q-card-section>
          &lt;!&ndash;{{ lorem }}&ndash;&gt;
          <div class="q-gutter-md row">
            <div class="col-md-3  "><q-icon class="greyish fas fa-tachometer-alt"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-chair"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-gas-pump"></q-icon><span class="greyish"> 20000</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-truck-monster"></q-icon><span class="greyish"> 4X4</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-snowflake"></q-icon><span class="greyish"> All Season</span></div>
            <div class="col-md-3  "><q-icon class="greyish fas fa-cogs"></q-icon><span class="greyish"> Automatic</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>-->
   <dialogue :initialDialogue=initialDialogue></dialogue>
  </div>
</template>

<script>
import Dialogue from '../Dialogue/Dialogue'
import StatusBanner from '../miniComponents/statusBanner/StatusBanner'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import Store from '../../store/CarInventory/carInventory'
export default {
  name: 'cards',
  components: {
    StatusBanner, Dialogue
    /*    statusSpan: {
      render (h) {
        return h('div', {
          class: 'absolute-top-right text-subtitle2 status',
          style: 'background: #26a69a'
        },
        { props: ['g'] },
        [
          h('span', {
            class: 'p-price t700 ls1'
          }, this.g),
          h('span', {
            class: 'p-price-msrp'
          }, [
            this.s,
            h('strong', this.g)
          ])
        ]
        )
      }
    } */
  },
  props: ['arrObj', 'small'],
  inheritAttrs: false,
  data () {
    return {
      /*    status: {
        available: {
          msg: ['Reserve', 'The Vehicle :', 'Available'],
          class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
          style: 'background: #26a69a'
        },
        sold: {
          msg: ['Sorry Vehicle', 'Has Been', 'Sold'],
          class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
          style: 'background: #f44336'
        },
        hot: {
          msg: ['Vehicle', 'Is : ', 'HOT!'],
          class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp", "on_fire"']
          // style: 'background: #26a69a'
        },
        contingent: {
          msg: ['Vehicle', 'Is Reserved', 'Contingent'],
          class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
          style: 'background: #ff9800"'
        }
      },
      arrObj: [
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no',
          on_fire: 'on_fire'
        },
        {
          status: {
            availability: {
              msg: ['Sorry Vehicle', 'Has Been', 'Sold'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: ''
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is Reserved', 'Contingent'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #ff9800'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is : ', 'HOT!'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: rgb(244, 67, 54)'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no',
          on_fire: 'on-fire' },
        {
          status: {
            availability: {
              msg: ['Vehicle', 'Is Reserved', 'Contingent'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #ff9800'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no',
          on_fire: ''
        },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no',
          on_fire: '' },
        {
          status: {
            availability: {
              msg: ['Reserve', 'The Vehicle :', 'Available'],
              class: ['absolute-top-right text-subtitle2 status', 'p-price t700 ls1', 'p-price-msrp"'],
              style: 'background: #26a69a'
            }
          },
          hiLight: 'color: black',
          hover: 'no-shadow',
          src: 'https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no',
          on_fire: '' }
      ],
      imgs: [
        { src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/tDOaFODpAnIoRYHXaAsNKOQY6aa5aJ0Ca2Tw64RCPH-THNqTRx7DVmgnEmrK6PJE2T9gomSghlohCyARGKHig0OLACdtMN9NMeG7AyyLegAffUuhCNj6o0IuF3CY1ZymwTX2zI__H7bvvT6o6gOZWfaQ6JT2wbiMevu5LxwHzU1MEaLs2y2q9yK2zXcpJWcUIo-mhse6h0EF1pIK_aoPXWXb8qWgQZUT72tjPIBWTa16JPoV9bHiYO_h7kh5fG1yW63HCGvm9Anxw0VLFyPKF6LOLwfeamFUfV3vuEef85u60UVd4EIFGStKUMhgLDqVMW50NcOMoLWa5pxsA65_fofFUMWvi-UDhSt__gbBdaODL6yC8NVAr_gsoxRTuOGyA4qAI2qBHpnjwNkVNVMmzjv14sSODlxfZXgtu5arrqRN_ex5-lzbRlIEwxN4qSKQqVwKcJqdEbV_PR6bfbyQ6vv5qT8P09qDryG9ZtH90Gd20yNt_RiFpkdbPI6Yb7owgZmDCtNyskkaTOj9-G_GJLWiCR0iLzkYSYwt21_O5mxQG5lJVEte7gnjk4Ld84uuQABaqq3-ne7PUkPLuriSTsVXGhXT-SXueoesWBbeA9Qdo0eHZzKDENMHNcefmSy-KomNN2n7wVIgGllVnRUVEb1gXechMUIIZFmC_eE7dAuXC0fcz9lGBw=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/W13wM9Z3Z0JQSdLbI3bpH4QKP1f0Vvk2GUjmSj8mEO6DcLH_PouEV1lDXi-j9QmhreHA4YUvvrhb5znKIvp29Sbahl2EWJrFjIT7zJTKNxi617UMnP3ftUj5QrVvUVpNJtSLjJuh0Eml5k7Kov9iTun_AOoGruEQm8dYE9-uN61hLZw3hH35npckUgOeGtxIk5F4cvnYopfojkAvH08ux0aw10nw42mhlBaXwYV3GxBbgnh1_1D0mVs-rZa2CJPlJw27Xw0E_tiWKeQ46A0VCjbYaFzlWMgr-i8elK_PtLvJoGb90nktC4S89bsA41zKCOdjoaM4fC-BPhfRua_HgrpL6GuyfaeJ8CptufRm9ni4wlHchU4llh7DRIV9qA_hE4vSlvX-YhOb4byyKYUaBZVl85F2jHolEvLW2PU1PIUBCqwll5QM2Dcz8ZZ3u0Su-kpQG13H9RXWGc-oIzD_ZVpgn9tK0p-keq3AtyikCCYOtN-F8msY2oa4mbP0Olv-0Xdasr3EC2xwzClEBtKaUUiOFmIdgWyslQO_4cgIFiB2nVDbddbOCEwaOP_kkXKqP4UIQQWn0tNouhmDpVWa97vxJy74TnwpMILzJNq9IKy9k9Q7VsXG9nHxAwfv7evoeP-oyhDMvqvYrIDdNkf4eFk2UUHKEEDI082w-C0m4M_mEBKDHGoOqA=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/JhGF40z1GJ8wD3GIi5N7BeMmLeqxzpN8K4DbA-KCBkn8ciHIsj2x_VnSm_w8yQ1goH8VcsrBbg6Gq9bPFoqvzx-XRwsFyOZT452RQUtP5oBxYACbl37KgH9aVMEV3LTpa-QoKj6ununJDaRUhG-GS5I5WD6efnxlppSCyhW2PuE2Wtzk9DUvgnJVi-j0w07faQgVpWj6utYishYQnqUGbuMP9138xxjMV_-MYGfMXt5G7l8BFBYCS3UDV0TGiI5p0dTzBBcN9T-Qq11lQXQKRUlQjGY7KRGzeJFIDh7CsQkpDItQJvRiQLd94TCSNgyr9w6TM36nPT_ctFi8c4izLe72-UY_UD1J2XcRDrGaIyU4bMyAWPYm6HEIDhgFUWimaJ2NiCWp-zz-I8Sczhm1GDsXi7jdBrXh0crDr1fPYLDM05pzl2f-aQ_NUNgvNS9S14gcqHHYGYzSvSDhY5mhO2Kf955MpcClt1jest8mQm06-vh4mAhSJomlAFmDgkfi4Ir7qzQM_rK7Yz5ZIGhgQkdgy2xGEV972vXl8gY6_n35zxhTL4gexsiPkr6eVrAF2V3F2sWwkClNEClffcW3OcQGeuLLMYqQVseUHgRvkOZZvv_NAyM09bRhie_DrXbGI5pRKKyiSnEL-nLiZUeotNnTgIJObAROZWnWUIXtmMARmKpZ3Dlwbw=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/ysBE-Z8Ri6B0UVxh3Ccya_N88qLIzzR3qJMBWmReKWWrja3L5DwIZfJEM7GGVbuzsv0huIRTcow7UT-EnJaqJLY8uSn1XlbCFTPlZb69tjgVITp1GTw67HM6q533MgjtteRa49ruwJZMoFitK9PJfMJB1NAg855QNjdeyC8bYoudpR3Jl20jUy-as7mqcmrCy_8-N1ujN4pZvjgH0ofRmardttg_0pCA9Q1vB_V22iePP3uqNe5jJ81lrNFabJYyrB9i48DqStN17Ocpf6WvrndVVuoNGqVdSDvMviSGV9KeqVwdNzBCGfRUaHhlvNrBc_Y6DOUDofL7fouSDd-aHDhcoUoiSDCeVKK1iYv52Srgr_Lft833AvMRjW5DuWYv2ApOzrbHe398PKybvrDhvMzxxw5IE86aca32f2TfxIqGvltIW9q0QhrqHL-Kp8ZFANxt7BnzyGv2PV0R_YuyZcvRCr3au-9FolQB5PG-2hwU8d-xzcLrcaGOr3Fe80J7kiKKcSoeFL3GHOheCK8dk-xiPo2DANSE2Lt5Lz7jLlrAlyGFjf1CRgigLI_74uyAPAH1acoQXByMNQlTX3LNLfkB-KLjhX4q8Vqa3b20M_pPET5uhfs3eUaGv_QOQr1yNweK-9BR4A68ubz9_9cYy69o1hrFAPJ5cCx4tDjptEySkrWVPLyXnA=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/cZOqWu1tjBSfBAXQj8PrMjcqx_nuthx5e56onMP_85ly94vTWO1FIfdKzV2guKzsAHyROfIuScQcqMzVBPIVrjlu6E_tNNTgPPGA-IhrR4rU2RZRabApUXpWSphCYE2wdEtlGB9up5AD2y_yeXOJM1vHFdlFIs2mqcpwnujNQNz2xZ_5cksn43_uel8fiGqL117T05OtXTXWuBWqAf4W2Ne4ylmtua68LFW_NXcEwmXhFMufwame7C8j6CD0OiqG9ceYFZDJ13YUwP6nfVRxrlAoaMx-6_PIpSOxjtIZJ5ALb3QooKQ6epSNhYuJnTqubAvUZxIYe3Cy49BwJbiKPZgDL2dSG_eE9_wElWRMFQbGC3jozoGsjLB8kWQvCsVv-_KWSi4Ljn6yc8JfxNK7TW5AaV1AJN_ywpoefj6xsT-9jE6qAE5iBKINp10rr_uREhBow2YLGApMhg5BwR9OoFUB8tARLuxdGWxmhLASAnxQz8rwChpyTFgXbVTarAxSNuphDwW7Pid_WsIfbf6jXOG4nnwyfKjhXQcTd9hdo8-F7EwTgL-82H2kLChLw34okVV3NKOImVSBxD2kuIJP2X4HAswgQlnPsrcuLKByTud_lBdRUe1_9oBy_d9PNi1hWxTH13Ik-otg6VD16bA1ZRcgEwwTvVRHl0QbSOgwiqLfSle6Ify7vg=w600-h400-no' },
        { src: 'https://lh3.googleusercontent.com/1eJrr5M-na3_pNZcF0FxBrAzwJxpsXz46uicidLTlhLd6qKNa5fhR9dTMC4f2W7ppv1xnL5434ZxY4sJ2GrVpCl6WQAxyjZLttgyRKjxq_tzck0QeBmp_A4Dhr-o4YL3_d88dfTgrfxqilzg2IABdHojhJLF-tC9Y8jaxuqKuRDw5NxiyJWOAbfbdOmnluSuhSJrMAtOoJ09H76YGDUL_e-OsRRMMy57dk5j7cJKBfPqCFoIQithimJgdSk_mO72u5K3AKsr_n6XwnO5B2ZHxxa1xXdZPXV0nC9Xyza2fT7LMxkPA2s_htEz9Gp3R4G_7whcdOXMFJSosNpubNb0lHdeQGNt1dTbUMkECdltYpPOsjZovfYcHHzf-QyiTWrZeEJ-QxoC_kFLSeKgpt2XvfDgmA6DCzkg6_cXJmv7-Gslb6rv8K-wSB4JMtPBkxPI-uRMPWoU0HTj6Yrq7bhHj8LqfikHlBK6KwX36QzYptrwZelCMZPssvknBZdnT4-47TNPJHtFivDiNfW-ps6-bR9wGGp4dv-aAChBkaklszs4BtvAnOcEVL2DT-qDEmc05q8umPEvd_SffrWtTg0KUZ-gd2YH3aHWE_UkNbYuIGSEMj7A5NqLti0_N04Sw4hnf8R_W8QxkIpmnyBl_haM3OaJArzswCHWDvuapaaCcjDtTU3Cz6-aLQ=w600-h400-no' }
      ], */
      Obj: '',
      initialDialogue: false
      /* hover: ['no-shadow', 'no-shadow', 'no-shadow', 'no-shadow', 'no-shadow', 'no-shadow'],
       hiLight: [
         'color: black', 'color: black', 'color: black', 'color: black', 'color: black', 'color: black'
       ] */
    }
  },
  methods: {

    mouseover: function (num, event) {
      // this.hover.splice(num, num + 1, 'shadow-15')
      // this.hiLight.splice(num, num + 1, ' color: #31ccec')
      this.arrObj[num].hover = 'shadow-15' // splice(num, num + 1, 'shadow-15')
      this.arrObj[num].hiLight = ' color: #31ccec' // .splice(num, num + 1, ' color: #31ccec')
      // hack. Mouse over for some reason activates the Dialogue pop up in che child component. this will fix it.
      // this.initialDialogue = false
      console.log('test')
    },
    mouseleave: function (num, event) {
      this.arrObj[num].hover = 'no-shadow' // splice(num, num + 1, 'shadow-15')
      this.arrObj[num].hiLight = ' color: black' // .splice(num, num + 1, ' color: #31ccec')
      /*  this.hover.splice(num, num + 1, 'no-shadow')
      this.hiLight.splice(num, num + 1, 'color: black') */
    },
    popUp () {
      this.initialDialogue = true
    },
    check: function (event) {
      if (event) {
        alert(event.target.tagName)
      }
    },
    click: function (event) {
      this.initialDialogue = (this.initialDialogue ? 'false' : 'true')
      // this.initialDialogue = true
    },
    offSet (index) {
      var retVal = this.$attrs.initCol
      if (index % 3 === 0 && this.small) {
        retVal = retVal + ' offset-md-2'
        return retVal
      } else {
        return this.$attrs.initCol
      }
    },
    slowGetter () {
      console.log('timeout')
      this.Obj = Store.getters.getCarInventory
    },
    timeOut () {
      setTimeout(function () { this.slowGetter() }.bind(this), 100)
    }
  },
  mounted () {
    Store.dispatch('setCarInventory', 'currentstock')
    this.timeOut()
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    },
    ...mapState,
    ...mapMutations([
      'setCarInventory',
      'getCarInventory'
    ]),
    ...mapActions([
      'setCarInventory',
      'getCarInventory'
    ]),
    ...mapGetters([
      'getCarInventory'
    ])
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
    /*position: absolute;
    bottom: 235px;*/
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
    /*position: absolute;
    bottom: 235px;*/
    right: 0;
    /*background: #5191c8;*/
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
    /*width:50%;*/
  }
  .q-carousel[data-v-f267f06a] {
    height: 300px;
  }
  .my-card{
    height: auto;
    width: 100%;
    max-width: 464px
    /*max-width: 359px;*/
    /*max-width: 359px*/
    /*  max-width: 454px*/
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
  .on-fire{-webkit-box-shadow: 4px -4px 15px 0px #FF1F1F, 5px 5px 15px 5px rgba(0,0,0,0)!important;
    box-shadow: 4px -4px 15px 0px #FF1F1F, 5px 5px 15px 5px rgba(0,0,0,0)!important;}

</style>
