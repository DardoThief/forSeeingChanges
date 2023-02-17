const inputs = document.querySelectorAll(".form-input");

console.log('INPUTS', inputs);
function addcl() {
    console.log('ADD');
	// let parent = this.parentNode.parentNode;
	this.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
    console.log('THIS', input);
    input.onfocus = function () {
        console.log('KU');
        input.classList.add("focus");
    };
    input.onblur = remcl;
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});