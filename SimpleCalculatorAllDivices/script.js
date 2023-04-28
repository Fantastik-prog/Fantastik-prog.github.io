// $(document).ready();
$(function(){
    $("#drop-color").hover(function(){
        $(".primaire , .seconde , .tierce").hide();
   },
    function(){
        $(".primaire , .seconde , .tierce").show();
    });

    // for change calculator color...
    $(".default1").click(function(){
        $(".calculator").css ({
            "background-image": "url(image/Cartoon-maths.png)"
        });
    });
    $(".default2").click(function(){
        $(".calculator-iphone").css ({
            "background-image": "url(image/mathematics-iphone.jpg)"
        });
    });
    $(".primaire").click(function(){
        $(".calculator , .calculator-iphone").css ({
            "background-image": "none"
        });
        $(".calculator , .calculator-iphone").css ({
            "background-color": "#D2DCE6"
        });
    });
    $(".seconde").click(function(){
        $(".calculator , .calculator-iphone").css ({
            "background-image": "none"
        });
        $(".calculator , .calculator-iphone").css ({
            "background-color": "#5E9299"
        });
    });
    $(".tierce").click(function(){
        $(".calculator , .calculator-iphone").css ({
            "background-image": "none"
        });
        $(".calculator , .calculator-iphone").css ({
            "background-color": "#899481"
        });
    });

    // for change with dark-mode...

    $(".default-mode").click(function(){
        $("body").css ({
            "background-color": "#FFF"
            // "background-image": "url(./math-formula.jpg)"
        });
    });
    $("dark-mode").click(function(){
        $(".container").css ({
            "background-color": "#000"
        });
        $(".calculator , .calculator-iphone").css ({
            "border": "1px solid #fff"
        });
    });
});
