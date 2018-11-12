"use strict";

// import VueResource from '../js/vendor/vue-resource.min.js';
Vue.use(VueResource);
new Vue({
  el: '#timeline',
  template: "\n<div class='tln'>\n<div class='tln__inner'>\n  <div class='tln__intro'>\n    <h2>Timeline</h2>\n    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam modi aperiam reiciendis ut tempora voluptatum minus, perspiciatis nam explicabo quaerat facere quo neque repellat ex atque inventore blanditiis? Minima, mollitia?</p>\n  </div>\n  <div class=\"tln__content\">\n    <!-- Loop through years -->\n    <ul class=\"tln__line\" v-if='!noJSON'>\n      <!-- Loop through projects in year -->\n        <li v-for='item in projectsSorted' class='project'>\n          <button class='project__toggle' @click='openProject($event)'>\n              <p class='project__title'>{{ item.title }}</p>\n              <p class='project__date'>{{ item.dateStart }} - {{ item.dateEnd }}</p>\n          </button>\n          <div class='project__content'>\n              <h3 class='project__title'>{{ item.title }}</h3>\n              <h4 class='project__date'>{{ item.dateStart }} - {{ item.dateEnd }}</h4>\n              <p class='project__sum'>{{ item.summary}}</p>\n          </div>\n        </li>\n    </ul>\n  </div>\n</div>\n</div>\n",
  data: {
    projectsJSON: [],
    noJSON: false
  },
  created: function created() {
    var _this = this;

    var local = "../json/projects.json";
    this.$http.get(local).then(function (response) {
      _this.projectsJSON = response.body;
    }, function (response) {
      _this.noJSON = true;
    });
  },
  computed: {
    projectsSorted: function projectsSorted() {
      var filteredArr = this.projectsJSON; // Sort by year

      filteredArr.sort(function (a, b) {
        var sortA = moment(a.dateStart).year();
        var sortB = moment(b.dateStart).year();

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
    }
  },
  methods: {
    openProject: function openProject(e) {
      var $target = $(e.target);
      $target.toggleClass('js-active');
      $target.siblings('.project__content').slideToggle();
    }
  }
});