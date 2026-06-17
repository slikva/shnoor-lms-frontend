window.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("themeToggle");
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
        if(themeBtn){
            themeBtn.innerHTML ='<i class="bi bi-moon-stars"></i>';
        }
    }
    if(themeBtn){
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if(document.body.classList.contains("dark-mode")){
                localStorage.setItem("theme","dark");
                themeBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
            }else{
                localStorage.setItem("theme","light");
                themeBtn.innerHTML =
                '<i class="bi bi-sun"></i>';
            }
        });
    }
});
async function registerUser(event){
event.preventDefault();
const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
if(password !== confirmPassword){
    alert("Passwords do not match");
    return;
}
const user = { fullName: fullName, email: email, password: password};
try{
    const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );
    const result = await response.text();
    alert(result);
    if(result === "Registration Successful"){
        window.location.href = "./login.html";
    }
}catch(error){
    console.error(error);
    alert("Server Connection Failed");
}
}
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
});

document.addEventListener("click", function(e) {

    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }

});