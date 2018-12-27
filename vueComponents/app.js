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
          </div>
          <div class='page__right'>
            <h2 class='bio__header'>About Me.</h2>
            <div class='bio__desc'>
              <p>I am a front-end web developer from the Greater Boston area. I have worked on many sites for higher education and non-profit organizations. I have 4,000 website launches under my belt.</p>
            </div>
          </div>
        </div>
      </div>

      <div class='page'>
        <div class='page__inner'>
          <h2>Here is an H2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur
            veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas
            nam.</p>
          <h2>Here is an H2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam
            itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores
            doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur
            exercitationem quae, enim velit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint
            reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi
            aliquid deleniti?</p>

          <h2>Here is an H2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur
            veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas
            nam.</p>
          <h2>Here is an H2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam
            itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores
            doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur
            exercitationem quae, enim velit.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint
            reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi
            aliquid deleniti?</p>

        </div>
      </div>

      <div class='page'>
        <div class='page__inner'>
          <div class='page__left'>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
          <div class='page__right'>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
        </div>
      </div>

      <div class='page contact'>
        <div class='page__inner'>
          <div class='contact__form'> 
            <form action="mailto:someone@example.com" method="post" enctype="text/plain">
            <label for='name'>Name:</label>
            <input type="text" name="name" placeholder='Name'><br>
            <label for='email'>E-mail:</label>
            <input type="text" name="mail" placeholder='Email'><br>
            <label for='comment'>Comment:</label>
            <input type="text" name="comment" size="50" placeholder='Comment'><br><br>
            <input type="submit" value="Send">
            </form>
          </div>
        </div>
      </div>
    </div>

    <nav class='main-nav'>
      <button class='nav__button' @click='openMenu($event)'>
        <span class='visuallyhidden'>Main Navigation</span>
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
      
    }
  }
});