$(function(){
	var i=0;
	var timer=setInterval(function(){
		if (i<3) {
			i++
			$("#ip1 ul").animate({"left":-i*125+"%"},1500);
		}else{
			i=0;
			$("#ip1 ul").css({"left":-i*120+"%"},1500);
		}	
     },3000);
      $("#ip4 .ip4_topbar ul li span").each(function(index){
     	$(this).css({"background-position-y": -index*63.5})
     })
      $("#ip4 .ip4_ban li img").eq(0).show()
     $("#ip4 .ip4_topbar ul li").mouseover(function(){
     	var ii=$(this).index();
     	$("#ip4 .ip4_ban li img").hide();
     	$("#ip4 .ip4_ban li img").eq(ii).show()
     })
     $(".ip1_con .smallli li").mouseover(function(){
        var ii=$(this).index();
        if (ii<4) {
            ii++;
            $("#ip1 ul").animate({"left":-(ii-1)*125+"%"},1000);
        }else{
            ii=0;
            $("#ip1 ul").css({"left":-ii*120+"%"},1000);
        }   
       clearInterval(timer)
     })
})