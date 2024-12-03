const wisataEntries = wisataMap.map.entries();
// Ambil daftar wisata di Makassar
function cariWisata(str, lokasiPengguna) {
	const wisataDiMakassar = wisataMap.getWisata(str);
	// Contoh lokasi pengguna

	// Buat objek Graph dari daftar wisata
	const graph = new Graph(wisataDiMakassar);

	// Buat objek Navigator dengan graph yang telah dibuat
	const navigator = new Navigator(graph);

	// Jalankan algoritma Dijkstra untuk mendapatkan hasil
	const hasil = navigator.dijkstra(
		lokasiPengguna.latitude,
		lokasiPengguna.longitude
	);

	console.log(hasil);

	return hasil;
}

// Tampilkan hasil
function addToContainer(containerHtmls, listWisata) {
	const jarakList = listWisata.map((wisata) => parseDistance(wisata.jarak));

	const html = listWisata.reduce((acc, wisata, i) => {
		const jarak = jarakList[i];
		let card =
			renderWisataCard(wisata, jarak, i === 0) + renderModal(wisata);
		return acc + card;
	}, ``);

	containerHtmls.innerHTML = html;
}

// getCurrentLocation Position lat long
function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

async function handleObservedContainerElements(evt) {
	const { target, isIntersecting } = evt;

	const { coords } = await getCurrentLocation();

	const lokasiPengguna = {
		latitude: coords.latitude,
		longitude: coords.longitude,
	};

	if (!isIntersecting) {
		return;
	}
	switch (target.id) {
		case REKOMENDASI_CONTAINER_ID:
			addToContainer(
				rekomendasiWisataContainer,
				cariWisata("Makassar", lokasiPengguna)
			);
			break;
		case KABUPATEN_WISATA_CONTAINER_ID:
			addToContainer(
				kabupatenWisataContainer,
				cariWisata("Parepare", lokasiPengguna)
			);
			break;
	}
}

const observ = observeElements(
	[rekomendasiWisataContainer, kabupatenWisataContainer],
	handleObservedContainerElements
);
for (const entry of wisataEntries) {
	console.log(`${entry[0]}: ${entry[1].length} wisata`);
}
