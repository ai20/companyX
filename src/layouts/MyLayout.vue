<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-white text-black">
   <!--    <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-space/>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>-->
       <!-- <q-btn-toggle
          v-model="model"
          flat stretch
          toggle-color="green"
        :options="nav"
          to="/Buy/List"
        ></q-btn-toggle>-->
        <q-btn-toggle
          v-model="model"
          flat stretch
          toggle-color="green"
          :options="nav"
          @click="navigate()"
        ></q-btn-toggle>
        <q-space />
        <q-img
          src=''
          style="height: 24px; max-width: 150px"
        />
        <!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>
    <q-scroll-observer @scroll="onScroll" />

    <!--<q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-model="footerState" elevated class="foot">
      <q-toolbar class="q-footer">
        <div class="col-md-1 offset-md-1" >
          <h6 class="foot-title" style="font-size: 0.80rem!important;">dfsfds</h6>
          <a class="foot-a">Documentation</a>
          <br>
          <a class="foot-a">Feedback</a>
          <br>
          <a class="foot-a">Support</a>
        </div>
        <div class="col-md-1" >
          <h6 class="foot-title" style="font-size: 0.80rem!important;">dfsfds</h6>
          <a class="foot-a">Documentation</a>
          <br>
          <a class="foot-a">Feedback</a>
          <br>
          <a class="foot-a">Support</a>
        </div>
        <div class="col-md-1" >
          <h6 class="foot-title"  style="font-size: 0.80rem!important;">dfsfds</h6>
          <a class="foot-a">Documentation</a>
          <br>
          <a class="foot-a">Feedback</a>
          <br>
          <a class="foot-a">Support</a>
        </div>
        <div class="col-md-1" >
          <h6 class="foot-title" style="font-size: 0.80rem!important;">dfsfds</h6>
          <a class="foot-a">Documentation</a>
          <br>
          <a class="foot-a">Feedback</a>
          <br>
          <a class="foot-a">Support</a>
        </div>
        <div class="col-md-7" style="padding-top: 40px;">
          <!-- <q-img
             :src='"../assets/Company XSM.png"'
             style="height: 24px; max-width: 150px"
           />-->
          <div class="column" >
            <div class="col column">
              <div class="col-md-4 col-sm-6" style="height: 30px;">
                <div class="col column">
                  <div class="row">
                    <div class="offset-8 col-md-2">
                      <q-img src=''
                             style="height: 24px; max-width: 150px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6" style="height: 35px;">
                <div class="row">
                  <div class="offset-7 col-md-5">
                    <span>@ Company X Express. All Rights Reserved.</span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="row">
                  <div class="offset-3 col-md-10">
                    <span>Objectively restore standards compliant opportunities whereas one-to-one collaboration and idea-sharing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
// import router from '../router/routes.js'

export default {
  name: 'MyLayout',
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      footerState: false,
      model: 'HOME',
      scrollInfo: {},
      nav: [
        { label: 'HOME', value: '/', to: '/Index' },
        // { label: 'MODELS', value: '/List', to: '/Buy/List' },
        { label: 'BUY', value: '/Buy' },
        { label: 'SELL/TRADE', value: '/SellOrTrade' },
        { label: 'INSURANCE', value: 'INSURANCE' },
        { label: 'CREDIT', value: '/Loan' },
        { label: 'FAQS', value: 'FAQS' },
        { label: 'Warranty', value: '/Warranty' },
        // { label: 'BLOG', value: 'BLOG' },
        { label: 'CONTACTS', value: 'CONTACTS' },
        { label: 'TEST', value: '/test' }
      ],
      img: [
        { path: '../assets/Company XSM.png' }
      ]
    }
  },
  methods: {
    openURL,
    navigate () {
      // eslint-disable-next-line no-console
      console.log(this.$router)
      this.$router.push(this.model)
    },
    onScroll (info) {
      // this.scrollInfo = info
      // console.log(this.scrollInfo)
      var d = document.documentElement
      var offset = d.scrollTop + window.innerHeight
      var height = d.offsetHeight
      // eslint-disable-next-line no-console
      console.log('offset = ' + offset)
      // eslint-disable-next-line no-console
      console.log('height = ' + height)
      var f = Math.round(offset)
      var h = height - 1
      // eslint-disable-next-line no-console
      console.log('f = ' + f)
      // eslint-disable-next-line no-console
      console.log('h = ' + h)
      if (f < h / 1.1) {
        // eslint-disable-next-line no-console
        console.log('At the bottom')
        this.footerState = false
      } else if (f >= h) {
        // eslint-disable-next-line no-console
        console.log('At the bottom')
        this.footerState = true
      }
    }
  },
  computed: {
    form: {
      get () {
        return this.book.owned === 1
      },
      set (value) {
        this.book.owned = value ? 1 : 0
      }
    }
  }
}
</script>

<style scoped>
  .q-footer{
    background: black;
  }
  >>> .foot-a{
    background-image: none !important;
    padding-left: 0;
    color: #555 !important;
    font-size: 13px;
    font-weight: 400;
    padding-top: 1px;
  }
  >>> #q-app > div > div > div > q-footer > div{
    background: black;
  }
  >>> .foot{
    color: white;
  }
  >>> .foot-title{
    margin-bottom: 0;
    #font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Mukta Vaani', sans-serif;
  }
  #q-app > div > div > div > q-footer > div{
    height: 150px;
  }
</style>
