var Images = [
  "assets/images/1.jpg", 
  "assets/images/2.jpg", 
  "assets/images/3.jpg", 
  "assets/images/4.jpg", 
  "assets/images/5.jpg", 
  "assets/images/6.jpg", 
  "assets/images/7.jpg", 
  "assets/images/8.jpg",
  "assets/images/9.jpg", 
  "assets/images/10.jpg",
  "assets/images/guts.png",
  "assets/images/panda.jpg",
];


function shuffle( array ) {
  array.sort(function(a, b){return 0.5 - Math.random()});
  return array;
}

function buildGrid( selector, array ) {
  var html = '';
  for ( var i=0; i < array.length; i++ ) {
    html += '<div class="grid">\n';
    html += '\t<div class="card">\n';
    html += '\t\t<span class="front"></span>\n';
    html += '\t\t<span class="back"><img src="'+ array[i] + '" width="200" height="200" alt="'+array[i]+'"></span>\n';
    html += '\t</div>\n';
    html += '</div>\n';
  }
  $(selector).html( html );  
}

function init() {

  var DoubleImages = Images.concat(Images);
  
  DoubleImages = shuffle( DoubleImages );
  
  buildGrid( "#cards", DoubleImages );
  $(".card").click(function(){

    var $card = $(this);
    if ( $(".flipped").length >= 2 ) {
      return;
    }  
    $card.addClass("flipped");

    if ( $(".flipped").length === 2 ) {

      if ($(".flipped").eq(0).find("img").attr('src') === $(".flipped").eq(1).find("img").attr('src') ) {       
        setTimeout( function(){
          $(".flipped").remove();
          if ( $(".card").length === 0 ) {
            alert( "Fini!")
          }
        }, 1000);
      } else {
        setTimeout( function(){
          $(".flipped").removeClass("flipped");
        }, 2000);
      }
    } 
  });
}

init();