'use strict';

/* 初期化 */

// note: サブタイトル入力時以外は null
let subtitleInterval = null;

$(() => {
    $('#answerCheckBtn').on('click', onAnswerCheckBtnClick);

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

/* イベント */

function onAnswerCheckBtnClick(_event) {
    let answerInput = $('#answerInput').val();

    console.log(answerInput);
}

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
    $('#subtitleCharIcon').css('background-image', charIconURI);

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
        $('#subtitleText').text('');
        $('#subtitleCharName').text('');

        $background.css('background-image', `url(${uri})`);
        $background.css('opacity', '1');

        setTimeout(() => {
            callback();
        }, 500);
    }, 500);
}

function startRiddle() {
    $('#subtitle').css('display', 'none');
    $('#riddle').css('display', 'flex');
    $('#answerInput').focus();
    $('#background').css('background-blend-mode', 'darken');
}
