const NUM_SNOWFLAKES = 50; // Количество снежинок

    function createSnowflake() {
      const snowflake = document.createElement("div");
      const size = Math.random() * 5 + 5; // Размер снежинки
      const duration = Math.random() * 5 + 5; // Продолжительность падения
      const startX = Math.random() * 100; // Начальная позиция

      snowflake.classList.add("snowflake");
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${startX}vw`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflake.style.backgroundColor = "white";

      document.body.appendChild(snowflake);

      // Удаляем снежинку после завершения анимации
      setTimeout(() => {
        snowflake.remove();
      }, duration * 1000);
    }

    // Создаем снежинки каждые 300 мс
    setInterval(createSnowflake, 300);

    // Заполняем страницу снежинками
    for (let i = 0; i < NUM_SNOWFLAKES; i++) {
      createSnowflake();
    }
