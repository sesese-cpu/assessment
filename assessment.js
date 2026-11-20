'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(　//イベント検知設定の追加
  'click',
  function() {　//イベント検知されたら実行される
    const userName = userNameInput.value;　//入力欄（input）の値を取得
    if (userName.length === 0) {
      //入力が空だったら、
      return; //関数の処理を終了する。
    }

    //診断結果表示エリアの作成
    resultDivision.innerText = '' //divタグを空文字で上書きすることで空にしてから始まる
    const header = document.createElement('h3') //h3タグの作成
    header.innerText = '診断結果'　//タグの内側のテキストを設定
    resultDivision.appendChild(header) //divタグの子要素として追加

    const paragraph = document.createElement('p'); //pタグの作成
    const result = assessment(userName);　//診断結果を作成
    paragraph.innerText = result;　//ｐタグの内側のテキストを設定
    resultDivision.appendChild(paragraph) //divタグの子要素として追加
  
  tweetDivision.innerText = '';
    const anchor = document.createElement('a'); //aタグの作成
    const hrefValue =
      'https://x.com/intent/tweet?button_hashtag='+ 
      encodeURIComponent('あなたのいいところ') + 
      '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);　//属性hrefを追加
    anchor.setAttribute('class', 'twitter-hashtag-button');
    anchor.setAttribute('data-text', '診断結果の文章');　//診断結果を追加
    anchor.innerText = 'Tweet #あなたのいいところ';　//ボタンの文章

    tweetDivision.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivision.appendChild(script);
  }
);
userNameInput.addEventListener( //イベント検知の追加
  'keydown',　//キー入力
  (event) => {
    if(event.code === 'Enter') { //押されたキーがEnterなら
      assessmentButton.dispatchEvent(new Event('click'))
    }
  }
)
const answers = [
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
 function assessment(userName) {
   // 全文字のコード番号を取得してそれを足し合わせる
   let sumOfCharCode = 0; //文字コードの合計を取っておく変数
   for ( let i = 0; i < userName.length; i++) { //文字数回ループ
    sumOfCharCode += userName.charCodeAt(i); //合計を計算
    }
    const index = sumOfCharCode % answers.length; //合計値を配列の要素数で余りをとることで、配列の要素数の数値に収める
    let result = answers[index]; //配列から答えを取得
    result = result.replaceAll('###userName###', userName);

   return result;  //診断結果を返す
 }

 