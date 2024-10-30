document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

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

    const logoAnimation = lottie.loadAnimation({
        container: document.getElementById('logo-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/logo-animation-np.json'
    });
    
    window.addEventListener("load", function () {
        const loadingPage = document.getElementById("loading-page");

        if (loadingPage) {
            setTimeout(() => {
                gsap.to(loadingPage, {
                    opacity: 0, duration: 0.5, onComplete: () => {
                        if (loadingPage){
                            loadingPage.style.display = 'none';
                        }
                        logoAnimation.stop(); 
                    }
                
                });
            }, 500); 
        }

        startAnimations();
    });

    function startAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        const navbar = document.getElementById("sticky_navbar");
        if (navbar) {
            gsap.fromTo(navbar,
                { scale: 0, opacity: 0 },  
                { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }  
            );
        }

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

        gsap.fromTo(".shape",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
        );

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

        gsap.utils.toArray('.card').forEach((card, i) => {
            let direction = i % 2 === 0 ? 'left' : 'right'; 
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 70%", 
                    end: "bottom 10%", 
                    toggleActions: "play none none reverse",
                },
                x: direction === 'left' ? "-50px" : "50px", 
                opacity: 0,
                duration: 0.8,
            });
        });

        ScrollTrigger.refresh();

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
