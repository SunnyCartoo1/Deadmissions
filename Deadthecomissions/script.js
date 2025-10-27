<script>
    // VARIÁVEIS PRINCIPAIS
    const musicaFundo = document.getElementById('musica-fundo');
    const robloxClickSound = document.getElementById('roblox-click-sound');
    const botaoToggle = document.getElementById('botao-musica-toggle');
    const botaoClipe = document.getElementById('botao-clipe'); 
    const mascoteFlutuante = document.getElementById('mascote-flutuante'); // NOVO

    // FUNÇÃO 1: Tocar Som do Roblox (Apenas para cliques)
    function tocarRobloxClick() {
        if (robloxClickSound) {
            robloxClickSound.load(); 
            robloxClickSound.currentTime = 0; 
            robloxClickSound.play().catch(e => {}); 
        }
    }
    
    // FUNÇÃO 2: ABRIR MODAL COM ZOOM (TELA CHEIA)
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');

    function openModal(imgElement) {
        tocarRobloxClick(); 
        modal.style.display = "block";
        modalImg.src = imgElement.src;
    }
    window.openModal = openModal; 

    closeModal.onclick = function() { modal.style.display = "none"; }
    window.onclick = function(event) {
        if (event.target == modal) { modal.style.display = "none"; }
    }

    // FUNÇÃO 3: TOGGLE MÚSICA DE FUNDO
    function toggleMusica() {
        if (musicaFundo.paused) {
            musicaFundo.play();
            botaoToggle.textContent = '⏸️ Pausar Música';
        } else {
            musicaFundo.pause();
            botaoToggle.textContent = '▶️ Tocar Música';
        }
    }

    // FUNÇÃO 4 (NOVA): LÓGICA DE MOSTRAR O MASCOTE NA ROLAGEM
    window.onscroll = function() {
        // Se a rolagem for maior que 200 pixels, mostre o mascote
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mascoteFlutuante.classList.add("show");
        } else {
            mascoteFlutuante.classList.remove("show");
        }
    };

    // INICIALIZAÇÃO DE EVENTOS
    
    // Eventos de clique do Roblox nos Botões
    document.querySelectorAll('button').forEach(botao => {
        if (botao.id !== 'botao-musica-toggle') { 
            botao.addEventListener('click', tocarRobloxClick);
        }
    });

    // Eventos em links e botão de clipe
    document.querySelectorAll('.nav-link, #botao-clipe').forEach(item => {
        item.addEventListener('click', tocarRobloxClick);
    });

    // Inicialização da Música de Fundo (November Waltz)
    window.addEventListener('load', () => {
        const playPromise = musicaFundo.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                botaoToggle.textContent = '⏸️ Pausar Música';
            }).catch(() => {
                musicaFundo.pause();
                botaoToggle.textContent = '▶️ Tocar Música';
            });
        }
    });

    // Evento no botão de Música
    botaoToggle.addEventListener('click', toggleMusica);
    
    if (window.innerWidth < 768) {
        const ceu = document.getElementById('ceu');
        ceu.style.animationDuration = '90s'; 
    }
</script>