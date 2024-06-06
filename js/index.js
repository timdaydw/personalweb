$(function () {
    //指定捲軸位置淡出淡入
    $(window).scroll(function () {
        var scrollPositionY = $(this).scrollTop();
        if (scrollPositionY > 0 && scrollPositionY < $("#about").outerHeight()) {
            $(".about-left-img img ").stop().animate(
                {
                    "top": (0-scrollPositionY/10),
                }
            );
        }
        if (scrollPositionY > 0 && scrollPositionY < $("#about").outerHeight()) {
            $(".bg-rotate-2").stop().animate(
                {
                    "bottom": (-100+scrollPositionY),
                    "rotate": (264-scrollPositionY/10)+"deg",
                }
            );
        }
        if (scrollPositionY > 0 && scrollPositionY < $("#about").outerHeight()) {
            $(".bg-rotate-1").stop().animate(
                {
                    "top": (0+scrollPositionY),
                    "rotate": (30-scrollPositionY/10)+"deg",
                }
            );
        }
        if (scrollPositionY > (document.querySelector("#product").offsetTop-400) && scrollPositionY < (document.querySelector("#explain").offsetTop+200) ) {
            $(".bg-rotate-3").stop().animate(
                {
                    "left": (800-scrollPositionY/5)+"px",
                    "rotate": (60-scrollPositionY/10)+"deg",
                }
            );
        }
        if (scrollPositionY > (document.querySelector("#explain").offsetTop) && scrollPositionY < (document.querySelector("#news").offsetTop) ) {
            $(".bg-rotate-4").stop().animate(
                {
                    "top": (100+scrollPositionY-document.querySelector("#explain").offsetTop),
                    "rotate": (75-scrollPositionY/10)+"deg",
                }
            );
        }

        if (scrollPositionY < (document.querySelector("#news").offsetTop-200) || scrollPositionY > (document.querySelector("#contact").offsetTop) ) {
            $(".bg-rotate-5").stop().animate(
                {
                    "right": (-100),
                }
            );
        }else {
            $(".bg-rotate-5").stop().animate(
                {
                    "right": (2000),
                }
            );
        }

        
    });



});


const btn = document.getElementById("output");
btn.addEventListener("click", clickBtn);

function clickBtn() {
    window.alert("Thank you for your contact");
}