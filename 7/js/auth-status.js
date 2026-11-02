'use strict';

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { auth } from "./firebase.js";

const authButton = document.querySelector("#auth-button");
const passwordLink = document.querySelector("#change-password");

onAuthStateChanged(auth, (user) => {

    if (user) {
        authButton.textContent = "Log Out";

        if (passwordLink) {
            passwordLink.style.display = "block";
        }

    } else {
        authButton.textContent = "Sign Up/Login";

        if (passwordLink) {
            passwordLink.style.display = "none";
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