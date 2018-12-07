
// check off spacific todo by clicking
// really only listening to the li's inside of ul
$('ul').on('click', 'li', function(){
$(this).toggleClass('completed')
});


// click on x to delete todo
// we are listening with the page for when on-"click" is hit
// we only want code to run when a <span> is hit
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// creating new todo's
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
  var toDoText = $(this).val()
  $(this).val('')
  // create a new li and add to ul
  // append method can take a string
  // and append it to whatever we want
  $('ul').append('<li><span><i class="fa fa-trash"></i> </span>' + toDoText + '</li>');
  }
});

$('.fa-plus-square').click(function(){
  $("input[type='text']").fadeToggle();
});
