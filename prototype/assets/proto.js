// Prototipo navegable de RoadWatch OS: convierte textos de la interfaz en zonas clicables.
(function () {
  const screen = location.pathname.split('/').pop().replace('.html', '');
  const role = new URLSearchParams(location.search).get('rol') || (screen.startsWith('s-') || screen.startsWith('m-s-') ? 's' : 'c');
  const go = (id) => () => { location.href = `${id}.html?rol=${role}`; };

  const NAV_C = { 'Dashboard': 'c-dashboard', 'Alertas': 'c-alertas', 'Incidencias': 'c-incidencias', 'Registrar medición': 'c-registrar-medicion', 'Puntos de monitoreo': 'c-puntos', 'Proyectos': 'c-dashboard', 'Configuración': 's-configuracion' };
  const NAV_S = { 'Portafolio': 's-portafolio', 'Incidencias críticas': 's-criticas', 'Historial de mediciones': 's-historial', 'Reportes de auditoría': 's-reporte', 'Documentos normativos': 's-documentos', 'Configuración': 's-configuracion' };
  const TAB_C = { 'Inicio': 'm-c-dashboard', 'Alertas': 'm-c-alertas', 'Incidencias': 'm-c-evidencia', 'Perfil': 'm-login' };
  const TAB_S = { 'Portafolio': 'm-s-portafolio', 'Mediciones': 'm-s-historial', 'Reportes': 'm-s-reporte', 'Perfil': 'm-login' };

  const ROUTES = {
    'login': { 'Ingresar': role === 's' ? 's-portafolio' : 'c-dashboard' },
    'c-dashboard': { 'Registrar medición': 'c-registrar-medicion', 'Ver todas': 'c-alertas', 'N-04 · Ruido': 'c-incidencia-detalle' },
    'c-alertas': { 'Ver ticket': 'c-incidencia-detalle', 'Atender': 'c-incidencia-detalle' },
    'c-incidencia-detalle': { 'Mover a “En revisión”': 'c-incidencias' },
    'c-incidencias': { 'Ruido sobre el LMP por maquinaria pesada': 'c-incidencia-detalle', 'Nueva incidencia': 'c-alertas' },
    'c-registrar-medicion': { 'Cancelar': 'c-dashboard', 'Guardar medición': 'c-alertas' },
    'c-puntos': { 'Nuevo punto': 'c-puntos', 'Guardar cambios': 'c-dashboard' },
    's-portafolio': { 'Lista': 's-portafolio-lista', 'Generar reporte': 's-reporte', 'Ver proyecto →': 's-criticas' },
    's-portafolio-lista': { 'Tarjetas': 's-portafolio' },
    's-criticas': { 'Validar mitigación': 's-historial' },
    's-historial': { 'CSV': 's-reporte' },
    's-reporte': { 'Generar y descargar PDF': 's-documentos', 'Certificado de calibración N-08': 's-documentos' },
    's-documentos': { 'Subir': 's-reporte' },
    'm-login': { 'Ingresar': role === 's' ? 'm-s-portafolio' : 'm-c-dashboard' },
    'm-c-dashboard': { 'Atender ticket INC-0142': 'm-c-evidencia', 'Registrar evidencia': 'm-c-evidencia' },
    'm-c-alertas': { 'Ver ticket': 'm-c-evidencia', 'Atender': 'm-c-medicion' },
    'm-c-evidencia': { 'Enviar a revisión': 'm-c-dashboard' },
    'm-c-medicion': { 'Guardar medición': 'm-c-alertas' },
    'm-s-portafolio': { 'Ver todos': 'm-s-historial' },
    'm-s-reporte': { 'Compartir con el MTC': 'm-s-portafolio' },
  };

  const routes = Object.assign({}, screen.startsWith('m-') ? (role === 's' ? TAB_S : TAB_C) : (role === 's' ? NAV_S : NAV_C), ROUTES[screen] || {});
  const all = Array.from(document.querySelectorAll('body *'));
  Object.entries(routes).forEach(([text, target]) => {
    const el = all.filter((n) => n.textContent.trim().replace(/\s+/g, ' ').startsWith(text) && n.textContent.trim().length <= text.length + 4)
      .sort((a, b) => a.textContent.length - b.textContent.length)[0];
    if (!el) return;
    const hit = el.closest('a, .btn, .chip, .seg span, .k-card, .nav a, .m-tabbar a, .fab') || el;
    hit.style.cursor = 'pointer';
    hit.classList.add('proto-hit');
    hit.addEventListener('click', go(target));
  });

  const st = document.createElement('style');
  st.textContent = `.proto-hit{outline:0 solid transparent;transition:outline .15s}.proto-hint .proto-hit{outline:2px solid rgba(79,141,245,.9);outline-offset:2px;border-radius:8px}
  #proto-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);background:#1E3844;color:#fff;font:500 13px Rubik,sans-serif;padding:10px 16px;border-radius:999px;display:flex;gap:14px;align-items:center;box-shadow:0 8px 24px rgba(0,0,0,.25);z-index:99}
  #proto-bar a{color:#E5A93C;cursor:pointer}`;
  document.head.appendChild(st);
  const bar = document.createElement('div');
  bar.id = 'proto-bar';
  bar.innerHTML = `<span>Prototipo RoadWatch OS · ${document.title.replace('RoadWatch OS · ', '')}</span><a id="ph">Mostrar zonas clicables</a><a href="index.html">Inicio</a>`;
  document.body.appendChild(bar);
  document.getElementById('ph').onclick = () => document.body.classList.toggle('proto-hint');
})();
