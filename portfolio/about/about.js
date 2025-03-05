function searchPages() {

    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
    let resultsContainer = document.getElementById('searchResults'); // Assume a div with this ID
  
    resultsContainer.innerHTML = ''; // Clear previous results
  
  
  
    let pageLinks = document.querySelectorAll('a'); // Get all links on the page
  
  
  
    for (let link of pageLinks) {
  
      let pageText = link.textContent.toLowerCase();
  
      if (pageText.includes(searchTerm)) {
  
        let resultLink = document.createElement('a');
  
        resultLink.href = link.href;
  
        resultLink.textContent = link.textContent;
  
        resultsContainer.appendChild(resultLink);
  
      }
  
    }
  
};