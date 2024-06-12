let temp4 = 0;

$(function () {
    $(window).scroll(function () {
        var scrollPositionY2 = $(this).scrollTop();
        if (scrollPositionY2 > 0 && scrollPositionY2 < $("#about").outerHeight()) {
            $(".about-left-img img ").stop().animate(
                {
                    "top": (0-scrollPositionY2/10),
                }
            );
        }
        if (scrollPositionY2 > 0 && scrollPositionY2 < $("#about").outerHeight()) {
            $(".bg-rotate-2").stop().animate(
                {
                    "bottom": (-100+scrollPositionY2),
                    "rotate": (264-scrollPositionY2/10)+"deg",
                }
            );
        }
        if (scrollPositionY2 > 0 && scrollPositionY2 < $("#about").outerHeight()) {
            $(".bg-rotate-1").stop().animate(
                {
                    "top": (0+scrollPositionY2),
                    "rotate": (30-scrollPositionY2/10)+"deg",
                }
            );
        }
        if (scrollPositionY2 > (document.querySelector("#product").offsetTop-400) && scrollPositionY2 < (document.querySelector("#explain").offsetTop+200) ) {
            $(".bg-rotate-3").stop().animate(
                {
                    "left": (800-scrollPositionY2/5)+"px",
                    "rotate": (60-scrollPositionY2/10)+"deg",
                }
            );
        }
        if (scrollPositionY2 > (document.querySelector("#explain").offsetTop) && scrollPositionY2 < (document.querySelector("#news").offsetTop) ) {
            $(".bg-rotate-4").stop().animate(
                {
                    "top": (100+scrollPositionY2-document.querySelector("#explain").offsetTop),
                    "rotate": (75-scrollPositionY2/10)+"deg",
                }
            );
        }

        if (scrollPositionY2 < (document.querySelector("#news").offsetTop-200) || scrollPositionY2 > (document.querySelector("#contact").offsetTop) ) {
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

        if (scrollPositionY2 >= temp4) {
            if (scrollPositionY2 > (document.querySelector("#product").offsetTop)/2 && scrollPositionY2 < document.querySelector("#product").offsetTop-50){
                $('html,body').stop().animate({scrollTop:document.querySelector("#product").offsetTop-50},50)
            }
            if (scrollPositionY2 > ((document.querySelector("#explain").offsetTop-document.querySelector("#product").offsetTop)/2+document.querySelector("#product").offsetTop) && scrollPositionY2 < document.querySelector("#explain").offsetTop-50){
                $('html,body').stop().animate({scrollTop:document.querySelector("#explain").offsetTop-50},50)
            }
            if (scrollPositionY2 > ((document.querySelector("#news").offsetTop-document.querySelector("#explain").offsetTop)/2+document.querySelector("#explain").offsetTop) && scrollPositionY2 < document.querySelector("#news").offsetTop-50){
                $('html,body').stop().animate({scrollTop:document.querySelector("#news").offsetTop-50},50)
            }
            if (scrollPositionY2 > ((document.querySelector("#contact").offsetTop-document.querySelector("#news").offsetTop)/2+document.querySelector("#news").offsetTop) && scrollPositionY2 < document.querySelector("#contact").offsetTop-50){
                $('html,body').stop().animate({scrollTop:document.querySelector("#contact").offsetTop-50},50)
            }
            temp4 = scrollPositionY2;
        }
    });
});




const btn = document.getElementById("output");
btn.addEventListener("click", clickBtn);

function clickBtn() {
    window.alert("Thank you for your contact");
}