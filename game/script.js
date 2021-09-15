'use strict';

// note: サブタイトル入力時以外は null
let subtitleInterval = null;

$(() => {
    validateSubtitleIconFlash();
    printSubtitle('テキストテキストテキストテキスト');

    setTimeout(() => {
        printSubtitle('テストテストテストテストテストテスト', () => {
            setTimeout(() => {
                startRiddle();
            }, 800);
        });
    }, 2500);
});

function printSubtitle(text, callback) {
    function invalidateSubtitle() {
        clearInterval(subtitleInterval);
        subtitleInterval = null;

        if(callback !== undefined) {
            callback();
        }
    }

    let $subtitleText = $('#subtitleText');
    $subtitleText.text('');

    if(subtitleInterval !== null) {
        invalidateSubtitle();
    }

    let char_i = 0;
    subtitleInterval = setInterval(() => {
        if(subtitleInterval === null || char_i >= text.length) {
            invalidateSubtitle();
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

function startRiddle() {
    $('#subtitle').css('display', 'none');
    $('#riddle').css('display', 'flex');
    $('#answerInput').focus();
    $('#background').css('background-blend-mode', 'darken');
}
