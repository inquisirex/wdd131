const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];
  
  // 1. Populate the Product Name options dynamically
  const productSelect = document.getElementById("productName");
  
  // Check if we are on the form page (productSelect will exist)
  if (productSelect) {
    products.forEach(product => {
      let option = document.createElement("option");
      option.value = product.id; // The assignment requires the id as the value
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }
  
  // 2. Handle the Review Counter (localStorage)
  // This logic runs to display the count on the review.html page
  const reviewCountElement = document.getElementById("reviewCount");
  
  if (reviewCountElement) {
    // Get the current count, default to 0 if not found
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  
    // Increment the count (since they just finished a review)
    numReviews++;
  
    // Save the new count back to localStorage
    localStorage.setItem("numReviews-ls", numReviews);
  
    // Display the count
    reviewCountElement.textContent = numReviews;
  }
  
  // 3. Set the Copyright Year in footer (Visual requirement)
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  
  // 4. Set Last Modified Date in footer
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;