const phoneBtn = document.getElementById("phone-no-button");
const phoneBox = document.getElementById("phoneBox");

phoneBtn.addEventListener("click", () => {
    phoneBox.classList.toggle("show");
});

const emailBtn = document.getElementById("email-button");
const emailBox = document.getElementById("emailBox");

emailBtn.addEventListener("click", () => {
    emailBox.classList.toggle("show");
});

const viewBtn = document.getElementById("view-projects");

viewBtn.addEventListener("click", () => {
    document.getElementById("featured-projects").scrollIntoView({
        behavior: "smooth"
    });
});

const contactBtn=document.getElementById("contact");
contactBtn.addEventListener("click", () => {
    document.getElementById("contact-heading").scrollIntoView({
        behavior: "smooth"
    });
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
