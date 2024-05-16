// export const validateSignUpForm = (fullNameInput, emailInput, passwordInput, confirmPasswordInput, fullNameError, emailError, passwordError, confirmPasswordError)=> {
// 	let errors = {
// 		errorStatus: false,
// 		fullNameError: "",
// 		emailError: "",
// 	}
	
// 	if(!fullNameInput && !emailInput && !passwordInput && !confirmPasswordInput) {
// 		errors = {
// 			errorStatus: true,
// 			fullNameError: "Please enter your full name ⚠️",
// 			emailError: "Please enter a valid email adress",
// 			passwordError: "Please enter a password",
// 			confirmPasswordError: "Please enter a password",
// 		}

// 		fullNameError.style.visibility = "visible";
// 		emailError.style.visibility = "visible";
// 		passwordError.style.visibility = "visible";
// 		confirmPasswordError.style.visibility = "visible";
		
// 		fullNameError.textContent = errors.fullNameError;
// 		emailError.textContent = errors.emailError;
// 		passwordError.textContent = errors.passwordError;
// 		confirmPasswordError.textContent = errors.confirmPasswordError;
// 	} else if(!fullNameInput) {
// 		errors = {
// 			errorStatus: true,
// 			fullNameError: "Please enter your full name ⚠️",
// 			emailError: "",
// 		}
// 		fullNameError.style.visibility = "visible";
// 		emailError.style.visibility = "hidden";
// 		fullNameError.textContent = errors.fullNameError;
// 		emailError.textContent = errors.emailError;
// 	} else if(!emailInput) {
// 		errors = {
// 			errorStatus: true,
// 			fullNameError: "",
// 			emailError: "Please enter a valid email adress",
// 		}
// 		fullNameError.style.visibility = "hidden";
// 		emailError.style.visibility = "visible";
// 		fullNameError.textContent = errors.fullNameError;
// 		emailError.textContent = errors.emailError;		
// 	} else {
// 		errors = {
// 			errorStatus: false,
// 			fullNameError: "",
// 			emailError: "",
// 		}
// 		fullNameError.style.visibility = "hidden";
// 		emailError.style.visibility = "hidden";
// 		fullNameError.textContent = errors.fullNameError;
// 		emailError.textContent = errors.dateError;
// 	}
// 	const formErrorStatus = ()=> {
// 		return errors.errorStatus;
// 	}

// 	return {formErrorStatus};
// };

export const validateForm = (formElementClassName)=> {
	const formElement = document.querySelector(`.${formElementClassName}`);
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

	!errors.errorStatus && formElement.reset();
	return !errors.errorStatus;
}

export const clearErrorsOnInputChange = (formElementClassName)=> {
	const formElement = document.querySelectorAll(`.${formElementClassName} input`);
	formElement.forEach((input)=> {		
		input.addEventListener("keyup", ()=> {
			console.log("changed");
			input.nextSibling.nextSibling.textContent = "";	
		})
	})
}