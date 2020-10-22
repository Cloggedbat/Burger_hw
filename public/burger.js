// var orm = require("../config/orm.js");

$(document).ready(function(){
    $("#subButton").on("click", function(event){
        event.preventDefault()
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
            
            location.reload()
            
        })
        
    
    })

})
