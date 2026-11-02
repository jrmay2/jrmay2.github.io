'use strict';

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { auth } from "./firebase.js";

const authButton = document.querySelector("#auth-button");
const passwordLink = document.querySelector("#change-password");
const passwordIconLink = document.querySelector("#change-password-icon");

onAuthStateChanged(auth, (user) => {

    if (user) {
        authButton.textContent = "Log Out";

        if (passwordLink) {
            passwordLink.classList.add("logged-in");
            passwordIconLink.classList.add("logged-in");
        }

    } else {
        authButton.textContent = "Sign Up/Login";

        if (passwordLink) {
            passwordLink.classList.remove("logged-in");
            passwordIconLink.classList.remove("logged-in");
        }
    }

    authButton.disabled = false;

});

authButton.addEventListener("click", async () => {

    if (auth.currentUser) {

        try {
            await signOut(auth);
            window.location.href = "./index.html";

        } catch (error) {
            console.error("Error signing out:", error);
        }

    } else {
        window.location.href = "./sign-in.html";
    }

});