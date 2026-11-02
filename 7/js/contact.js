import { db, auth } from "./firebase.js";

import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    try {
        await addDoc(collection(db, "contactMessages"), {
            name: name,
            email: email,
            message: message,
            userId: auth.currentUser.uid,
            timestamp: serverTimestamp()
        });

        contactStatus.textContent = "Your message was successfully submitted!";

        contactForm.reset();

    } catch (error) {
        console.error("Error submitting contact form:", error);
        contactStatus.textContent = "There was an error submitting your message. Please try again.";
    }
});