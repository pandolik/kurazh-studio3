document.addEventListener('DOMContentLoaded', function () {

// Open menu
    document.addEventListener('click', documentClick);
    function documentClick(e) {
        const targetItem = e.target;
        if(targetItem.closest('.icon-menu')){
            document.documentElement.classList.toggle('menu-open');
        }
    }

    // Scroll
    window.onscroll = function() {
      var el = document.getElementsByTagName('header')[0];
      var className = 'small';
      if (el.classList) {
        if (window.scrollY > 10)
          el.classList.add(className);
        else
          el.classList.remove(className);
      }
    };

// Click on the button, opening a hidden block.
    const button = document.getElementById("button-our-projects-more");
    const blocks = document.querySelectorAll(".block-container");
    button.addEventListener("click", function () {
      blocks.forEach((block) => {
        // Проверяем текущее состояние блока
        if (block.style.display === "none" || block.style.display === "") {
          block.style.display = "flex"; // Если скрыт или не определен, показываем блок
        } else {
          block.style.display = "none"; // Если отображается, скрываем блок
        }
      });
    });


// Нахождения блока по ID и переместить пользователя к нему туда
    // header__quantity
    document.getElementById('cart-header__quantity').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 100); // Remove the outlined effect after 1 second (1000 milliseconds)
    });

    // Проекты
    document.getElementById('cart-header__text').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Button in header
    document.getElementById('header__button').addEventListener('click', function() {
        var block = document.querySelector('.contact__wrapper');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });

    // Контакти Header
    document.getElementById('menu__contact').addEventListener('click', function() {
        var block = document.querySelector('.contact__wrapper');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 100); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Процес занять
    document.getElementById('menu__process').addEventListener('click', function() {
        var block = document.querySelector('.section__classes');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 200); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('cinemas__read-more1').addEventListener('click', function() {
        var block = document.querySelector('.block__projects1');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });document.getElementById('cinemas__read-more2').addEventListener('click', function() {
        var block = document.querySelector('.block__projects2');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });document.getElementById('cinemas__read-more3').addEventListener('click', function() {
        var block = document.querySelector('.block__projects3');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });



// Default Container images
    document.getElementById('image-project1').addEventListener('click', function() {
        var block = document.querySelector('.block__projects1');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project2').addEventListener('click', function() {
        var block = document.querySelector('.block__projects2');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project3').addEventListener('click', function() {
        var block = document.querySelector('.block__projects3');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project4').addEventListener('click', function() {
        var block = document.querySelector('.block__projects4');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Button Default Container
    document.getElementById('default-container__button').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });



// Animation in Main section
    function fadeInOnScroll(elementId, duration) {
        var distance = window.innerWidth; // Начальное расстояние для анимации справа налево
        var op = 0; // Счетчик для каждой анимации
        var interval = 1; // Интервал в миллисекундах
        var increment = interval / duration;
        var element = document.getElementById(elementId);
        var isVisible = false;

        function fadeIn() {
            if (!isVisible && isElementInViewport(element)) {
                isVisible = true;
                var timer = setInterval(function() {
                    op += increment;
                    if (op >= 1) {
                        clearInterval(timer);
                    }
                    element.style.opacity = op;
                    distance -= increment * window.innerWidth; // Уменьшаем расстояние на ширину окна, чтобы анимация была справа налево
                    element.style.transform = `translateX(-${distance}px)`; // Применяем трансформацию для движения справа налево
                }, interval);
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', fadeIn);
    }


// Animation in Default-container section
    window.onload = function() {
        fadeInOnScroll('default-container__p', 100); // Для элемента с id 'default-container__p'
        fadeInOnScroll('default-container__text', 300); // Для элемента с id 'default-container__text'
        fadeInOnScroll('classes', 100); // Для элемента с id 'classes'
        fadeInOnScroll('default-container__button', 100); // Для элемента с id 'default-container__button'
    };

});