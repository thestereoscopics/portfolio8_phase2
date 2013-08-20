$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  
  $('.add').on('click', bindEvents);
  $('.todo_list').on('click', '.delete', removeTodo);
  $('.todo_list').on('click', '.complete', completTodo);

  function removeTodo() {
    $(this).closest('div').remove();
  }

  function completTodo() {
    $(this).closest('div').css('color', 'green').append("complete");

  }
  
  function bindEvents() {
    todo = $('.todo').val();
    $template = buildTodo(todo);
    $('.todo_list').append($template);
    clearFocusInput();
  }

  function clearFocusInput() {
    $('.todo').val("");
    $('.todo').focus();
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

});


  