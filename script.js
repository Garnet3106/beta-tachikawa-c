'use strict';

$(() => {
    $(document).on('click', onHeaderClick);
});

function onHeaderClick() {
    let $header = $('#header');
    let $headerImg = $('#headerImg');
    let $gameStartBtn = $('#gameStartBtn');

    $gameStartBtn.css('opacity', '0');
    $gameStartBtn.css('cursor', 'default');

    setTimeout(() => {
        $headerImg.css('opacity', '0');

        setTimeout(() => {
            $header.css('display', 'none');

            displayImg('lib/img/header.png', '80vw 20vw', () => {
                displayImg('lib/img/team_icon.png', '30vw 30vw', () => {
                    location.href = 'game/index.html';
                });
            });
        }, 1000);
    }, 500);
}

function displayImg(imgURI, backSize, callback) {
    let $footer = $('#footer');
    let $footerImg = $('#footerImg');

    $footer.css('display', 'block');
    $footerImg.css('background-image', `url(${imgURI})`);
    $footerImg.css('background-size', backSize);
    $footerImg.css('opacity', '1');

    setTimeout(() => {
        $footerImg.css('opacity', '0');

        setTimeout(() => {
            $footer.css('display', 'none');
            callback();
        }, 500);
    }, 2500);
}
