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

	return hasil;
}

// Tampilkan hasil
function addToContainer(containerHtmls, listWisata) {
	if (!Array.isArray(listWisata) || listWisata.length === 0) {
		console.warn("No destinations found to render.");
		containerHtmls.innerHTML = "<p>No destinations available.</p>";
		return;
	}

	const wisataCards = listWisata.map((wisata, index) => {
		const jarak = parseDistance(wisata.jarak);
		const { card, buttonId } = renderWisataCard(wisata, jarak, index === 0);
		return { card, buttonId, wisata };
	});

	containerHtmls.innerHTML = wisataCards.map(({ card }) => card).join("");

	containerHtmls.addEventListener("click", (event) => {
		const button = event.target.closest("button[data-id]");

		if (button) {
			const wisataId = button.getAttribute("data-id");
			const wisata = listWisata.find((w) => w.id == wisataId);
			if (wisata) {
				const mapModal = document.getElementById("map_modal");
				if (mapModal) {
					renderModal(wisata);
					mapModal.showModal();
				}
			}
		}
	});
}

// getCurrentLocation Position lat long
function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

async function handleObservedContainerElements(evt) {
	try {
		const { coords } = await getCurrentLocation();
		const lokasiPengguna = {
			latitude: coords.latitude,
			longitude: coords.longitude,
		};
		const { target, isIntersecting } = evt;

		if (!isIntersecting) return;

		if (target.id === REKOMENDASI_CONTAINER_ID) {
			addToContainer(
				rekomendasiWisataContainer,
				cariWisata("Makassar", lokasiPengguna)
			);
		} else if (target.id === KABUPATEN_WISATA_CONTAINER_ID) {
			renderSelectElement((val) => {
				addToContainer(
					kabupatenWisataContainer,
					cariWisata(val, lokasiPengguna)
				);
			});
			addToContainer(
				kabupatenWisataContainer,
				cariWisata("Makassar", lokasiPengguna)
			);
		}
	} catch (err) {
		console.error("Error handling observed elements:", err);
	}
}

const observ = observeElements(
	[rekomendasiWisataContainer, kabupatenWisataContainer],
	handleObservedContainerElements
);
