// Show modal on share button click
// document.querySelector(".fa-share").addEventListener("click", function () {
// 	var shareModal = new bootstrap.Modal(document.getElementById("shareModal"));
// 	shareModal.show();
// });

// Copy link to clipboard
document.getElementById("copyButton").addEventListener("click", function () {
	var copyText = document.getElementById("shareLink");
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices

	navigator.clipboard.writeText(copyText.value).then(
		function () {
			document.getElementById("copySuccess").classList.remove("d-none");
			setTimeout(function () {
				document.getElementById("copySuccess").classList.add("d-none");
			}, 2000);
		},
		function () {
			alert("Failed to copy text");
		}
	);
});
