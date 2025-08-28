// JavaScript functions for interactive demos

// Full Stack Demo
function showFullStackExample() {
    document.getElementById('fullstack-example').style.display = 'block';
}

function updateBackend() {
    document.getElementById('api-status').innerHTML = 'Processing...';
    setTimeout(() => {
        document.getElementById('api-status').innerHTML = 'Data sent!';
        document.getElementById('backend-data').innerHTML = 'User data received and stored!';
    }, 1000);
}

// HTML Form Demo
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value;
    const subject = document.getElementById('favoriteSubject').value;
    alert(`Thanks ${name}! I see your favorite subject is ${subject}. Form submitted successfully!`);
}

// CSS Animation Demos
function changeColor(element, color) {
    element.style.backgroundColor = color;
}

function animateButton(element) {
    element.classList.add('clicked');
    setTimeout(() => {
        element.classList.remove('clicked');
    }, 500);
}

// JavaScript Calculator Demo
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        }
        result = `Result: ${result}`;
    }

    document.getElementById('calculator-result').innerHTML = result;
}

function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('calculator-result').innerHTML = 'No calculation yet';
}

// Dynamic List Demo
let itemCounter = 1;
function addListItem() {
    itemCounter++;
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic item ${itemCounter} - Added with JavaScript!`;
    list.appendChild(newItem);
}

function clearList() {
    const list = document.getElementById('dynamic-list');
    list.innerHTML = '<li>This list starts with one item</li>';
    itemCounter = 1;
}

// Theme Switcher Demo
function changeTheme(color) {
    const jsDemos = document.querySelectorAll('.js-demo');
    jsDemos.forEach(demo => {
        demo.style.backgroundColor = color;
    });
}

// Note Storage Demo (using variables instead of localStorage)
let savedNoteData = '';

function saveNote() {
    const noteText = document.getElementById('noteInput').value;
    if (noteText.trim() === '') {
        alert('Please enter a note first!');
        return;
    }
    savedNoteData = noteText;
    document.getElementById('noteInput').value = '';
    alert('Note saved successfully!');
}

function loadNote() {
    const noteDiv = document.getElementById('saved-note');
    if (savedNoteData === '') {
        alert('No note saved yet!');
        return;
    }
    noteDiv.innerHTML = `<strong>Saved Note:</strong> ${savedNoteData}`;
    noteDiv.style.display = 'block';
}

function deleteNote() {
    savedNoteData = '';
    document.getElementById('saved-note').style.display = 'none';
    alert('Note deleted!');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Welcome message when page loads
window.addEventListener('load', function() {
    console.log('Welcome to Sarah\'s Portfolio! Check out the interactive demos.');
});
