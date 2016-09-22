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
      } else if (age < 14 && (seasons === 'spring' || gender === 'female')) {
        $("#vespa").show();
      } else if (destroy === 'lasers' && seasons === 'winter') {
        $("#darkhelmet").show();
      } else if (destroy === 'deathstar' && (seasons === 'summer' && gender === 'male')) {
        $("#pizza").addClass("pepperoni");
        $("#pizza").show();

      } else {
        $("#lonestarr").show();
      }
    } else {
      alert("Plese enter your age, dummy!");
    }
  });
});
