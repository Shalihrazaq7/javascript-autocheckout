function checkOut() {
	const jamCheckout = "0:0:0";
	let d = new Date();
	let waktuSekarang = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

	let breakFunction = setTimeout(checkOut, 500);

	if (waktuSekarang == jamCheckout) {
		// document.querySelector('button[name="add-to-cart"]').click();
		window.location.href = "https://bukurepublika.id/checkout/";
		clearTimeout(breakFunction);
	}

	console.log(waktuSekarang);
}

checkOut();

// function checkOut() {
// 	const jamCheckout = "20:10:0";
// 	let d = new Date();
// 	let waktuSekarang = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

// 	let breakFunction = setTimeout(checkOut, 500);

// 	if (waktuSekarang == jamCheckout) {
// 		document.querySelector('button[name="add-to-cart"]').click();
// 		clearTimeout(breakFunction);
// 	}

// 	console.log(waktuSekarang);
// }

// checkOut();