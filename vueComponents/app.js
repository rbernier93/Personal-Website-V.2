new Vue({
el: '#app',
template: `
<div class='app'>
  <div class='app__inner'>
    <div class='pages'>
      <div class='bio page js-active'>
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
            <h1>Here is an H1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
            <h2>Here is an H2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
        </div>
      </div>

      <div class='page'>
        <div class='page__inner'>
          <div class='page__left'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
          <div class='page__right'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
        </div>
      </div>

      <div class='page'>
        <div class='page__inner'>
          <div class='page__left'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
          <div class='page__right'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
        </div>
      </div>

      <div class='page'>
        <div class='page__inner'>
          <div class='page__left'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
          <div class='page__right'>
              <h1>Here is an H1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>
              <h2>Here is an H2</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>
          </div>
        </div>
      </div>
    </div>

    <nav class='main-nav'>
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
            <span>Hobbies + Interests</span>
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
    speed: 700,
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
      } else if ($(e.target).parent().hasClass('js-active')){
        $(e.target).parent().addClass('shake-little');

        setTimeout(function() {
          $(e.target).parent().removeClass('shake-little');
        }, this.speed / 2);
      }

      return false;
    }
  }
});