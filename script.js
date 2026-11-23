
// MENÚ DE NAVEGACIÓN
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {

    toggle.addEventListener('click', () => {

        const isOpen = nav.classList.toggle('open');

        toggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        toggle.textContent = isOpen ? '×' : '☰';

    });

    // Cerrar menú al seleccionar una sección
    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            nav.classList.remove('open');

            toggle.setAttribute(
                'aria-expanded',
                'false'
            );

            toggle.textContent = '☰';

        });

    });

}


// AÑO AUTOMÁTICO DEL FOOTER
const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}


// ANIMACIÓN DE APARICIÓN DE SECCIONES
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    '.intro, .orbit-section, .project, .progress-section, .launch, .contact-section'
).forEach(section => {

    section.classList.add('reveal');

    observer.observe(section);

});
