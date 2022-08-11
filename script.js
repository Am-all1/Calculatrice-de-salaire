const Component = {
  data() {
    return {
      annuelBrut: 0,
      coef: 0.78,
    };
  },

  computed: {
    annuelNet() {
      return this.annuelBrut * this.coef;
    },
  },

  methods: {
    editerAnnuelBrut(e) {
      this.annuelBrut = e.target.value;
    },
    editerSalaireCadre(e) {
      if (e.target.checked == true) {
        this.coef = 0.75;
      } else {
        this.coef = 0.78;
      }
    },
  },
};

Vue.createApp(Component).mount("#root");
