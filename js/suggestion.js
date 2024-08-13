document.addEventListener("DOMContentLoaded", function () {
	const products = {
		micronutrients: [
			{
				id: "VMCF02",
				name: "Zinc Sulphate Monohydrate / Zinc Sulphate Heptahydrate",
				image: "../image/product/micronutrient/zinc-sulphate.jpg",
			},
			{
				id: "VMCF03",
				name: "Ferrous Sulphate",
				image: "../image/product/micronutrient/ferrous-sulphate.jpg",
			},
			{
				id: "VMCF04",
				name: "Manganese Sulphate",
				image: "../image/product/micronutrient/manganese-sulphate.jpg",
			},
			{
				id: "VMCF05",
				name: "Boron",
				image: "../image/product/micronutrient/boron.jpg",
			},
			{
				id: "VMCF06",
				name: "Copper Sulphate",
				image: "../image/product/micronutrient/copper-sulphate.jpg",
			},
			{
				id: "VMCF07",
				name: "Zinc Oxide Suspension",
				image: "../image/product/micronutrient/zinc-oxide-suspension.jpg",
			},
			{
				id: "VMCF08",
				name: "Boron Ethanolamine",
				image: "../image/product/micronutrient/boron-ethanolamine.jpg",
			},
			{
				id: "VMCF09",
				name: "Liquid Calcium",
				image: "../image/product/micronutrient/liquid-calcium.jpg",
			},
		],
		bio_fertilizers: [
			{
				id: "VMCF10",
				name: "PROM",
				image: "../image/product/bio/prom.jpg",
			},
			{
				id: "VMCF11",
				name: "Bio NPK",
				image: "../image/product/bio/bio-npk.jpg",
			},
			{
				id: "VMCF12",
				name: "Mycorrhiza VAM",
				image: "../image/product/bio/mycorrhizal.jpg",
			},
		],
	};

	const carouselInner = document.querySelector(".suggested-product");

	// Function to get the number of items per slide based on screen size
	function getItemsPerSlide() {
		if (window.innerWidth >= 1200) return 5; // Extra large screens
		if (window.innerWidth >= 992) return 4; // Large screens
		if (window.innerWidth >= 768) return 3; // Medium screens
		return 2; // Small screens
	}

	// Function to generate random suggestions
	function getRandomProducts() {
		let allProducts = [
			...products.micronutrients,
			...products.bio_fertilizers,
		];
		let shuffled = allProducts.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 15); // Get 15 products to ensure we have enough for multiple slides
	}

	// Function to create product card HTML
	function createProductCard(product) {
		return `
			<div class="col bg-none">
				<div class="card h-100 border-0 bg-none">
					<a href="product.html?product_id=${product.id}" class="product-link link">
						<img src="${product.image}" alt="${product.name}" class="card-img-top suggested-product-image" />
						<div class="card-body">
							<h5 class="card-title text-center text-dark medium-font ff-source-sans">${product.name}</h5>
						</div>
					</a>
				</div>
			</div>
		`;
	}

	// Function to create carousel slides
	function createCarouselSlides(products) {
		const itemsPerSlide = getItemsPerSlide();
		let slides = [];
		for (let i = 0; i < products.length; i += itemsPerSlide) {
			const slideItems = products
				.slice(i, i + itemsPerSlide)
				.map(createProductCard)
				.join("");
			slides.push(
				`<div class="carousel-item ${
					i === 0 ? "active" : ""
				}"><div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">${slideItems}</div></div>`
			);
		}
		return slides.join("");
	}

	// Insert product cards into the DOM
	function displaySuggestedProducts() {
		const randomProducts = getRandomProducts();
		carouselInner.innerHTML = createCarouselSlides(randomProducts);
	}

	// Initialize the carousel and handle resizing
	displaySuggestedProducts();
	window.addEventListener("resize", displaySuggestedProducts);
});
