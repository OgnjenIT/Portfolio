document.addEventListener("DOMContentLoaded", function () {
    var textElement = document.getElementById('animated-text');

    anime.timeline({ loop: false })
        .add({
            targets: '#animated-text',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => 150 * (i + 1)
        });
});