new Vue({
el: '#app',
template: `
<div class='app'>
  <div class='splash'>
    <div class='splash__inner'>
      <div class='splash__content'>
        <h1 class='splash__header'>Robert Bernier</h1>
        <p class='splash__subtext'>Web Developer</p>
      </div>
    </div>
  </div>
  <div class='app__inner'>
    <div class='pages'>
      <div class='bio page'>
        <div class='page__inner'>
          <div class='page__left'>
            <div class='bio__img'>
              <picture>
                <source srcset="../img/bio-pic.png" media="(min-width: 1024px)" />
                <source srcset="../img/bio-pic.png" media="(min-width: 700px)" />
                <img srcset="../img/bio-pic.png" alt="Sample pic" />
              </picture>
            </div>
            <div class='bio__marble'>
              <picture>
                <source srcset="../img/marble.png" media="(min-width: 1024px)" />
                <source srcset="../img/marble--med.png" media="(min-width: 700px)" />
                <img srcset="../img/marble--small.png" alt="Sample pic" />
              </picture>
            </div>
          </div>
          <div class='page__right'>
            <h2 class='page__title'>About Me.</h2>
            <div class='bio__desc'>
              <p>I am a web developer from Boston, MA. I have worked on many sites for higher education and non-profit
                organizations. I love the middle ground between design and development.</p>
            </div>
          </div>
        </div>
      </div>

      <div class='work page'>
        <div class='page__inner'>
            <div class='page__left'>
          <h2 class='page__title'>My Work.</h2>
          <p>I have worked on websites for web development agencies, higher education, and the U.S. Army.</p>
          <p><a href='https://github.com/RobBernier'>Check out my Repos</a></p>
          </div>
          <div class='page__right'>
            <h3>Some Tech + standards That I am familiar with</h3>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>Vue Framework</li>
              <li>SASS Preprocessor</li>
              <li>BEM Naming Convention</li>
              <li>WCAG 2.0 AA Standards</li>
            </ul>
          </div>
        </div>
      </div>

      <div class='interests page'>
        <div class='page__inner'>
          <div class='page__left'>
            <h2 class='page__title'>My Interests.</h2>
            <p>From development to animation, I am constantly looking for new ways to broaden my creative outlets. It is a pivotal part of my craft.</p>
          </div>
          <div class='page__right'>
            <div class='interests__gallery'>
              <picture>
                <source srcset="../img/car.gif" media="(min-width: 1024px)" />
                <source srcset="../img/car.gif" media="(min-width: 700px)" />
                <img srcset="../img/car.gif" alt="Sample pic" />
              </picture>

              <picture>
                <source srcset="../img/walk.gif" media="(min-width: 1024px)" />
                <source srcset="../img/walk.gif" media="(min-width: 700px)" />
                <img srcset="../img/walk.gif" alt="Sample pic" />
              </picture>

              <picture>
                <source srcset="../img/stopmo-bio.jpg" media="(min-width: 1024px)" />
                <source srcset="../img/stopmo-bio.jpg" media="(min-width: 700px)" />
                <img srcset="../img/stopmo-bio.jpg" alt="Sample pic" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div class='page contact'>
        <div class='page__inner'>
          <div class='page__left'>
            <h2 class='page__title'>Let's Make a Website.</h2>
          </div>
          <div class='page__right'>
            <div class='contact__form'>
              <form action="mailto:robbernierweb@gmail.com" method="post" enctype="text/plain">
                <label for='name'>Name:</label>
                <input id='name' type="text" name="name" placeholder='Name'><br>
                <label for='email'>E-mail:</label>
                <input id='email' type="text" name="email" placeholder='Email'><br>
                <label for='description'>Project Description:</label>
                <textarea id='description' type="text" name="description" size="50" placeholder='Project Description'>
                </textarea><br>
                <div class='submit'>
                  <input type="submit" value="Send">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class='main-nav'>
      <button class='nav__button' @click='openMenu($event)'>
        <span></span>
        <span></span>
        <span></span>
        <span class='visually-hidden'>Main Navigation</span>
      </button>
      <ul class='nav__list'>
        <li class='nav__item js-active'>
          <a href='#' @click='changePage'>
            <span>Bio</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Work</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Interests</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage'>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`,
data: {
    speed: 800,
    animating: false,
  },

  mounted: function () {
    const $delay = this.speed;

    // Splash screen animation on page ready
    $(document).ready(function () {
      $('.splash').addClass('js-loaded');

      setTimeout(() => {
        $('.splash').addClass('js-hide');
      }, Math.ceil($delay) * 2);

      setTimeout(() => {
        $('.bio').addClass('js-active');
        $('.main-nav').addClass('js-visible');
      }, Math.ceil($delay) * 2.5);
    })
  },

  methods: {
    changePage: function (e) {
      e.stopPropagation();
      e.preventDefault();

      const $this = this;
      const $targetIndex = $(e.target).parent().index();
      const $navIndex = $('.nav__item.js-active').index();

      const $originalPage = $('.page').eq($navIndex);
      const $nextPage = $('.page').eq($targetIndex);

      if (!$(e.target).parent().hasClass('js-active') && this.animating == false) {
        this.animating = true;

        // Close menu on mobile
        $('.nav__button').removeClass('js-active');
        $('.nav__list').removeClass('js-open');

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

    openMenu: function(e) {
      e.stopPropagation();
      e.preventDefault();

      $(e.target).toggleClass('js-active');
      $('.nav__list').toggleClass('js-open');
    }
  }
});