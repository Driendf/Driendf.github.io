//<![CDATA[
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Bloquea el menú contextual (clic derecho)
    });

    document.addEventListener('keydown', function (e) {
        // Bloquea la apertura de la consola con F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || 
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
        }
    });

    document.addEventListener('selectstart', function (e) {
        e.preventDefault(); // Bloquea la selección de texto
    });

    document.addEventListener('dragstart', function (e) {
        e.preventDefault(); // Bloquea el arrastre de elementos
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
        }
    });

    console.log = function () {
        // Opcional: Sobrescribe la función de consola para dificultar su uso
        return null;
    };

    function showServers(language) {
        // Resalta la bandera seleccionada
        const flags = document.querySelectorAll('.flag-icon');
        flags.forEach(flag => flag.classList.remove('selected'));
        document.querySelector(`#language-selector img[alt="${language.charAt(0).toUpperCase() + language.slice(1)}"]`).classList.add('selected');

        // Muestra la lista de servidores correspondiente
        document.getElementById('latino-servers').style.display = 'none';
        document.getElementById('JP-servers').style.display = 'none';
        document.getElementById('castellano-servers').style.display = 'none';
        document.getElementById(language + '-servers').style.display = 'flex';
    }

    function loadVideo(url) {
        document.getElementById('server-lists').style.display = 'none';
        document.getElementById('video-player').style.display = 'block';
        document.getElementById('video-frame').src = url;
        document.getElementById('language-selector').style.display = 'none';
    }

    function goBack() {
        document.getElementById('server-lists').style.display = 'flex';
        document.getElementById('video-player').style.display = 'none';
        document.getElementById('video-frame').src = '';
        document.getElementById('language-selector').style.display = 'flex';
    }
//]]>
