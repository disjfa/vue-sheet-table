<template>
    <div>
        <div v-for="sheet in sheets">
            <h3>{{ sheet.name }}</h3>
            <table class="table">
                <tr>
                    <th>aaa</th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Tabletop from 'tabletop';

  export default {
    data() {
      return {
        sheets: [],
      };
    },
    mounted() {
      this.loadSheet(this.$route.params);
    },
    methods: {
      loadSheet(params) {
        const { id } = params;
        Tabletop.init({
          key: id, // '1T_S0MpumR0KGlfKOiVGsZvxobFOQrUw1jsPGT8z-5fc',
          callback: this.initSheet,
        });
      },
      initSheet(data) {
        const sheets = [];
        Object.keys(data).forEach((sheetName) => {
          sheets.push({
            name: sheetName,
            columnNames: data[sheetName].columnNames,
            elements: data[sheetName].elements,
            keys: [],
          });
        });
        Vue.set(this, 'sheets', sheets);
      },
    },
  };
</script>