// script.js

document.addEventListener("DOMContentLoaded", function () {
    const faqBoxes = document.querySelectorAll(".faqbox");

    faqBoxes.forEach(box => {
        box.addEventListener("click", () => {
            // Toggle active class for animation or styling
            box.classList.toggle("active");

            // Check if an answer already exists
            const existingAnswer = box.querySelector(".answer");
            if (existingAnswer) {
                existingAnswer.remove();
            } else {
                const answer = document.createElement("div");
                answer.classList.add("answer");
                answer.innerText = "This is a sample answer. You can replace it with actual FAQ content.";
                box.appendChild(answer);
            }   
        });
    });
});
