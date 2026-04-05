// scroll
const portfolio = document.querySelector('.portfolio-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

observer.observe(portfolio);

// form logic (ajax)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseDiv = document.getElementById('response');
    
    responseDiv.innerHTML = "Sending...";

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if(data.status === 'success') {
            responseDiv.innerHTML = `<span style="color:green">${data.message}</span>`;
            this.reset();
        }
    })
    .catch(err => console.log(err));
});