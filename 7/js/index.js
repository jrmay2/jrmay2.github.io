const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("signup") === "success") {
    alert("Your account was successfully created! Welcome!");

    // Remove query parameter from URL
    window.history.replaceState({}, document.title, window.location.pathname);
}

if (urlParams.get("login") === "success") {
    alert("You have successfully signed in! Welcome back!");
}

if (urlParams.has("signup") || urlParams.has("login")) {
    window.history.replaceState({}, document.title, window.location.pathname);
}