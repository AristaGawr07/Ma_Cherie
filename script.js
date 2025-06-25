document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.getElementById('flowerContainer');
    const words = ["MA", "CHERIE"];
    const colors = [
        { petals: '#ff9a9e', center: '#ffeb3b' },
        { petals: '#fad0c4', center: '#ffcdd2' }
    ];
    const animationDuration = 8; // Duración total del ciclo en segundos

    // Crear flor con animación cíclica
    function createAnimatedFlower(word, index) {
        const flowerWord = document.createElement('div');
        flowerWord.className = 'flower-word';
        
        const wordFlower = document.createElement('div');
        wordFlower.className = 'word-flower';
        
        const petalCount = word.length * 2;
        const radius = 60;
        
        // Crear pétalos
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.background = colors[index].petals;
            
            const angle = (i * (360 / petalCount)) * (Math.PI / 180);
            const xPos = Math.cos(angle) * radius;
            const yPos = Math.sin(angle) * radius;
            
            petal.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}rad)`;
            
            if (i < word.length) {
                petal.textContent = word[i];
            }
            
            wordFlower.appendChild(petal);
        }
        
        // Centro de la flor
        const center = document.createElement('div');
        center.className = 'flower-center';
        center.style.background = colors[index].center;
        center.textContent = '❤️';
        wordFlower.appendChild(center);
        
        // Texto debajo
        const wordText = document.createElement('div');
        wordText.className = 'word-text';
        wordText.textContent = word;
        
        flowerWord.appendChild(wordFlower);
        flowerWord.appendChild(wordText);
        flowerContainer.appendChild(flowerWord);
        
        // Posición inicial aleatoria
        const startX = 50 + Math.random() * 50;
        const startY = 30 + Math.random() * 40;
        flowerWord.style.left = `${startX}%`;
        flowerWord.style.top = `${startY}%`;
        
        // Animación cíclica
        function startAnimation() {
            // Reset
            gsap.set(flowerWord, { opacity: 0, scale: 0.5 });
            gsap.set(wordText, { opacity: 0, y: 20 });
            
            // Secuencia de animación
            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 1
            });
            
            // Aparecer
            tl.to(flowerWord, {
                duration: 1,
                opacity: 1,
                scale: 1,
                ease: "back.out(1.7)"
            })
            
            // Mostrar texto
            tl.to(wordText, {
                duration: 0.5,
                opacity: 1,
                y: 0
            }, "-=0.5")
            
            // Movimiento flotante
            tl.to(flowerWord, {
                duration: 3,
                x: `+=${(Math.random() - 0.5) * 100}`,
                y: `+=${(Math.random() - 0.5) * 50}`,
                rotation: (Math.random() - 0.5) * 20,
                ease: "sine.inOut"
            })
            
            // Rotación de pétalos
            tl.to(wordFlower.querySelectorAll('.petal'), {
                duration: 2,
                rotation: '+=0.3',
                repeat: 1,
                yoyo: true,
                ease: "sine.inOut"
            }, "-=2")
            
            // Desaparecer
            tl.to(flowerWord, {
                duration: 1,
                opacity: 0,
                scale: 0.8,
                ease: "back.in(1.2)"
            });
        }
        
        startAnimation();
    }

    // Crear flores para cada palabra con retraso
    words.forEach((word, index) => {
        setTimeout(() => {
            createAnimatedFlower(word, index);
        }, index * (animationDuration * 500));
    });

    // Efecto de movimiento global al pasar el mouse
    flowerContainer.addEventListener('mousemove', (e) => {
        gsap.to(".flower-word", {
            duration: 1,
            x: `+=${(e.clientX - window.innerWidth/2) * 0.02}`,
            y: `+=${(e.clientY - window.innerHeight/2) * 0.02}`,
            ease: "power1.out"
        });
    });
});