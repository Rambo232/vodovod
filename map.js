const content = `
<div>
<strong style="margin-right:6px">улица Чехова 48А</strong>&#128073
	<a style="color: #ffc107" href="tel:+7-938-455-4652">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
			<path
				d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
			<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
		</svg>
	</a>
	<a href="tel:+7-918-204-4439">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="dark" class="bi bi-phone" viewBox="0 0 16 16">
			<path
				d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
			<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
		</svg>
	</a>
</div>
`
const ourOffice = '/svg/office.svg'
const finished = '/svg/success.svg'

// Coordinates --> Fix --> iterate over objects 
const office = [43.623732, 39.723125]
const finishedWork_Donskaya_S = [43.625742, 39.719073]
const finishedWork_Vishnevaya_S = [43.624874, 39.755662]
const finishedWork_Plastunskaya_S = [43.622130, 39.746007]
const finishedWork_Kalarash_Lz = [43.912834, 39.339947]
const finishedWork_Krimskaya_S = [43.636821, 39.699005]
const finishedWork_Tsurupa_S = [43.602069, 39.719504]
const finishedWork_Truda_S = [43.602069, 39.719504]
const finishedWork_Baranovskoye_Shosse_D = [43.681811, 39.678348]
const finishedWork_Matsesta_Che_S = [43.550459, 39.795458]
const finishedWork_Gaidara_A = [43.661804, 39.655760]
const finishedWork_Loo_L = [43.701651, 39.586237]
const finishedWork_Krasnaya_Polyana_Achishkhovskaya_A = [43.682012, 40.203132]
const finishedWork_Krasnaya_Polyana_Gidrostroiteley_A = [43.679185, 40.199951]
const finishedWork_Zaschitnikov_Kavkaza_A = [43.680415, 40.212259]
const finishedWork_Yuzhnoe_Galitsino_D = [43.650388, 39.662230]
const finishedWork_Esaulenko_S = [43.550883, 39.784372]
const finishedWork_Kurortny_Prospekt_108_6_S = [43.550142, 39.782314]
const finishedWork_Klubnichnaya_S = [43.620971, 39.712232]
const finishedWork_Donskaya_2_S = [43.616849, 39.726556]
const finishedWork_Tselinnaya_S = [43.634472, 39.709782]
const finishedWork_Razbityy_Kotel_V = [43.686179, 39.726738]
const finishedWork_Rabochi_Pereulok_S = [43.607884, 39.724794]
const finishedWork_Sevastopolsakya_S = [43.589695, 39.731856]
const finishedWork_Morskoy_Pereulok_S = [43.577993, 39.727343]
const finishedWork_Rakhmanonova_S = [43.608317, 39.716488]
const finishedWork_Nagornaya_S = [43.578498, 39.729244]
const finishedWork_Letnyaya_D = [43.654930, 39.647399]
const finishedWork_Novosyolov_S = [43.601850, 39.727709]
const finishedWork_Rakhmanonova_2_S = [43.609631, 39.716447]
const finishedWork_Matsesta_2_Che_S = [43.561507, 39.793139]
const finishedWork_Lysaya_Gora_S = [43.580995, 39.741891]
const finishedWork_Svetlana_S = [43.572958, 39.735368]
const finishedWork_Kurortny_Prospekt_S = [43.552268, 39.777235]
const finishedWork_Bytha_Olymp_S = [43.566866, 39.751897]
const finishedWork_Staraya_Melnitca = [43.686797, 39.656959]
const finishedWork_Yeniseyskaya_S = [43.690059, 39.613646]
const finishedWork_Severnaya_S = [43.594128, 39.727750]
const finishedWork_Plastunskaya_Vertodrom_S = [43.618822, 39.740975]
const finishedWork_Razdolnaya_S = [43.580938, 39.766145]
const finishedWork_Gagarina_Cheshskoe_Pivo_S = [43.609037, 39.727860]
const finishedWork_Matsesta_Villa_9 = [43.566675, 39.802154]
const finishedWork_Gagarina_2_S = [43.609789, 39.728132]
const finishedWork_Chekmeneva_S = [43.576837, 39.801709]
const finishedWork_Semashko_S = [43.666274, 39.628101]
const finishedWork_Transportnaya_S = [43.590797, 39.753847]
const finishedWork_Pitsunda_S = [43.159347, 40.333189]
const finishedWork_Pirogova_S = [43.607296, 39.715616]
const finishedWork_73_Kilometr_S = [43.645789, 39.668915]
const finishedWork_Vasilevka_S = [43.664139, 39.714261]
const finishedWork_Tselinnaya_2_S = [43.634492, 39.709780]
const finishedWork_Tselinnaya_3_S = [43.650742, 39.714046]
const finishedWork_Russkaya_Mamaika_S = [43.652345, 39.714662]
const finishedWork_Krasnaya_S = [43.580553, 39.733780]
const finishedWork_Makarenko_S = [43.611605, 39.740964]
const finishedWork_Parkovaya_S = [43.587867, 39.717884]
const finishedWork_Chernomorskaya_S = [43.567150, 39.736688]
const finishedWork_Makarenko_2_S = [43.612216, 39.742999]
const finishedWork_Pionerskaya_S = [43.579809, 39.734663]
const finishedWork_Vishnevaya_2_S = [43.616520, 39.758030]
const finishedWork_Zagorodnaya_S = [43.629056, 39.703903]
const finishedWork_Gorniy_Vozduh_K = [43.680404, 39.603614]
const finishedWork_Loo_2_L = [43.702626, 39.585993]
const finishedWork_Letniya_D = [43.656240, 39.647493]
const finishedWork_Chekhova_S = [43.624298, 39.723111]
const finishedWork_Zagorodnaya_2_S = [43.629453, 39.700297]
const finishedWork_Klubnichnaya_2_S = [43.619567, 39.712511]
const finishedWork_Bitha_S = [43.565912, 39.760697]
const finishedWork_Meteleva_S = [43.576060, 39.752739]
const finishedWork_73_Kilometr_2_S = [43.641007, 39.677888]
const finishedWork_Vinogradnaya_S = [43.615244, 39.718766]
const finishedWork_Golitsino_D = [43.543588, 39.969701]
const finishedWork_Plekhanova_S = [43.626926, 39.702857]
const finishedWork_Nagornaya_2_S = [43.578959, 39.728664]
const finishedWork_Tsandripsh_A = [43.380874, 40.066186]
const finishedWork_Ploshad_Iskustv_S = [43.577774, 39.726313]
const finishedWork_Park_Otle_S = [43.575890, 39.725200]
const finishedWork_Stanislavskogo_A = [43.420586, 39.929513]
const finishedWork_Lunacharskogo_A = [43.420783, 39.935136]
const finishedWork_Suzdalskaya_A = [43.424305, 39.953435]
const finishedWork_Aviacionnaya_A = [43.429435, 39.933401]
const finishedWork_Molokova_A = [43.431976, 39.923438]
const finishedWork_Romashek_A = [43.433145, 39.916032]
const finishedWork_Vzletnaya_A = [43.436232, 39.916335]
const finishedWork_Iskri_K = [43.493718, 39.903349]
const finishedWork_Sukhumskoe_Shosse_K = [43.501619, 39.878833]
const finishedWork_Darvina_K = [43.503598, 39.889862]
const finishedWork_50_Let_SSSR_K = [43.509298, 39.871921]
const finishedWork_Yaltinskaya_K = [43.507554, 39.869275]
const finishedWork_Zheleznodorozhnaya_K = [43.506739, 39.870337]
const finishedWork_Zheleznodorozhnaya_Vokzal_K = [43.512242, 39.864049]
const finishedWork_Sukhumskoe_Shosse_Auto_K = [43.494124, 39.887189]
const finishedWork_60_Let_VLKSM_S = [43.615561, 39.740806]
const finishedWork_Komunalnaya_S = [43.569467, 39.757277]
const finishedWork_Bambukovaya_S = [43.612144, 39.715167]
const finishedWork_Vishnevaya_Garazhi_S = [43.620900, 39.760009]

