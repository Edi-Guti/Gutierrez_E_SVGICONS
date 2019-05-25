(() => {
	// stub
	console.log('fired!');

	let iconSet = document.querySelectorAll("button");
	//console.log(iconSet);

	function svgClick() {
		console.log(this.previousElementSibling.id);
		
	}


	for(let i=0; i<iconSet.length; i++) {
		//console.log(iconSet[i]);
		iconSet[i].addEventListener("click", svgClick, false);
		//console.log(iconSet[i]);
	}

})();