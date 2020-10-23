// var orm = require("../config/orm.js");

$(document).ready(function(){
    $("#subButton").on("click", function(event){
       
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
        .done(function(){
            console.log(".done")
            
            
        })
        location.reload()
        
    
    })

    $(".change-hunger").on("click", function(event) {
        var newBurger = $(this).data("newBurger");
    
        var newBurgerState = {
          eaten: newBurger
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/", {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            console.log("changed sleep to", newSleep);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
})
