$(document).ready(function(){
    $('#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#img11,#img12,#img13,#img14').mouseenter(function(){
        $(this).css('height','400px',);
        $(this).css('width','400px',);
    });

    $('#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#img11,#img12,#img13,#img14').mouseleave(function(){
        $(this).css('height','350px',);
        $(this).css('width','300px',);
    });

    $('#buy1,#buy2,#buy3,#buy4,#buy5,#buy6,#buy7,#buy8,#buy9,#buy10,#buy11,#buy12,#buy13,#buy14,#buy15').mouseenter(function(){
        $(this).css('background-color','whitesmoke',);
        $(this).css('color','palevioletred',);
    });
    $('#buy1,#buy2,#buy3,#buy4,#buy5,#buy6,#buy7,#buy8,#buy9,#buy10,#buy11,#buy12,#buy13,#buy14,#buy15').mouseleave(function(){
        $(this).css('background-color','palevioletred',);
        $(this).css('color','whitesmoke');
    });
    $('#add1,#add2,#add3,#add4,#add5,#add6,#add7,#add8,#add9,#add10,#add11,#add12,#add13,#add14').mouseleave(function(){
        $(this).css('background-color','palevioletred',);
        $(this).css('color','whitesmoke',);
    });

    $('#add1,#add2,#add3,#add4,#add5,#add6,#add7,#add8,#add9,#add10,#add11,#add12,#add13,#add14').mouseenter(function(){
        $(this).css('background-color','whitesmoke',);
        $(this).css('color','palevioletred',);
    })
    

});

//$(Document).ready(function(){
  //  function asc(){
    //    var grdidItems=$('.flex-container');
      //  grdidItems.sort(function(a,b){
        //    return(
          //      $('.ds1',a).data("price")-$('.ds1',b).data("price")
            //)
//
  //      });
    //};
    //$('#asc').append(gridItems);
//});

//$(document).ready(function() {
  //var productList = $('#product-list');
  //var products = productList('.ds1');

  // Sort in ascending order
  ///products.sort(function(a, b) {
    //var priceA = parseInt($(a).data('price'));
    //var priceB = parseInt($(b).data('price'));
    //return priceA - priceB;
  //});
  
 // $('.asc').click(function()
  //{
    //productList.append(products);
  //})
//});

$(Document).ready(function(){
    $('#aaa').click(function(){
        $('#img1,#img2,#img6,#img7,#img8,#img10,#img12,#img14,#good1,#good2,#good6,#good7,#good8,#good10,#good12,#good14').hide();
        $('#img3,#img4,#img13,#good3,#good4,#good13').show();
    });

    $('#bbb').click(function(){
      $('#img1,#img2,#img3,#img4,#img6,#img8,#img10,#img14,#img13,#good1,#good2,#good3,#good4,#good6,#good8,#good10,#good1,#good13,#good14') .hide();
      $('#img7,#img12,#good7,#good12').show();

    });
    
    $('#ccc').click(function(){
      $('#img2,#img3,#img4,#img8,#img10,#img13,#img12,#img7,#good7,#good2,#good3,#good4,#good8,#good10,#good1,#good13,#good12') .hide();
      $('#img1,#img6,#img14,#good1,#img14,#good6,#good14').show();

    });
    $('#ddd').click(function(){
      $('#img1,#img3,#img4,#img6,#img7,#img14,#img13,#img12,#good1,#good3,#good4,#good7,#good12,#good6,#good1,#good13,#good14') .hide();
      $('#img2,#img10,#img8,#good2,#good10,#good8').show();

    });
    

});


$(document).ready(function(){
  $('#aaa,#bbb,#ccc,#ddd').mouseenter(function(){
    $(this).css('background-color','whitesmoke',);
    $(this).css('color','palevioletred',);
    $(this).css('border','2.5px solid palevioletred',);
})
$('#aaa,#bbb,#ccc,#ddd').mouseleave(function(){
  $(this).css('background-color','palevioletred',);
  $(this).css('color','white');
})

})

$(document).ready(function(){
$("#yourcart").mouseenter(function(){
  $(this).css('background-color','plum');
  $(this).css('color','white');
})
$("#yourcart").mouseleave(function(){
  $(this).css('background-color','whitesmoke');
  $(this).css('color','palevioletred');
})
})



$(document).ready(function(){
  $("#aaa,#bbb,#ccc,#ddd,#yourcart,#add1,#add2,#add3,#add4,#add5,#add6,#add7,#add8,#add9,#add10,#add11,#add12,#add13,#add14,#buy1,#buy2,#buy3,#buy4,#buy5,#buy6,#buy7,#buy8,#buy9,#buy10,#buy11,#buy12,#buy13,#buy14,#buy15").click(function(){
    //$(this).fadeToggle();
    //$(this).fadeToggle("slow");
    //$(this).fadeToggle(1000);
     $(this).fadeTo("fast", 0.2);
    $(this).fadeTo("fast", 0.2);
    $(this).fadeTo("fast", 1);
  });
});
$(document).ready(function(){
      $('#add1,#add2,#add3,#add4,#add5,#add6,#add7,#add8,#add9,#add10,#add11,#add12,#add13,#add14').click(function(){
   var pop=prompt("Hey, please enter the number of t-shirts you would like to purchase:");
    var size=prompt("Please select the size you want  to buy? (XL /  S / M / / XL")
    alert("Congratulations, your "+ pop+" t-shirts of size " + size + " have been added to the cart :)"  );
    
   })
     })

   $(document).ready(function(){
    ('#cart-items').hide();
    $("#yourcart").click(function(){
      $('#cart-items').show();
    })

   })


$(document).ready(function(){
  $('#add1').click(function(){
    var a=$('#ru1').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add1').click(function(){
    var b=$('#ttt1').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add2').click(function(){
    var a=$('#ru2').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add2').click(function(){
    var b=$('#ttt2').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add3').click(function(){
    var a=$('#ru3').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add3').click(function(){
    var b=$('#ttt3').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add4').click(function(){
    var a=$('#ru4').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add4').click(function(){
    var b=$('#ttt4').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add6').click(function(){
    var a=$('#ru6').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add6').click(function(){
    var b=$('#ttt6').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add7').click(function(){
    var a=$('#ru7').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add7').click(function(){
    var b=$('#ttt17').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add8').click(function(){
    var a=$('#ru8').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add8').click(function(){
    var b=$('#ttt8').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add10').click(function(){
    var a=$('#ru10').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add10').click(function(){
    var b=$('#ttt10').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add11').click(function(){
    var a=$('#ru11').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add11').click(function(){
    var b=$('#ttt11').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add12').click(function(){
    var a=$('#ru12').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add12').click(function(){
    var b=$('#ttt12').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add13').click(function(){
    var a=$('#ru13').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add13').click(function(){
    var b=$('#ttt13').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })

  $('#add14').click(function(){
    var a=$('#ru14').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append(a);
  })

  $('#add14').click(function(){
    var b=$('#ttt14').html();
    //$('#cart-items').html(a);
    //$(a).removeClass("below");
    $('#cart-items').append( b);
  })
})

