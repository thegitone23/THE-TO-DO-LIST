
// The strike through effect 
$("ul").on("click","li",function(){
  $(this).toggleClass("done");
});

// The delete effect
$("ul").on("click","span",function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  })
});

// Adding New to-do's
$("input").keypress(function(event){
  if(event.which === 13) //the number for enter key
    {
      var text = $(this).val();
      $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+text+"</li>")
      $(this).val("");
      
    }
});

//the + sign functionallity
$("h1 i").on("click",function(){
  $("input").fadeToggle();
  $(this).toggleClass("fa-plus").toggleClass("fa-minus");
});
