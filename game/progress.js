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
riddle|huang|china_1.png|hints/china_1.png|china_1_desc.png|ついつたー,ツイツター,ツイッター,twitter|
riddle|huang|china_2.png|hints/china_2.png|china_2_desc.png|中秋節,ちゅうしゅうせつ|
speech|hero|日本からそんなに遠くないのに、異文化すぎて驚いたよ！
speech|huang|中国のことを少しでも知ってくれたのなら感謝するアル
speech|hero|うん、日本で使えるようなSNSはだいたい使えなくて代替アプリが多く使われているなんて知らなかったし...
speech|hero|しかも、日本と同じような文化も国をあげて祝うものも多いしね〜
speech|huang|そうアルネ、私は近くて遠い世界に感じたアル
speech|huang|さあ、まだまだ回る場所はあるアルヨ！早く行くネ！
speech|hero|うん！！
speech|hero|出发吧!!!(レッツゴー！)
speech|huang|出发吧!!!(レッツゴー！)
move|australia
    `;

    let australiaProgress = `
background|australia.png
speech|narrator|僕はオーストラリアにいた。
speech|chloe|Hello mate! 久しぶりね！
speech|hero|久しぶりクロエ！！
speech|narrator|友人のクロエはもっと仲良くなりたいらしく、彼女を知るためにはオーストラリアの文化を知ると特にいいらしい
speech|narrator|そこで彼女は、自国に関するクイズを出してくれるようだ。
riddle|chloe|australia_1.png|hints/australia_1.png|australia_1_desc.png|あぼりじに,アボリジニ|
riddle|chloe|australia_2.png|hints/australia_2.png|australia_2_desc.png|うるる,ウルル|
speech|chloe|これで大雑把にだけどオーストラリアの文化は知れたかな
speech|hero|もちろん！やっぱり知らないことがたくさんあるんだなあって、自分が無知なんだって知ったよ
speech|chloe|まあ行ったことがない国だと大体そんなものよね
speech|hero|まあそうだね〜
speech|narrator|クロエはオーストラリアには原住民族がいることを教えてくれた。
speech|narrator|アボリジニというらしくそのアボリジニが崇めているエアーズロック(ウルル)というでかい石があるらしい
speech|narrator|観光の一環で動物園や自然公園にも行った
speech|narrator|コアラかわいい、カンガルーでかい...
speech|narrator|主人公はとても癒された
move|turkish
    `;

    let turkishProgress = `
background|turkish.png
speech|narrator|トルコといえばケバブでしょ！！！！と思ってきたトルコ →
speech|narrator|友達のイルハンに会い、観光をしながら文化の説明をしてくれていたが →
speech|narrator|ただ話すだけじゃ面白くないとクイズ形式で教えようとしてくれるみたいだ
riddle|ilhan|turkish_1.png|hints/turkish_1.png|turkish_1_desc.png|けばぶ,ケバブ|
riddle|ilhan|turkish_2.png|hints/turkish_2.png|turkish_2_desc.png|かふたん,カフタン|
riddle|ilhan|turkish_3.png|hints/turkish_3.png|turkish_3_desc.png|さーれっぷ,サーレップ|
speech|ilhan|Selam、ようこそトルコへ！
speech|hero|やっほ〜イルハン！調子はどう？
speech|ilhan|とてもいいよ！今日はすごくワクワクしてるんだ！
speech|hero|ワクワク？それはどうして？
speech|ilhan|君を楽しませてあげようと思ってクイズを作ってきたからさ！
speech|narrator|謎の伸びるアイスがあった、味と見た目の両方で楽しむ事ができたので、とても満足した！日本でも探してみよう。
speech|hero|(トルコ料理おいしいなあ...)
speech|hero|(民族衣装も質素な感じでおしゃれだ)
speech|narrator|飛行機に乗る直前、イルハンのススメでトルココーヒーでコーヒー占いをやってもらうことにした
speech|ilhan|お兄さん、この子に占いやってもらってもいい？
speech|augur|イイヨ〜そこに座りな
speech|hero|お願いします
speech|augur|あ〜これは...
speech|augur|詳しくはわからないけど結果はよくないみたい。乗り物が遅れる？らしい。
move|uk
    `;

    let ukProgress = `
