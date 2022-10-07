// (() => {
// 	let beLinked = document.getElementById('selector')
// 	beLinked.onmouseover = function(){
// 		beLinked.style.color = 'red';
// 	}
// 	beLinked.onmouseout= function(){
// 		beLinked.style.color = 'black';
//   }
// }
// )
// const proceedeValidData = false


(() => {
	'use strict'
// Fetch all the forms we want to apply custom Bootstrap validation styles to
	
	const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
		form.addEventListener('submit', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
			}
			form.classList.add('was-validated')
			const submit = document.getElementById('send_data')

			submit.onclick = function(){

				let modal = document.getElementById('modal')
			modal.addEventListener('click',function(){
			console.log(document.getElementById('form').checkValidity())
			if (document.getElementById('form').checkValidity()){
					modal.toggleAttribute.add('modal')
					console.log(this.target)
				}
			})

			let email = document.getElementById('email2')
			let name = document.getElementById('name2')
			let phone = document.getElementById('phone2')

			if(name != null & phone != null){
				console.log("Email: " + email.value + "\nName: " + name.value + "\nPhone: " + phone.value)
			}else{
				alert("We have a problem Huston!")
			}
		}
		}, false)
	})
})();

document.getElementById('search').
addEventListener('click', function(){
		alert("Пока эта функция отключeна,\nскоро у нас будет личный кабинет\nтогда и включим поиск:)")

})
// OPTIMIZE LATER like above--^
document.getElementById('email2')
.addEventListener('focus',function(){
	this.style.fontSize = '24px'
	this.style.fontWeight = 640
})
document.getElementById('email2')
.addEventListener('focusout',function(){
	this.style.fontSize = '16px'
	this.style.fontWeight = 480
})

document.getElementById('name2')
.addEventListener('focus',function(){
	this.style.fontSize = '24px'
	this.style.fontWeight = 640
})
document.getElementById('name2')
.addEventListener('focusout',function(){
	this.style.fontSize = '16px'
	this.style.fontWeight = 480
})
document.getElementById('phone2')
.addEventListener('focus',function(){
	this.style.fontSize = '24px'
	this.style.fontWeight = 640
})
document.getElementById('phone2')
.addEventListener('focusout',function(){
	this.style.fontSize = '16px'
	this.style.fontWeight = 480
})
// OPTIMIZE LATER


// let btnAlert = document.getElementById('send_data')
// let alertel = document.querySelector('.alert')
// let overlay = document.querySelector('.overlay')
// let alertOk = document.getElementById('alertOK')

// btnAlert.addEventListener('click', function(){
// 	alertel.classList.remove('hidden')
// 	overlay.classList.remove('hidden')
// })

// function hideAlertWin(){
// 	alertel.classList.add('hidden')
// 	overlay.classList.add('hidden')
// }

// alertOk.addEventListener('click',hideAlertWin)

