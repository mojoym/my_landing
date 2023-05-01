window.onresize = function() {
    let laptopOnATable = document.getElementById('laptop-on-the-table');
    let ladyWithLaptop = document.getElementById('lady-with-laptop');

    if (window.innerWidth > 850) {
        laptopOnATable.style.display = "none";
        ladyWithLaptop.style.display = "block";
    }
    else {
        laptopOnATable.style.display = "block";
        ladyWithLaptop.style.display = "none";
    }
}