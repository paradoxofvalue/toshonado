const Form = {
  init() {
    $("form.material__form").on("submit", function(event){
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize(),
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
          alert(response.message);
        },
        error: function (response) {
          alert(response.message);
        }
      });
    });
  },
};

export default Form;
