// Wait until the DOM has finished loading to trigger the modal that shows up when the page is loaded
window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#heho').click();
});
// Select all elements with a class of "component"
const components = document.querySelectorAll('.component');
// Select an element with an ID of "programmable-area"
const programmableArea = document.querySelector('#programmable-area');
// Create a new <textarea> element and assign it to a variable called "codeArea"
const codeArea = document.createElement('textarea');
// Set some styles for the <textarea>
codeArea.style.width = '100%'; // Set a fixed width for the textarea
codeArea.style.height = '500px'; // Set a fixed height for the textarea
codeArea.style.resize = 'none'; // Disable the ability to resize the textarea
codeArea.style.fontSize = '22px'; // Set a fixed font size for the textarea
codeArea.style.paddingTop = '0px'; // Add some padding to the top of the textarea

// Add the <textarea> to the "programmableArea" element
programmableArea.appendChild(codeArea);

// Create a null variable called "draggedComponent"
let draggedComponent = null;

// Select an element with a data-component attribute of "variable"
const variableComponent = document.querySelector('[data-component="variable"]');

// Select the form inside the variable component
const variableForm = variableComponent.querySelector('form');

// Hide the form initially
variableForm.style.display = 'none';

// Add a click event listener to the variable component
variableComponent.addEventListener('click', () => {
	// Toggle the visibility of the form
	if (variableForm.style.display === 'none') {
		variableForm.style.display = 'block';
	} else {
		variableForm.style.display = 'none';
	}
});

// Add a click event listener to the form inside the variable component
variableForm.addEventListener('click', (event) => {
	// Prevent the click event from bubbling up to the parent component
	event.stopPropagation();
});

// Select an element with a data-component attribute of "output"
const outputComponent = document.querySelector('[data-component="output"]');

// Select the form inside the output component
const outputForm = outputComponent.querySelector('form');

// Hide the form initially
outputForm.style.display = 'none';

// Add a click event listener to the output component
outputComponent.addEventListener('click', () => {
	// Toggle the visibility of the form
	if (outputForm.style.display === 'none') {
		outputForm.style.display = 'block';
	} else {
		outputForm.style.display = 'none';
	}
});

// Add a click event listener to the form inside the output component
outputForm.addEventListener('click', (event) => {
	// Prevent the click event from bubbling up to the parent component
	event.stopPropagation();
});

// Select the operation component
const operationComponent = document.querySelector('[data-component="operation"]');
// Select the form inside the operation component
const operationForm = operationComponent.querySelector('form');
// Hide the form initially
operationForm.style.display = 'none';

// Add a click event listener to the operation component
operationComponent.addEventListener('click', () => {
	// Toggle the visibility of the form
	if (operationForm.style.display === 'none') {
		operationForm.style.display = 'block';
	} else {
		operationForm.style.display = 'none';
	}
});
// Add a click event listener to the form
operationForm.addEventListener('click', (event) => {
	// Prevent the click event from bubbling up to the parent component
	event.stopPropagation();
});

// Select the conditional component
const conditionalComponent = document.querySelector('[data-component="conditional"]');
// Select the form inside the conditional component
const conditionalForm = conditionalComponent.querySelector('form');
// Hide the form initially
conditionalForm.style.display = 'none';

// Add a click event listener to the conditional component
conditionalComponent.addEventListener('click', () => {
	// Toggle the visibility of the form
	if (conditionalForm.style.display === 'none') {
		conditionalForm.style.display = 'block';
	} else {
		conditionalForm.style.display = 'none';
	}
});
// Add a click event listener to the form
conditionalForm.addEventListener('click', (event) => {
	// Prevent the click event from bubbling up to the parent component
	event.stopPropagation();
});

// Select the loop component
const loopComponent = document.querySelector('[data-component="loop"]');
// Select the form inside the loop component
const loopForm = loopComponent.querySelector('form');
// Hide the form initially
loopForm.style.display = 'none';

// Add a click event listener to the loop component
loopComponent.addEventListener('click', () => {
	// Toggle the visibility of the form
	if (loopForm.style.display === 'none') {
		loopForm.style.display = 'block';
	} else {
		loopForm.style.display = 'none';
	}
});

// Add a click event listener to the form
loopForm.addEventListener('click', (event) => {
	// Prevent the click event from bubbling up to the parent component
	event.stopPropagation();
});

