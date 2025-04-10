document.addEventListener("DOMContentLoaded", function() {
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        // backgroundColor: 0x748b8b,
        backgroundColor: 0x5C5E5E,

        // color1: 0xa18778,
        // color2: 0xe0966f,
        color1: 0xE0713C,
        color2: 0xe8E5315,



        colorMode: "lerp",
        birdSize: 1.20,
        wingSpan: 34.00,
        separation: 100.00,
        quantity: 3.00,
        backgroundAlpha: 1
    });
});