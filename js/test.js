$(document).ready(function(){
  $("#testjquery").hide();
  $("button").click(function(){
      $("#testjquery").toggle(1000);
  });
});
