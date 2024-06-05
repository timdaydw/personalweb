// 滑動到指定位置
let temp = 0;
let temp2 = -50;

let temp3 = 0;
$(function () {
    // $(".product-card figure").mouseenter(function () {
    //     $(".product-card img").animate({
    //         width: '150%',
    //         height: '150%',
    //     }), "slow";
    // });
    // $(".product-card figure").mouseleave(function () {
    //     $(".product-card img").animate({
    //         width: '100%',
    //         height: '100%',
    //     }), "slow";
    // });

    $(".light").click(function () {
        $(".light").css({
            "display": "none",
        });
        $(".dark").css({
            "display": "block",
        });
        $("body").css({
            "background-color": "#403531",
        });
        $(".title").css({
            "color": "white",
        });
        $(".content").css({
            "color": "white",
        });
        $(".link").css({
            "border": "1px white solid",
        });
        $("section img").css({
            "border": "0.1px white solid",
        });
        $("#contact form label").css({
            "color": "white",
        });
        $("#form-contact input,#form-contact textarea").css({
            "background-color": "white",
        });
        $("#output").css({
            "background-color": "white",
        });
        $(".topbar").css({
            "background-color": "#73615A",
        });
        $(".topbar a").css({
            "color": "white",
        });
        $("footer").css({
            "background-color": "#73615A",
        });
        $(".introduce-left").css({
            "background-color": "#403531"
        });
        $("#product-content").css({
            "background-color": "#403531"
        });
        $(".product-title").css({
            "color": "#F8F9FA"
        });
        $(".product-card h1").css({
            "color": "white"
        });
    });
    $(".dark").click(function () {
        $(".dark").css({
            "display": "none",
        });
        $(".light").css({
            "display": "block",
        });
        $("body").css({
            "background-color": "white",
        });
        $(".title").css({
            "color": "#403531",
        });
        $(".content").css({
            "color": "#403531",
        });
        $(".link").css({
            "border": "#403531 1px solid",
        });
        $("section img").css({
            "border": "none",
        });
        $("#contact form label").css({
            "color": "#6c2911",
        });
        $("#form-contact input,#form-contact textarea").css({
            "background-color": "gba(108, 41, 17, 0.2)",
        });
        $("#output").css({
            "background-color": "rgba(108, 41, 17, 0.2)",
        });
        $(".topbar").css({
            "background-color": "#F8F9FA",
        });
        $(".topbar a").css({
            "color": "#403531",
        });
        $("footer").css({
            "background-color": "#403531",
        });
        $(".introduce-left").css({
            "background-color": "#EAE5DB"
        });
        $("#product-content").css({
            "background-color": "#F8F9FA"
        });
        $(".product-title").css({
            "color": "black"
        });
        $(".product-card h1").css({
            "color": "brown"
        });
    });

    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        var scrollPositionY = $(this).scrollTop();

        if (scrollPositionY > 50) {
            $("#banner").fadeOut();
        }

        // if (scrollPositionY < 800) {
        //     $(".moving-text").stop().animate(
        //         {
        //             "top": (700),
        //         }
        //     );
        // }

        // if (scrollPositionY < 1500 && scrollPositionY > 600) {
        //     $(".moving-text").stop().animate(
        //         {
        //             "top": (1000),
        //         }
        //     );
        // }

        // if (scrollPositionY < 2500 && scrollPositionY > 1500) {
        //     $(".moving-text").stop().animate(
        //         {
        //             "top": (2500),
        //         }
        //     );
        // }

        // if (scrollPositionY > 2500) {
        //     $(".moving-text").stop().animate(
        //         {
        //             "top": (3850),
        //         }
        //     );
        // }

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
                    "left": (temp2 - (scrollPositionY - temp) / 20),
                }
            );
            temp2 = -50 - (scrollPositionY);
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
                    "left": (temp2 + (temp - scrollPositionY) / 10),
                }
            );
            temp2 = temp2 + (temp - scrollPositionY) / 10;
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

// $('.carousel-box').everyTime('1s', function () {
//     $(".carousel-box").animate({
//         "left": "-25vw",
//     }), "slow";
// });

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanilla"));
// console.log(document.getElementById("about").offsetHeight);

const btn = document.getElementById("output");
btn.addEventListener("click", clickBtn);



function clickBtn() {
    window.alert("Thank you for your contact");
}