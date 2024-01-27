// document.addEventListener('.theme', function () {
//     const links = document.querySelectorAll("link[rel='stylesheet']");
//     const theme2 = document.querySelector('#theme2');
//     const theme3 = document.querySelector('#theme3');

//     function changeStylesheet() {
        
//         links[1].href = 'Calculator2.css';
//         links[2].href = 'Calculator3.css';
//     }
// });

    



    
        function changeStylesheet() {
            var stylesheet = document.getElementById('stylesheet');

            // Change the href to the new stylesheet
            stylesheet.href = 'Calculator2.css';
        }
        function changeStylesheet2() {
            var stylesheet = document.getElementById('stylesheet');

            // Change the href to the new stylesheet
            stylesheet.href = 'Calculator.css';
        }




document.addEventListener('DOMContentLoaded', function () {
    let currentOperand = '';
    let previousOperand = '';
    let operation = '';
  
    const displayCurrent = document.querySelector('.current');
    const displayPrevious = document.querySelector('.previous');
    const buttons = document.querySelectorAll('.btn');
    const operands = document.querySelectorAll('.operand');
    const resetButton = document.getElementById('reset');
    const equalButton = document.getElementById('equal');
    const deleteButton = document.getElementById('del');
  
    // Add click event listeners to number buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        currentOperand += button.innerText;
        updateDisplay();
      });
    });
  
    // Add click event listeners to operand buttons
    operands.forEach(operand => {
      operand.addEventListener('click', () => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
          calculate();
        }
        operation = operand.innerText;
        previousOperand = currentOperand;
        currentOperand = '';
        updateDisplay();
      });
    });
  
    // Add click event listener to equal button
    equalButton.addEventListener('click', () => {
      calculate();
      updateDisplay();
    });
  
    // Add click event listener to reset button
    resetButton.addEventListener('click', () => {
      clear();
      updateDisplay();
    });
  
    // Add click event listener to delete button
    deleteButton.addEventListener('click', () => {
      currentOperand = previousOperand.slice(0, -1);
      console.log({previousOperand});
      // updateDisplay();
      displayCurrent.innerText = currentOperand;
    });
  
    // Function to update the display
  function updateDisplay() {
    if (operation === 'DEL') {
      displayPrevious.innerText = '';
    } else {
      displayPrevious.innerText = previousOperand + ' ' + operation;
    }
    displayCurrent.innerText = currentOperand;
  }
  
  
    // Function to clear the calculator
    function clear() {
      currentOperand = '';
      previousOperand = '';
      operation = '';
    }
  
    // Function to perform calculation
    function calculate() {
      let result;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (operation) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case 'x':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
  
      currentOperand = result.toString();
      operation = '';
      previousOperand = '';
    }
  });




















