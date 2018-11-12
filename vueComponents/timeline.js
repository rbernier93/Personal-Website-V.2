// import VueResource from '../js/vendor/vue-resource.min.js';

Vue.use(VueResource);

new Vue({
  el: '#timeline',
  template: `
<div class='tln'>
<div class='tln__inner'>
  <div class='tln__intro'>
    <h2>Timeline</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi aperiam reiciendis ut tempora voluptatum minus, perspiciatis nam explicabo quaerat facere quo neque repellat ex atque inventore blanditiis? Minima, mollitia?</p>
  </div>
  <div class="tln__content">
    <!-- Loop through years -->
    <ul class="tln__line" v-if='!noJSON'>
      <!-- Loop through projects in year -->
        <li v-for='item in projectsSorted' class='project'>
          <button class='project__toggle' @click='openProject($event)'>
              <p class='project__title'>{{ item.title }}</p>
              <p class='project__date'>{{ item.dateStart }} - {{ item.dateEnd }}</p>
          </button>
          <div class='project__content'>
              <h3 class='project__title'>{{ item.title }}</h3>
              <h4 class='project__date'>{{ item.dateStart }} - {{ item.dateEnd }}</h4>
              <p class='project__sum'>{{ item.summary}}</p>
          </div>
        </li>
    </ul>
  </div>
</div>
</div>
`,
  data: {
    projectsJSON: [],
    noJSON: false,
  },

  created: function () {
    const local = "../json/projects.json";
    this.$http.get(local).then(response => {
      this.projectsJSON = response.body;
    }, response => {
      this.noJSON = true;
    });
  },

  computed: {
    projectsSorted: function () {
      let filteredArr = this.projectsJSON;

      // Sort by year
      filteredArr.sort(function (a, b) {
        let sortA = moment(a.dateStart).year();
        let sortB = moment(b.dateStart).year();

        if (sortA === sortB) {
          // Sort by Month
          sortA = moment(a.dateStart).month();
          sortB = moment(b.dateStart).month();

          if (sortA === sortB) {
            // Sort by Day
            sortA = moment(a.dateStart).day();
            sortB = moment(b.dateStart).day();

            return sortA - sortB;
          }

          return sortA - sortB;
        }
        return sortA - sortB;
      });

      return filteredArr;
    },
  },

  methods: {
    openProject: (e) => {
      const $target = $(e.target);

      $target.toggleClass('js-active');
      $target.siblings('.project__content').slideToggle();
    }
  }
});