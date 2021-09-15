let gameData = JSON.parse(`
{
    "chars": {
        "hero": {
            "name": "主人公",
            "icon": "hero.png",
            "furigana": "しゅじんこう"
        },
        "chinese_1": {
            "name": "中国人1",
            "icon": "chinese_1.png",
            "furigana": "ちゅうごくじん1"
        },
        "chinese_2": {
            "name": "中国人2",
            "icon": "chinese_2.png",
            "furigana": "ちゅうごくじん2"
        }
    },
    "countries": {
        "china": {
            "name": "中国",
            "progress": [
                {
                    "type": "background",
                    "uri": "test.jpg"
                },
                {
                    "type": "speech",
                    "charID": "chinese_1",
                    "text": "你好！ (こんにちは！)"
                },
                {
                    "type": "speech",
                    "charID": "hero",
                    "text": "我在学汉语呢！"
                },
                {
                    "type": "speech",
                    "charID": "chinese_2",
                    "text": "咱们去香港吧！"
                },
                {
                    "type": "background",
                    "uri": "hongkong.png"
                },
                {
                    "type": "speech",
                    "charID": "chinese_2",
                    "text": "例文例文例文例文"
                },
                {
                    "type": "riddle",
                    "charID": "chinese_2",
                    "img": "china_riddle",
                    "answer": "こたえ"
                }
            ]
        }
    }
}
`);

// {
//     "type": "move",
//     "countryID": "china"
// },

let countryIDEnum = {
    china: 'china',
};

function getCountryData(countryID) {
    let countryData = gameData.countries[countryID];

    if(countryData === undefined) {
        alertErr('国データが見つかりませんでした。');
    }

    return countryData;
}

function getCharData(charID) {
    let charData = gameData.chars[charID];

    if(charData === undefined) {
        alertErr('キャラクタデータが見つかりませんでした。');
    }

    return charData;
}

$(() => {
    setTimeout(() => {
        let chinaID = countryIDEnum.china;
        moveToCountry(chinaID);
        startCountryProgress(chinaID);
    }, 500);
});

function alertErr(msg) {
    alert(`エラーが発生しました。\nメッセージ: ${msg}`);
}

function moveToCountry(countryID) {
    let countryData = getCountryData(countryID);
    $('#title').text(countryData.name);
}

function startCountryProgress(countryID) {
    let progress = getCountryData(countryID).progress;
    let index = 0;

    if(progress.length == 0) {
        return;
    }

    function proceedNextProgressItem() {
        proceedProgressItem(progress[index])
            .then(() => {
                if(index >= progress.length) {
                    return;
                }

                index += 1;
                proceedNextProgressItem();
            })
            .catch(() => {
                alertErr('進行の読み込みに失敗しました。');
            });
    }

    proceedNextProgressItem();
}

function proceedProgressItem(item) {
    return new Promise((resolve, _reject) => {
        switch(item.type) {
            case 'background':
            setBackgroundImage(`../lib/img/background/${item.uri}`, resolve);
            break;

            case 'speech':
            let charData = getCharData(item.charID);
            printSubtitle(charData.name, charData.icon, item.text, resolve);
            break;

            case 'riddle':
            startRiddle();
            break;

            default:
            alertErr('存在しないゲーム進行の種類です。');
            break;
        }
    });
}
