$(document).ready(function() {
  // Add event listeners to INPUT#btn_translate and INPUT#language_code
  $('#btn_translate, #language_code').on('click keypress', function(e) {
    if (e.type === 'click' || e.which === 13) { // Only trigger on click or enter key press
      // Get the language code entered in INPUT#language_code
      const languageCode = $('#language_code').val();
      // Send a GET request to the API service with the language code as a parameter
      $.ajax({
        url: `https://www.fourtonfish.com/hellosalut/?lang=${languageCode}`,
        type: 'GET',
        success: function(response) {
          // Display the translation of "Hello" in DIV#hello
          $('#hello').text(response.hello);
        },
        error: function(error) {
          // Display an error message in DIV#hello if the API call fails
          $('#hello').text('Error: ' + error.statusText);
        }
      });
    }
  });
});

