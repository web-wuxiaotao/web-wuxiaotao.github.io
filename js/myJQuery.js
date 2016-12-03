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
	
	
	//我的作品
	function worksClick(){
		var worksClass=$("#worksClass");
		var row=$(".works .container .row")
		worksClass.on("click","li",function(){
			var index=$(this).index()
			worksClass.find('li').removeClass("li")
			$(this).addClass("li")
			row.removeClass("rowActive")
			row.eq(index).addClass("rowActive")
		})
	}
	worksClick()
})
