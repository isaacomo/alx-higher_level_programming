$(document).ready(function() {
  // Add event listener to INPUT#btn_translate
  $('#btn_translate').click(function() {
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
  });
});
