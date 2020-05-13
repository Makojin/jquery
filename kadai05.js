(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#btn_zipcode2address').jpostal({
        click : '#btn_zipcode2address',
        postcode : [
            '#zipcode'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);