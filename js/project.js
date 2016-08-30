$(document).ready(function() {
  $("nav a").click(function() {
    $("nav a").removeClass("current");
    $(this).addClass("current");
  });

  $("#submit").click(function() {
    var selector = "#" + $("nav a.current").data("ipsum");
    $(".ipsum").hide();
    $(selector).find("p").slice(0, $("#paragraphs").val()).show();
    $(selector).slideDown(400);
  });

  $("#paragraphs").focus(function() {
    $("#paragraphs").val("");
    $(".ipsum").slideUp(1000, function() {
      $("p").hide();
    });
  });
});