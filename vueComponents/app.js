new Vue({
el: '#app',
template: `
<div class='app'>
  <div class='app__inner'>
    <div class='pages'>
      <div class='bio page js-active'>
        <div class='page__inner'>
          <div class='page__left'>

          </div>
          <div class='page__right'>

          </div>
        </div>
      </div>

      <div class='bio page'>
        <div class='page__inner'>
          <div class='page__left'>

          </div>
          <div class='page__right'>

          </div>
        </div>
      </div>

      <div class='bio page'>
        <div class='page__inner'>
          <div class='page__left'>

          </div>
          <div class='page__right'>

          </div>
        </div>
      </div>

      <div class='bio page'>
        <div class='page__inner'>
          <div class='page__left'>

          </div>
          <div class='page__right'>

          </div>
        </div>
      </div>
    </div>

    <nav class='main-nav'>
      <ul>
        <li class='nav__item js-active'>
          <a href='#' @click='changePage'>
            <span>Page 01</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Page 02</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Page 03</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Page 04</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`,
data: {
    speed: 600,
    animating: false,
  },

  methods: {
    changePage: function(e) {
      e.preventDefault();
      const $this = this;
      const $targetIndex = $(e.target).parent().index();
      const $navIndex = $('.nav__item.js-active').index();

      const $originalPage = $('.page').eq($navIndex);
      const $nextPage = $('.page').eq($targetIndex);


      if (!$(e.target).parent().hasClass('js-active') && this.animating == false) {
        this.animating = true;
        if ($targetIndex > $navIndex) {
          // Move current slide out of view
          $originalPage.addClass('js-up').removeClass('js-active');
          $nextPage.addClass('js-down');
        } else {
          $originalPage.addClass('js-down').removeClass('js-active');
          $nextPage.addClass('js-up');
        }

        // Remove nav active state
        $('.nav__item').removeClass('js-active');

          setTimeout(function() {
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