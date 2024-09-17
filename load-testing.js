function load_home (e) {
    (e || window.event).preventDefault();

    fetch("https://glencorahaskins.github.io/metro-miscellaneous/zswarenski-urban-rural.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("content").innerHTML = html;
    })
    .catch((error) => {
        console.warn(error);
    });
} 