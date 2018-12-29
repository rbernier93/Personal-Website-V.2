"use strict";

new Vue({
  el: '#app',
  template: "\n<div class='app'>\n  <div class='splash'>\n    <div class='splash__inner'>\n      <div class='splash__content'>\n        <h1 class='splash__header'>Robert Bernier</h1>\n        <p class='splash__subtext'>Web Developer</p>\n      </div>\n    </div>\n  </div>\n  <div class='app__inner'>\n    <div class='pages'>\n      <div class='bio page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n            <div class='bio__img'>\n              <picture>\n                <source srcset=\"../img/bio-pic.png\" media=\"(min-width: 1024px)\" />\n                <source srcset=\"../img/bio-pic.png\" media=\"(min-width: 700px)\" />\n                <img srcset=\"../img/bio-pic.png\" alt=\"Sample pic\" />\n              </picture>\n            </div>\n            <div class='bio__marble'>\n              <picture>\n                <source srcset=\"../img/marble.png\" media=\"(min-width: 1024px)\" />\n                <source srcset=\"../img/marble--med.png\" media=\"(min-width: 700px)\" />\n                <img srcset=\"../img/marble--small.png\" alt=\"Sample pic\" />\n              </picture>\n            </div>\n          </div>\n          <div class='page__right'>\n            <h2 class='page__title'>About Me.</h2>\n            <div class='bio__desc'>\n              <p>I am a web developer from Boston, MA. I have worked on many sites for higher education and non-profit\n                organizations. I love the middle ground between design and development.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class='work page'>\n        <div class='page__inner'>\n          <h2 class='page__title'>My Work.</h2>\n          <p>I have worked on websites for web development agencies, higher education, and the U.S. Army.</p>\n          <p><a href='https://github.com/RobBernier'>Check out my Repos</a></p>\n        </div>\n      </div>\n\n      <div class='interests page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n            <h2>My Interests.</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam.\n              Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat\n              magnam quod voluptas nam.</p>\n          </div>\n          <div class='page__right'>\n            <div class='interests__gallery'>\n              <picture>\n                <source srcset=\"../img/car.gif\" media=\"(min-width: 1024px)\" />\n                <source srcset=\"../img/car.gif\" media=\"(min-width: 700px)\" />\n                <img srcset=\"../img/car.gif\" alt=\"Sample pic\" />\n              </picture>\n\n              <picture>\n                <source srcset=\"../img/walk.gif\" media=\"(min-width: 1024px)\" />\n                <source srcset=\"../img/walk.gif\" media=\"(min-width: 700px)\" />\n                <img srcset=\"../img/walk.gif\" alt=\"Sample pic\" />\n              </picture>\n\n              <picture>\n                <source srcset=\"../img/stopmo-bio.jpg\" media=\"(min-width: 1024px)\" />\n                <source srcset=\"../img/stopmo-bio.jpg\" media=\"(min-width: 700px)\" />\n                <img srcset=\"../img/stopmo-bio.jpg\" alt=\"Sample pic\" />\n              </picture>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class='page contact'>\n        <div class='page__inner'>\n          <div class='page__left'>\n            <h2 class='page__title'>Let's Make a Website.</h2>\n          </div>\n          <div class='page__right'>\n            <div class='contact__form'>\n              <form action=\"mailto:someone@example.com\" method=\"post\" enctype=\"text/plain\">\n                <label for='name'>Name:</label>\n                <input type=\"text\" name=\"name\" placeholder='Name'><br>\n                <label for='email'>E-mail:</label>\n                <input type=\"text\" name=\"mail\" placeholder='Email'><br>\n                <label for='comment'>Comment:</label>\n                <input type=\"text\" name=\"comment\" size=\"50\" placeholder='Comment'><br><br>\n                <input type=\"submit\" value=\"Send\">\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <nav class='main-nav'>\n      <button class='nav__button' @click='openMenu($event)'>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span class='visually-hidden'>Main Navigation</span>\n      </button>\n      <ul class='nav__list'>\n        <li class='nav__item js-active'>\n          <a href='#' @click='changePage'>\n            <span>Bio</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Work</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Interests</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Contact</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n",
  data: {
    speed: 800,
    animating: false
  },
  mounted: function mounted() {
    var $delay = this.speed; // Splash screen animation on page ready

    $(document).ready(function () {
      $('.splash').addClass('js-loaded');
      setTimeout(function () {
        $('.splash').addClass('js-hide');
      }, Math.ceil($delay) * 2);
      setTimeout(function () {
        $('.bio').addClass('js-active');
        $('.main-nav').addClass('js-visible');
      }, Math.ceil($delay) * 2.5);
    });
  },
  methods: {
    changePage: function changePage(e) {
      e.stopPropagation();
      e.preventDefault();
      var $this = this;
      var $targetIndex = $(e.target).parent().index();
      var $navIndex = $('.nav__item.js-active').index();
      var $originalPage = $('.page').eq($navIndex);
      var $nextPage = $('.page').eq($targetIndex);

      if (!$(e.target).parent().hasClass('js-active') && this.animating == false) {
        this.animating = true; // Close menu on mobile

        $('.nav__button').removeClass('js-active');
        $('.nav__list').removeClass('js-open');

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
      } else if ($(e.target).parent().hasClass('js-active')) {
        $(e.target).parent().addClass('shake-little');
        setTimeout(function () {
          $(e.target).parent().removeClass('shake-little');
        }, this.speed / 2);
      }

      return false;
    },
    openMenu: function openMenu(e) {
      e.stopPropagation();
      e.preventDefault();
      $(e.target).toggleClass('js-active');
      $('.nav__list').toggleClass('js-open');
    }
  }
});