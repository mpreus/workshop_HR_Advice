document.addEventListener("DOMContentLoaded", init);

function init() {
	document.getElementById("button").addEventListener("click", myScript);
	
	function myScript(e) {
		e.preventDefault()
		let ageInput = document.getElementById("ageTyped");
		let myAdvice = document.getElementById("myAdvice");

		if ( ageInput.value < 0 ) {
			myAdvice.innerText = "Are you aware we are talking about age?"
			ageInput.value = "";
			myAdvice.style.color = "MediumSlateBlue";
			// to place a 'div' for picture:
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			// to place appropriate picture:
			newDiv.style.backgroundImage = "url('./images/Age_thing.svg')";
		}
		
		else if ( ageInput.value >= 1 && ageInput.value < 13 ) {
			myAdvice.innerText = "Children are not considered here. Hiring a child would be illegal."
			ageInput.value = "";
			myAdvice.style.color = "red";
			// to place a 'div' for picture:
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			// to place appropriate picture:
			newDiv.style.backgroundImage = "url('./images/Judge.svg')";
		}

		else if ( ageInput.value >= 13 && ageInput.value <= 16 ) {
			myAdvice.innerText = "You are still underage. You need a parent permission to be hired."
			ageInput.value = "";
			myAdvice.style.color = "red";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Learn_more.svg')";
		}

		else if (ageInput.value > 16 && ageInput.value <= 22) {
			myAdvice.innerText = "Temporary jobs offers possible. You'd better learn more."
			ageInput.value = "";
			myAdvice.style.color = "green";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Still_learning2.svg')";
		}

		else if (ageInput.value > 22 && ageInput.value < 26) {
			myAdvice.innerText = "You are at your best age but lack of experience may disqualify you."
			ageInput.value = "";
			myAdvice.style.color = "green";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Young_no_experience.svg')";
		}

		else if (ageInput.value >= 26 && ageInput.value < 32) {
			myAdvice.innerText = "You've learned a lot and got some experience. Get this job!."
			ageInput.value = "";
			myAdvice.style.color = "green";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Best_time.svg')";
		}

		else if (ageInput.value >= 32 && ageInput.value < 40) {
			myAdvice.innerText = "You are getting older. Younger candidates are coming."
			ageInput.value = "";
			myAdvice.style.color = "red";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Younger_ones.svg')";
		}

		else if (ageInput.value >= 40 && ageInput.value < 55) {
			myAdvice.innerText = "You'd better pretend you are 25 (and have 20+ years of experience)."
			ageInput.value = "";
			myAdvice.style.color = "red";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Plus_minus.svg')";
		}

		else if (ageInput.value >= 55 && ageInput.value < 65) {
			myAdvice.innerText = "I'm affraid you need a wide net of contacts to be hired."
			ageInput.value = "";
			myAdvice.style.color = "red";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Your_net.svg')";
		}

		else if (ageInput.value >= 65 && ageInput.value < 99) {
			myAdvice.innerText = "This is your time to rest and enjoy grand children."
			ageInput.value = "";
			myAdvice.style.color = "red";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Grandma.svg')";
		}
		
		else if (ageInput.value >= 99) {
			myAdvice.innerText = "Nice try!"
			ageInput.value = "";
			myAdvice.style.color = "grey";
			let target = document.querySelector(".piece-of-advice");
			let newDiv = document.createElement("div");
			target.parentNode.insertBefore( newDiv, target.nextSibling );
			newDiv.style.backgroundImage = "url('./images/Grandma.svg')";
		}
	}	
}