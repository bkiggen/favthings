$(document).ready(function(){
  var array = [];

  $("form#fav-form").submit(function(event){
    event.preventDefault();
    array.push(" " + $("input#fav-input").val());
    $("#output").text(array);
    console.log(typeof array);
  });
});
