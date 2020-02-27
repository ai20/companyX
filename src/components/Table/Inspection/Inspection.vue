<template>
  <div class="row gutter items-start wrap">
    <div class="col-md-12" >
      <h3 style="text-transform: uppercase;font-weight: 700;color: rgb(24, 53, 88);text-align: center;position: relative;line-height: 1;">360 Inspection</h3>
    </div>
    <div class="col-md-6">
      <q-table
        title="MODEL 2015 Ford Focus"
        :data="data"
        :columns="columns"
        row-key="name"
        hide-header
        hide-bottom
        :pagination.sync="pagination"
        ref="table"
        class="q-card--bordered q-card--flat no-shadow"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" >
            <template v-slot:append>
              <span></span>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <div class="col-md-6">
      <q-table
        title="VIN 1FADP3F21FL208375"
        :data="data"
        :columns="columns"
        row-key="name"
        hide-header
        hide-bottom
        :pagination.sync="pagination"
        ref="table"
        class="q-card--bordered q-card--flat no-shadow"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" >
            <template v-slot:append>
              <span></span>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inspection',
  data () {
    return {
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 6
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Engine Type',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          classes: 'ellipsis col-lg-3',
          style: 'max-width: 100px -webkit-box-flex: 1;\n' +
            '    flex-grow: 1;\n' +
            '    flex-shrink: 1;\n' +
            '    flex-basis: 50%;\n' +
            '    padding-left: 20px;\n' +
            '    color: rgb(24, 53, 88);\n' +
            '    font-size: 14px;\n' +
            '    font-weight: 700;\n' +
            '    line-height: 1;',
          headerClasses: 'text-blue'
        },
        { name: 'calories',
          align: 'left',
          label: 'Calories',
          field: 'calories',
          sortable: true,
          style: 'max-width: 100px -webkit-box-flex: 1;\n' +
            '    flex-grow: 1;\n' +
            '    flex-shrink: 1;\n' +
            '    flex-basis: 50%;\n' +
            '    color: rgb(117, 121, 137);\n' +
            '    font-size: 14px;\n' +
            '    font-weight: 400;\n' +
            '    line-height: 1;\n' +
            '    text-transform: capitalize;'
        },
        { name: 'fat',
          label: 'Fat (g)',
          field: 'fat',
          sortable: true,
          style: 'max-width: 100px -webkit-box-flex: 1;\n' +
            '    flex-grow: 1;\n' +
            '    flex-shrink: 1;\n' +
            '    flex-basis: 50%;\n' +
            '    padding-left: 20px;\n' +
            '    color: rgb(24, 53, 88);\n' +
            '    font-size: 14px;\n' +
            '    font-weight: 700;\n' +
            '    line-height: 1;'
        },
        { name: 'carbs',
          label: 'Carbs (g)',
          field: 'carbs',
          style: '-webkit-box-flex: 1;\n' +
            '    flex-grow: 1;\n' +
            '    flex-shrink: 1;\n' +
            '    flex-basis: 50%;\n' +
            '    color: rgb(117, 121, 137);\n' +
            '    font-size: 14px;\n' +
            '    font-weight: 400;\n' +
            '    line-height: 1;\n' +
            '    text-transform: capitalize;'
        }
      ],
      data: [
        {
          name: 'Engine Type',
          calories: 'V6, VVT, 3.6 Liter',
          fat: 'MPG',
          carbs: '18 City / 25 Hwy'
        },
        {
          name: 'Exterior Color',
          calories: 'Black',
          fat: 'Interior Color',
          carbs: 'Black Interior Color'
        },
        {
          name: 'Interior Color',
          calories: 'Black',
          fat: 'Transmission',
          carbs: 'Automatic'
        },
        {
          name: 'Drivetrain',
          calories: '4WD',
          fat: 'Doors',
          carbs: '4 Door SUV'
        },
        {
          name: 'Number of Keys',
          calories: 2,
          fat: 'VIN',
          carbs: 'XCXCXXXxXXXXX'
        },
        {
          name: 'Stock#',
          calories: 'XXXXXXXXXXX',
          fat: 'Vehicle ID',
          carbs: 'XXXXXXXXX'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ]
    }
  },
  methods: {
    setTableGridClass () {
      return 'cars.js'
      // console.log(this.$ref.table)
    }
  }
  /*,
  mounted () {
    this.$el.lastChild.childNodes[1].childNodes[0].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[1].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[2].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[3].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[4].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[5].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[6].classList.replace('col-lg-3', 'col-lg-6')
    this.$el.lastChild.childNodes[1].childNodes[7].classList.replace('col-lg-3', 'col-lg-6')
  } */
}
</script>

<style scoped>
  /*  >>>.q-table__grid-item-title {
      -webkit-box-flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 50%;
      font-size: 14px;
      font-weight: 700;
      line-height: 2;
    }
    >>>.q-table__grid-item-value{
      flex-basis: 50%;
      font-size: 14px;
      font-weight: 400;
      line-height: 3;
      text-transform: capitalize;
      color: rgb(24, 53, 88);
      background: #eceff1!important;
    }*/
  /*  >>>.q-table__grid-item-title {
      -webkit-box-flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 50%;
      padding-left: 20px;
      color: rgb(24, 53, 88);
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }
    >>>.q-table__grid-item-value{
      -webkit-box-flex: 1;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 50%;
      color: rgb(117, 121, 137);
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
      text-transform: capitalize;
    }*/
</style>
