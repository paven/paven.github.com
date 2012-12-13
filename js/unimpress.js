
function goToByScroll(id){
    $("#"+id).parents().animate({
      scrollTop: $("#"+id).offset().top,
      scrollLeft: $("#"+id).offset().left  
    }, 'slow', function() {
    // Animation complete.
  });       
}
