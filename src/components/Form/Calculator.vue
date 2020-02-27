<template>
  <div class="q-pa-xl q-card bg-grey-1 q-card--bordered q-card--flat no-shadow" >
    <div class="row items-start">
      <div class="col-md-12" >
        <h3 style="text-transform: uppercase;font-weight: 700;color: rgb(24, 53, 88);text-align: center;position: relative;line-height: 1;">Payments your way</h3>
      </div>
      <div class="col-md-7" style="height: 600px">
        <div class=" row q-col-gutter-sm items-start">
          <div class=" offset-md-1 col-md-11">
          <q-btn-toggle
            v-model="model"
            spread
            no-caps
            toggle-color="primary"
            color="white"
            text-color="black"
            :options="[
          {label: 'Option 1', value: 'one'},
          {label: 'Option 2', value: 'two'}
        ]"
          />
          </div>
      <div class="offset-md-1 col-md-3">
        <q-select filled v-model="selectModel1" :options="options" label="Standard" />
      </div>
      <div class="q-gutter-xs col-md-4">
        <q-select filled v-model="selectModel2" :options="options" label="Standard" />
      </div>
      <div class=" col-md-4">
        <q-select filled v-model="selectModel3" :options="options" label="Standard" />
      </div>
      <div class=" offset-md-1 col-md-11 " style="text-align: end;">
        <q-chip square color="primary" text-color="white" >
          Monthly Payments: {{ monthlyPayments }}
        </q-chip>

        <q-slider
          v-model="monthlyPayments"
          :min="0"
          :max="50"
          label
          @change="downPayment"
        ></q-slider>
        <q-chip square color="primary" text-color="white">
          CashDown Payments: {{ cashDown }}
        </q-chip>

        <q-slider
          v-model="cashDown"
          :min="0"
          :max="50"
          label
          @change="monthlyPayment"
        ></q-slider>
      </div>
      <div class="offset-md-1 col-md-5">
        <q-card class="my-card">
          <q-card-section>
            <div style="text-transform: uppercase">APPLY A TRADE-IN VALUE</div>
            <div>Answer a few questions about your car and get an instant value.</div>
            <div> This only takes 2 minutes.</div>
            <q-btn outline style="color: goldenrod;" label="Get Trade In Value" class="q-px-lg" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-5 offset-md-1">
        <q-card class="my-card">
          <q-card-section>
            <div style="text-transform: uppercase">Company X FINANCING</div>
            <div>Answer a few questions about your car and get an instant value.</div>
            <div> This only takes 2 minutes.</div>
            <q-btn outline size="md" style="color: goldenrod;" label="Get Trade In Value" class="q-px-lg no-shadow" />
          </q-card-section>
        </q-card>
      </div>
          <!--<div class="col-md-12" style="height: 50px"></div>-->
      <div class="offset-md-1 col-md-5">
        <q-card class="my-card">
          <q-card-section>
            <div style="text-transform: uppercase">Company X Basic Coverage</div>
            <div>Answer a few questions about your car and get an instant value.</div>
            <div> This only takes 2 minutes.</div>
            <q-btn outline style="color: goldenrod;" label="Get Trade In Value" class="q-px-lg" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-5 offset-md-1">
        <q-card class="my-card">
          <q-card-section>
            <div style="text-transform: uppercase">Company X Plus Extended Coverage</div>
            <div>Answer a few questions about your car and get an instant value.</div>
            <div> This only takes 2 minutes.</div>
            <q-btn outline size="md" style="color: goldenrod;" label="Get Trade In Value" class="q-px-lg no-shadow" />
          </q-card-section>
        </q-card>
      </div>
      </div>
    </div>
      <div class="offset-md-1 col-md-4 column" style="height: 600px">
          <div class="col col-md-12">
            <q-card flat bordered class="bg-grey-1">
              <q-card-section>
                <div class="row items-center no-wrap">
                  <div class="col">
                    <div class="text-h6">Our Planet</div>
                    <div class="text-subtitle2">by John Doe</div>
                  </div>

                <!--  <div class="col-auto">
                    <q-btn color="grey-7" round flat icon="more_vert">
                      <q-menu cover auto-close>
                        <q-list>
                          <q-item clickable>
                            <q-item-section>Remove Card</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Send Feedback</q-item-section>
                          </q-item>
                          <q-item clickable>
                            <q-item-section>Share</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </div>-->
                </div>
              </q-card-section>

              <q-card-section>
                <!--{{ lorem }}-->
                <div class="row items-start" style="height: 200px;">
                <div class="col-md-6 calc-txt">
                  VEHICLE PRICE
                </div>
                <div class="col-md-6">
                  $22,500
                </div>
                  <div class="col-md-6 calc-txt">
                    SHIPPING
                  </div>
                  <div class="col-md-6">
                    $200
                  </div>
                  <div class="col-md-6 calc-txt">
                    TAX,TITLE,v& REG.
                  </div>
                  <div class="col-md-6">
                    $1,511
                  </div>
                  <div class="col-md-6 calc-txt">
                    DEALER FEES
                  </div>
                  <div class="col-md-6">
                    $195
                  </div>
                  <div class="col-md-6 calc-txt">
                    CASH DOWN
                  </div>
                  <div class="col-md-6">
                    $200
                  </div>
                </div>
              </q-card-section>

              <q-separator />
              <div class="column" style="height:50px">
                <div class="col-md-6 calc-txt" style="line-height: 2;">
                  TRADE-IN CREDIT
                </div>
                <div class="col-md-6">
                  $200
                </div>
              </div>
              <q-separator />
              <div class="row items-start" style="height:100px">
                <div class="col-md-6 calc-txt" style="line-height: 3;">
                  APR
                </div>
                <div class="col-md-6" style="line-height:3;">
                  5.2%
                </div>
                <div class="col-md-6 calc-txt">
                  ESTIMATED AMOUNT FINANCED
                </div>
                <div class="col-md-6">
                  $24,241
                </div>
              </div>
              <q-separator />
              <q-card-actions class="justify-center">
                <q-btn flat>Action 1</q-btn>
                <q-btn flat>Action 2</q-btn>
              </q-card-actions>
            </q-card>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      model: 'one',
      secondModel: 'one',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      monthlyPayments: 0,
      cashDown: 50,
      selectModel1: null,
      selectModel2: null,
      selectModel3: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      password: '',
      isPwd: true,
      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: ''
    }
  },
  methods: {
    downPayment: function () {
      this.cashDown = 50 - this.monthlyPayments
    },
    monthlyPayment: function () {
      this.monthlyPayments = 50 - this.cashDown
    }
  }
}
</script>

<style scoped>
  .my-card {
    width: 100%;
    max-width: 500px;
  }
  .calc-txt{
    color: rgb(24, 53, 88);
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
  }
  .calc-txt-val{
     color: rgb(117, 121, 137);
     font-size: 14px;
     font-weight: 400;
     line-height: 1;
     text-transform: uppercase;
   }
</style>
