// const inputs = document.querySelectorAll(".form-input");

// console.log('INPUTS', inputs);
// function addcl() {
//     console.log('ADD');
// 	// let parent = this.parentNode.parentNode;
// 	this.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
//     console.log('THIS', input);
//     input.onfocus = function () {
//         console.log('KU');
//         input.classList.add("focus");
//     };
//     input.onblur = remcl;
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });

$(document).ready(function () {
	// $(document).on('click', '.input', function () {
	// 	var $input = $(this).find('.form-label')
	// 	$input.addClass('focus')
	// })
	// $('.form-control').blur(function () {
	// 	$('.form-label').removeClass('focus')
	// })
	// Для модалки с восстановлением пароля
	$('#modal-forgot-pw').on('click', '.form-input', function () {
		var $input = $(this).find('.form-label')
		$input.addClass('focus').text('email');
	})
	console.log('HELP')
	$('#modal-forgot-pw').on('click', '.modal-content', function () {
		console.log('working');
		var $input = $(this).find('.form-input')
			$input.blur(function () {
				console.log('find', $(this).find('#email').val())
			if ($(this).find('#email').val() == '') {
				$(this).find('.form-label').removeClass('focus').text('Электронная почта')
			}
		})
	})
})

// $(document).ready(function () {
// 	var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
// 	var mail = $('#modal-forgot-pw').find('.form-input');
	
// 	mail.blur(function () {
// 		if(mail.val() != ''){
// 				if(mail.val().search(pattern) == 0){
// 					$('.error-hint').css('display', 'none');
// 					$('#send-btn').attr('disabled', false);
// 				}else{
// 					$('.error-hint').css('display', 'flex');
// 					$('#send-btn').attr('disabled', true);
// 				}
// 			}else{
// 				$('.error-hint').css('display', 'flex').text('Поле e-mail не должно быть пустым!');
// 				$('#send-btn').attr('disabled', true);
// 			}
// 	});
// });