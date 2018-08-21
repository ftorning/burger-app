console.log("js loaded");

$("body").on("click", ".burger-item", function(event) {
    console.log("clicked");
    var id = $(this).data("value");
    var devouredState = $(this).data("devoured");
    console.log(id);
    console.log(!devouredState);
    var newDevouredState = {
        devoured: !devouredState
    };

    $.ajax("api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(() => {
        console.log("devoured");
        location.reload();
    })
  

})