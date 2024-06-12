// 滑動到指定位置
let temp = 0;
let temp2 = -50;

let temp3 = 0;
$(function () {
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
        $(".img-about img").attr({
            "src": "./image/icon-about-hover.png"
        });
        $(".img-product img").attr({
            "src": "./image/icon-product-hover.png"
        });
        $(".img-instruction img").attr({
            "src": "./image/icon-instruction-hover.png"
        });
        $(".img-news img").attr({
            "src": "./image/icon-news-hover.png"
        });
        $(".img-contact img").attr({
            "src": "./image/icon-contact-hover.png"
        });
        $(".img-about").hover(function () {
            $(".img-about img").attr({
                "src": "./image/icon-about-hover.png"
            });
        }, function () {
            $(".img-about img").attr({
                "src": "./image/icon-about-hover.png"
            });
        });
        $(".img-product").hover(function () {
            $(".img-product img").attr({
                "src": "./image/icon-product-hover.png"
            });
        }, function () {
            $(".img-product img").attr({
                "src": "./image/icon-product-hover.png"
            });
        });
        $(".img-instruction").hover(function () {
            $(".img-instruction img").attr({
                "src": "./image/icon-instruction-hover.png"
            });
        }, function () {
            $(".img-instruction img").attr({
                "src": "./image/icon-instruction-hover.png"
            });
        });
        $(".img-news").hover(function () {
            $(".img-news img").attr({
                "src": "./image/icon-news-hover.png"
            });
        }, function () {
            $(".img-news img").attr({
                "src": "./image/icon-news-hover.png"
            });
        });
        $(".img-contact").hover(function () {
            $(".img-contact img").attr({
                "src": "./image/icon-contact-hover.png"
            });
        }, function () {
            $(".img-contact img").attr({
                "src": "./image/icon-contact-hover.png"
            });
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
        $(".img-about img").attr({
            "src": "./image/icon-about.png"
        });
        $(".img-product img").attr({
            "src": "./image/icon-product.png"
        });
        $(".img-instruction img").attr({
            "src": "./image/icon-instruction.png"
        });
        $(".img-news img").attr({
            "src": "./image/icon-news.png"
        });
        $(".img-contact img").attr({
            "src": "./image/icon-contact.png"
        });
        $(".img-about").hover(function () {
            $(".img-about img").attr({
                "src": "./image/icon-about-hover.png"
            });
        }, function () {
            $(".img-about img").attr({
                "src": "./image/icon-about.png"
            });
        });
        $(".img-product").hover(function () {
            $(".img-product img").attr({
                "src": "./image/icon-product-hover.png"
            });
        }, function () {
            $(".img-product img").attr({
                "src": "./image/icon-product.png"
            });
        });
        $(".img-instruction").hover(function () {
            $(".img-instruction img").attr({
                "src": "./image/icon-instruction-hover.png"
            });
        }, function () {
            $(".img-instruction img").attr({
                "src": "./image/icon-instruction.png"
            });
        });
        $(".img-news").hover(function () {
            $(".img-news img").attr({
                "src": "./image/icon-news-hover.png"
            });
        }, function () {
            $(".img-news img").attr({
                "src": "./image/icon-news.png"
            });
        });
        $(".img-contact").hover(function () {
            $(".img-contact img").attr({
                "src": "./image/icon-contact-hover.png"
            });
        }, function () {
            $(".img-contact img").attr({
                "src": "./image/icon-contact.png"
            });
        });
    });

    $(window).scroll(function () {
        var scrollPositionY = $(this).scrollTop();

        if (scrollPositionY > 50) {
            $("#banner").fadeOut();
        }
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
            // if (scrollPositionY > (document.querySelector("#product").offsetTop)/2 && scrollPositionY < document.querySelector("#product").offsetTop-50){
            //     $('html,body').stop().animate({scrollTop:document.querySelector("#product").offsetTop-50},50)
            // }
            // if (scrollPositionY > ((document.querySelector("#explain").offsetTop-document.querySelector("#product").offsetTop)/2+document.querySelector("#product").offsetTop) && scrollPositionY < document.querySelector("#explain").offsetTop-50){
            //     $('html,body').stop().animate({scrollTop:document.querySelector("#explain").offsetTop-50},50)
            // }
            // if (scrollPositionY > ((document.querySelector("#news").offsetTop-document.querySelector("#explain").offsetTop)/2+document.querySelector("#explain").offsetTop) && scrollPositionY < document.querySelector("#news").offsetTop-50){
            //     $('html,body').stop().animate({scrollTop:document.querySelector("#news").offsetTop-50},50)
            // }
            // if (scrollPositionY > ((document.querySelector("#contact").offsetTop-document.querySelector("#news").offsetTop)/2+document.querySelector("#news").offsetTop) && scrollPositionY < document.querySelector("#contact").offsetTop-50){
            //     $('html,body').stop().animate({scrollTop:document.querySelector("#contact").offsetTop-50},50)
            // }

            temp2 = -50 - (scrollPositionY);
            temp = scrollPositionY;
        }
        if (scrollPositionY < temp) {
            $(".topbar").stop().animate(
                {
                    opacity: '1',
                }
            );
            // if (scrollPositionY >= (document.querySelector("#product").offsetTop)/2 && scrollPositionY < ((document.querySelector("#explain").offsetTop-document.querySelector("#product").offsetTop)/2+document.querySelector("#product").offsetTop)){
            //     $('html,body').stop().animate({scrollTop:document.querySelector("#about").offsetTop+70},50)
            // }
            temp2 = temp2 + (temp - scrollPositionY) / 10;
            temp = scrollPositionY;
        }
    });

    $(".img-about").hover(function () {
        $(".img-about img").attr({
            "src": "./image/icon-about-hover.png"
        });
    }, function () {
        $(".img-about img").attr({
            "src": "./image/icon-about.png"
        });
    });
    $(".img-product").hover(function () {
        $(".img-product img").attr({
            "src": "./image/icon-product-hover.png"
        });
    }, function () {
        $(".img-product img").attr({
            "src": "./image/icon-product.png"
        });
    });
    $(".img-instruction").hover(function () {
        $(".img-instruction img").attr({
            "src": "./image/icon-instruction-hover.png"
        });
    }, function () {
        $(".img-instruction img").attr({
            "src": "./image/icon-instruction.png"
        });
    });
    $(".img-news").hover(function () {
        $(".img-news img").attr({
            "src": "./image/icon-news-hover.png"
        });
    }, function () {
        $(".img-news img").attr({
            "src": "./image/icon-news.png"
        });
    });
    $(".img-contact").hover(function () {
        $(".img-contact img").attr({
            "src": "./image/icon-contact-hover.png"
        });
    }, function () {
        $(".img-contact img").attr({
            "src": "./image/icon-contact.png"
        });
    });
});

VanillaTilt.init(document.querySelector(".product-card"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".product-card"));

// $('.smoove').smoove({
//     offset: '-50%',
// });






