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
            "background-color": "#3b312d",
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
        $(".topbar a").hover(function () {
            $(this).css("color", "white");
        }, function () {
            $(this).css("color", "white");
        });
        $(".logo a").hover(function () {
            $(this).css("color", "white");
        }, function () {
            $(this).css("color", "white");
        });
        $("footer").css({
            "background-color": "#73615A",
        });
        $(".introduce-left").css({
            "background-color": "#3b312d"
        });
        $("#product-content").css({
            "background-color": "#3b312d"
        });
        $(".product-title").css({
            "color": "#f0f0f0"
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
            "color": "#3b312d",
        });
        $(".content").css({
            "color": "#3b312d",
        });
        $(".link").css({
            "border": "#3b312d 1px solid",
        });
        $("section img").css({
            "border": "none",
        });
        $("#contact form label").css({
            "color": "#6c2911",
        });
        $("#form-contact input,#form-contact textarea").css({
            "background-color": "rgba(108, 41, 17, 0.2)",
        });
        $("#output").css({
            "background-color": "rgba(108, 41, 17, 0.2)",
        });
        $(".topbar").css({
            "background-color": "#f0f0f0",
        });
        $(".topbar a").css({
            "color": "#3b312d",
        });
        $(".topbar a").hover(function () {
            $(this).css("color", "white");
        }, function () {
            $(this).css("color", "#3b312d");
        });
        $(".logo a").hover(function () {
            $(this).css("color", "#3b312d");
        }, function () {
            $(this).css("color", "#3b312d");
        });
        $("footer").css({
            "background-color": "#3b312d",
        });
        $(".introduce-left").css({
            "background-color": "#EAE5DB"
        });
        $("#product-content").css({
            "background-color": "#f0f0f0"
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
        if (scrollPositionY > 70 && scrollPositionY < 800) {
            $(".about-left-img img ").stop().animate(
                {
                    "top": (0-scrollPositionY/10),
                }
            );
        }
        if (scrollPositionY < 800) {
            $(".moving-text").stop().animate(
                {
                    "top": (700),
                }
            );
        }

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

VanillaTilt.init(document.querySelector(".product-card"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".product-card"));

$('.smoove').smoove({
    offset: '-50%',
});




const btn = document.getElementById("output");
btn.addEventListener("click", clickBtn);

function clickBtn() {
    window.alert("Thank you for your contact");
}