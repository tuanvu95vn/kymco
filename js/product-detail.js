var acc = document.querySelectorAll(".accordion .btn-ac");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        let i = this.getAttribute("data-button");
        for (let j = 0; j < acc.length; j++) {
            if (j != i) {
                acc[j].classList.remove('active')
                let panelSibling = acc[j].nextElementSibling;
                panelSibling.style.maxHeight = null;
            }
        }
    });
}


//-----Flickity--
jQuery(document).ready(function () {
    var elem = document.querySelector('.img-carousel');
    var flickity = new Flickity(elem, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: false
    });
    $('.product-detail-page .btn-control .right').click(function () {
        flickity.next(true, false)
    })
    $('.product-detail-page .btn-control .left').click(function () {
        flickity.previous(true, false)
    })

    //-change numb page
    $(".img-item").on('pointerup', function () {
        setTimeout(function () {
            //change numb
            let numb = parseInt(flickity.selectedIndex, 10) + 1;
            numb = numb.toString().padStart(2, '0').padEnd(4, ' /')
            $('.current').text(numb)

            //change text
            text = $('.text-wrap')
            text.removeClass('active')
            $(text[flickity.selectedIndex]).addClass('active')
        }, 10)
    });

    $(".btn-control").click(function () {
        let numb = parseInt(flickity.selectedIndex, 10) + 1;
        numb = numb.toString().padStart(2, '0').padEnd(4, ' /')
        $('.current').text(numb)
        //change text
        text = $('.text-wrap')
        text.removeClass('active')
        $(text[flickity.selectedIndex]).addClass('active')
    })

    //-Fix bug resize but not responsive
    $(window).resize(function () {
        flickity.destroy()
        flickity = new Flickity(elem, {
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