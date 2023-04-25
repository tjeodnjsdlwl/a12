






var swiper = new Swiper(".main-slide", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});



$('.tab-nav a').click(function(e){
    e.preventDefault();

    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');


    a = $(this).attr('href');

    $('.tab').removeClass('active');
    $(a).addClass('active');

})


// 네이게이션 드롭다운

$('.location .current').click(function(e){
    e.preventDefault(); //a태그의 링크이동막기
    $(this).siblings().slideToggle()
})

// 다른영역 클리시 네비게이션 닫기
$(document).click(function (e){
   if($('.location').has(e.target).length === 0){
    $('.location .current').siblings().slideUp()
   }
});


var swiper = new Swiper("#app .swiper", {
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    navigation:{
        nextEl:'.right',
        prevEl:'.left',
    },

    // loop:true,
    // autoplay: {
    //     delay: 4500,
    //     disableOnInteraction: false,
    // },
});

