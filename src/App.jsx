const DOWNLOAD_URL = 'https://drive.google.com/drive/folders/1uftrhIudT05uonmOOXfrbviw6ZLdu2UL?usp=sharing'
const VERSION = 'Beta 1.0'

const general = [
  ['Nombre del juego', 'Mercadieval'],
  ['Género', 'Simulación de gestión de tienda (tycoon) con supervivencia nocturna no violenta · 2D cenital, pixel art'],
  ['Plataformas objetivo', 'PC Windows (64 bits)'],
  ['Público objetivo', 'Jugadores de 12 años en adelante que disfrutan de juegos de gestión, granja y estrategia ligera'],
  ['Motor y versión del editor', 'Unity 6 (6000.3.24f1) con Universal Render Pipeline 2D'],
  ['Lenguaje de programación', 'C#'],
  ['Modelo de distribución', 'Gratuito (descarga directa)'],
]

const minimos = [
  ['Sistema operativo', 'Windows 10 64 bits'],
  ['Procesador', 'Doble núcleo x64 con SSE2'],
  ['Memoria', '4 GB de RAM'],
  ['Gráficos', 'GPU compatible con DirectX 11'],
  ['Almacenamiento', '500 MB libres'],
]
const recomendados = [
  ['Sistema operativo', 'Windows 10 / 11 64 bits'],
  ['Procesador', 'Cuatro núcleos a 2,5 GHz o más'],
  ['Memoria', '8 GB de RAM'],
  ['Gráficos', 'GPU con 1 GB de VRAM, DirectX 12'],
  ['Almacenamiento', '1 GB libre (SSD)'],
]
const tecnicas = [
  ['Resolución', '1920×1080 a pantalla completa; cámara de referencia 480×270 a 16 PPU (pixel perfect)'],
  ['Render', 'URP 2D con luces Light2D: ciclo de día, atardecer y noche, luces nocturnas que parpadean'],
  ['Guardado', 'Autoguardado en JSON (una ranura) en la carpeta de datos del usuario'],
  ['Idiomas', '20 opciones de idioma (español original, inglés, alemán, francés, chino, ruso, latín, náhuatl…)'],
  ['Personalización', 'Paquetes de texturas: se reemplaza el arte con archivos .png sin abrir Unity'],
  ['Accesibilidad', 'Modo de alto contraste, volúmenes separados y panel de rendimiento (FPS, CPU, GPU, memoria)'],
]

const escenas = ['MenuPrincipal', 'Intro', 'Etapa1', 'Etapa2', 'Etapa3', 'Etapa4', 'Final']

const sistemas = [
  ['Bucle de juego', 'GameManager · GameState · GameConfig', 'Día de 06:00 a 20:00, decisión nocturna, noche por oleadas, resumen al amanecer, impuestos y finales según la Complicidad.'],
  ['Tienda tycoon', 'ShopManager · Shelf · Mostrador · LetreroTienda', 'Estantes con precio del 50 % al 200 %, fila de tres lugares, cobro en el mostrador, alcancía de confianza y reputación de 0 a 100.'],
  ['Clientes con IA', 'Customer · Clientes', 'Máquina de estados más utilidad: seis tipos con presupuesto, paciencia y lista de compra; reaccionan al precio (ganga, justo, caro, abusivo).'],
  ['La Vigilia (noche)', 'Amenaza · Farol · Brasero · CampanaAlarma · GuardNPC', 'Ladrones, ánimas y Glotglot sin combate: se calman con la luz del farol, braseros, la campana y los serenos.'],
  ['Mundo y recursos', 'CropPlot · ResourceNode · Merchant · TradeWindow', 'Huerto, recolección en el bosque, comerciantes y mejoras de la tienda.'],
  ['Iluminación', 'CicloLuz · Luz2D · LuzNocturna · Candil', 'Global Light 2D con tono de estación y luces puntuales creadas en tiempo de ejecución.'],
  ['Localización y mods', 'Loc · Idioma · LocText · ArtePacks', 'Traducción global con el texto español como clave y paquetes de texturas intercambiables.'],
  ['Datos', 'ScriptableObjects: ItemData · DialogueData · GameConfig', 'Precios, diálogos y balance se editan desde el Inspector sin tocar código.'],
  ['Herramienta de editor', 'MercadievalBuilder', 'Menú del editor que construye todas las escenas, prefabs e interfaz del juego por código.'],
]

const paquetes = [
  'Universal RP 17.3', '2D Animation 13', '2D Tilemap + Extras', '2D SpriteShape', '2D Aseprite / PSD Importer',
  'Input System 1.20', 'uGUI 2.0', 'Timeline 1.8',
]

const controles = [
  ['WASD / Flechas', 'Moverse en 8 direcciones'],
  ['Espacio', 'Saltar cercas bajas y esquivar ondas de ceniza'],
  ['E (mantener)', 'Interactuar, cobrar, recolectar, encender braseros'],
  ['1 – 6', 'Elegir ranura activa'],
  ['Tab', 'Inventario'],
  ['G', 'Panel de gestión de la tienda'],
  ['Rueda / + −', 'Cambiar el precio del estante'],
  ['Clic derecho / F', 'Farol (cono de luz)'],
  ['Q', 'Destello'],
  ['R', 'Rellenar aceite del farol'],
  ['Esc', 'Pausa / omitir'],
]

