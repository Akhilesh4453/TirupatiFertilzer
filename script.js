// Fetching the customer form and adding a submit event listener
const customerForm = document.getElementById('customerForm');
customerForm.addEventListener('submit', submitForm);

// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevents form submission
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // You can send the form data to the server using AJAX or fetch API
  // For simplicity, let's just log the values to the console
  console.log('Name:', name);
  console.log('Phone:', phone);

  // Redirect to the next page after form submission
  window.location.href = 'products.html';
}

function orderProduct(productName) {
  if (location) {
    // Store the location in localStorage
    localStorage.setItem('location', location);

    // Redirect to the order page
    window.location.href = 'order.html';
  } else {
    // Handle the case where the user canceled the prompt
    alert("Order canceled.");
  }
}
