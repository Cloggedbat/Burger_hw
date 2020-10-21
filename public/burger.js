$(document).ready(function(){
    $("#subButton").on("click", function(event){
        event.preventDefault()
        console.log("click")
    
    $.ajax({
        method: 'POST',
        data: {
            name:"cheese burger"
            },
        url: "api/burgers"
    })
    .done(function(){
        console.log(".done")


    })
    
    })

})


