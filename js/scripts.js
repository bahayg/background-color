$(document).ready(function() {
  $("button#green").click(function(){
    $("body").removeClass();
    $("#grab-here").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("#grab-here").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("#grab-here").removeClass();
    $("body").addClass("red-background");
  });
  $("button#light").click(function() {
    $("body").removeClass();
    $("#grab-here").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("#grab-here").removeClass();
    $("body").addClass("dark-background");
  });

  $("#grab-here").click(function() {
    $("#grab-here").removeClass();
    $("#grab-here").addClass("highlight");
  })
})
