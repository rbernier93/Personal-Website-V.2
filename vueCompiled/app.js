"use strict";

new Vue({
  el: '#app',
  template: "\n<div class='app'>\n  <div class='app__inner'>\n    <div class='pages'>\n      <div class='bio page js-active'>\n        <div class='page__inner'>\n          <div class='page__left'>\n\n          </div>\n          <div class='page__right'>\n\n          </div>\n        </div>\n      </div>\n\n      <div class='bio page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n\n          </div>\n          <div class='page__right'>\n\n          </div>\n        </div>\n      </div>\n\n      <div class='bio page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n\n          </div>\n          <div class='page__right'>\n\n          </div>\n        </div>\n      </div>\n\n      <div class='bio page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n\n          </div>\n          <div class='page__right'>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <nav class='main-nav'>\n      <ul>\n        <li class='nav__item js-active'>\n          <a href='#' @click='changePage'>\n            <span>Page 01</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Page 02</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Page 03</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Page 04</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n",
  data: {
    speed: 600,
    animating: false
  },
  methods: {
    changePage: function changePage(e) {
      e.preventDefault();
      var $this = this;
      var $targetIndex = $(e.target).parent().index();
      var $navIndex = $('.nav__item.js-active').index();
      var $originalPage = $('.page').eq($navIndex);
      var $nextPage = $('.page').eq($targetIndex);

      if (!$(e.target).parent().hasClass('js-active') && this.animating == false) {
        this.animating = true;

        if ($targetIndex > $navIndex) {
          // Move current slide out of view
          $originalPage.addClass('js-up').removeClass('js-active');
          $nextPage.addClass('js-down');
        } else {
          $originalPage.addClass('js-down').removeClass('js-active');
          $nextPage.addClass('js-up');
        } // Remove nav active state


        $('.nav__item').removeClass('js-active');
        setTimeout(function () {
          $originalPage.removeClass('js-up js-down');
          $nextPage.removeClass('js-up js-down').addClass('js-active');
          $(e.target).parent().addClass('js-active');
          $this.animating = false;
        }, this.speed);
      }

      return false;
    }
  }
});