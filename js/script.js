// 滑動到指定位置
let temp = 0;
let temp2 = -50;
$(function () {


    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        var scrollPositionY = $(this).scrollTop();

        if (scrollPositionY > 50) {
            $("#banner").fadeOut();
        }



        if (scrollPositionY < 800) {
            $(".moving-text").stop().animate(
                {
                    "top": (700),
                }
            );
        }

        if (scrollPositionY < 1500 && scrollPositionY > 600) {
            $(".moving-text").stop().animate(
                {
                    "top": (1000),
                }
            );
        }

        if (scrollPositionY < 2500 && scrollPositionY > 1500) {
            $(".moving-text").stop().animate(
                {
                    "top": (2500),
                }
            );
        }

        if ( scrollPositionY > 2500) {
            $(".moving-text").stop().animate(
                {
                    "top": (3850),
                }
            );
        }

        if (scrollPositionY == 0) {
            $(".topbar").stop().animate(
                {
                    opacity: '1',
                }
            );

        }

        if (scrollPositionY >= temp) {
            $(".topbar").stop().animate(
                {
                    opacity: '0',
                }
            );

            $(".moving-text-content").stop().animate(
                {
                    "left": (temp2-(scrollPositionY-temp)/20),
                }
            );
            temp2 = -50-(scrollPositionY);
            temp = scrollPositionY;
        }
        if (scrollPositionY < temp) {
            $(".topbar").stop().animate(
                {
                    opacity: '1',
                }
            );
            $(".moving-text-content").stop().animate(
                {
                    "left": (temp2+(temp-scrollPositionY)/10),
                }
            );
            temp2 = temp2+(temp-scrollPositionY)/10;
            temp = scrollPositionY;
        }



    });

});

// range.oninput = () =>
//     document.body.style.setProperty('--pos', range.value + '%');


// VanillaTilt.init(document.querySelector(".vanilla"), {
//     max: 25,
//     speed: 400
// });

$('.smoove').smoove({
    offset: '-50%',
});


//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanilla"));
// console.log(document.getElementById("about").offsetHeight);
