ContactForm =
  form: $('#contact-form')
  formMessages: $('#contact-form-messages')

  submit: ->
    ContactForm.form.on 'submit', (e) ->
      e.preventDefault()
      formData = ContactForm.form.serialize()
      $.ajax
        type: 'POST'
        url: ContactForm.form.attr('action')
        data: formData
        success: (response) ->
          ContactForm.success(response)
        error: (data) ->
          console.log(data)
          ContactForm.error(data)

  success: (response) ->
    name = $('#name')
    email = $('#email')
    url = $('#url')
    comment = $('#comment')
    ContactForm.formMessages.removeClass('error').addClass('success').text(response)
    name.val('')
    email.val('')
    url.val('')
    comment.val('')

  error: (data) ->
    ContactForm.formMessages.removeClass('success').addClass('error')
    if (data.responseText is not '')
      ContactForm.formMessages.text(data.responseText)
    else
      ContactForm.formMessages.text('An error occurred and your message could not be sent.')

ContactForm.submit()