function Tabla({ filas }) {
  return (
    <dl className="tabla">
      {filas.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  )
}

function Descargar() {
  return (
    <a className="boton" href={DOWNLOAD_URL} target="_blank" rel="noopener">
      <img src="/img/icon_coin.png" alt="" /> Descargar {VERSION}
    </a>
  )
}

export default function App() {
  return (
    <>
      <nav>
        <a href="#inicio" className="logo">Mercadieval</a>
        <div>
          <a href="#info">Información</a>
          <a href="#requisitos">Requisitos</a>
          <a href="#arquitectura">Arquitectura</a>
          <a href="#audio">Audio, Input y UI</a>
        </div>
      </nav>

      <header id="inicio" className="hero">
        <img className="hero-fondo" src="/img/cine_menu.png" alt="" />
        <div className="hero-texto">
          <span className="etiqueta">{VERSION}</span>
          <h1>Mercadieval</h1>
          <p>
            De día llevas la tienda del pueblo: fijas precios, atiendes clientes y cultivas tu huerto.
            De noche resistes la Vigilia con un farol, sin armas. Cuatro estaciones y varios finales.
          </p>
          <Descargar />
          <small>Windows 10/11 · 64 bits · Gratis</small>
        </div>
        <div className="personajes">
          {['player', 'npc_campesino', 'npc_dama', 'npc_ladron', 'enemy_errante', 'candil_0'].map((p) => (
            <img key={p} src={`/img/${p}.png`} alt="" />
          ))}
        </div>
      </header>

      <main>
        <p className="intro">
          Documento de diseño y desarrollo: resume las características principales, los requisitos del sistema,
          las herramientas del motor y los aspectos técnicos del proyecto.
        </p>

        <section id="info">
          <h2><span>1</span> Información general del proyecto</h2>
          <Tabla filas={general} />
        </section>

        <section id="requisitos">
          <h2><span>2</span> Especificaciones técnicas y requisitos</h2>
          <div className="columnas">
            <div className="carta">
              <h3>Mínimos</h3>
              <Tabla filas={minimos} />
            </div>
            <div className="carta">
              <h3>Recomendados</h3>
              <Tabla filas={recomendados} />
            </div>
          </div>
          <h3>Especificaciones técnicas</h3>
          <Tabla filas={tecnicas} />
        </section>

        <section id="arquitectura">
          <h2><span>3</span> Arquitectura y componentes en Unity</h2>
          <h3>Flujo de escenas</h3>
          <ol className="escenas">
            {escenas.map((e) => <li key={e}>{e}</li>)}
          </ol>
          <p className="nota">Etapa 1 a 4 son las cuatro estaciones del pueblo; se pasa de una a otra por el portón (StageGate).</p>
          <h3>Sistemas y scripts</h3>
          <div className="rejilla">
            {sistemas.map(([t, s, d]) => (
              <article key={t} className="carta">
                <h4>{t}</h4>
                <code>{s}</code>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <h3>Paquetes de Unity</h3>
          <ul className="chips">
            {paquetes.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </section>

        <section id="audio">
          <h2><span>4</span> Audio, Input y UI</h2>
          <div className="rejilla">
            <article className="carta">
              <h4>Audio</h4>
              <p>
                <code>AudioManager</code> (singleton) con dos AudioSource: música en bucle y efectos.
                Pistas distintas para menú, día y noche, con cambio automático al anochecer.
              </p>
              <p>10 efectos: salto, recolectar, moneda, golpe, susto, campana, peligro, clic, plantar y victoria.</p>
              <p>Volumen de música y efectos independiente, guardado en PlayerPrefs.</p>
            </article>
            <article className="carta">
              <h4>Input</h4>
              <p>
                Teclado y ratón con el Input Manager clásico (<code>Input.GetKey</code>); el proyecto tiene
                activo el modo <em>Both</em> e incluye el paquete Input System 1.20.
              </p>
              <p>La interacción elige el objeto más cercano a 1,5 unidades o menos.</p>
            </article>
            <article className="carta">
              <h4>UI</h4>
              <p>
                uGUI (Canvas) construida por código: HUD de día y noche, inventario con arrastrar y soltar,
                ventana de comercio, panel de gestión, diario, diálogos con retrato y cinemáticas.
              </p>
              <p>Fuente pixel Pixelify Sans con fuentes Noto de respaldo para cada escritura.</p>
            </article>
          </div>
          <h3>Controles</h3>
          <table className="controles">
            <tbody>
              {controles.map(([k, a]) => (
                <tr key={k}>
                  <td><kbd>{k}</kbd></td>
                  <td>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="final">
          <img src="/img/cine_fin_paz.png" alt="" />
          <h2>¿Listo para abrir la tienda?</h2>
          <Descargar />
        </section>
      </main>

      <footer>Mercadieval · {VERSION} · Hecho con Unity 6</footer>
    </>
  )
}
