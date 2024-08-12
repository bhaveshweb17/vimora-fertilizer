// Navbar Scroll Effect
window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".navbar");
	// You can adjust the scroll position threshold as needed
	if (window.scrollY > 0) {
		navbar.style.background = "rgba(0,0,0,.95)";
		navbar.classList.add("position-fixed");
	} else {
		navbar.classList.remove("position-fixed");
		navbar.style.background = ""; // Reset to original background
	}
});

// Sidebar Toggle Effect
function toggleSidebar() {
	document.getElementById("sidebar").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
	// Card Data Array
	const cardData = [
		{
			image: "./image/product/bio/bio-npk.jpg",
			title: "Bio NPK",
			description:
				"Bio NPK is an eco-friendly fertilizer that enhances plant growth by providing essential nutrients in a natural form. It promotes healthy root development, increases nutrient uptake, and improves soil fertility, leading to higher yields and sustainable farming practices.",
		},
		{
			image: "./image/product/bio/mycorrhizal.jpg",
			title: "Mycorrhizal",
			description:
				"Mycorrhizal is a beneficial fungal inoculant that forms symbiotic relationships with plant roots. It enhances water and nutrient absorption, improves soil structure, and boosts plant resilience against environmental stress. This natural solution supports robust plant growth and higher crop productivity.",
		},
		{
			image: "./image/product/bio/prom.jpg",
			title: "PROM",
			description:
				"PROM is a high-quality organic fertilizer rich in phosphorus. It is specially designed to improve soil health and fertility, promoting vigorous plant growth. This environmentally friendly product aids in the development of strong root systems and enhances the overall productivity of crops.",
		},
		// {
		// 	image: "./image/background/hero-image.jpg",
		// 	title: "Card Title 4",
		// 	description: "Card description 4",
		// },
		// {
		// 	image: "./image/background/hero-image.jpg",
		// 	title: "Card Title 5",
		// 	description: "Card description 5",
		// },
		// {
		// 	image: "./image/background/hero-image.jpg",
		// 	title: "Card Title 6",
		// 	description: "Card description 6",
		// },
	];

	const cardSliderInner = document.querySelector(".carousel-inner");

	// Function to create card elements
	const createCards = () => {
		// Clear existing slides
		cardSliderInner.innerHTML = "";

		// Calculate number of cards per slide based on screen size
		const getCardsPerSlide = () => {
			if (window.innerWidth >= 1200) {
				return 4; // Extra large screens
			} else if (window.innerWidth >= 992) {
				return 3; // Large screens
			} else if (window.innerWidth >= 768) {
				return 2; // Medium screens
			} else {
				return 1; // Small screens
			}
		};

		// Positioning and Sliding Cards logic
		let slideIndex = 0;
		while (slideIndex < cardData.length + getCardsPerSlide()) {
			const cardSlide = document.createElement("div");
			cardSlide.classList.add("carousel-item");

			const cardGroup = document.createElement("div");
			cardGroup.classList.add(
				"row",
				"row-cols-1",
				"row-cols-md-2",
				"row-cols-lg-3",
				"row-cols-xl-4",
				"g-4"
			);

			for (let i = 0; i < getCardsPerSlide(); i++) {
				const dataIndex = slideIndex % cardData.length; // Ensure looping through cardData
				const card = cardData[dataIndex];
				const cardItem = document.createElement("div");
				cardItem.classList.add("col");

				// Card Structure
				cardItem.innerHTML = `
			<div class="card h-100">
			  <img src="${card.image}" class="card-img" alt="Card image ${dataIndex + 1}">
			  <div class="card-body">
				<h5 class="card-title">${card.title}</h5>
				<p class="card-text">${card.description}</p>
			  </div>
			</div>
		  `;

				cardGroup.appendChild(cardItem);
				slideIndex++;
			}

			if (cardGroup.children.length > 0) {
				if (cardSliderInner.children.length === 0) {
					cardSlide.classList.add("active");
				}
				cardSlide.appendChild(cardGroup);
				cardSliderInner.appendChild(cardSlide);
			}
		}
	};

	// Initial creation of cards
	createCards();

	// Re-adjust slide visibility on window resize
	window.addEventListener("resize", createCards);
});
