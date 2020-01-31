//saat link diklik
$('.page-scroll').on('click', function(){ //e

	//ambil id link
	var tujuan = $(this).attr('href');

	//tangkap elemen
	var elemen = $(tujuan);
	// console.log(elemen.offset().top);
	//pindahkan scroll
	$('body').animate({
		scrollTop: elemen.offset().top
	}, 1250, 'swing'); 

	// e.preventDefault();

});
