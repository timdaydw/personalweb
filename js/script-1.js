// 滑動到指定位置
$(function () {
    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        var scrollPositionY = $(this).scrollTop();
        var flag1 = document.getElementById("banner").offsetHeight * 2;
        var flag2 = document.getElementById("banner").offsetHeight * 2.1;
        var flag3 = document.getElementById("banner").offsetHeight * 2.05;

        console.log(scrollPositionY);
        if (scrollPositionY > (flag1-500) && scrollPositionY < (flag2)) {
            $(".product-img1").stop().animate({
                right: "10%",
                opacity: '1',
            });
            $(".product-img2").stop().animate({
                left: "10%",
                opacity: '1',
            });

            $(".product-img3").stop().animate({
                bottom: "10%",
                opacity: '1',
            });
            $(".product-img4").stop().animate({
                bottom: "10%",
                opacity: '1',
            });

            $(".product-content").stop().animate({
                height:'460px',
                opacity: '1',
            });
        }
        if (scrollPositionY < (flag1-500)){
            $(".product-img1").stop().animate({
                right: "-100px",
                opacity: '0',
            });
            $(".product-img2").stop().animate({
                left: "100vw",
                opacity: '0',
            });
            $(".product-img3").stop().animate({
                bottom: "100vh",
                opacity: '0',
            });
            $(".product-img4").stop().animate({
                bottom: "100vh",
                opacity: '0',
            });
            $(".product-content").stop().animate({
                height:'0',
                opacity: '0',
            });
        }
        if (scrollPositionY > (flag2)){
            $(".product-img1").stop().animate({
                right: "100vw",
                opacity: '0',
            });
            $(".product-img2").stop().animate({
                left: "-100px",
                opacity: '0',
            });
            $(".product-img3").stop().animate({
                bottom: "-100px",
                opacity: '0',
            });
            $(".product-img4").stop().animate({
                bottom: "-100px",
                opacity: '0',
            });
            $(".product-content").stop().animate({
                height:'0',
                opacity: '0',
            });
        }
    });

});

range.oninput = () =>
    document.body.style.setProperty('--pos', range.value + '%');


VanillaTilt.init(document.querySelector(".vanilla"), {
    max: 25,
    speed: 400
});

$('.smoove').smoove({
    offset: '30%',
});


//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanilla"));
// console.log(document.getElementById("about").offsetHeight);
