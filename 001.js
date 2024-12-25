<div class="video-player-container">
    <!-- Selector de Idioma con banderas -->
    <div id="language-selector" class="language-selector">
        <img src="https://saidochesto.top/static/lang/SUB.png" alt="JP" onclick="showServers('JP')" class="flag-icon">
        <img src="https://saidochesto.top/static/lang/LAT.png" alt="Latino" onclick="showServers('latino')" class="flag-icon">
        <img src="https://saidochesto.top/static/lang/EN.png" alt="Castellano" onclick="showServers('castellano')" class="flag-icon">
    </div>

    <!-- Contenedor de Lista de Servidores -->
    <div id="server-lists" class="server-lists">
 

        <!-- Lista de Servidores para Latino -->
        <div id="latino-servers" class="server-list" style="display: flex;">
            <div class="server-item" onclick="loadVideo('https://geo.dailymotion.com/player.html?video=k2awM54QowfVmSC1VLo')">
                <img src="https://saidochesto.top/static/server/streamwish.top.png" alt="Streamwish">
                <div>
                    <strong>DAILYMOTION</strong>
                    <p>Max. 0 ventanas emergentes</p>
                </div>
            </div>
            <div class="server-item" onclick="loadVideo('//ok.ru/videoembed/9179405552366?nochat=1')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>OK</strong>
                    <p>Max. 0 ventanas de publicidad | HD</p>
                </div>
            </div>
          <div class="server-item" onclick="loadVideo('https://short.ink/IuDiDQIIg')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 0 ventanas de publicidad | HD</p>
                </div>
            </div>
          <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
                    <div class="server-item" onclick="loadVideo('https://filemoon.to/e/f8csx9tz8sxd/xxl_full.mp4')">
                <img src="https://i.imgur.com/mZVCUNO.png" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
          
        </div>

        <!-- Lista de Servidores para Castellano -->
        <div id="castellano-servers" class="server-list" style="display: none;">
            <div class="server-item" onclick="loadVideo('https://geo.dailymotion.com/player.html?video=k25jnkIlqVNJEPC2Urm')">
                <img src="URL_DE_ICONO_STREAMWISH" alt="Streamwish">
                <div>
                    <strong>STREAMWISH</strong>
                    <p>Max. 3 ventanas emergentes</p>
                </div>
            </div>
            <div class="server-item" onclick="loadVideo('ENLACE_VIDEO_CAST2')">
                <img src="URL_DE_ICONO_FILEMOON" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
        </div>
        <div id="JP-servers" class="server-list" style="display: none;">
            <div class="server-item" onclick="loadVideo('https://geo.dailymotion.com/player.html?video=k25jnkIlqVNJEPC2Urm')">
                <img src="URL_DE_ICONO_STREAMWISH" alt="Streamwish">
                <div>
                    <strong>STREAMWISH</strong>
                    <p>Max. 3 ventanas emergentes</p>
                </div>
            </div>
            <div class="server-item" onclick="loadVideo('ENLACE_VIDEO_CAST2')">
                <img src="URL_DE_ICONO_FILEMOON" alt="Filemoon">
                <div>
                    <strong>FILEMOON</strong>
                    <p>Max. 2 ventanas de publicidad | HD</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Reproductor de Video -->
    <div id="video-player" class="video-player" style="display: none;">
        <iframe id="video-frame" src="" frameborder="0" allowfullscreen></iframe>
        <button id="back-button" onclick="goBack()" class="back-button">&#8592; Volver</button>
    </div>
</div>

<style>
  
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
        background: black;
                  color:#fff;

    }

    .video-player-container {
        position: relative;
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 12px;
        overflow: hidden;
        background-image: linear-gradient(rgba(0, 0, 0, 0.7), #000000), url(https://i.imgur.com/SxGUzYS.jpeg);
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .language-selector {
        display: flex;
        justify-content: center;
        padding: 10px;
        z-index: 100;
    }

    .flag-icon {
        width: 36px;
        height: 36px;
        margin: 0 8px;
        cursor: pointer;
        border-radius: 50%;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .flag-icon:hover {
        transform: scale(1.1);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
    }

    .server-lists {
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex-grow: 1;
        overflow-y: scroll;
        height: 500px;
    }

    .server-list {
        display: none;
        flex-direction: column;
        gap: 15px;
    }

    .server-item {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.6);
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s, box-shadow 0.3s;
    }

    .server-item img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        border-radius: 6px;
    }

    .server-item:hover {
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
    }

    .video-player {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* Aspect ratio 16:9 */
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #video-frame {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .back-button {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 8px 16px;
        background: rgba(0, 0, 0, 0.7);
        border: none;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        border-radius: 5px;
    }

    .back-button:hover {
        background: rgba(0, 0, 0, 0.9);
    }

    .flag-icon.selected {
        background-color: #f06292; /* Color rosa cuando se selecciona el idioma */
    }

    /* Ocultar los títulos y comentarios */
    h1.post-title.entry-title,
    .comments {
        display: none;
    }

    p.description {
        display: none;
    }

    h1.site-title {
        display: none;
    }

    section, nav, article, aside, hgroup, header, footer {
        display: none;
    }

    div#blog-pager {
        display: none;
    }

    .post-feeds {
        display: none;
    }

      /* Responsive Design */
    @media (max-width: 768px) {
    .server-lists {
        overflow-y: scroll;
        height: 230px;
    }
    }

    @media (max-width: 480px) {
    .server-lists {
        overflow-y: scroll;
        height: 130px;
    }
    }
</style>

<script>
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
</script>