background|uk.png
speech|narrator|飛行機の遅延により、イギリスに到着する予定の時間より少し遅れてしまった。あの占いはもしかして…?
speech|narrator|まあそれより、早く友達に会わなきゃね。
speech|narrator|友人のオリヴィアは少し気位が高く、自国に対する愛が強めだ
speech|olivia|Hi!遅かったね
speech|hero|色々あってね...
speech|olivia|そういえばそういえば貴方、私の国に来るのに勉強はしたの？
speech|hero|全然してないよ、一応でマナーとか調べたくらい。
speech|olivia|！じゃあ私がこの国の文化を教えてあげるわ！
speech|narrator|圧は強かったが自国のクイズを出してくれた
riddle|chloe|uk_1.png|hints/uk_1.png|uk_1_desc.png|ぼらんてぃあ,ボランティア,ほらんてぃあ,ホランティア|
riddle|chloe|uk_2.png|hints/uk_2.png|uk_2_desc.png|victoria|
speech|hero|ヴィクトリアケーキ美味しそう...
speech|olivia|そうでしょう？美味しいのよ、後で食べにいきましょう
speech|hero|やった〜！あ、あとイギリスは少し日本に似てるかもしれないね、ボランティア精神があるところとか
speech|olivia|日本人もボランティアの精神があるのね、さすがと言ったところかしら
speech|narrator|ティータイムを楽しみたくさん観光地を周り、次の国に向かう為の空港に向かう途中、電車に乗ったのが運の尽き。
speech|narrator|イギリスの電車は何かとあるとすぐ止まってしまう。遅延がひどくて、間に合わない。
speech|narrator|あと、トルココーヒーを信じることにした。
move|egypt
    `;

    let egyptProgress = `
background|egypt.png
speech|hero|なんやかんやあってもう４カ国目か〜結構色々な国を巡ったな〜
speech|narrator|エジプトの友人アヴドゥルは時間にルーズなところがあるもののとても人懐っこいところがあるとてもいい友人だ。
speech|hero|アヴドゥル！！
speech|abdul|！اَسَّلاَمُ عَلَيْكُم、きてくれてありがとう！！！
speech|hero|遅れてきたからびっくりしたよ！
speech|abdul|君のためにクイズを作ってたら遅れたんだ
speech|hero|！そっか！
speech|narrator|主人公はほっこりした
riddle|chloe|egypt_1.png|hints/egypt_1.png|egypt_1_desc.png|へかぶ,ヘカブ,へかふ,へカフ|
riddle|chloe|egypt_2.png|hints/egypt_2.png|egypt_2_desc.png|るくそーる,ルクソール|
speech|narrator|観光しながらの会話で...
speech|hero|エジプトの世界遺産は本当にすごい。服装も日本とは違った考え方でとても勉強になった
speech|abdul|日本とは価値観や考え方の違いが大きいからね、僕も日本の文化を聞いたときにびっくりしたよ
speech|hero|そっか、日本の文化は驚くことが多いよね
speech|narrator|飛行機の遅延により、イギリスに到着する予定の時間より少し遅れてしまった。あの占いはもしかして…?
speech|narrator|まあそれより、早く友達に会わなきゃね。
speech|narrator|友人のオリヴィアは少し気位が高く、自国に対する愛が強めだ
speech|olivia|Hi!遅かったね
speech|hero|色々あってね...
speech|olivia|そういえばそういえば貴方、私の国に来るのに勉強はしたの？
speech|hero|全然してないよ、一応でマナーとか調べたくらい。
speech|olivia|！じゃあ私がこの国の文化を教えてあげるわ！
speech|narrator|圧は強かったが自国のクイズを出してくれた
speech|hero|ヴィクトリアケーキ美味しそう...
speech|olivia|そうでしょう？美味しいのよ、後で食べにいきましょう
speech|hero|やった〜！あ、あとイギリスは少し日本に似てるかもしれないね、ボランティア精神があるところとか
speech|olivia|日本人もボランティアの精神があるのね、さすがと言ったところかしら
speech|narrator|ティータイムを楽しみたくさん観光地を周り、次の国に向かう為の空港に向かう途中、電車に乗ったのが運の尽き。
speech|narrator|イギリスの電車は何かとあるとすぐ止まってしまう。遅延がひどくて、間に合わない。
speech|narrator|あと、トルココーヒーを信じることにした。
speech|narrator|空港にて
speech|abdul|もう帰っちゃうんだね、さみしいな
speech|hero|短い間だったけど、楽しかったよ
speech|abdul|絶対またきてね、待ってるよ
speech|hero|もちろん、日本にもさ遊びに来てよ
speech|abdul|！...うん！！
speech|narrator|アヴドゥルと離れるのは少し寂しかったけど、別れを惜しみつつ飛行機に乗った。うん
speech|narrator|空港にて
speech|abdul|もう帰っちゃうんだね、さみしいな
speech|hero|「短い間だったけど、楽しかったよ
speech|abdul|絶対またきてね、待ってるよ
speech|hero|もちろん、日本にもさ遊びに来てよ
speech|abdul|！...うん！！
speech|narrator|アヴドゥルと離れるのは少し寂しかったけど、別れを惜しみつつ飛行機に乗った。
move|brazil
    `;

    let brazilProgress = `
