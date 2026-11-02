
import { auth } from "./firebase.js";

import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const changePasswordForm = document.querySelector("#change-password-form");
const changePasswordButton = document.querySelector("#change-password-button");
const message = document.querySelector("#auth-message");

changePasswordForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.textContent = "Please wait... Your request is being processed.";
    changePasswordButton.disabled = true;
    changePasswordButton.textContent = "Processing...";

    const currentPassword = document.querySelector("#current-password").value;
    const newPassword = document.querySelector("#new-password").value;
    const confirmPassword = document.querySelector("#confirm-password").value;

    const user = auth.currentUser;

    if (newPassword !== confirmPassword) {
        message.textContent = "Your new passwords do not match.";
        return;
    }

    if (newPassword === currentPassword) {
        message.textContent = "Your new password must be different.";
        return;
    }

    try {
        const credential = EmailAuthProvider.credential(
            user.email,
            currentPassword
        );

        await reauthenticateWithCredential(user, credential);

        await updatePassword(user, newPassword);

        alert("Your password has been successfully changed!");

        window.location.href = "./index.html";

    } catch (error) {
        console.error("Password change error:", error.code, error.message);

        if (error.code === "auth/wrong-password" ||
            error.code === "auth/invalid-credential") {
            message.textContent = "Your current password is incorrect.";

        } else if (error.code === "auth/weak-password") {
            message.textContent = "Your new password is too weak.";

        } else {
            message.textContent = error.message;
        }
    } finally {
        changePasswordButton.disabled = false;
        changePasswordButton.textContent = "Change Password";
    }
});
