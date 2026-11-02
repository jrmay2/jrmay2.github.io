
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

import { auth } from "./firebase.js";

onAuthStateChanged(auth, (user) => {

    if (!user) {
        const currentPage = window.location.pathname.split("/").pop();

        window.location.href =
            `./sign-in.html?redirect=${encodeURIComponent(currentPage)}`;
    }

});
