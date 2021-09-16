let gameData;

try {
    let chinaProgress = `
background|china.png
speech|narrator|まずは中国の友達に会いにいくことにした
speech|narrator|中国の空港に着き、中国人の友人ファンと会った
speech|anonymous|你好啊、やっと会えたアルね
speech|hero|ニーハオ！シャオファン！！
speech|huang|じゃあとりあえず会えたことだし行こうヨ
speech|hero|え？
speech|narrator|中国の友達のファンは会うや否や観光地に連行し →
speech|narrator|中華料理を堪能しながら中国のことをたくさん知って欲しいらしく、中国の文化クイズを出してきた
riddle|huang|china_1.png|china_1_hint.png|china_1_desc.png|a|
speech|narrator|中華料理を堪能しながら中国のことをたくさん知って欲しいらしく、中国の文化クイズを出してきた
move|australia
    `;

    gameData = JSON.parse(`
    {
        "chars": {
            "hero": {
                "name": "主人公",
                "icon": "hero.png",
                "furigana": "しゅじんこう"
            },
            "huang": {
                "name": "小黄",
                "icon": "xiao_huang.png",
                "furigana": "シャオファン"
            },
            "anonymous": {
                "name": "？？？",
                "icon": "anonymous.png",
                "furigana": "？？？"
            },
            "narrator": {
                "name": "",
                "icon": "anonymous.png",
                "furigana": ""
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
                        "charID": "hero",
                        "text": "まずは中国の友達に会いにいくことにした"
                    },
                    {
                        "type": "speech",
                        "charID": "anonymous",
                        "text": "你好啊、やっと会えたアルね"
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "ニーハオ！シャオファン！！"
                    },
                    {
                        "type": "speech",
                        "charID": "xiaoHuang",
                        "text": "じゃあとりあえず会えたことだし行こうヨ"
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "え？"
                    },
                    {
                        "type": "speech",
                        "charID": "narrator",
                        "text": "中国の友達のファンは会うや否や観光地に連行し"
                    },
                    {
                        "type": "speech",
                        "charID": "narrator",
                        "text": "中華料理を堪能しながら中国のことをたくさん知って欲しいらしく、中国の文化クイズを出してきた"
                    },
                    {
                        "type": "riddle",
                        "questionerCharID": "xiaoHuang",
                        "img": "china_1.png",
                        "answer": ""
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "日本からそんなに遠くないのに、異文化すぎて驚いたよ！"
                    },
                    {
                        "type": "speech",
                        "charID": "xiaoHuang",
                        "text": "中国のことを少しでも知ってくれたのなら感謝するアル"
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "うん、日本で使えるようなSNSはだいたい使えなくて代替アプリが多く使われているなんて知らなかったし..."
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "しかも、日本と同じような文化も国をあげて祝うものも多いしね〜"
                    },
                    {
                        "type": "speech",
                        "charID": "xiaoHuang",
                        "text": "そうアルネ、私は近くて遠い世界に感じたアル"
                    },
                    {
                        "type": "speech",
                        "charID": "xiaoHuang",
                        "text": "さあ、まだまだ回る場所はあるアルヨ！早く行くネ！"
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "うん！！"
                    },
                    {
                        "type": "speech",
                        "charID": "hero",
                        "text": "出发吧!!!(レッツゴー！)"
                    },
                    {
                        "type": "speech",
                        "charID": "xiaoHuang",
                        "text": "出发吧!!!(レッツゴー！)"
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

    gameData.countries.china.progress = convProgressData(chinaProgress);
} catch(e) {
    alertErr('ゲームデータの解析に失敗しました。');
    console.error(e);
}

let countryIDEnum = {
    china: 'china',
};

function convProgressData(text) {
    let items = [];
    let lines = text.split('\n');

    lines.forEach((eachLine, index) => {
        if(eachLine.replace(/ /g, '') === '') {
            return;
        }

        let tokens = eachLine.split('|');

        switch(tokens[0]) {
            case 'background': {
                items.push({
                    type: tokens[0],
                    uri: tokens[1],
                });
            } break;

            case 'move': {
                items.push({
                    type: tokens[0],
                    countryID: tokens[1],
                });
            } break;

            case 'riddle': {
                items.push({
                    type: tokens[0],
                    questionerCharID: tokens[1],
                    img: tokens[2],
                    hintImg: tokens[3],
                    descImg: tokens[4],
                    answer: tokens[5],
                });
            } break;

            case 'speech': {
                items.push({
                    type: tokens[0],
                    charID: tokens[1],
                    text: tokens[2],
                });
            } break;

            default:
            alertErr(`進行データ (${index + 1} 行目) の種類が不明です。`);
            return items;
        }
    });

    return items;
}

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

    // setTimeout(() => {
        
    // }, );
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
                startRiddle(heroCharData.name, `../lib/img/chars/${heroCharData.icon}`, questionerCharData.name, `../lib/img/chars/${questionerCharData.icon}`, `../lib/img/riddles/${item.img}`, `../lib/img/riddles/${item.hintImg}`, `../lib/img/riddles/${item.descImg}`, item.answer, resolve);
            } break;

            case 'move':
            moveToCountry(item.countryID, resolve);
            break;

            default:
            alertErr(`存在しないゲーム進行の種類 (${item.type}) です。`);
            break;
        }
    });
}
