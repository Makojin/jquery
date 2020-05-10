(function($, window) {
  $(function() {
    // この中に処理をかく
    $('h1').addClass('title');
    $('#index').removeClass('list');
    $('h2').show();
    $('#index').find('li').eq(0).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
　　var title =$('h1').text('jQueryのtextメソッドで書き換え');
　　alert(title);
　　$('h1').html('jQueryの<span class="title">htmlメソッド</span>で書き換え');
　　//jQueryオブジェクトを削除するメソッドを調べ、<h2>を非表示(hide)ではなく、削除してみましょう。
　　$('h2').remove();
  });
})(jQuery, window);

