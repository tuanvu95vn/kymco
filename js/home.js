
//...................MAIN.......................
//-SLIDER-Flickity
jQuery(document).ready(function(){
    var elem = document.querySelector('.slider__item-wrap');
    var flSlider = new Flickity( elem, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    //-change numb page
    $(".slider__item").on('pointerup',function(){
        setTimeout(function (){
        let numb = parseInt(flSlider.selectedIndex, 10) + 1;
        numb = numb.toString().padStart(2,'0').padEnd(4,' /')
        $('.homepage .slider__bottom-paging .current').text(numb)
        },10)
    });
    //-Fix bug resize but not responsive
    $(window).resize(function(){
        flSlider.destroy()
        flSlider = new Flickity( elem, {
            // options
              cellAlign: 'left',
              contain: true,
              draggable: true,
              prevNextButtons: false,
              pageDots: false,
              freeScroll: false
          });
    })
})

//-MISSION-Flickity
jQuery(document).ready(function(){
    var elem2 = document.querySelector('.caurousel');
    var flMission = new Flickity( elem2, {
      // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false,
        wrapAround: true
    });
    $('.mission .btn-control .right').click(function () {
        flMission.next(true,false)
    })
    $('.mission .btn-control .left').click(function () {
        flMission.previous(true,false)
    })
     //-Fix bug resize but not responsive
     $(window).resize(function(){
        flMission.destroy()
        flMission = new Flickity( elem2, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: true,
            prevNextButtons: false,
            pageDots: false,
            freeScroll: false,
            wrapAround: true
          });
    })
    
    //-change numb page
    $(".img-wrap .item").on('pointerup', function () {
        setTimeout(function () {
            //change text
            text = $('.text-wrap')
            text.removeClass('active')
            $(text[flMission.selectedIndex]).addClass('active')
        }, 10)
    });

    $(".btn-control").click(function () {
        //change text
        // alert('a')
        text = $('.text-wrap')
        text.removeClass('active')
        $(text[flMission.selectedIndex]).addClass('active')
    })
})


//-PRODUCT-MOBILE-Flickity
var flProduct
$(document).ready(function(){
    if(window.matchMedia("(max-width: 767px)").matches){
        let elem = document.querySelector('.products__list')
        var flProduct = new Flickity(elem, {
        // options
        draggable: true,
        cellAlign: 'center',
        contain: true,
        freeScroll: false,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true
        });
        // $(window).resize(function(){
        //     console.log(flProduct)
        //     flProduct.destroy()
        // })
    }
     //-Fix bug resize but not responsive
    //  console.log(flProduct)
})
$(window).resize(function(){
    if(window.matchMedia("(max-width: 767px)").matches){
        let elem = document.querySelector('.products__list')
        flProduct = new Flickity(elem, {
        // options
            draggable: true,
            cellAlign: 'center',
            contain: true,
            freeScroll: false,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true
        });
    } else {
        if(!(flProduct == undefined)){
            flProduct.destroy()
        }
    }
})


