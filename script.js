
console.log("JavaScript initialized successfully.");

const themeToggleBtn = document.getElementById('themeToggle');
const changeTextBtn = document.getElementById('changeTextBtn');
const welcomeGreeting = document.getElementById('welcomeGreeting');
const contactForm = document.getElementById('contactForm');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    const mode = document.body.classList.contains('dark-mode') ? "Dark" : "Light";
    console.log("Theme switched to: " + mode);
    
    localStorage.setItem('preferredTheme', mode);
});

if (changeTextBtn) {
    changeTextBtn.addEventListener('click', () => {
        const name = prompt("Please enter your name:");
        if (name) {
            welcomeGreeting.textContent = "Welcome, " + name + "!";
            console.log("User updated greeting to: " + name);
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        const userName = document.getElementById('userNameInput').value;
        
        if (userName.trim() === "") {
            alert("Please provide a name before submitting.");
        } else {
            alert("Thank you, " + userName + "! Your message has been sent (simulated).");
            console.log("Form submitted by: " + userName);
            contactForm.reset();
        }
    });
}

window.onload = () => {
    if (localStorage.getItem('preferredTheme') === "Dark") {
        document.body.classList.add('dark-mode');
    }
};
const spiralOverlay = document.createElement('div');
spiralOverlay.className = 'page-transition-overlay';
document.body.appendChild(spiralOverlay);

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {   if (this.hostname === window.location.hostname)
         {  e.preventDefault();
            const destination = this.href;
                      spiralOverlay.classList.add('active');
                     setTimeout(() => {
                window.location.href = destination;
            }, 800);
        }
    });
});

