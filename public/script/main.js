const wisataEntries = wisataMap.map.entries();
// Ambil daftar wisata di Makassar
function cariWisata(str, lokasiPengguna) {
	if (
		lokasiPengguna.latitude === undefined ||
		lokasiPengguna.longitude === undefined
	) {
		return;
	}

	const wisataDiMakassar = wisataMap.getWisata(str);

	// Buat objek Navigator dengan graph yang telah dibuat
	const navigator = new LokalinNavigator(wisataDiMakassar);

	// Jalankan untuk mendapatkan hasil
	const hasil = navigator.resolve(
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
		const jarak = parseDistance(wisata.distance);
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
				const { latitude, longitude } = wisata;
				if (mapModal) {
					setOSRMDistance({ latitude, longitude });
					renderModal(wisata);
					mapModal.showModal();
				}
			}
		}
	});
}
function handleContainerIntersection(evt, coords) {
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
			cariWisata("Barru", lokasiPengguna)
		);
	}
}
async function handleObservedContainerElements(evt) {
	try {
		const { coords } = await getCurrentLocation();

		handleContainerIntersection(evt, coords);

		console.log("running");
	} catch (err) {
		if (err?.message == "User denied Geolocation") {
			alert(
				"Akses Lokasi Diperlukan. Jika tidak menanggapi, Lokasi 0.0 akan digunakan."
			);

			handleContainerIntersection(evt, { latitude: 0, longitude: 0 });
		}

		console.error("Error handling observed elements:", err);
	}
}

const observ = observeElements(
	[rekomendasiWisataContainer, kabupatenWisataContainer],
	handleObservedContainerElements
);
