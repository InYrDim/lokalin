class Wisata {
	constructor(id, nama, latitude, longitude) {
		this.id = id;
		this.nama = nama;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	// Metode untuk membandingkan lokasi
	isSameLocation(other) {
		return (
			this.latitude === other.latitude &&
			this.longitude === other.longitude
		);
	}
}

class WisataMap {
	constructor() {
		this.map = new Map();
	}

	addWisata(kota, wisata) {
		if (!this.map.has(kota)) {
			this.map.set(kota, []);
		}

		const wisataList = this.map.get(kota);

		// Cek jika wisata dengan lokasi yang sama sudah ada
		const existingIndex = wisataList.findIndex((existingWisata) =>
			existingWisata.isSameLocation(wisata)
		);

		if (existingIndex !== -1) {
			// Jika ada, update informasi wisata yang ada
			wisataList[existingIndex] = wisata;
			console.warn(
				`Wisata "${wisata.nama}" telah diperbarui di "${kota}".`
			);
		} else {
			// Jika tidak ada, tambahkan wisata baru
			wisataList.push(wisata);
		}
	}

	getWisata(kota) {
		const wisataList = this.map.get(kota);

		if (!wisataList) {
			throw new Error(
				`Kota "${kota}" tidak ditemukan dalam peta wisata.`
			);
		}

		return new Map(wisataList.map((wisata) => [wisata.nama, wisata]));
	}
}

class LokalinNavigator {
	constructor(wisataMap) {
		this.wisataList = wisataMap;
	}

	static haversine(lat1, lon1, lat2, lon2) {
		const R = 6371; // Radius bumi dalam kilometer
		const dLat = (lat2 - lat1) * (Math.PI / 180);
		const dLon = (lon2 - lon1) * (Math.PI / 180);
		const a =
			Math.sin(dLat / 2) ** 2 +
			Math.cos(lat1 * (Math.PI / 180)) *
				Math.cos(lat2 * (Math.PI / 180)) *
				Math.sin(dLon / 2) ** 2;
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return R * c;
	}

	resolve(startLat, startLon) {
		// this.wisataList is a new Map of Wisata objects

		for (const [id, wisata] of this.wisataList.entries()) {
			const { latitude, longitude } = wisata;

			const distance = LokalinNavigator.haversine(
				startLat,
				startLon,
				latitude,
				longitude
			);

			this.wisataList.set(id, { ...wisata, distance });
		}

		return this.getSortedResults();
	}

	getSortedResults() {
		return [...this.wisataList.entries()]
			.sort((a, b) => a[1].distance - b[1].distance)
			.map(([, w]) => w);
	}
}
