$(function(){
	$(".case_main ._list li").bind("mouseover mouseleave", function(e) {
			var index = $(this).index(),
				last = $(".case_main ._list li").length - 1;
			if (index == last || index==0) return false;
			var w = $(this).width();
			var h = $(this).height();
			var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
			var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
			var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			var eventType = e.type;
			var mask = $(this).find(".mask");
			if (e.type == 'mouseover') {
				$(this).find("._st").stop().animate({
					bottom: "160px"
				}, 800, function() {
					$(this).parent().find("._arr").show(200)
				});
				switch (direction) {
					case 0:
						mask.css({
							top: "-205px",
							left: "0px"
						})
						mask.stop().animate({ //上
							top: "0px",
							left: "0px"
						}, 400)
						break;
					case 1:
						mask.css({
							top: "0px",
							left: "275px"
						})
						mask.stop().animate({
							top: "0px",
							left: "0px" //右
						}, 400)
						break;
					case 2:
						mask.css({
							top: "205px",
							left: "0px"
						})
						mask.stop().animate({
							top: "0px",
							left: "0px" //下
						}, 400)
						break;
					case 3:
						mask.css({
							top: "0px",
							left: "-275px"
						})
						mask.stop().animate({ //左
							top: "0px",
							left: "0px"
						}, 400)
						break;
				}

			} else {
				$(this).find("._st").stop().animate({
					bottom: "13px"
				}, 800)
				$(this).find("._arr").hide(200)
					//$(this).delay(800).find("i").hide(400)
				switch (direction) {
					case 0:
						mask.stop().animate({
							top: "-205px",
							left: "0px" //上
						}, 400)

						break;
					case 1:
						mask.stop().animate({ //右
							left: "275px",
							top: "0px"
						}, 400)
						break;
					case 2:
						mask.stop().animate({ //下
							top: "205px",
							left: "0px"
						}, 400)
						break;
					case 3:
						mask.stop().animate({ //左
							left: "-275px",
							top: "0px"
						}, 400)
						break;

				}
			}
		});

})