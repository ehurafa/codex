$(window).load(function(){  

  
  //$('.user_gallery').addClass(idx);
  
  $('.myig_gallery .user_gallery').each(function(i){
    //var idx = $('.user_gallery').index(this); console.log('idx'+ idx);
    
    //$(this).addClass($(this).index());
      var $this = $(this); 
     var newClass = "item-" + i++;
    $this.addClass(newClass);
  });

  $('.user_gallery.item-0').clone().appendTo( $( ".img-insta-1" )  );
  $('.user_gallery.item-1').clone().appendTo( $( ".img-insta-2" )  );
  $('.user_gallery.item-2').clone().appendTo( $( ".img-insta-3" )  );
  $('.user_gallery.item-3').clone().appendTo( $( ".img-insta-4" )  );
  $('.user_gallery.item-4').clone().appendTo( $( ".img-insta-5" )  );
 
  $('.demo').hide();

  loader();
});


$(document).ready(function(){
  $(".demo").myig(
    ins_id = 241717107, // your user_id
    ins_count = 5, // Count of media to return
    ins_token = '241717107.1677ed0.53119ba6c6b44ce18e7900ce2cbeed6d' // your token
  );
});


function loader(){
  $('.loader').hide();
  $('section').removeClass('hide');
}

/*
$(function(){
      $('.parallax').each(function(){


       // $( "section" ).offset({ top: +=10});

        var $obj = $(this); console.log('$obj' + $obj);
        var x = $obj.offset();
        var xTop = x.top;    console.log('offsetTopx' +  xTop );  
        var xTopPlus = xTop  += 10;  console.log('xtop Plus' +  xTopPlus ); 

           
         
        $(window).scroll(function() {
          var yPos = -($(window).scrollTop() / $obj.data('speed')); 

         console.log('window' + $(window).scrollTop() );
          console.log('yPos' + yPos );

         $($obj).css('top', xTopPlus );
          //$($obj).addClass('teste')
          
         // var bgpos = '50% '+ yPos + 'px';       
          //$obj.css('background-position', bgpos );     
        });

      });
    });
*/

function section2(){
  $('.section-2').each(function(){
    var $this = $(this);
    var x = $this.offset();
    var xTop = x.top;    console.log('offsetTopx' +  xTop );

    // img1
    var img1 = $(this).find('.img-1');
    var img1X = img1.offset().top;
    var img1H = img1.height() * 2; 

    // img2
    var img2 = $(this).find('.bloco-3 .img-3');
    var img2X = img2.offset().top;
    var img2H = img2.height() * 2; 




    $(window).scroll(function() {
  
      if(  $(window).scrollTop() > (img1X - img1H) ){
        $('.section-2 .bloco.bloco-2 .img-2, .section-2 .bloco.bloco-2 .img-3').addClass('animado');
      }else{
        $('.section-2 .bloco.bloco-2 .img-2, .section-2 .bloco.bloco-2 .img-3').removeClass('animado');
      }


      if(  $(window).scrollTop() > (img2X - img2H) ){
        $('.section-2 .bloco.bloco-1 .img-3, .section-2 .bloco.bloco-3 .img-3').addClass('animado');
      }else{
        $('.section-2 .bloco.bloco-1 .img-3, .section-2 .bloco.bloco-3 .img-3').removeClass('animado');
      }

    });

  });


/*
  $('.section-3').each(function(){
    var el = $(this); console.log('el' + el);
    var y = el.offset();console.log('y' + y);
    var top = y.top;    console.log('ytop' + top);


    $(window).scroll(function() {  console.log('ytop' + top);
  
      if(  $(window).scrollTop() > top ){
        $('.section-3  .fundo').addClass('animado');
      }else{
         $('.section-3 .fundo').removeClass('remove');
      }


    });

  });
  */
}

section2()