background|brazil.png
speech|narrator|空港まで迎えにきてくれるらしいので待っていたら、2時間ぐらい遅れてきた。ブラジルの人もあまり時間は気にしないらしい。
speech|hero|イザベラ！
speech|izabella|Oi！！！元気？
speech|narrator|会って早々、テンションをぶち上げてきながら突然クイズを出してきた
riddle|chloe|brazil_1.png|brazil_1.png|brazil_1_desc.png|ばいあな,バイアナ|
riddle|chloe|brazil_2.png|brazil_2.png|brazil_2_desc.png|しゅらすこ,シュラスコ|
speech|narrator|クイズに参加したので褒美としてバーベキュー(ほんとはシュラスコというらしいけど)に連れてきてもらった。
speech|hero|たのし〜！、お肉美味しいね
speech|izabella|シュラスコ楽しんでるみたいね！よかったわ！
speech|hero|あの服はさっき言ってた民族衣装？
speech|izabella|そうよ、バイアナって呼ばれているわ
speech|hero|（民族衣装すごいふわふわしてるな）
speech|narrator|お肉をたらふく食べたあとは、イザベラの家族と共にカーニバルを見に来た
speech|hero|サンバすごいね！！！！
speech|izabella|そうでしょう？これが一番見せたかったの！
speech|hero|ありがとうイザベラ！
move|us
    `;

    let usProgress = `
background|us.png
speech|narrator|先進国のアメリカにやってきたラストの国だけにめちゃくちゃテンション上がってる
speech|hero|（あ！あそこにいるのは...！）
speech|anthony|Hey bro!!!調子はどうだい？
speech|hero|ハローアンソニー！最高だよ！
speech|hero|今日も片手にハンバーガー持ってるんだね
speech|anthony|ファストフードは最高だぜ！
speech|hero|少しちょうだい
speech|anthony|ああ一緒に食おうぜBro!
speech|narrator|アンソニーから袋をもらうと、ある文章が目に飛び込んできた
speech|narrator|アンソニーいわく最近流行っているクイズらしい。早速やってみることにした
riddle|anthony|us_1.png|hints/us_1.png|us_1_desc.png|あめふと,アメフト,あめりかんふっとぼーる,アメリカンフットボール|
riddle|anthony|us_2.png|hints/us_2.png|us_2_desc.png|すぱにっしゅ,スパニッシュ|
speech|narrator|途中からアンソニーも参戦して2人で一心不乱に解いていた
speech|hero|なんとか解けたね、アンソニー
speech|anthony|ああ、結構難しいのもあったな
speech|hero|アンソニーはアメフトとかやるの？
speech|anthony|俺はバスケか野球派だな
speech|hero|そっか〜アメリカではその二つもメジャーなスポーツだもんね
speech|anthony|ああ、特に野球は日本人のオオタニが熱いぜ！
speech|hero|ああ！すごいよね！
speech|hero|あとアメリカには色々な人種がいるんだね
speech|anthony|アメリカは多民族国家だからな〜
speech|hero|本当にたくさんの人種の人がいるんだ！
speech|narrator|アンソニーが家に泊めてくれるらしいので、アンソニーの家に向かっている途中、子供だけしか乗っていないバスを見かけた。
speech|hero|アンソニー、あれは何？
speech|anthony|あああれか、あれはスクールバスだぜ、アメリカは人が多いから犯罪も多くてな、特に子供なんかは狙われやすいんだ。だから小中高生なんかはあれに乗って帰るんだ
speech|hero|そうなんだ〜怖いね...
speech|narrator|帰国の時
speech|anthony|今度は遊びに行くからな兄弟！
speech|hero|待ってるよ！
speech|anthony|じゃあな兄弟！
speech|hero|うん、またね！
move|japan
    `;

    let japanProgress = `
