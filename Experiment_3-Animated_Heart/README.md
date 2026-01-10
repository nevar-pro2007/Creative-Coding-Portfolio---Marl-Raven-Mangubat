# Experiment 3: Animated Heart

## Documentation

**Inspiration and Starting Point:**
In this third experiment, the inspiration for this work was in-class demo of showing how to use the webpage of p5js. And after learning that we could create anything in the website, I started imagining what the visual is going to be, which is the animated heart. The starting point for this sketch was the video of "Heart Curve" Coding Challenge by The Coding Train. The original tutorial focuses on using polar coordinates and mathematical formulas to map out a heart shape on a 2D plane. My goal was to take this static mathematical exercise and make the heart animated in real-time using the time-based animation principles from Task 5. 

**Code Techniques and Development Process:**
My development process focused on two primary modifications to the original code. First, I addressed visual style. In the video, the heart is drawn as a constant line. I have also remixed this by introducing a dynamic color palette that shifts between pink, purple, and red based on frameCount funciton. Second, I tried experimenting with behavioral animation using a sine wave, mapped to the frameCount function, to create a pulsing effect. A major problem I have encountered was that the heart would pulse so violently it would leave the
screen. To resolve this major issue, I started multiplying the sin() output by a small decimal (0.1), which constrained the movement to a subtle, organic heartbeat.

<img width="400" height="400" alt="cause_3_image" src="https://github.com/user-attachments/assets/214ecdd3-6b60-4cd8-9243-96336d49284a" />

The cause for this artwork was the display of a heart. This was on-going process.

<img width="592" height="394" alt="effect_3_image" src="https://github.com/user-attachments/assets/cdf0fe63-fb1f-4146-b087-bd0402609ea8" />

This was the final product of the artwork.

**Self-Reflection:**
This project successfully adapts existing code creatively. By combining the math with time-incrementing variables in The  Coding Train video, I was able to transform a geometry lesson into a generative art piece. This experiment was the hardest out of all the artworks, but I want it to be possible so I kept rewatching the video. The most effective part is how the pulse synchronization makes the mathematical rendering feel biological. If I were to improve it even more, I would add a particle system that emits from the border of the heart, further distancing my version from the original visual style of the tutorial video.

**Word Count:**
353 words
