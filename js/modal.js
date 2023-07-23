(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		overlay: document.getElementById("overlay"),
	};

	refs.openModalBtn.addEventListener("click", openModal);
	refs.closeModalBtn.addEventListener("click", closeModal);

<<<<<<< Updated upstream
	function openModal() {
		refs.modal.classList.add("active");
		refs.overlay.classList.add("active");
	}
	function closeModal() {
		refs.modal.classList.remove("active");
		refs.overlay.classList.remove("active");
=======
	function closeModal() {
		refs.modal.classList.toggle("is-hidden");
>>>>>>> Stashed changes
	}
	function openModal() {
		refs.modal.classList.toggle("active");
	}
})();
