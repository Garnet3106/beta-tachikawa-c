'use strict';

/* 初期化 */

// note: サブタイトル入力時以外は null
let subtitleInterval = null;

$(() => {
    validateSubtitleIconFlash();

    // printSubtitle('テキストテキストテキストテキスト');

    // setTimeout(() => {
    //     printSubtitle('テストテストテストテストテストテスト', () => {
    //         setTimeout(() => {
    //             startRiddle();
    //         }, 1000);
    //     });
    // }, 0);
});

/* UI処理 */

function printSubtitle(charName, charIconURI, text, callback) {
    function invalidateSubtitle(runCallback) {
        clearInterval(subtitleInterval);
        subtitleInterval = null;

        if((runCallback === undefined || runCallback) && callback !== undefined) {
            callback();
        }
    }

    let $subtitle = $('#subtitle');
    $subtitle.on('click', () => {
        $subtitle.off('click');
        invalidateSubtitle();
        return;
    });

    $('#subtitleCharName').text(charName);
    $('#subtitleCharIcon').css('background-image', `url('${charIconURI}')`);

    let $subtitleText = $('#subtitleText');
    $subtitleText.text('');

    if(subtitleInterval !== null) {
        invalidateSubtitle();
    }

    let char_i = 0;
    subtitleInterval = setInterval(() => {
        if(subtitleInterval === null) {
            invalidateSubtitle();
            return;
        }

        if(char_i >= text.length) {
            invalidateSubtitle(false);
            return;
        }

        let char = text[char_i];
        $subtitleText.text($subtitleText.text() + char);

        char_i += 1;
    }, 50);
}

function validateSubtitleIconFlash() {
    let $subtitleNextIcon = $('#subtitleNextIcon');
    let isHidden = false;

    setInterval(() => {
        if(subtitleInterval !== null) {
            $subtitleNextIcon.css('visibility', 'hidden');
        } else {
            if(isHidden) {
                $subtitleNextIcon.css('visibility', 'visible');
            } else {
                $subtitleNextIcon.css('visibility', 'hidden');
            }

            isHidden = !isHidden;
        }
    }, 500);
}

function setBackgroundImage(uri, callback) {
    let $background = $('#background');
    $background.css('opacity', '0');

    setTimeout(() => {
        $('#subtitleIcon').css('background-image', 'unset');
        $('#subtitleText').text('');
        $('#subtitleCharName').text('');
        $('#subtitleCharIcon').css('background-image', 'unset');

        $background.css('background-image', `url(${uri})`);
        $background.css('opacity', '1');

        setTimeout(() => {
            callback();
        }, 1000);
    }, 1000);
}

function startRiddle(heroName, heroIconURI, questionerName, questionerIconURI, imgURI, answer, callback) {
    return new Promise(() => {
        let $subtitle = $('#subtitle');
        let $riddle = $('#riddle');
        let $riddleImg = $('#riddleImg');
        let $answerInput = $('#answerInput');
        let $background = $('#background');

        $('#heroCharIcon').css('background-image', `url(${heroIconURI})`);
        $('#heroCharName').text(heroName);
        $('#questionerCharIcon').css('background-image', `url(${questionerIconURI})`);
        $('#questionerCharName').text(questionerName);

        $subtitle.css('display', 'none');
        $riddle.css('display', 'flex');
        $riddleImg.css('background-image', `url('${imgURI}')`);
        $background.css('background-blend-mode', 'darken');

        // note: なぜか transition が効かないので 50ms 遅らせる
        setTimeout(() => {
            $riddle.css('opacity', '1');
        }, 50);

        setTimeout(() => {
            $answerInput.focus();

            let $answerClickBtn = $('#answerCheckBtn');
            $answerClickBtn.on('click', () => {
                let answerInput = $('#answerInput').val();
                // todo: 答えをフォーマットする

                if(answer == answerInput) {
                    $answerClickBtn.off('click');

                    $riddle.css('opacity', '0');
                    $riddleImg.css('background-image', 'unset');
                    $background.css('background-blend-mode', 'normal');

                    setTimeout(() => {
                        $riddle.css('display', 'none');
                        $subtitle.css('display', 'flex');
                        callback();
                    }, 1000);
                } else {
                    alert('不正解');
                }
            });
        }, 1000);
    });
}