// This function creates a component with given component type
function createComponent(componentType) {
	// Create a div element and set its class and draggable attribute
	const component = document.createElement('div');
	component.classList.add('component', componentType);
	component.setAttribute('draggable', true);
	// Set the text content and data attribute of the component
	component.textContent = componentType;
	component.dataset.component = componentType;
	// Create a form element
const form = document.createElement('form');
// Loop through input prompts and create corresponding label and input elements
for (let i = 0; i < inputPrompts.length; i++) {
	const label = document.createElement('label');
	label.textContent = inputPrompts[i];
	const input = document.createElement('input');
	input.type = 'text';
	input.required = true;
	form.appendChild(label);
	form.appendChild(input);
}
// Append the form to the component
component.appendChild(form);

return component;
}
// Loop through each component and add a dragstart event listener to it
components.forEach((component) => {
	component.addEventListener('dragstart', () => {
	// Get the component type and create an object to store its prompts
	const componentType = component.dataset.component;
	draggedComponent = {
	type: componentType,
	prompts: [],
	};
	// Loop through form inputs and add their values to the dragged component's prompts array
	const formInputs = component.querySelectorAll('form input');
	for (let i = 0; i < formInputs.length; i++) {
	draggedComponent.prompts.push(formInputs[i].value);
	}
	});
	});
	
	// Add a dragover event listener to the programmable area
	programmableArea.addEventListener('dragover', (e) => {
	// Prevent default dragover behavior
	e.preventDefault();
	});
// This event listener listens for when an item is dropped into the programmable area
programmableArea.addEventListener('drop', (e) => {
	// This prevents the default action from happening when an item is dropped into the programmable area
	e.preventDefault();
	// If there is a dragged component
if (draggedComponent) {
	// Get the input values of the dragged component
	const inputValues = draggedComponent.prompts;
	
	let code;

	// If the dragged component is a variable
	if (draggedComponent.type === 'variable') {
		// Generate the code for the variable
		code = `$${inputValues[0]} = ${inputValues[1]};\n`;
	
	// If the dragged component is an operation
	} else if (draggedComponent.type === 'operation') {
		// Generate the code for the operation
		code = `$${inputValues[0]} = ${inputValues[2]} ${inputValues[1]} ${inputValues[3]};\n`;
	
	// If the dragged component is a loop
	} else if (draggedComponent.type === 'loop') {
		// Get the loop variable and generate the code for the loop
		const loopVar = inputValues[0];
		if (inputValues[0] == 'for') {
			const body = document.querySelector('#loop-body-input').value;
			code = `${loopVar}($c=1;$c<=${inputValues[1]}; $c+=1) {\n${body}\n}\n`;
		} else if (inputValues[0] == 'while') {
			const body = document.querySelector('#loop-body-input').value;
			code = `${loopVar}($c<${inputValues[1]}){\n${body}\n$c=$c+1;\n}`;
		} else {
			code = '';
		}
	
	// If the dragged component is an output
	} else if (draggedComponent.type === 'output') {
		// Generate the code for the output
		code = `echo ${inputValues[0]};\n`;
	
	// If the dragged component is a conditional
	} else if (draggedComponent.type === 'conditional') {
		// Get the operator, name, body, and counter of the conditional, and generate the code for the conditional
		const operator = document.querySelector(
			'#conditional-operator-select'
		).value;
		const name = document.querySelector(
			'#conditional-name-input'
		).value;
		const body = document.querySelector(
			'#conditional-body-input'
		).value;
		const counter = document.querySelector(
			'#conditional-counter-input'
		).value;
		const condition = `$c ${operator} ${counter}`;
		code = `${name} (${condition}) {\n${body}\n}\n`;
	}
	
	// insert it into the programmable area
	insertCode(code);
	
	// Set the dragged component to null to indicate that it has been dropped
	draggedComponent = null;
}
});

programmableArea.addEventListener('dragenter', (e) => {
	e.preventDefault();
});

programmableArea.addEventListener('dragleave', (e) => {
	e.preventDefault();
});

function insertCode(code) {
	const startPosition = codeArea.selectionStart;
	const endPosition = codeArea.selectionEnd;
	codeArea.value =
		codeArea.value.substring(0, startPosition) +
		code +
		codeArea.value.substring(endPosition, codeArea.value.length);
}
output=document.getElementById("hehe");
function executePHP() {
	const code = codeArea.value;

	// Strip all the escapse characters from the string
	const strippedText = code.replace(/\\n/g, '');

	// strip all two consecutive spaces from the string
	const spaceStrippedText = strippedText.replace(/  +/g, ' ');

	// Strip all spaces that occur before a ";"
	const semiColonStrippedText = spaceStrippedText.replace(/ ;/g, ';');

	// Add spaces after all ";"
	const semiColonSpacedText = semiColonStrippedText.replace(/;/g, '; ');

	// Send the request using the Fetch API
	fetch('index.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ code: semiColonSpacedText }),
	})
		.then((response) => {
			if (response.ok) {
				// Handle the response from the server
				return response.text();
			} else {
				throw new Error('Network response was not ok.');
			}
		})
		.then((responseText) => {
			(output.innerHTML="Output is: " + responseText);
		})
		.catch((error) => {
			console.error('Error occurred:', error);
		});
}
