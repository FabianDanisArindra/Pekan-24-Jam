const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('no-scroll');
});

// EmailJS

function SendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_pif1223";
    const templateID = "template_fg8kxtf";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Pesan Anda berhasil terkirim!");
            }
        )
        .catch(err => {
            console.error("Terjadi kesalahan:", err);
            alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.");
        });
}
