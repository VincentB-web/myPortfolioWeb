const navElements = document.getElementById('sidebar')

function navFunction(event) {
    event.preventDefault();
    if(navElements.style.display ==='block'){
        navElements.style.display = 'none';
    } else {
        navElements.style.display = 'block';
    }
}