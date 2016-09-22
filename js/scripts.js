$(function() {
  $("form#personal").submit(function(event) {

    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var destroy = $("select#destroy").val();
    var seasons = $("input:radio[name=operator]:checked").val();

    event.preventDefault();

    // if (age < 14) {
    //   alert("hi");
    //   $("#vespa").show();
    // }
    //
    if (age) {
      if (age > 70) {
        alert("You're too old for quizzes!");
      } else if (age < 34 && seasons === 'spring') {
        $("#vespa").show();
      }
    }

  });
});
