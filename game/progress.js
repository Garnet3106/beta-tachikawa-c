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
        },
        "australian": {
            "name": "オーストラリア人",
            "icon": "chinese_2.png",
            "furigana": "おーすとらりあじん"
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
                    "charID": "chinese_2",
                    "text": "例文例文例文例文"
                },
                {
                    "type": "move",
                    "countryID": "australia"
                }
            ]
        },
        "australia": {
            "name": "オーストラリア",
            "progress": [
                {
                    "type": "background",
                    "uri": "australia.jpg"
                },
                {
                    "type": "speech",
                    "charID": "australian",
                    "text": "Hello, mates!"
                },
                {
                    "type": "move",
                    "countryID": "china"
                }
            ]
        }
    }
}
`);

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
    }, 500);
});

function alertErr(msg) {
    alert(`エラーが発生しました。\nメッセージ: ${msg}`);
}

function moveToCountry(countryID) {
    let countryData = getCountryData(countryID);
    $('#title').text(countryData.name);
    startCountryProgress(countryID);
}

function startCountryProgress(countryID) {
    let progress = getCountryData(countryID).progress;
    let index = 0;

    if(progress.length == 0) {
        return;
    }

    function proceedNextProgressItem() {
        if(index >= progress.length) {
            return;
        }

        proceedProgressItem(progress[index])
            .then(() => {
                index += 1;
                proceedNextProgressItem();
            })
            .catch((e) => {
                alertErr('進行の読み込みに失敗しました。');
                console.error(e);
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

            case 'speech': {
                let charData = getCharData(item.charID);
                printSubtitle(charData.name, `../lib/img/chars/${charData.icon}`, item.text, resolve);
            } break;

            case 'riddle': {
                let heroCharData = getCharData('hero');
                let questionerCharData = getCharData(item.questionerCharID);
                startRiddle(heroCharData.name, `../lib/img/chars/${heroCharData.icon}`, questionerCharData.name, `../lib/img/chars/${questionerCharData.icon}`, `../lib/img/riddles/${item.img}`, item.answer, resolve);
            } break;

            case 'move':
            moveToCountry(item.countryID);
            break;

            default:
            alertErr('存在しないゲーム進行の種類です。');
            break;
        }
    });
}
