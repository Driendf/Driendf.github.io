//<![CDATA[
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
