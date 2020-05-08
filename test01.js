//alert('外部ファイル');

var a = 1;
//alert(a);

var b =2;
var c = a+b;
//alert(c);

var A = 'りんご';
var B = 'バナナ';
var C= A+B;
//alert(C);

var fruits = ['りんご','バナナ'];
//alert(fruits[0]);
//alert(fruits[1]);

var fruits = {'name':'りんご','price':'100'};
//alert(fruits['name']);
//alert(fruits.name);
//alert(fruits.price);

//var answer = prompt('1+1は?');
//alert(answer);

//1.promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
//2.1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。


var answer = prompt('1,-1');
if (answer == '1') {
  alert('正の数');
} else if (answer == '-1') {
  alert('負の数');
} else {
  alert('数値を入力してください');
}

//3.配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
//4.3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
//5.4.で中断したときの'ライオン'の添字もalertするように変更してください
var animals = ['パンダ','ライオン','キリン'];
var answer = prompt('好きな動物は？');
if (answer =='ライオン' && animals[i] === 'ライオン'  );{
    alert('ライオン');
}


var i = 0;
while (true) {
  if (i >= animals.length) {
    break;
  }
  alert(animals[i]);
  i++;
}


//6.オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
//7.6.でpromptで入力した動物名の体重をalertするように変更してください。

var G = [
    {'name': 'パンダ', 'weight': '80' },
    {'name': 'ライオン', 'weight': '200' },
    {'name': 'キリン', 'weight': '300' }
    ];
var answer= prompt('動物の名前（パンダ/ライオン/キリン）を入力してください。');
switch (answer) {
  case 'パンダ':
  alert(G[0].weight+ ' kg');
  break;
  case 'ライオン':
  alert(G[1].weight+ ' kg');
  break;
  case 'キリン':
  alert(G[2].weight+ ' kg');
  break;
  default:
  alert('パンダ or ライオン or キリンを入力してください');
}

//8.円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。

var radius = prompt('円の半径を入力してください。');

function area(x) {
  return x * x * 3.14;
}

alert(area(radius));