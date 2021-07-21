$(() => {
    let backImg = $('#backImg');
    let gameStartBtn = $('#gameStartBtn');

    gameStartBtn.on('click', () => {
        gameStartBtn.css('opacity', '0');
        gameStartBtn.css('cursor', 'default');

        setTimeout(() => {
            backImg.css('opacity', '0');
        }, 500);
    });
});
