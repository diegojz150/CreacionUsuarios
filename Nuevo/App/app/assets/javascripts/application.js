// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .





var des = 0;
$(document).on("ready",function(){	

		//$(".a").prop("disabled", true);
		//$(".b").prop("disabled", true);

		$(".rojo").click(function() {

			var ran = Math.floor((Math.random() * 3) + 1);


			if (ran == 1){
				$(this).removeClass();
				$(this).addClass("rojo");
			}
			else if (ran == 2){
				$(this).removeClass();
				$(this).addClass("verde");
			}
			else{
				$(this).removeClass();
				$(this).addClass("azul");
			}
		})

})

/*
$(".sub").click(function() {

		var sum = parseInt($(".a").val()) + parseInt($(".b").val());
		alert($(".a").val()+" + "+$(".b").val()+" es igual a "+ sum );
		$(".sub").prop("enabled", true);
	
})


$("#uno").click(function() {
	if(des==0){
		var s = $(".a").val();
		s +="1"
		$(".a").val(s)
	}
	else if(des==1){
		var s = $(".b").val();
		s +="1"
		$(".b").val(s)
	}	
})
$("#dos").click(function() {
	if(des==0){
		var s = $(".a").val();
		s +="2"
		$(".a").val(s)
	}
	else if(des==1){
		var s = $(".b").val();
		s +="2"
		$(".b").val(s)
	}	
})
$("#tres").click(function() {
	if(des==0){
		var s = $(".a").val();
		s +="3"
		$(".a").val(s)
	}
	else if(des==1){
		var s = $(".b").val();
		s +="3"
		$(".b").val(s)
	}	
})

$("#check").click(function() {
	if(des==0 && $(".a").val()!=""){
		des++
	}
	else if(des==1 && $(".a").val()!=""){
		des++
	}
})
*/