new FinisherHeader({
    "count": 10, // Number of particles
    "size": {
      "min": 1300, // Minimum particle size in px
      "max": 1500, // Maximum particle size in px
      "pulse": 0   // Particle size variation speed
    },
    "speed": {
      "x": {
        "min": 0.1, // Min X-axis speed
        "max": 0.6  // Max X-axis speed
      },
      "y": {
        "min": 0.1, // Min Y-axis speed
        "max": 0.6  // Max Y-axis speed
      }
    },
    "colors": {
      "background": "#9138e5", // Background color
      "particles": [
        "#ff4848", "#000000", "#2235e5", "#000000", "#ff0000" // Particle colors
      ]
    },
    "blending": "overlay", // Blending mode
    "opacity": {
      "center": 0.5, // Opacity at center of particle
      "edge": 0.05   // Opacity at edge of particle
    },
    "skew": -2,      // Header skew in degrees
    "shapes": [ "c" ] // Particle shape(s), "c" = circle
  });
  