
gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.to(".title", {
  duration: 3,
  letterSpacing:"80px",
  text: {
    value: "Vir",
    scrambleText: true,
    chars: "01",
  
  },
  ease: "power2.inOut"
});

gsap.to(".title2", {
  duration: 3,
  letterSpacing:"80px",
  text: {
    value: "Fashion",
    scrambleText: true,
    chars: "01",
  
  },
  ease: "power2.inOut"
});

