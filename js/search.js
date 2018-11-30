function search() {
  var query = $('#query').val();
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ query 
    +'&maxResults=15&key=AIzaSyC0hGl0nTSPARgXwWKR_GNyfdl9IYhbPjg', function(response){
    var data = response.items
    $.each(data, function(key, element){
      if(element.id.kind == "youtube#video"){
        console.log(element.id.kind)
        $('#video').append(
          '<br><iframe class="click_video" src=https://www.youtube.com/embed/'
          + element.id.videoId 
          + '></iframe>'
          + '<br><label>' + element.snippet.title + '</label><br>'
        );
      }
    });
  });
  $('#video').html("");
};