background|japan.png
speech|hero|やっと我が家に帰ってきた...疲れたな〜
speech|narrator|ベッドに倒れ込み行ってきた国で撮った写真を見返しながら物思いに耽る
speech|hero|今回の旅行で色々なことを知れた気がする
speech|hero|そういえば、日本の文化ってあんまり知らないなぁ...
speech|hero|そうだ！！！将来民俗学者になって、国のいろんなことを知ろう！！！
speech|hero|まずは図書館に行って...
background|finish.png
speech|narrator|主人公の人生はまだまだ長い、これからどうなっていくのでしょうか、楽しみですね
speech|narrator|皆さんも一度きりの人生、自分の人生を楽しんでくださいね
speech|narrator|プレイしていただきありがとうございました
    `;

    gameData = JSON.parse(`
    {
        "chars": {
            "hero": {
                "name": "主人公",
                "icon": "hero.png",
                "furigana": "しゅじんこう"
            },
            "narrator": {
                "name": "",
                "icon": "narrator.png",
                "furigana": ""
            },
            "anonymous": {
                "name": "？？？",
                "icon": "anonymous.png",
                "furigana": "？？？"
            },
            "huang": {
                "name": "小黄",
                "icon": "huang.png",
                "furigana": "シャオファン"
            },
            "chloe": {
                "name": "クロエ",
                "icon": "chloe.png",
                "furigana": ""
            },
            "ilhan": {
                "name": "イルハン",
                "icon": "ilhan.png",
                "furigana": ""
            },
            "augur": {
                "name": "占い師",
                "icon": "augur.png",
                "furigana": "うらないし"
            },
            "olivia": {
                "name": "オリヴィア",
                "icon": "olivia.png",
                "furigana": ""
            },
            "abdul": {
                "name": "アブドゥル",
                "icon": "abdul.png",
                "furigana": ""
            },
            "izabella": {
                "name": "イザベラ",
                "icon": "izabella.png",
                "furigana": ""
            },
            "anthony": {
                "name": "アントニー",
                "icon": "anthony.png",
                "furigana": ""
            }
        },
        "countries": {
            "china": {
                "name": "中国",
                "progress": []
            },
            "australia": {
                "name": "オーストラリア",
                "progress": []
            },
            "turkish": {
                "name": "トルコ",
                "progress": []
            },
            "uk": {
                "name": "イギリス",
                "progress": []
            },
            "egypt": {
                "name": "エジプト",
                "progress": []
            },
            "brazil": {
                "name": "ブラジル",
                "progress": []
            },
            "us": {
                "name": "アメリカ",
                "progress": []
            },
            "japan": {
                "name": "日本",
                "progress": []
            }
        }
    }
    `);

    gameData.countries.china.progress = convProgressData(chinaProgress);
    gameData.countries.australia.progress = convProgressData(australiaProgress);
    gameData.countries.turkish.progress = convProgressData(turkishProgress);
    gameData.countries.uk.progress = convProgressData(ukProgress);
    gameData.countries.egypt.progress = convProgressData(egyptProgress);
    gameData.countries.brazil.progress = convProgressData(brazilProgress);
    gameData.countries.us.progress = convProgressData(usProgress);
    gameData.countries.japan.progress = convProgressData(japanProgress);
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
