$(document).ready(function(){
	for(var i=0;i<$(".floor").length;i++){
		var juli=$(".floor").eq(i).position();
		$(".floor").eq(i).prop("h",juli.top)
	}
	$(".header .nav li").on("click",function(){
		var index=$(this).index()
		var hh=$(".floor").eq(index).prop("h")
		var top=$(window).scrollTop()
		var src={aa:top}
		$(src).animate({aa:hh},{
			duration:300,
			step:function(){
				$(window).scrollTop(src.aa)
			}
		})
	})	
})
