document.addEventListener('DOMContentLoaded', () => {
	const MenuAction = () => {
		const toggle = document.querySelector('.toggle');
		const menu = document.querySelector('.menu');
		toggle.addEventListener('click', () => {
			toggle.classList.toggle('active');
			menu.classList.toggle('active');
		});
	};
	MenuAction();
})