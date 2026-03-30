document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnClaim');
    const thrModal = new bootstrap.Modal(document.getElementById('thrModal'));

    btn.addEventListener('click', function() {
        // Tampilkan Modal
        thrModal.show();

        // Jalankan Confetti
        launchConfetti();
    });
});

function launchConfetti() {
    var end = Date.now() + (3 * 1000);
    var colors = ['#FFD700', '#ffffff', '#064420'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}