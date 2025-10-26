const NUM_SNOWFLAKES = 50; 

    function createSnowflake() {
      const snowflake = document.createElement("div");
      const size = Math.random() * 5 + 5;
      const duration = Math.random() * 5 + 5; 
      const startX = Math.random() * 100;

      snowflake.classList.add("snowflake");
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${startX}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.backgroundColor = "white";

      document.body.appendChild(snowflake);
        
      setTimeout(() => {
        snowflake.remove();
      }, duration * 1000);
    }

    setInterval(createSnowflake, 300);

    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
      createSnowflake();
    }

