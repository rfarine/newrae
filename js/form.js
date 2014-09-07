(function() {
  var ContactForm;

  ContactForm = {
    form: $('#contact-form'),
    formMessages: $('#contact-form-messages'),
    submit: function() {
      return ContactForm.form.on('submit', function(e) {
        var formData;
        e.preventDefault();
        formData = ContactForm.form.serialize();
        return $.ajax({
          type: 'POST',
          url: ContactForm.form.attr('action'),
          data: formData,
          success: function(response) {
            return ContactForm.success(response);
          },
          error: function(data) {
            console.log(data);
            return ContactForm.error(data);
          }
        });
      });
    },
    success: function(response) {
      var comment, email, name, url;
      name = $('#name');
      email = $('#email');
      url = $('#url');
      comment = $('#comment');
      ContactForm.formMessages.removeClass('error').addClass('success').text(response);
      name.val('');
      email.val('');
      url.val('');
      return comment.val('');
    },
    error: function(data) {
      ContactForm.formMessages.removeClass('success').addClass('error');
      if (data.responseText === !'') {
        return ContactForm.formMessages.text(data.responseText);
      } else {
        return ContactForm.formMessages.text('An error occurred and your message could not be sent.');
      }
    }
  };

  ContactForm.submit();

}).call(this);
