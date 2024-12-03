// Ambil daftar wisata di Makassar
function cariWisata(str) {
	const wisataDiMakassar = wisataMap.getWisata(str);
	const lokasiPengguna = { latitude: -5.145, longitude: 119.432 }; // Contoh lokasi pengguna

	// Buat objek Graph dari daftar wisata
	const graph = new Graph(wisataDiMakassar);

	// Buat objek Navigator dengan graph yang telah dibuat
	const navigator = new Navigator(graph);

	// Jalankan algoritma Dijkstra untuk mendapatkan hasil
	const hasil = navigator.dijkstra(
		lokasiPengguna.latitude,
		lokasiPengguna.longitude
	);

	return hasil;
}

// Tampilkan hasil
function addToContainer(containerHtmls, listWisata) {
	const jarakList = listWisata.map((wisata) => parseDistance(wisata.jarak));

	const html = listWisata.reduce((acc, wisata, i) => {
		const jarak = jarakList[i];
		return acc + renderWisataCard(wisata, jarak, i === 0);
	}, ``);

	containerHtmls.innerHTML = html;
}
function handleObservedContainerElements(evt) {
	const { target, isIntersecting } = evt;

	if (!isIntersecting) {
		return;
	}
	switch (target.id) {
		case REKOMENDASI_CONTAINER_ID:
			addToContainer(rekomendasiWisataContainer, cariWisata("Makassar"));
			break;
		case KABUPATEN_WISATA_CONTAINER_ID:
			addToContainer(kabupatenWisataContainer, cariWisata("Parepare"));
			break;
	}
}

const observ = observeElements(
	[rekomendasiWisataContainer, kabupatenWisataContainer],
	handleObservedContainerElements
);
for (const entry of wisataMap.map.entries()) {
	console.log(`${entry[0]}: ${entry[1].length} wisata`);
}