// Урожайная

function init() {
	const map = new ymaps.Map('map', {
		center: office,
		zoom: 13
	});
	const placeMarkHome = new ymaps.Placemark(office, {
		balloonContent: content
	},
		{
			iconLayout: 'default#image',
			iconImageHref: ourOffice,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Donskaya_S = new ymaps.Placemark(finishedWork_Donskaya_S, {
		balloonContentHeader: "Завершённый обьект Donskaya",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Vishnevaya_S = new ymaps.Placemark(finishedWork_Vishnevaya_S, {
		balloonContentHeader: "Завершённый обьект Vishnavaya",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Plastunskaya_S = new ymaps.Placemark(finishedWork_Plastunskaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Kalarash_Lz = new ymaps.Placemark(finishedWork_Kalarash_Lz, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Krimskaya_S = new ymaps.Placemark(finishedWork_Krimskaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Tsurupa_S = new ymaps.Placemark(finishedWork_Tsurupa_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Truda_S = new ymaps.Placemark(finishedWork_Truda_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Baranovskoye_Shosse_D = new ymaps.Placemark(finishedWork_Baranovskoye_Shosse_D, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Matsesta_Che_S = new ymaps.Placemark(finishedWork_Matsesta_Che_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Gaidara_A = new ymaps.Placemark(finishedWork_Gaidara_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Loo_L = new ymaps.Placemark(finishedWork_Loo_L, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Krasnaya_Polyana_Achishkhovskaya_A = new ymaps.Placemark(finishedWork_Krasnaya_Polyana_Achishkhovskaya_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Krasnaya_Polyana_Gidrostroiteley_A = new ymaps.Placemark(finishedWork_Krasnaya_Polyana_Gidrostroiteley_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Zaschitnikov_Kavkaza_A = new ymaps.Placemark(finishedWork_Zaschitnikov_Kavkaza_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Yuzhnoe_Galitsino_D = new ymaps.Placemark(finishedWork_Yuzhnoe_Galitsino_D, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Esaulenko_S = new ymaps.Placemark(finishedWork_Esaulenko_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Kurortny_Prospekt_108_6_S = new ymaps.Placemark(finishedWork_Kurortny_Prospekt_108_6_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Klubnichnaya_S = new ymaps.Placemark(finishedWork_Klubnichnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Donskaya_2_S = new ymaps.Placemark(finishedWork_Donskaya_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Tselinnaya_S = new ymaps.Placemark(finishedWork_Tselinnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Razbityy_Kotel_V = new ymaps.Placemark(finishedWork_Razbityy_Kotel_V, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Rabochi_Pereulok_S = new ymaps.Placemark(finishedWork_Rabochi_Pereulok_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Sevastopolsakya_S = new ymaps.Placemark(finishedWork_Sevastopolsakya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Morskoy_Pereulok_S = new ymaps.Placemark(finishedWork_Morskoy_Pereulok_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Rakhmanonova_S = new ymaps.Placemark(finishedWork_Rakhmanonova_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Nagornaya_S = new ymaps.Placemark(finishedWork_Nagornaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Letnyaya_D = new ymaps.Placemark(finishedWork_Letnyaya_D, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Novosyolov_S = new ymaps.Placemark(finishedWork_Novosyolov_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Rakhmanonova_2_S = new ymaps.Placemark(finishedWork_Rakhmanonova_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Matsesta_2_Che_S = new ymaps.Placemark(finishedWork_Matsesta_2_Che_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Lysaya_Gora_S = new ymaps.Placemark(finishedWork_Lysaya_Gora_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Svetlana_S = new ymaps.Placemark(finishedWork_Svetlana_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Kurortny_Prospekt_S = new ymaps.Placemark(finishedWork_Kurortny_Prospekt_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Bytha_Olymp_S = new ymaps.Placemark(finishedWork_Bytha_Olymp_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Yeniseyskaya_S = new ymaps.Placemark(finishedWork_Yeniseyskaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Severnaya_S = new ymaps.Placemark(finishedWork_Severnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Plastunskaya_Vertodrom_S = new ymaps.Placemark(finishedWork_Plastunskaya_Vertodrom_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Razdolnaya_S = new ymaps.Placemark(finishedWork_Razdolnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Gagarina_Cheshskoe_Pivo_S = new ymaps.Placemark(finishedWork_Gagarina_Cheshskoe_Pivo_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Matsesta_Villa_9 = new ymaps.Placemark(finishedWork_Matsesta_Villa_9, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Gagarina_2_S = new ymaps.Placemark(finishedWork_Gagarina_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Chekmeneva_S = new ymaps.Placemark(finishedWork_Chekmeneva_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Semashko_S = new ymaps.Placemark(finishedWork_Semashko_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Transportnaya_S = new ymaps.Placemark(finishedWork_Transportnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Pitsunda_S = new ymaps.Placemark(finishedWork_Pitsunda_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Pirogova_S = new ymaps.Placemark(finishedWork_Pirogova_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_73_Kilometr_S = new ymaps.Placemark(finishedWork_73_Kilometr_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Vasilevka_S = new ymaps.Placemark(finishedWork_Vasilevka_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Tselinnaya_2_S = new ymaps.Placemark(finishedWork_Tselinnaya_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Tselinnaya_3_S = new ymaps.Placemark(finishedWork_Tselinnaya_3_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Russkaya_Mamaika_S = new ymaps.Placemark(finishedWork_Russkaya_Mamaika_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Krasnaya_S = new ymaps.Placemark(finishedWork_Krasnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Makarenko_S = new ymaps.Placemark(finishedWork_Makarenko_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});



	const work_Parkovaya_S = new ymaps.Placemark(finishedWork_Parkovaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Chernomorskaya_S = new ymaps.Placemark(finishedWork_Chernomorskaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Makarenko_2_S = new ymaps.Placemark(finishedWork_Makarenko_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Pionerskaya_S = new ymaps.Placemark(finishedWork_Pionerskaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Vishnevaya_2_S = new ymaps.Placemark(finishedWork_Vishnevaya_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Zagorodnaya_S = new ymaps.Placemark(finishedWork_Zagorodnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Gorniy_Vozduh_K = new ymaps.Placemark(finishedWork_Gorniy_Vozduh_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Loo_2_L = new ymaps.Placemark(finishedWork_Loo_2_L, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Letniya_D = new ymaps.Placemark(finishedWork_Letniya_D, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Chekhova_S = new ymaps.Placemark(finishedWork_Chekhova_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Klubnichnaya_2_S = new ymaps.Placemark(finishedWork_Klubnichnaya_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Bitha_S = new ymaps.Placemark(finishedWork_Bitha_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Meteleva_S = new ymaps.Placemark(finishedWork_Meteleva_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_73_Kilometr_2_S = new ymaps.Placemark(finishedWork_73_Kilometr_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Vinogradnaya_S = new ymaps.Placemark(finishedWork_Vinogradnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Ploshad_Iskustv_S = new ymaps.Placemark(finishedWork_Ploshad_Iskustv_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Park_Otle_S = new ymaps.Placemark(finishedWork_Park_Otle_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Stanislavskogo_A = new ymaps.Placemark(finishedWork_Stanislavskogo_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Lunacharskogo_A = new ymaps.Placemark(finishedWork_Lunacharskogo_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Suzdalskaya_A = new ymaps.Placemark(finishedWork_Suzdalskaya_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Aviacionnaya_A = new ymaps.Placemark(finishedWork_Aviacionnaya_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Molokova_A = new ymaps.Placemark(finishedWork_Molokova_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Romashek_A = new ymaps.Placemark(finishedWork_Romashek_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});
	const work_Vzletnaya_A = new ymaps.Placemark(finishedWork_Vzletnaya_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Iskri_K = new ymaps.Placemark(finishedWork_Iskri_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Sukhumskoe_Shosse_K = new ymaps.Placemark(finishedWork_Sukhumskoe_Shosse_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Darvina_K = new ymaps.Placemark(finishedWork_Darvina_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});
	const work_50_Let_SSSR_K = new ymaps.Placemark(finishedWork_50_Let_SSSR_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Yaltinskaya_K = new ymaps.Placemark(finishedWork_Yaltinskaya_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Zheleznodorozhnaya_K = new ymaps.Placemark(finishedWork_Zheleznodorozhnaya_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Zheleznodorozhnaya_Vokzal_K = new ymaps.Placemark(finishedWork_Zheleznodorozhnaya_Vokzal_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});
	const work_Golitsino_D = new ymaps.Placemark(finishedWork_Golitsino_D, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});


	const work_Plekhanova_S = new ymaps.Placemark(finishedWork_Plekhanova_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Nagornaya_2_S = new ymaps.Placemark(finishedWork_Nagornaya_2_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Sukhumskoe_Shosse_Auto_K = new ymaps.Placemark(finishedWork_Sukhumskoe_Shosse_Auto_K, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_60_Let_VLKSM_S = new ymaps.Placemark(finishedWork_60_Let_VLKSM_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Komunalnaya_S = new ymaps.Placemark(finishedWork_Komunalnaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Tsandripsh_A = new ymaps.Placemark(finishedWork_Tsandripsh_A, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Bambukovaya_S = new ymaps.Placemark(finishedWork_Bambukovaya_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	const work_Vishnevaya_Garazhi_S = new ymaps.Placemark(finishedWork_Vishnevaya_Garazhi_S, {
		balloonContentHeader: "Завершённый обьект",
		balloonContentBody: "<img src='/media/1.webp' width='64px'>",
		balloonContentFooter: "<a href='./index.html'>ссылка</a>"
	},
		{
			iconLayout: 'default#image',
			iconImageHref: finished,
			iconImageSize: [32, 32],
			iconImageOffset: [-26, -28]
		});

	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('rulerControl');
	map.controls.remove('fullscreenControl');


	const listOfWorks = [work_Donskaya_S, work_Plastunskaya_S, work_Kalarash_Lz, work_Krimskaya_S, work_Tsurupa_S, work_Baranovskoye_Shosse_D, work_Matsesta_Che_S,
		work_Gaidara_A, work_Loo_L, work_Krasnaya_Polyana_Achishkhovskaya_A, work_Krasnaya_Polyana_Gidrostroiteley_A, work_Zaschitnikov_Kavkaza_A, work_Yuzhnoe_Galitsino_D,
		work_Esaulenko_S, work_Kurortny_Prospekt_108_6_S, work_Klubnichnaya_S, work_Donskaya_2_S, work_Tselinnaya_S, work_Razbityy_Kotel_V, work_Vishnevaya_S,
		work_Rabochi_Pereulok_S, work_Sevastopolsakya_S, work_Morskoy_Pereulok_S, work_Rakhmanonova_S, work_Nagornaya_S, work_Letnyaya_D,
		work_Novosyolov_S, work_Rakhmanonova_2_S, work_Matsesta_2_Che_S, work_Lysaya_Gora_S, work_Svetlana_S, work_Bytha_Olymp_S, work_Kurortny_Prospekt_S,
		work_Yeniseyskaya_S, work_Severnaya_S, work_Plastunskaya_Vertodrom_S, work_Razdolnaya_S, work_Gagarina_Cheshskoe_Pivo_S, work_Matsesta_Villa_9,
		work_Gagarina_2_S, work_Chekmeneva_S, work_Semashko_S, work_Transportnaya_S, work_Pitsunda_S, work_Pirogova_S,
		work_73_Kilometr_S, work_Vasilevka_S, work_Tselinnaya_2_S, work_Russkaya_Mamaika_S, work_Krasnaya_S, work_Makarenko_S, work_Parkovaya_S,
		work_Chernomorskaya_S, work_Makarenko_2_S, work_Pionerskaya_S, work_Vishnevaya_2_S, work_Zagorodnaya_S, work_Gorniy_Vozduh_K,
		work_Loo_2_L, work_Letniya_D, work_Chekhova_S, work_Klubnichnaya_2_S, work_Bitha_S, work_73_Kilometr_2_S,
		work_Vinogradnaya_S, work_Golitsino_D, work_Plekhanova_S, work_Nagornaya_2_S, work_Tsandripsh_A, work_Ploshad_Iskustv_S, work_Park_Otle_S,
		work_Stanislavskogo_A, work_Lunacharskogo_A, work_Suzdalskaya_A, work_Aviacionnaya_A, work_Molokova_A, work_Romashek_A, work_Vzletnaya_A,
		work_Iskri_K, work_Sukhumskoe_Shosse_K, work_Darvina_K, work_50_Let_SSSR_K, work_Yaltinskaya_K, work_Zheleznodorozhnaya_K, work_Zheleznodorozhnaya_Vokzal_K,
		work_Sukhumskoe_Shosse_Auto_K, work_60_Let_VLKSM_S, work_Komunalnaya_S, work_Bambukovaya_S, work_Vishnevaya_Garazhi_S, placeMarkHome]

	listOfWorks.forEach(element => {
		map.geoObjects.add(element)
	});

}
ymaps.ready(init)