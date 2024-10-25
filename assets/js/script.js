AOS.init()

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'wrapAround': true
})

var musik = ''
var audio = document.querySelector('.audio')
if (musik) 
{
	audio.src = musik
}

function mulai() 
{
	audio.play()
	window.scrollTo(0, 0)
	var mail_section = $('#mail-section')
	$('#mail').attr('src', 'assets/img/mail.gif')
	setTimeout(function() {
		mail_section.css('opacity', 0)
		$('body').removeClass('overflow-hidden')
	}, 2000)
	setTimeout(function() {
		mail_section.removeClass('d-flex')
		mail_section.addClass('d-none')
	}, 4000)
}

function wa(isi) 
{
	open("https://wa.me/6287856534455?text=Makasih Makasii ya Ayy Web nya " + isi)
}

async function makeawish() 
{
	var {
		value: kado
	} = await swal.fire({
		imageUrl: 'assets/img/wish.jpeg',
		title: 'Maap ya ayy ipan gabisa ngucapin banyak hal tapi ipan slalu mendoakan selis yang terbaik ❤️',
		imageWidth: 400,
		imageHeight: 450,
		confirmButtonColor: '#2fe965',
		confirmButtonText: 'Kirim 💕',
		input: 'text',
		inputPlaceholder: 'Kasih harapan ayy...',
		showCancelButton: false,
		customClass: {
			title: 'custom-swal-title'
		}
	})

	if (kado) {
		await swal.fire({
			imageUrl: 'assets/img/icon_wa.png',
			title: 'Kirim jawabannya ke wa ya ayy.',
			confirmButtonColor: '#2fe965',
			confirmButtonText: 'Kirim 💕'
		})
		wa(kado)
	} else {
		await swal.fire({
			icon: 'error',
			title: 'Jangan dikosongin dong!!!'
		})
		makeawish()
	}
}