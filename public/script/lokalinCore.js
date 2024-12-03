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
		if (!this.map.has(kota)) {
			throw new Error(
				`Kota "${kota}" tidak ditemukan dalam peta wisata.`
			);
		}
		return this.map.get(kota);
	}
}

class Graph {
	constructor(wisataList) {
		this.wisataList = wisataList;
		this.graph = new Map();
		this.createGraph();
	}

	createGraph() {
		for (let node of this.wisataList) {
			this.graph.set(node.id, []);
			for (let neighbor of this.wisataList) {
				if (node.id !== neighbor.id) {
					const distance = Navigator.haversine(
						node.latitude,
						node.longitude,
						neighbor.latitude,
						neighbor.longitude
					);
					this.graph.get(node.id).push({ id: neighbor.id, distance });
				}
			}
		}
	}

	getNeighbors(nodeId) {
		return this.graph.get(nodeId) || [];
	}
}

class Navigator {
	constructor(graph) {
		this.graph = graph;
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

	dijkstra(startLat, startLon) {
		const distances = new Map();
		const priorityQueue = [];
		const visited = new Set();

		for (const node of this.graph.wisataList) {
			distances.set(node.id, Infinity);
		}

		const startNodeId = "start";
		distances.set(startNodeId, 0);
		priorityQueue.push({ id: startNodeId, distance: 0 });

		// Tambahkan node awal (lokasi pengguna) ke graph
		this.graph.graph.set(startNodeId, []);
		for (const node of this.graph.wisataList) {
			const distance = Navigator.haversine(
				startLat,
				startLon,
				node.latitude,
				node.longitude
			);
			this.graph.graph.get(startNodeId).push({ id: node.id, distance });
		}

		while (priorityQueue.length > 0) {
			priorityQueue.sort((a, b) => a.distance - b.distance);
			const currentNode = priorityQueue.shift();

			if (visited.has(currentNode.id)) continue;
			visited.add(currentNode.id);

			for (const neighbor of this.graph.getNeighbors(currentNode.id)) {
				const newDistance =
					distances.get(currentNode.id) + neighbor.distance;
				if (newDistance < distances.get(neighbor.id)) {
					distances.set(neighbor.id, newDistance);
					priorityQueue.push({
						id: neighbor.id,
						distance: newDistance,
					});
				}
			}
		}

		return this.getSortedResults(distances);
	}

	getSortedResults(distances) {
		const sortedResults = [];
		for (const node of this.graph.wisataList) {
			if (distances.has(node.id)) {
				sortedResults.push({
					id: node.id,
					nama: node.nama,
					jarak: distances.get(node.id),
				});
			}
		}
		sortedResults.sort((a, b) => a.jarak - b.jarak);
		return sortedResults;
	}
}
