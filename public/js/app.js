$(function () {
    $(".eat-btn").on("click", function (e) {

      const id = $(e.target).data("id");
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(() => location.reload());
    });


    $(".form").on("submit", function (e) {
      e.preventDefault();
      const burger_name = $("#ca").val().trim();
      $.ajax("/api/burgers", {
        type: "POST",
        data: { burger_name },
      }).then(() => location.reload());
    });
  });