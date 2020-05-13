(function($, window) {

function emailCheck(email) {
  var email = $('#email').val();
  if (email == '') {
    alert('メールアドレスを入力してください');
  } else if (email.indexOf('@') < 0) {
    alert('メールアドレスには必ず「@」が必要です');
  }
}

function passwordCheck(password) {
  var password = $('#password').val();
  if (password == '') {
    alert('パスワードを入力してください');
  } else if (password.length < 6) {
    alert('パスワードは6文字以上です');
  }
}

$('#login').on('click', function() {
  emailCheck(email);
  passwordCheck(password);
});

})(jQuery, window);