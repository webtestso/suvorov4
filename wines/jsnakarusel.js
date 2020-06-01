$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");

  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });

    $(".next").click(function(){
    sync1.trigger('owl.next');
  })
  $(".prev").click(function(){
    sync1.trigger('owl.prev');
  })



    var sync3 = $("#sync3");

    sync3.owlCarousel({
      singleItem : true,
      slideSpeed : 1000,
      pagination:false,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
    });

      $(".next").click(function(){
      sync3.trigger('owl.next');
    })
    $(".prev").click(function(){
      sync3.trigger('owl.prev');
    })


        var sync4 = $("#sync4");

        sync4.owlCarousel({
          singleItem : true,
          slideSpeed : 1000,
          pagination:false,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });

          $(".next").click(function(){
          sync4.trigger('owl.next');
        })
        $(".prev").click(function(){
          sync4.trigger('owl.prev');
        })

        var sync5 = $("#sync5");

        sync5.owlCarousel({
          singleItem : true,
          slideSpeed : 1000,
          pagination:false,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });

          $(".next").click(function(){
          sync5.trigger('owl.next');
        })
        $(".prev").click(function(){
          sync5.trigger('owl.prev');
        })

        var sync7 = $("#sync7");

        sync7.owlCarousel({
          singleItem : true,
          slideSpeed : 1000,
          pagination:false,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });

          $(".next").click(function(){
          sync7.trigger('owl.next');
        })
        $(".prev").click(function(){
          sync7.trigger('owl.prev');
        })


        var sync8 = $("#sync8");

        sync8.owlCarousel({
          autoPlay : true,
          singleItem : true,
          slideSpeed : 1000,
          pagination:false,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });




  sync2.owlCarousel({
    items : 6,
    itemsDesktop      : [1199,6],
    itemsDesktopSmall     : [979,6],
    itemsTablet       : [768,4],
    itemsMobile       : [479,3],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });

  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }

  $('.close').click(function(){
    carousel.data('owlCarousel').jumpTo(1)
  });

});

















//
// $(document).ready(function() {
//
//   var sync1 = $("#sync1");
//   var sync2 = $("#sync2");
//
//   sync1.owlCarousel({
//     singleItem : true,
//     slideSpeed : 1000,
//     pagination:false,
//     afterAction : syncPosition,
//     responsiveRefreshRate : 200,
//   });
//
//     $(".next").click(function(){
//     sync1.trigger('owl.next');
//   })
//   $(".prev").click(function(){
//     sync1.trigger('owl.prev');
//   })
//
//
//
//     var sync3 = $("#sync3");
//
//     sync3.owlCarousel({
//       singleItem : true,
//       slideSpeed : 1000,
//       pagination:false,
//       afterAction : syncPosition,
//       responsiveRefreshRate : 200,
//     });
//
//       $(".next").click(function(){
//       sync3.trigger('owl.next');
//     })
//     $(".prev").click(function(){
//       sync3.trigger('owl.prev');
//     })
//
//
//         var sync4 = $("#sync4");
//
//         sync4.owlCarousel({
//           singleItem : true,
//           slideSpeed : 1000,
//           pagination:false,
//           afterAction : syncPosition,
//           responsiveRefreshRate : 200,
//         });
//
//           $(".next").click(function(){
//           sync4.trigger('owl.next');
//         })
//         $(".prev").click(function(){
//           sync4.trigger('owl.prev');
//         })
//
//         var sync5 = $("#sync5");
//
//         sync5.owlCarousel({
//           singleItem : true,
//           slideSpeed : 1000,
//           pagination:false,
//           afterAction : syncPosition,
//           responsiveRefreshRate : 200,
//         });
//
//           $(".next").click(function(){
//           sync5.trigger('owl.next');
//         })
//         $(".prev").click(function(){
//           sync5.trigger('owl.prev');
//         })
//
//         var sync7 = $("#sync7");
//
//         sync7.owlCarousel({
//           singleItem : true,
//           slideSpeed : 1000,
//           pagination:false,
//           afterAction : syncPosition,
//           responsiveRefreshRate : 200,
//         });
//
//           $(".next").click(function(){
//           sync7.trigger('owl.next');
//         })
//         $(".prev").click(function(){
//           sync7.trigger('owl.prev');
//         })
//
//   sync2.owlCarousel({
//     items : 6,
//     itemsDesktop      : [1199,6],
//     itemsDesktopSmall     : [979,6],
//     itemsTablet       : [768,4],
//     itemsMobile       : [479,3],
//     pagination:false,
//     responsiveRefreshRate : 100,
//     afterInit : function(el){
//       el.find(".owl-item").eq(0).addClass("synced");
//     }
//   });
//
//   function syncPosition(el){
//     var current = this.currentItem;
//     $("#sync2")
//       .find(".owl-item")
//       .removeClass("synced")
//       .eq(current)
//       .addClass("synced")
//     if($("#sync2").data("owlCarousel") !== undefined){
//       center(current)
//     }
//   }
//
//   $("#sync2").on("click", ".owl-item", function(e){
//     e.preventDefault();
//     var number = $(this).data("owlItem");
//     sync1.trigger("owl.goTo",number);
//   });
//
//   function center(number){
//     var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
//     var num = number;
//     var found = false;
//     for(var i in sync2visible){
//       if(num === sync2visible[i]){
//         var found = true;
//       }
//     }
//
//     if(found===false){
//       if(num>sync2visible[sync2visible.length-1]){
//         sync2.trigger("owl.goTo", num - sync2visible.length+2)
//       }else{
//         if(num - 1 === -1){
//           num = 0;
//         }
//         sync2.trigger("owl.goTo", num);
//       }
//     } else if(num === sync2visible[sync2visible.length-1]){
//       sync2.trigger("owl.goTo", sync2visible[1])
//     } else if(num === sync2visible[0]){
//       sync2.trigger("owl.goTo", num-1)
//     }
//
//   }
//
//   $('.close').click(function(){
//     carousel.data('owlCarousel').jumpTo(1)
//   });
//
// });
