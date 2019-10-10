$(document).ready(function() {
	//Check radio button

	/*document.getElementById('exampleRadios1').onclick = function() {
		if (this.checked === true){
		document.getElementById('nhk').checked = true;
		} else {
			document.getElementById('nhk').checked = false;
		}
	}
	document.getElementById('exampleRadios2').onclick = function() {
		if(this.checked === true){
			document.getElementById('another').checked = true;
		} else {
			document.getElementById('another').checked = false;
		}
	}
	document.getElementById('exampleRadios3').onclick = function() {
		if(this.checked === true){
			document.getElementById('never').checked = true;
		} else {
			document.getElementById('never').checked = false;
		}
	}
	document.getElementById('nhk').onclick = function() {
		if(this.checked === true){
			document.getElementById('exampleRadios1').checked = true;
		} else {
			document.getElementById('exampleRadios1').checked = false;
		}
	}
	document.getElementById('another').onclick = function() {
		if(this.checked === true){
			document.getElementById('exampleRadios2').checked = true;
		} else {
			document.getElementById('exampleRadios2').checked = false;
		}
	}
	document.getElementById('never').onclick = function() {
		if(this.checked === true){
			document.getElementById('exampleRadios3').checked = true;
		} else {
			document.getElementById('exampleRadios3').checked = false;
		}
	}*/

	var num = $('.radio');
	for (var a=1; a<=num.length; a++){
		var b=String(a);
		$('#exampleRadios'+b).click(function(){
			let id = $(this).attr('data-info');
			console.log('#nhk'+id)
			if($(this).attr('checked',true)){
				$('#nhk'+id).prop('checked',true);
			} else {
				$('#nhk'+id).prop('checked',false);
			}
		});
		$('#nhk'+b).click(function(){
			let id = $(this).attr('data-info');
			if($(this).attr('checked',true)){
				$('#exampleRadios'+id).prop('checked',true);
			} else {
				$('#exampleRadios'+id).prop('checked',false);
			}
		});
	}


	//check checkbox button by javascript
	/*var number = document.getElementsByName('job-mobile');
	for (var i=1;i<=number.length;i++){
		var j = String(i);
		console.log(j);
		document.getElementById('job'+j).onclick = function() {
			console.log(j);
			console.log($('#job' + j));
			console.log(this);
			let id = $(this).attr('data-id');
			console.log(id);
			console.log('#job-mobile'+id);
			if(this.checked === true){
				document.getElementById('job-mobile'+id).checked = true;
			} else {
				document.getElementById('job-mobile'+id).checked = false;
			}
		};
		document.getElementById('job-mobile'+j).onclick = function() {
			console.log(j);
			console.log($('#job-mobile' + j));
			console.log(this);
			let id = $(this).attr('data-id');
			console.log(id);
			if(this.checked === true){
				document.getElementById('job'+id).checked = true;
			} else {
				document.getElementById('job'+id).checked = false;
			}
		};
	}*/

	//check checkbox button by jquery
	var number = $('[name = "job-mobile"]');
	for (var i=1;i<=number.length;i++){
		var j = String(i);
		$('#job'+j).click(function() {
			console.log(j);
			console.log($('#job' + j));
			console.log(this);
			let id = $(this).attr('data-id');
			console.log(id);
			console.log('#job-mobile'+id);
			if(this.checked === true){
				$('#job-mobile'+id).prop('checked',true);
			} else {
				$('#job-mobile'+id).prop('checked',false);
			}
		});
		$('#job-mobile'+j).click(function() {
			console.log(j);
			console.log($('#job-mobile' + j));
			console.log(this);
			let id = $(this).attr('data-id');
			console.log(id);
			console.log(this.checked);
			if(this.checked === true){
				$('#job'+id).prop("checked",true)
			} else {
				$('#job'+id).prop("checked",false);
			}
		});
	}
});
function submit() {
	alert('Bạn đã gửi thành công!');
}