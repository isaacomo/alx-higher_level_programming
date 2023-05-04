$(document).ready(function() {
  // Add event listener to DIV#add_item
  $('#add_item').click(function() {
    // Create a new <li> element with text "Item"
    const newElement = $('<li>').text('Item');
    // Add the new <li> element to UL.my_list
    $('ul.my_list').append(newElement);
  });

  // Add event listener to DIV#remove_item
  $('#remove_item').click(function() {
    // Remove the last <li> element from UL.my_list
    $('ul.my_list li:last-child').remove();
  });

  // Add event listener to DIV#clear_list
  $('#clear_list').click(function() {
    // Remove all <li> elements from UL.my_list
    $('ul.my_list').empty();
  });
});
