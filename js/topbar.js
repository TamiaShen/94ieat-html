// auth : jzd
// 偵測捲軸移動後隱藏放logo的那一層
$(window).scroll(function() {
    var height = $(this).scrollTop();
    if(height  > 1) {
        $("#menu-one").hide();
       	$("#menu-second").css("top", "0px");
    }else{
    		$("#menu-one").show();
    		$("#menu-second").css("top", "50px");
    }
});

