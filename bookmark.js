javascript: (function() {
  if (!($ = window.jQuery)) {
    script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
    script.onload = '$("body").css("background-color","#000000")';
    document.body.appendChild(script);
  }
  input = (window.location.href.split('?')[0]);
  input_url = input.substring(0, input.length - 1) + '/media/?size=l';
  $.ajax({
    type: "POST",
    url: "http://localhost:8000/",
    dataType: 'jsonp',
    data: '{ "url":' + input_url + '}',
    success: function(data, textStatus, jQxhr) {
      console.log("");
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log("");
    }
  });
})();
