// Frases románticas
const romanticPhrases = [
    {
        text: "Te amo demasiado, como para ver todos mis futuros junto a ti de la mejor manera, mi vida.",
        style: {
            top: '20%',
            left: '10%',
            backgroundColor: 'rgba(255, 235, 205, 0.9)',
            border: '2px dashed #ff5252',
            animation: 'float 4s ease-in-out infinite'
        }
    },
    {
        text: "Eres mi vida entera, la dueña de mis tierras, la reina de mi vida, mi princesa hermosa, Te amoooo.",
        style: {
            top: '70%',
            right: '10%',
            backgroundColor: 'rgba(230, 255, 230, 0.9)',
            border: '2px dotted #4caf50',
            transform: 'rotate(3deg)',
            animation: 'float 5s ease-in-out infinite 1s'
        }
    },
    {
        text: "Eres mi ser perfecto lo que más necesitaba Cherie, contigo el mundo aunque difícil no será imposible.",
        style: {
            bottom: '20%',
            left: '15%',
            backgroundColor: 'rgba(240, 240, 255, 0.9)',
            border: '2px solid #9c27b0',
            transform: 'rotate(-2deg)',
            animation: 'float 6s ease-in-out infinite 0.5s'
        }
    },
    {
        text: "Tu cuerpo me encanta, tenerte al lado de mi me alivia el alma.",
        style: {
            top: '30%',
            right: '15%',
            backgroundColor: 'rgba(255, 240, 240, 0.9)',
            border: '2px wavy #ff9800',
            animation: 'float 5.5s ease-in-out infinite 1.5s'
        }
    },
    {
        text: "Te amo demasiado como para decir que daría mi vida entera solo para ti.",
        style: {
            bottom: '30%',
            right: '20%',
            backgroundColor: 'rgba(255, 255, 240, 0.9)',
            border: '2px double #2196f3',
            transform: 'rotate(5deg)',
            animation: 'float 4.5s ease-in-out infinite'
        }
    },
    {
        text: "Te amo mucho, me das tanta paz y alegría cuando estás conmigo.",
        style: {
            bottom: '20%',
            left: '15%',
            backgroundColor: 'rgba(240, 240, 255, 0.9)',
            border: '2px solid #9c27b0',
            transform: 'rotate(-2deg)',
            animation: 'float 4s ease-in-out infinite 0.5s'
        }
    },
    {
        text: "Espera, olvidé besarte.",
        style: {
            bottom: '20%',
            left: '15%',
            backgroundColor: 'rgba(240, 240, 255, 0.9)',
            border: '2px solid #9c27b0',
            transform: 'rotate(-2deg)',
            animation: 'float 7s ease-in-out infinite 1.5s'
        }
    }
];

function displayRomanticPhrases() {
    const container = document.getElementById('romantic-phrases-container');
    
    romanticPhrases.forEach((phrase, index) => {
        setTimeout(() => {
            const phraseElement = document.createElement('div');
            phraseElement.className = 'romantic-phrase'; // Corregido: era "romantic-phrase"
            phraseElement.textContent = phrase.text;
            
            // Aplicar estilos personalizados
            Object.assign(phraseElement.style, phrase.style);
            
            container.appendChild(phraseElement);
            
            // Hacer visible después de añadir al DOM
            setTimeout(() => {
                phraseElement.classList.add('visible');
            }, 100);
            
            // Eliminar después de mostrarse
            setTimeout(() => {
                phraseElement.classList.remove('visible');
                setTimeout(() => {
                    container.removeChild(phraseElement);
                }, 1000);
            }, 8000); // Mostrar cada frase por 8 segundos
            
        }, index * 10000); // Mostrar nueva frase cada 10 segundos
    });
    
    // Repetir el ciclo
    setTimeout(displayRomanticPhrases, romanticPhrases.length * 10000);
}

// Iniciar después de que cargue la página
window.addEventListener('load', () => {
    setTimeout(displayRomanticPhrases, 6000); // Comenzar después de 6 segundos
});