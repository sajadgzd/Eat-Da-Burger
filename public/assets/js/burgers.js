// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");

        var newdevoured = $(this).data("newdevoured");

        var newdevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newdevouredState
        }).then(
            function() {
                console.log("changed devoured to", newdevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("deleted burger with id: ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



});