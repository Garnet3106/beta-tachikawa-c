// note: サブタイトル入力時以外は null
let subtitleInterval = null;

$(() => {
    validateSubtitleIconFlash();
    printSubtitle('テキストテキストテキストテキスト');

    setTimeout(() => {
        printSubtitle('テストテストテストテストテストテスト');
    }, 3663);
});

function printSubtitle(text) {
    function invalidateSubtitle(interval) {
        clearInterval(subtitleInterval);
        subtitleInterval = null;
    }

    let $subtitleText = $('#subtitleText');
    $subtitleText.text('');

    if(subtitleInterval !== null) {
        invalidateSubtitle(subtitleInterval);
    }

    let char_i = 0;
    subtitleInterval = setInterval(() => {
        if(subtitleInterval === null || char_i >= text.length) {
            invalidateSubtitle(subtitleInterval);
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
