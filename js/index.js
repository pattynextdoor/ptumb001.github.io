anime({
    targets: ".square",
    keyframes: [
      {
        delay: anime.stagger(100),
        scale: 0.75,
        borderRadius: "50%",
        background: "linear-gradient(-45deg, rgba(24,102,239,1) 22%, rgba(49,255,147,1) 65%)"
      },
      {
        delay: 1000,
        borderRadius: "10%",
        background: "linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)",
        scale: 1.1
      },
      {
        borderRadius: "50%",
        scale: 0.5,
      },
      {
        scale: 0.75,
        skew: "5deg",
        loop: true
      }
    ],
    easing: "spring(1, 80, 10, 0)"
});

anime({
  targets: "body",
  keyframes: [
    {
      backgroundColor: "#000",
      delay: 200
    },
    {
      backgroundColor: "#fff",
      delay: 1000,
      duration: 1000
    }
  ],
  easing: "easeOutQuart"
});

anime({
  targets: "h1, h2, p, li>a>i",
  keyframes: [
    {
      color: "#fff",
      delay: 200
    },
    {
      color: "#000",
      delay: 1000,
      duration: 1000
    }
  ],
  easing: "easeOutQuart"
});

function toggleDisplay() {
  let currBackground = document.getElementsByTagName("body")[0].style.backgroundColor;
  let toggleText = document.getElementById("toggle");
  
  // Currently light, turn dark
  if (currBackground == "rgb(255, 255, 255)") {
    // Background animation
    anime({
      targets: "body",
      backgroundColor: "#000",
      delay: 300,
      duration: 1000,
      easing: "easeOutQuart"
    });

    // Text animation
    anime({
      targets: "h1, h2, p, li>a>i",
      color: "#fff",
      delay: 300,
      duration: 1000,
      easing: "easeOutQuart"
    });

    // Squares animation
    anime({
      targets: ".square",
      keyframes: [
        {
          skew: "20deg",
          duration: 300, 
        },
        {
          delay: anime.stagger(100),
          skew: "0",
          scale: 0.75,
          background: "linear-gradient(-45deg, rgba(24,102,239,1) 22%, rgba(49,255,147,1) 65%)",
          duration: 1000,
        }
      ],
      easing: "easeOutQuart"
    });
    toggleText.innerHTML = "Light mode?";
  }

  // Currently dark, turn light
  else {
    // Background animation
    anime({
      targets: "body",
      background: "#fff",
      delay: 300,
      duration: 1000,
      easing: "easeOutQuart"
    });

    // Text animation
    anime({
      targets: "h1, h2, p, li>a>i",
      color: "#000",
      delay: 300,
      duration: 1000,
      easing: "easeOutQuart"
    });

    // Squares animation
    anime({
      targets: ".square",
      keyframes: [
        {
          skew: "-20deg",
          duration: 300 
        },
        {
          delay: anime.stagger(100),
          skew: "0",
          scale: 0.75,
          background: "linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)",
          duration: 1000
        }
      ],
      easing: "easeOutQuart"
    });
    toggleText.innerHTML = "Dark mode?";
  }
}