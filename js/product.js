all = $('.product__tab-all')
select = $('.product__tab-select')
allSection = $('.product .all')
selectSection = $('.product .select')

btn = $('.product .select .btn')

//---SWITCH TAB---------
all.click(function() {
    allSection.addClass('active')
    selectSection.removeClass('active')
    all.addClass('active')
    select.removeClass('active')
})

select.click(function() {
    allSection.removeClass('active')
    selectSection.addClass('active')
    all.removeClass('active')
    select.addClass('active')
})


// //---fLICKITY PRODUCT-----
// jQuery(document).ready(function(){
//     var elem = document.querySelector('.flick-wrap');
//     var flProduct = new Flickity( elem, {
//       // options
//         cellAlign: 'left',
//         contain: true,
//         draggable: true,
//         prevNextButtons: true,
//         pageDots: true,
//         freeScroll: true,
//         wrapAround: true
//     });
// })

//----Change color button in select section ---
btn.click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})