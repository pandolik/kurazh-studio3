document.addEventListener('DOMContentLoaded', function () {

// Open menu
    document.addEventListener('click', documentClick);
    function documentClick(e) {
        const targetItem = e.target;
        if(targetItem.closest('.icon-menu')){
            document.documentElement.classList.toggle('menu-open');
        }
    }

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


// HEADER, FOOTER LINKS
document.querySelectorAll('.link__menu').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Find the element with the data-target attribute
        var targetElement = event.target.closest('[data-target]');
        if (!targetElement) return; // Exit if no such element

        var targetSelector = targetElement.getAttribute('data-target');
        var block = document.querySelector(targetSelector);
        if (block) {
            block.classList.add('block-outlined');
            block.scrollIntoView({ behavior: 'smooth' });
            setTimeout(function() {
                block.classList.remove('block-outlined');
                document.documentElement.classList.remove('menu-open');
            }, 1000); 
        }
    });
});




// DOWNLOAD IMAGE
const downloadButton = document.querySelector('.slider__circle span');
        const image = document.getElementById('enlarged-image');

        downloadButton.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = image.src;
            link.download = 'image.jpg';  // Имя файла при скачивании
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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
        fadeInOnScroll('classes', 250); // Для элемента с id 'classes'
        fadeInOnScroll('default-container__button', 100); // Для элемента с id 'default-container__button'
    };

// OPEN ANSVER in QUESTION
    const buttons = document.querySelectorAll('.question__button');
    let activeContent = null;
    let activeButton = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            if (activeContent && activeContent !== content) {
                activeContent.classList.remove('active');
                activeButton.querySelector('svg').classList.remove('rotate');
            }

            if (content.classList.contains('active')) {
                content.classList.remove('active');
                button.querySelector('svg').classList.remove('rotate');
                activeContent = null;
                activeButton = null;
            } else {
                content.classList.add('active');
                button.querySelector('svg').classList.add('rotate');
                activeContent = content;
                activeButton = button;
            }
        });
    });
// CINEMAS ANIMATION - BLOCK APPEAREANS
    const cinemaSection = document.querySelector('.cinema');
    const cinemaCards = document.querySelectorAll('.cinemas__card');

    if (cinemaSection && cinemaCards.length > 0) {
        const cinemaObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    cinemaCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 200); // Задержка для очерёдности
                    });
                    cinemaObserver.unobserve(cinemaSection); // Остановить наблюдение после срабатывания
                }
            });
        }, {
            threshold: 0.1
        });

        cinemaObserver.observe(cinemaSection);
    } else {
        console.error('Cinema section or cards not found');
    }

    // PLAYER ANIMATION - BLOCK APPEAREANS
    const playerWrapper = document.querySelector('.player__wrapp');

    if (playerWrapper) {
        const playerObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    playerWrapper.classList.add('visible');
                    playerObserver.unobserve(playerWrapper); // Остановить наблюдение после срабатывания
                }
            });
        }, {
            threshold: 0.4
        });
        playerObserver.observe(playerWrapper);
    } else {
        console.error('Player wrapper not found');
    }

    // ABOUT US ANIMATION - BLOCK APPEAREANS
// ABOUT US ANIMATION - BLOCK APPEAREANS
const usBodySections = document.querySelectorAll('.us__body');
usBodySections.forEach(usBodySection => {
    const usBodyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                usBodyObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    usBodyObserver.observe(usBodySection);
});


const aboutUsSectionReverse = document.querySelector('.about-us__body.about-us__body--reverse');
const aboutUsObserverReverse = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            aboutUsObserverReverse.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});
aboutUsObserverReverse.observe(aboutUsSectionReverse);





});

