let data = document.querySelector('#form');
data.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    let changedata = new FormData(e.target);
    const finaldata = Object.fromEntries(changedata.entries());
    console.log(finaldata);
});

