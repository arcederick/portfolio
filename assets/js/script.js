const textArray = [ "Olá Mundo!", "Hello World!", "Ciao Mondo!", "Bonjour le Monde!", "Kon'nichiwa Sekai!", "Hola Mondo!"];
let currentIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typewriterEffect() {
  const text = textArray[currentIndex];
  let index = 0;
  typewriterElement.textContent = "";

  const interval = setInterval(() => {
    if (index < text.length) {
      typewriterElement.textContent += text[index];
      index++;
    } else {
      clearInterval(interval);
      currentIndex = (currentIndex + 1) % textArray.length;
      setTimeout(typewriterEffect, 1000); // Tempo de pausa antes de repetir
    }
  }, 100); // Velocidade do typewriter
}

typewriterEffect();
