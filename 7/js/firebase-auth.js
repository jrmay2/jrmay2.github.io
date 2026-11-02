'use strict';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { auth } from "./firebase.js";

// Sign Up
const signUpForm = document.querySelector("#sign-up-form");

if (signUpForm) {
    signUpForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log("New user:", userCredential.user);

            window.location.href = "./index.html?signup=success";

        } catch (error) {
            console.error("Sign up error:", error.code, error.message);
            document.querySelector("#auth-message").textContent = error.message;
        }
    });
}

// Sign-In
const signInForm = document.querySelector("#sign-in-form");

if (signInForm) {
    signInForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log("Signed in user:", userCredential.user);

            const params = new URLSearchParams(window.location.search);
            const redirect = params.get("redirect");

            if (redirect && /^[a-z0-9-]+\.html$/i.test(redirect)) {
                window.location.href = `./${redirect}?login=success`;
            } else {
                window.location.href = "./index.html?login=success";
            }

        } catch (error) {
            console.error("Sign in error:", error.code, error.message);
            document.querySelector("#auth-message").textContent = error.message;
        }
    });
}