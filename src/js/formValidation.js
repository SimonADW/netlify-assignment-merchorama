
export const validateForm = (formElementClassName)=> {
	const formInputs = document.querySelectorAll(`.${formElementClassName} input`);
	
	let errors = {
			errorStatus: false,
			fullnameError: "Please enter your full name ⚠️",
			emailError: "Please enter a valid email adress",
			passwordError: "Please enter a password",
			confirmPasswordError: "Please enter a password",
			passwordMismatchError: "Password are not matching"
		}

	formInputs.forEach((input) => {
		// Find error element corresponding to the input
		const errorElement = document.querySelector(`.${formElementClassName} .${input.name}Error`);
		const signUpPasswordElement = document.querySelector(".sign-up__password");
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		errorElement.textContent = "";
		
		if (!input.value) {
			errors.errorStatus = true;
			if (errorElement) {	
				errorElement.style.visibility = "visible";
				errorElement.textContent = errors[`${input.name}Error`];
			} 
			// Check password match
		} else if (input.name === "confirmPassword" && input.value !== signUpPasswordElement.value) {
			errors.errorStatus = true;	
			if (errorElement) {	
				errorElement.style.visibility = "visible";
				errorElement.textContent = errors.passwordMismatchError;
			} 
			// Check email-format
		} else if (input.name === "email" && !emailRegex.test(input.value.trim())) {
			errors.errorStatus = true;	
			if (errorElement) {	
				errorElement.style.visibility = "visible";
				errorElement.textContent = errors.emailError;
			}
		}
	});

	return !errors.errorStatus;
}

export const clearErrorsOnInputChange = (formElementClassName)=> {
	const formElement = document.querySelectorAll(`.${formElementClassName} input`);
	formElement.forEach((input)=> {		
		input.addEventListener("keyup", ()=> {
			input.nextSibling.nextSibling.textContent = "";	
		})
	})
}

