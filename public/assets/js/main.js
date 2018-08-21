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

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger-name").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

