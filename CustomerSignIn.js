document.getElementById('menu-btn').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});