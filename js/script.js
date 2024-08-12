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
			image: "../image/product/mixture/vimora-zinc.jpg",
			title: "VIMORA Shresth High Zinc",
			description:
				"Contains multi-micronutrients: Zinc, Manganese, Iron, Copper, Boron, and Molybdenum. Helps the plant tolerate diseases and drought. Improves fruit setting, quality produce, and higher yield. Soluble in water and compatible with pesticides, fungicides, nutrient sprays, and plant growth regulators.",
		},
		{
			image: "../image/product/micronutrient/zinc-sulphate-monohydrate.jpg",
			title: "Zinc Sulphate Monohydrate / Zinc Sulphate Heptahydrate",
			description:
				"Zinc is essential for all types of crops and fruits, improving soil quality and crop yield. Regulates pH in soil, promotes early green coloration in leaves, and enhances fruit yields. Fortifies plant resilience against cold weather and improves water holding capacity.",
		},
		{
			image: "../image/product/micronutrient/ferrous-sulphate.jpg",
			title: "Ferrous Sulphate",
			description:
				"Iron is essential for photosynthesis, chlorophyll formation, and various enzymatic reactions. Corrects chlorosis (yellowing of leaves) and supports normal growth and high-quality yields. Suitable for all crops with iron deficiency.",
		},
		{
			image: "../image/product/micronutrient/manganese-sulphate.jpg",
			title: "Manganese Sulphate",
			description:
				"Water-soluble salt containing magnesium and sulphur. Important for photosynthesis, chlorophyll production, and plant resilience. Enhances seed germination, nutrient absorption, and improves crop quality.",
		},
		{
			image: "../image/product/micronutrient/boron.jpg",
			title: "Boron",
			description:
				"Essential for plant development, growth, and seed development. Helps with water and nutrient transfer, pollination, and cell division. Maintains sugar-starch balance and translocates carbohydrates.",
		},
		{
			image: "../image/product/micronutrient/copper-sulphate.jpg",
			title: "Copper Sulphate",
			description:
				"Used as a fertilizer or fungicide. Essential for plant growth and controlling fungus and mold. Helps prevent chlorosis and stunted growth, and improves sugar content and flavor in fruits.",
		},
		{
			image: "../image/product/micronutrient/zinc-oxide.jpg",
			title: "Zinc Oxide Suspension",
			description:
				"Zinc is vital for chlorophyll formation and growth regulation. Helps resist cold temperatures and correct zinc deficiency. Highly stable with a long shelf life and compatible with various nutrients and fertilizers.",
		},
		{
			image: "../image/product/micronutrient/boron-ethanolamine.jpg",
			title: "Boron Ethanolamine",
			description:
				"Boron aids in plant development, growth, and crop yielding. Important for pollination, cell division, and nutrient balance. Helps maintain sugar-starch balance and translocates carbohydrates.",
		},
		{
			image: "../image/product/micronutrient/calcium-concentrate.jpg",
			title: "Liquid Calcium",
			description:
				"Concentrated liquid calcium boosts root and leaf growth. Maintains good grain and fruit quality, and minimizes disorders. Enhances overall plant health and productivity.",
		},
		{
			image: "../image/product/bio/prom.jpg",
			title: "PROM",
			description:
				"Phosphate Rich Organic Manure (PROM) is an eco-friendly fertilizer that improves soil properties, balances pH, and enhances soil fertility. Boosts crop resistance against diseases and increases yield by improving fruit size and root expansion.",
		},
		{
			image: "../image/product/bio/bio-npk.jpg",
			title: "Bio NPK",
			description:
				"Premium Bio-NPK is a microbial formulation that fixes atmospheric nitrogen, solubilizes phosphate, and mobilizes potash. Converts non-available forms of micronutrients into available forms. Increases drought tolerance and reduces disease risks.",
		},
		{
			image: "../image/product/bio/mycorrhizal.jpg",
			title: "Mycorrhiza VAM",
			description:
				"Premium VAM SHAKTI is an eco-friendly granular biofertilizer containing Mycorrhizal fungi. Enhances nutrient transfer, phosphate uptake, and mobilizes immobile micronutrients. Promotes root development and improves resistance against environmental and soil-borne stresses.",
		},
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
