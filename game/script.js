'use strict';

/* 初期化 */

// note: サブタイトル入力時以外は null
let subtitleInterval = null;

$(() => {
    $(window).on('beforeunload', function(e) {
        return '';
    });

    validateSubtitleIconFlash();
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

function startRiddle(heroName, heroIconURI, questionerName, questionerIconURI, imgURI, hintImgURI, descImgURI, answer, callback) {
    return new Promise(() => {
        let $subtitle = $('#subtitle');
        let $riddle = $('#riddle');
        let $riddleImg = $('#riddleImg');
        let $riddleHintBtn = $('#riddleHintBtn');
        let $searchArea = $('#searchArea');
        let $riddleSearchBtn = $('#riddleSearchBtn');
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
        $answerInput.val('');

        let invalidateImg = false;

        $riddleHintBtn.on('click', (_e) => {
            $riddleImg.css('background-image', `url('${hintImgURI}')`);

            setTimeout(() => {
                if(!invalidateImg) {
                    $riddleImg.css('background-image', `url('${imgURI}')`);
                }
            }, 5000);
        });

        $riddleSearchBtn.on('click', (_e) => {
            $searchArea.css('display', 'flex');
            $searchArea.on('click', (_e) => {
                $searchArea.css('display', 'none');
                $searchArea.off('click');
            });
        });

        // note: なぜか transition が効かないので 50ms 遅らせる
        setTimeout(() => {
            $riddle.css('opacity', '1');
        }, 50);

        setTimeout(() => {
            $answerInput.focus();
            let $answerClickBtn = $('#answerCheckBtn');
            $answerClickBtn.on('click', () => {
                let answerInput = $('#answerInput').val();

                if(answer.split(',').includes(answerInput.toLowerCase())) {
                    // 正解
                    $answerClickBtn.off('click');
                    $riddleHintBtn.off('click');
                    $riddleSearchBtn.off('click');

                    $riddle.css('opacity', '0');
                    $riddleImg.css('background-image', 'unset');
                    $background.css('background-blend-mode', 'normal');

                    setTimeout(() => {
                        invalidateImg = true;
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
