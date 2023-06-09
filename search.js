document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', function() {
      var query = document.getElementById('searchInput').value;
      alert('Performing search for: ' + query);
    });
  });
  