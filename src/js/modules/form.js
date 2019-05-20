const Form = {
  init() {
    $("form.material__form").on("submit", function(event){
      event.preventDefault();
      let data = {
        'name': $(this).find('[name="name"]').val(),
        'phone': $(this).find('[name="phone"]').val(),
        'message': $(this).find('[name="message"]').val(),
      };
      $.ajax({
        type: "POST",
        url: "send.php",
        data: data,
        dataType: 'json',
        success: function (response) {
          console.log(response);
          alert(response.message);
        },
        error: function (response) {
          console.log(response);
          alert(response.message);
        }
      });
    });
  },
};

export default Form;
