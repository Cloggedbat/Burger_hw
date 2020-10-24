$(document).ready(function () {
  $("#subButton").on("click", function (event) {

    //    prevent defult is off

    // event.preventDefault()
    console.log("click")

    var newBurger = {
      name: $("#box1").val().trim(),
    }
    console.log(newBurger)
    $.ajax("/api/Burgers", {
      type: 'POST',
      data: newBurger,
    })
      .done(function () {
        console.log(".done")


      })
    location.reload()


  })
})

$(".eat").on("click", function (event) {
  console.log("click")


  var id = $(this).data("id");
  var eatenToTheMax = 1;
  var newBurgerState = {
    eaten: eatenToTheMax
  };
  console.log("sleepy" ,newBurgerState )
  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newBurgerState
  }).done(
    function () {
      console.log("changed sleep to", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

