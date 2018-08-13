$(document).ready(function(){
  var array = [];

  $("form#fav-form").submit(function(event){
    event.preventDefault();
    array.push(" " + $("input#fav-input").val());
    $("#output p").text(array);
    var newArray = array.slice();

    if (array.length === 3){
      $("#output ul").append("<li>" + array[0] + "</li>");
      $("#output ul").append("<li>" + array[1] + "</li>");
      $("#output ul").append("<li>" + array[2] + "</li>");
    } else {

    };
  });
});
