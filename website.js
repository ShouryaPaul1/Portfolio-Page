document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const overlayNav = document.getElementById('overlayNav');

    mobileNavToggle.addEventListener('change', function() {
        if (this.checked) {
            overlayNav.style.display = 'block';
        } else {
            overlayNav.style.display = 'none';
        }
    });
});