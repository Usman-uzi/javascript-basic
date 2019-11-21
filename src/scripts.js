function getVideos() {
  $.ajax({
    type: "GET",
    url: "http://youemojis.s3.amazonaws.com/list.json",
    dataType: "json",
    contentType: "application/json",
    success: function(data) {
      debugger;
      $.each(data, function(index, element) {
        $("body").append(
          $("<div>", {
            text: element.name
          })
        );
      });
    }
  });
}
