document.addEventListener("DOMContentLoaded", function () {
    // Lazy loading per immagini
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Lazy loading per video
    document.querySelectorAll('video[preload="none"]').forEach(video => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.setAttribute('preload', 'auto');
                    video.play();
                    observer.unobserve(video);
                }
            });
        });
        observer.observe(video);
    });

    // Avvio dell'animazione di caricamento Lottie
    const logoAnimation = lottie.loadAnimation({
        container: document.getElementById('logo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/logo-animation-np.json' // Assicurati che il percorso sia corretto
    });
    
    // Quando la finestra è completamente caricata, nasconde la loading page e avvia le animazioni
    window.addEventListener("load", function () {
        const loadingPage = document.getElementById("loading-page");

        if (loadingPage) {
            // Aggiungi un ritardo di 2 secondi prima di nascondere la loading page
            setTimeout(() => {
                gsap.to(loadingPage, { opacity: 0, duration: 0.5, onComplete: () => loadingPage.style.display = 'none' });
            }, 500); // Ritardo di 2000 ms (2 secondi)
        }

        // Dopo il ritardo e la scomparsa della loading page, avvia le animazioni della pagina
        startAnimations();
    });

    function startAnimations() {
        // Registrazione plugin GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Animazione della Navbar all'apertura della pagina
        const navbar = document.getElementById("sticky_navbar");
        if (navbar) {
            gsap.fromTo(navbar,
                { scale: 0, opacity: 0 },  // Partenza dal centro, invisibile
                { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }  // Si espande fino a forma totale e diventa visibile
            );
        }

        // Animazioni grafiche con loop continuo
        gsap.fromTo("#graphic1, #graphic2",
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                duration: 3.5,
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "elastic.out(1, 0.3)",
                repeat: -1,
                yoyo: true,
            }
        );

        // Animazione del titolo H1 nel #project-header
        gsap.fromTo("#project-header h1",
            {
                opacity: 0,
                scale: 1.5,
                y: -50
            },
            {
                duration: 1.5,
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#project-header",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Animazione delle sezioni di project1.html
        gsap.fromTo(".first_section",
            { x: "-100%", opacity: 0 },
            {
                x: "0%", opacity: 1,
                scrollTrigger: {
                    trigger: ".first_section",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 1
            }
        );

        gsap.fromTo(".second_section",
            { x: "100%", opacity: 0 },
            {
                x: "0%", opacity: 1,
                scrollTrigger: {
                    trigger: ".second_section",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 1
            }
        );

        gsap.fromTo(".third_section",
            { x: "-100%", opacity: 0 },
            {
                x: "0%", opacity: 1,
                scrollTrigger: {
                    trigger: ".third_section",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 1
            }
        );

        gsap.fromTo(".fourth_section",
            { x: "100%", opacity: 0 },
            {
                x: "0%", opacity: 1,
                scrollTrigger: {
                    trigger: ".fourth_section",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play none none reverse"
                },
                duration: 1
            }
        );

        // Animazione delle forme nella sezione background
        gsap.fromTo(".shape",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        );

        // Animazione degli elementi .pro
        gsap.fromTo(".pro",
            {
                opacity: 0,
                y: -50
            },
            {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".pro",
                    start: "top 80%",
                    end: "top 20%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Animazione dell'header con Loop
        const header = document.getElementById("header");
        const headerHover = document.getElementById("header_hover");

        if (header && headerHover) {
            gsap.from(header, {
                scale: 1.2,
                y: -30,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                onComplete: () => {
                    header.style.willChange = "auto";
                }
            });

            let showHover = false;
            setInterval(() => {
                if (showHover) {
                    gsap.to(header, { opacity: 1, duration: 0.5 });
                    gsap.to(headerHover, { opacity: 0, duration: 0.5 });
                } else {
                    gsap.to(header, { opacity: 0, duration: 0.5 });
                    gsap.to(headerHover, { opacity: 1, duration: 0.5 });
                }
                showHover = !showHover;
            }, 3500);
        }

        // Animazione semplificata delle card con ScrollTrigger
        gsap.utils.toArray('.card').forEach((card, i) => {
            let direction = i % 2 === 0 ? 'left' : 'right'; // Alterna direzione
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%", // Modificato per attivarsi più facilmente
                    end: "bottom 10%", // Modificato per attivarsi più facilmente
                    toggleActions: "play none none reverse",
                },
                x: direction === 'left' ? "-50px" : "50px", // Semplificato a 50px invece di 100%
                opacity: 0,
                duration: 0.8, // Ridotto il tempo per una reazione più rapida
            });
        });

        // Forza un refresh di ScrollTrigger dopo il caricamento della pagina
        ScrollTrigger.refresh();

        // Animazione nella sezione About
        gsap.from(".titolosec", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                document.querySelector(".titolosec").style.willChange = "auto";
            }
        });

        gsap.from(".anima", {
            scrollTrigger: {
                trigger: ".anima",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
            x: "100%",
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });

        gsap.from(".profpic", {
            scrollTrigger: {
                trigger: ".profpic",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
            x: "-100%",
            opacity: 0,
            duration: 1
        });
    }
});
