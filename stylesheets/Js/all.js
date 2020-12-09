/* Demo*/
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
$(".next").click(function(){
var QA =$('input:radio[name="question1"]:checked').val();
if(QA == null){
	alert('請選擇答案')
	return false;
}
if(animating) return false;
animating = true;

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale current_fs down to 80%
scale = 1 - (1 - now) * 0.2;
//2. bring next_fs from the right(50%)
left = (now * 50)+"%";
//3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next2").click(function(){
	var QA2 =$('input:radio[name="question2"]:checked').val();
	if(QA2 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next3").click(function(){
	var QA3 =$('input:checkbox[name="question3"]:checked').val();
	if(QA3 == null){
		alert('請選擇答案')
		return false;
	}	
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next4").click(function(){
	var QA4 =$('input:radio[name="question4"]:checked').val();
	if(QA4 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next5").click(function(){
	var QA5 =$('input:radio[name="question5"]:checked').val();
	if(QA5 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".previous").click(function(){
if(animating) return false;
animating = true;
current_fs = $(this).parent();
previous_fs = $(this).parent().prev();
//de-activate current step on progressbar
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//show the previous fieldset
previous_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale previous_fs from 80% to 100%
scale = 0.8 + (1 - now) * 0.2;
//2. take current_fs to the right(50%) - from 0%
left = ((1-now) * 50)+"%";
//3. increase opacity of previous_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'left': left});
previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".submit").click(function(){
	var testSelect = document.getElementById("mySelect")
	var index =testSelect.selectedIndex;
	var text = testSelect.options[index].text;
	var value = testSelect.options[index].value;
	switch(value){
		case "台北市":
		document.querySelector('.city-taipei').style.display='block';
		break;
		case "新北市":
		document.querySelector('.city-newtaipei').style.display='block';
		break;
		case "桃園市":
		document.querySelector('.city-taoyuan').style.display='block';
		break;
		case "台中市":
		document.querySelector('.city-taichung').style.display='block';
		break;
		case "台南市":
		document.querySelector('.city-tainan').style.display='block';
		break;
		case "高雄市":
		document.querySelector('.city-kaohsiung').style.display='block';
		break;
		case "基隆市":
		document.querySelector('.city-keelung').style.display='block';
		break;
		case "宜蘭市":
		document.querySelector('.city-yilan').style.display='block';
		break;
		case "新竹市":
		document.querySelector('.city-hsinchu').style.display='block';
		break;
		case "新竹縣":
		document.querySelector('.city-hsinchu-county').style.display='block';
		break;
		case "苗栗縣":
		document.querySelector('.city-miaoli').style.display='block';
		break;
		case "彰化縣":
		document.querySelector('.city-changhua').style.display='block';
		break;
		case "南投縣":
		document.querySelector('.city-nantou').style.display='block';
		break;
		case "嘉義市":
		document.querySelector('.city-chiayi').style.display='block';
		break;
		case "嘉義縣":
		document.querySelector('.city-chiayi-county').style.display='block';
		break;
		case "雲林縣":
		document.querySelector('.city-yunlin').style.display='block';
		break;
		case "屏東縣":
		document.querySelector('.city-pingtung').style.display='block';
		break;
		case "花蓮縣":
		document.querySelector('.city-hualien').style.display='block';
		break;
		case "台東縣":
		document.querySelector('.city-taitung').style.display='block';
		break;
		case "澎湖縣":
		document.querySelector('.city-penghu').style.display='block';
		break;
	}
	switch (text){
		case "台北市":
			document.querySelector('.Taipei').style.display='block';
			break;
		case "新北市":
			document.querySelector('.NewTaipei').style.display='block';
			break;
		case "桃園市":
			document.querySelector('.Taoyuan').style.display='block';
			break;
		case "台中市":
			document.querySelector('.Taichung').style.display='block';
			break;
		case "台南市":
			document.querySelector('.Tainan').style.display='block';
			break;
		case "高雄市":
			document.querySelector('.Kaohsiung').style.display='block';
			break;
		case "基隆市":
			document.querySelector('.Keelung').style.display='block';
			break;
		case "宜蘭市":
			document.querySelector('.Yilan').style.display='block';
			break;
		case "新竹市":
			document.querySelector('.Hsinchu').style.display='block';
			break;
		case "新竹縣":
			document.querySelector('.Hsinchu-County').style.display='block';
			break;
		case "苗栗縣":
			document.querySelector('.Miaoli').style.display='block';
			break;
		case "彰化縣":
			document.querySelector('.Changhua').style.display='block';
			break;	
		case "南投縣":
			document.querySelector('.Nantou').style.display='block';
			break;
		case "嘉義市":
			document.querySelector('.Chiayi').style.display='block';
			break;
		case "嘉義縣":
			document.querySelector('.Chiayi-County').style.display='block';
			break;
		case "雲林縣":
			document.querySelector('.Yunlin').style.display='block';
			break;
		case "屏東縣":
			document.querySelector('.Pingtung').style.display='block';
			break;
		case "花蓮縣":
			document.querySelector('.Hualien').style.display='block';
			break;
		case "台東縣":
			document.querySelector('.Taitung').style.display='block';
			break;
		case "澎湖縣":
			document.querySelector('.Penghu').style.display='block';
			break;	

	}
	if(testSelect.options[0].selected == true){
			alert('請選擇所在地')
		}else{
			alert('資料送出完成，開始分析')
			$(".newform").css("display", "none");
			$(".Loading").css("display", "block");
			$(".prediction").css("display", "none");
			$(".modal-backdrop").css("display", "none");
			$("#staticBackdrop").css("display",'none');
			var loading = function(){
				$(".Loading").css("display", "none");
				$('.result').fadeIn('slow');
				};
				setTimeout(loading,14000);
		}
	return false
})

/*判斷answer1*/
$(function(){
	function checkAnswer(){
		for (var i=0; i<$('input:checked').length; i++) {
			var context = $('input:checked')[i].parentNode.parentNode;
			if ($('input:checked', context).val()=='1') {
				document.querySelector('.Divorce-agreement').style.display='block'
				document.querySelector('.Divorce-proceedings').style.display='none'
				document.querySelector('.answer2').style.display='none'
			} else if ($('input:checked', context).val()=='4' || $('input:checked', context).val()=='2') {
				document.querySelector('.Divorce-proceedings').style.display='block'
				document.querySelector('.Divorce-agreement').style.display='none'
				document.querySelector('.answer2').style.display='block'
			} else {
			}
		}
	}
	$('input:radio').each(function(){
		$(this).click(checkAnswer);
	})
})
/*判斷answer2*/
$(".ShowAnswer").click(function(){
	var obj =document.getElementsByName('question3');
	var selected =[];
	var choose = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked){
			selected.push(obj[i].value);
			choose.push(obj[i].getAttribute("data-num"));
		}
		Array.prototype.max = function (){
			var max =this[0];
			this.forEach(function(ele,index,choose){
				if(ele>max){
					max=ele;
				}
			})
			return max;
		}
		document.getElementById('Options').innerHTML=selected.join();
		document.getElementById('Probability').innerHTML=choose.max()+"%";
	}
	
})
/*重新整理*/ 
$('.formReset').click(function(){
	alert('確定重新檢測，資料將不儲存')
	document.getElementById("msform").reset();
	window.location.reload();
})
$(document).ready(function() {
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
	
	let pagination = function(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}
		
		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');
		
		$app.toggleClass('active');
		setTimeout(function() {
			animation = false;
		}, 3000)
	}
	
	let navigateDown = function() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	}

	let navigateUp = function() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	}

	setTimeout(function() {
		$app.addClass('initial');
	}, 1500);

	setTimeout(function() {
		animation = false;
	}, 4500);
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function() {
		if (animation) return;
		let target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	});
});
