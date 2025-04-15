document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Insère le contenu de navbar.html dans l'élément <header>
        const navbarHtml = await fetch("../components/navbar.html").then(response => response.text());
        document.querySelector("header").innerHTML = navbarHtml;

        // Insère le contenu de footer.html dans l'élément <footer>
        const footerHtml = await fetch("../components/footer.html").then(response => response.text());
        document.querySelector("footer").innerHTML = footerHtml;

        // Insère le carousel et ajoute les événements après l'insertion
        const carouselHtml = await fetch("../components/carousel.html").then(response => response.text());
        document.querySelector(".zone-carousel").innerHTML = carouselHtml;

        // Ajoute les événements click sur les éléments du carousel
        const items = document.querySelectorAll(".carousel-item");
        console.log("Éléments détectés :", items);

        items.forEach(item => {
            item.addEventListener("click", () => {
                const link = item.dataset.link;
                console.log("Lien récupéré :", link);

                if (link.startsWith("mailto:")) {
                    console.log("Redirection mailto :", link);
                    window.location.href = link;
                } else {
                    console.log("Ouverture du lien :", link);
                    window.open(link, "_blank");
                }
            });
        });
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
});
