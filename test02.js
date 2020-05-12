(function($, window) {
  $(function() {
//1.jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。
　　$('h2').remove();

//2.#indexにtext()メソッドとhtml()メソッド(ともにパラメータ無し)を実行して、その違いについて比べてみましょう。　htmlだとundefinedが表示された。
    var text1 = $('index').text();
    alert(text1);

    var text2 = $('index').html();
    alert(text2);


//3.子要素を追加するappendというメソッドについて調べ、ul#indexの最後に<li>メソッド</li>を追加してみましょう
    $('ul').append('メソッド');
    
//4.ul#indexの子要素<li>それぞれ文字列の長さをalertしてみましょう。    
    
    $('#index').find('li').each(function() {
      var count = $(this).text().length;
      alert(count);
    });
//5.4.でalertではなく、各文字列の最後にその長さを追加してみましょう。例：jQueryのはじめ方[11文字]    
    $('#index').find('li').each(function() {
      alert($(this).text() + '[' + $(this).text().length + '文字]');
    });
  });
})(jQuery, window);

