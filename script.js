/**
 * DESAFÍO DE LIDERAZGO - MEDIPIEL
 * 5 Días · 15 Decisiones · Experiencia Gamificada de Liderazgo
 */

// =========================================================================
// 1. CHALLENGE DATA (Exact content from Word Document)
// =========================================================================
const challengeData = [
  {
    day: 1,
    title: "Día 1",
    subtitle: "Resultado, desarrollo de personas y cliente",
    intro: "Lee cada situación y elige la alternativa que más se acerca a lo que harías como líder.\n\nNo buscamos respuestas correctas o incorrectas. Queremos conocer cómo piensas, cómo decides y cómo movilizas a tu equipo frente a situaciones reales del día a día.",
    cases: [
      {
        caseNumber: 1,
        title: "El día que nada sale como esperabas",
        situation: "Es sábado, uno de los días de mayor tráfico en la tienda. Dos personas del equipo llegan tarde, tienes varios clientes esperando y adicionalmente recibes un mensaje de tu jefe informándote que los resultados de la semana están por debajo de la meta.\n\nUna de tus asesoras te pregunta: “¿Qué hacemos? Hoy definitivamente no nos está yendo bien.”",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le dices que deben concentrarse en vender y que al final del día revisarán qué pasó." },
          { letter: "B", text: "Reconoces que la situación es retadora, reorganizas las prioridades del equipo y defines rápidamente dónde necesitas enfocarte para recuperar el día." },
          { letter: "C", text: "Te involucras directamente en todas las ventas para intentar recuperar el resultado." },
          { letter: "D", text: "Expresas al equipo tu preocupación por el resultado y les pides que hagan un esfuerzo adicional." }
        ],
        reflection: "¿Qué necesita primero tu equipo de ti: dirección, tranquilidad, presión o acompañamiento?",
        behavior: "Resuelve desafíos con determinación y creatividad."
      },
      {
        caseNumber: 2,
        title: "Una nueva integrante llega a la tienda",
        situation: "Ingresa una nueva asesora. Tiene experiencia comercial, pero no conoce el portafolio de Medipiel ni la forma de trabajar de la tienda.\n\nEl equipo está en una semana de alta demanda y todos están concentrados en cumplir la meta.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le entregas los contenidos de inducción y le dices que los revise durante sus tiempos libres." },
          { letter: "B", text: "Le asignas una compañera para acompañarla durante los primeros días y estableces momentos específicos para revisar sus avances." },
          { letter: "C", text: "Le pides que observe cómo trabajan las demás y que vaya aprendiendo sobre la marcha." },
          { letter: "D", text: "Como el equipo está ocupado, asumes tú directamente todo su entrenamiento." }
        ],
        reflection: "¿Qué responsabilidad tienes como líder en el desarrollo de una persona nueva, incluso cuando la operación está exigente?",
        behavior: "Desarrolla su equipo para alcanzar el máximo potencial del talento."
      },
      {
        caseNumber: 3,
        title: "La venta fácil vs. la venta correcta",
        situation: "Un cliente entra buscando un producto específico. La asesora tiene la posibilidad de venderle un producto de mayor valor, pero después de escucharla identifica que probablemente otra alternativa responde mejor a su necesidad.\n\nLa alternativa recomendada tiene un menor valor.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le dices a la asesora que aproveche la oportunidad para aumentar el ticket." },
          { letter: "B", text: "Respaldas la recomendación adecuada para la necesidad de la clienta, aunque represente una venta menor." },
          { letter: "C", text: "Le pides que primero intente vender el producto de mayor valor y posteriormente ofrezca la otra alternativa." },
          { letter: "D", text: "Dejas que la asesora decida porque ella está atendiendo directamente a la clienta." }
        ],
        reflection: "¿Cómo equilibras las necesidades del cliente con los objetivos comerciales de la tienda?",
        behavior: "Entrega valor en cada acción comprendiendo que el cliente es el centro de la estrategia."
      }
    ],
    finalReflection: "Hoy revisaste situaciones en las que tu liderazgo se pone a prueba frente al resultado, el desarrollo de las personas y las necesidades del cliente. Si observaras tu manera de liderar durante una jornada completa, ¿qué comportamientos crees que reflejan mejor el liderazgo que queremos vivir en Medipiel y cuáles podrías fortalecer?\n\nPiensa en una situación reciente en la que hayas tenido que tomar una decisión difícil: ¿qué harías diferente hoy y qué impacto esperas generar con ese cambio?"
  },
  {
    day: 2,
    title: "Día 2",
    subtitle: "Coherencia, confianza e innovación",
    intro: "Lee cada situación y elige la alternativa que más se acerca a lo que harías como líder.\n\nNo buscamos respuestas correctas o incorrectas. Queremos conocer cómo piensas, cómo decides y cómo movilizas a tu equipo frente a situaciones reales del día a día.",
    cases: [
      {
        caseNumber: 1,
        title: "Lo que digo vs. lo que hago",
        situation: "Durante una reunión le dices al equipo que es importante mantener una actitud positiva frente a los clientes. Sin embargo, durante el día recibes varias situaciones difíciles y una asesora nota que estás reaccionando con frustración.\n\nAl finalizar la jornada te dice: “A veces nos pides mantener la calma, pero hoy te vi bastante molesta.”",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le explicas que como líder también tienes días difíciles y que eso no significa que estés haciendo algo incorrecto." },
          { letter: "B", text: "Le agradeces el comentario, reflexionas sobre tu comportamiento y reconoces que tus acciones también son un mensaje para el equipo." },
          { letter: "C", text: "Le dices que primero debe preocuparse por sus propios resultados antes de cuestionar tu comportamiento." },
          { letter: "D", text: "Evitas profundizar en la conversación para no generar un conflicto." }
        ],
        reflection: "¿Qué mensaje reciben las personas de tu equipo a través de tus comportamientos, incluso cuando no estás hablando?",
        behavior: "Es coherente en sus palabras y acciones para inspirar a otros."
      },
      {
        caseNumber: 2,
        title: "El equipo está dividido",
        situation: "Dos asesoras tienen una diferencia personal que ya está afectando la dinámica de la tienda. Han dejado de apoyarse entre ellas y empiezan a generarse comentarios entre el resto del equipo.\n\nLos resultados todavía no se han afectado significativamente, pero notas un ambiente tenso.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Les pides que separen sus problemas personales del trabajo." },
          { letter: "B", text: "Hablas individualmente con cada una y posteriormente generas un espacio de conversación para buscar acuerdos y recuperar la confianza." },
          { letter: "C", text: "Cambias los horarios para evitar que trabajen juntas." },
          { letter: "D", text: "Esperas a que la situación se resuelva naturalmente mientras no afecte las ventas." }
        ],
        reflection: "¿Qué haces cuando un conflicto todavía no afecta el resultado, pero sí empieza a afectar las relaciones?",
        behavior: "Genera un ambiente seguro y de confianza al interior de su equipo."
      },
      {
        caseNumber: 3,
        title: "Tenemos que cambiar",
        situation: "La tienda viene cumpliendo sus metas, pero notas que el comportamiento de compra de los clientes está cambiando. Cada vez preguntan más por recomendaciones digitales, comparan productos desde el celular y llegan con mayor conocimiento.\n\nUna asesora propone crear una dinámica de asesoría apoyada en herramientas digitales.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Mantienes la estrategia actual porque los resultados son buenos." },
          { letter: "B", text: "Escuchas la propuesta, analizas su viabilidad y realizas una prueba piloto para evaluar su impacto." },
          { letter: "C", text: "Le dices que presente la propuesta a la gerencia porque estos cambios no corresponden al equipo de tienda." },
          { letter: "D", text: "Implementas inmediatamente la idea en toda la tienda." }
        ],
        reflection: "¿Cómo identificas una oportunidad de cambio antes de que se convierta en una necesidad?",
        behavior: "Inspira creatividad y fomenta la innovación para hacer que las cosas pasen."
      }
    ],
    finalReflection: "La confianza se construye cuando existe coherencia, cuando las personas sienten que pueden expresar lo que piensan y cuando encuentran en su líder apertura para evolucionar. Después de revisar las situaciones de hoy, ¿qué señales crees que está recibiendo actualmente tu equipo de ti?\n\n¿Estás construyendo un espacio donde las personas puedan confiar, aportar ideas, equivocarse, aprender y crecer? Identifica un comportamiento concreto que quieras reforzar durante esta semana."
  },
  {
    day: 3,
    title: "Día 3",
    subtitle: "Escucha, toma de decisiones y movilización",
    intro: "Lee cada situación y elige la alternativa que más se acerca a lo que harías como líder.\n\nNo buscamos respuestas correctas o incorrectas. Queremos conocer cómo piensas, cómo decides y cómo movilizas a tu equipo frente a situaciones reales del día a día.",
    cases: [
      {
        caseNumber: 1,
        title: "Una asesora que necesita algo diferente",
        situation: "Una asesora lleva varios meses en la tienda. Tiene buenos resultados, pero notas que está perdiendo motivación. Cumple con sus tareas, pero participa poco, evita asumir nuevos retos y ya no muestra el mismo entusiasmo.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le asignas nuevos objetivos para motivarla." },
          { letter: "B", text: "Tienes una conversación individual para comprender qué está pasando, escucharla y construir con ella una acción de desarrollo." },
          { letter: "C", text: "Esperas a que su comportamiento cambie antes de intervenir." },
          { letter: "D", text: "Le preguntas al resto del equipo qué creen que le está pasando." }
        ],
        reflection: "¿Cuánto conoces realmente las motivaciones, fortalezas y oportunidades de desarrollo de las personas de tu equipo?",
        behavior: "Genera conexiones genuinas con los demás, mostrando empatía en sus interacciones."
      },
      {
        caseNumber: 2,
        title: "La decisión difícil",
        situation: "Una asesora con mucha experiencia propone cambiar la forma en que están organizando la atención de clientes. Otra integrante del equipo considera que la propuesta puede afectar la experiencia del cliente.\n\nTú debes tomar una decisión.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Tomas la decisión directamente porque eres quien lidera la tienda." },
          { letter: "B", text: "Escuchas las diferentes perspectivas, revisas la información disponible y tomas una decisión explicando al equipo el porqué." },
          { letter: "C", text: "Implementas la propuesta de la asesora con mayor experiencia." },
          { letter: "D", text: "Les pides que voten y aplicas la opción que tenga más votos." }
        ],
        reflection: "¿Cómo haces que las personas participen en una decisión sin perder tu responsabilidad como líder de decidir?",
        behavior: "Toma decisiones informadas y responsables, empoderando a los miembros del equipo desde la experiencia y el conocimiento."
      },
      {
        caseNumber: 3,
        title: "Un mes difícil",
        situation: "La tienda termina el mes por debajo de la meta. Al analizar la información encuentras tres posibles causas:\n\n• Menor tráfico.\n• Bajo desempeño en algunas categorías.\n• Oportunidades en la conversión de clientes.\n\nEl equipo está desmotivado y considera que el resultado se debe principalmente a que “no están entrando clientes”.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le comunicas al equipo que deben vender más el siguiente mes." },
          { letter: "B", text: "Analizas los datos con el equipo, identifican qué variables sí pueden controlar y construyen un plan de acción con responsables y fechas." },
          { letter: "C", text: "Solicitas inmediatamente más tráfico a Marketing." },
          { letter: "D", text: "Esperas el siguiente mes para comprobar si la situación mejora." }
        ],
        reflection: "Cuando el resultado no se alcanza, ¿tu primera reacción es buscar culpables, explicaciones o posibilidades de acción?",
        behavior: "Impulsa el progreso y la sostenibilidad del negocio alineando el equipo hacia un objetivo común."
      }
    ],
    finalReflection: "Hoy revisaste tres capacidades fundamentales para liderar: escuchar a las personas, tomar decisiones y movilizar al equipo frente a los resultados. Si tuvieras que elegir una de estas tres capacidades como tu principal oportunidad de desarrollo, ¿cuál sería y por qué? ¿Qué comportamiento concreto podrías empezar a practicar para generar un impacto diferente en tu equipo?"
  },
  {
    day: 4,
    title: "Día 4",
    subtitle: "Conversaciones transformadoras y adaptabilidad",
    intro: "Lee cada situación y elige la alternativa que más se acerca a lo que harías como líder.\n\nNo buscamos respuestas correctas o incorrectas. Queremos conocer cómo piensas, cómo decides y cómo movilizas a tu equipo frente a situaciones reales del día a día.",
    cases: [
      {
        caseNumber: 1,
        title: "La conversación que no puedes seguir aplazando",
        situation: "Una asesora tiene buenos resultados, pero constantemente llega tarde, se muestra poco comprometida con algunas actividades y esto empieza a generar molestia en el resto del equipo.\n\nSabes que necesitas conversar con ella, pero también tienes una relación cercana y no quieres afectar el vínculo.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Evitas la conversación mientras sus resultados sigan siendo buenos." },
          { letter: "B", text: "Le llamas la atención delante del equipo para que entienda la gravedad." },
          { letter: "C", text: "Generas un espacio individual, escuchas su perspectiva y conversas con claridad sobre el impacto de su comportamiento." },
          { letter: "D", text: "Le pides a otra asesora que hable con ella porque tienen mayor confianza." }
        ],
        reflection: "¿Cómo equilibras empatía y responsabilidad cuando lideras?",
        behavior: "Genera conexiones genuinas con los demás, mostrando empatía en sus interacciones."
      },
      {
        caseNumber: 2,
        title: "Una nueva asesora",
        situation: "Ingresa una nueva asesora a la tienda. Tiene experiencia comercial, pero no conoce suficientemente el portafolio de Medipiel.\n\nLa tienda está en una semana de alta demanda.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le entregas los contenidos y le dices que los revise cuando tenga tiempo." },
          { letter: "B", text: "Le asignas una compañera que la acompañe y estableces momentos específicos para revisar sus avances." },
          { letter: "C", text: "Le pides que aprenda observando a las demás." },
          { letter: "D", text: "Asumes tú todo el entrenamiento." }
        ],
        reflection: "¿Cómo lograrías que una persona nueva se sienta parte del equipo mientras desarrolla rápidamente sus capacidades?",
        behavior: "Desarrolla su equipo para alcanzar el máximo potencial del talento."
      },
      {
        caseNumber: 3,
        title: "La tienda necesita cambiar",
        situation: "Los resultados de la tienda son buenos, pero observas una tendencia: los clientes llegan cada vez más informados, comparan productos en internet y esperan una asesoría mucho más personalizada.\n\nEl equipo considera que no es necesario cambiar porque: “La tienda sigue cumpliendo la meta.”",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Mantienes la estrategia porque actualmente funciona." },
          { letter: "B", text: "Compartes lo que estás observando, escuchas al equipo y construyen una prueba para adaptarse a este nuevo comportamiento del cliente." },
          { letter: "C", text: "Esperas a que los resultados comiencen a caer para actuar." },
          { letter: "D", text: "Le informas al jefe de zona que el comportamiento del cliente está cambiando y esperas instrucciones." }
        ],
        reflection: "¿Qué cambios deberíamos empezar a hacer hoy, aunque todavía no aparezcan en nuestros indicadores?",
        behavior: "Entrega valor en cada acción comprendiendo que el cliente es el centro de la estrategia."
      }
    ],
    finalReflection: "Las conversaciones que tenemos como líderes pueden cambiar la manera en que una persona se siente, aprende y actúa. También pueden fortalecer o debilitar la confianza del equipo. Al mirar tus conversaciones recientes, ¿qué tipo de conversaciones estás teniendo con mayor frecuencia: conversaciones para corregir, para reconocer, para escuchar, ¿para desarrollar o para movilizar? ¿Cuál de ellas necesitas fortalecer para generar un mayor impacto en las personas que lideras?"
  },
  {
    day: 5,
    title: "Día 5",
    subtitle: "Liderazgo bajo presión y resolución de retos",
    intro: "Lee cada situación y elige la alternativa que más se acerca a lo que harías como líder.\n\nNo buscamos respuestas correctas o incorrectas. Queremos conocer cómo piensas, cómo decides y cómo movilizas a tu equipo frente a situaciones reales del día a día.",
    cases: [
      {
        caseNumber: 1,
        title: "Presión en el punto de venta",
        situation: "Es sábado. Hay alta afluencia, tienes una persona incapacitada y otra acaba de informarte que debe retirarse por una situación personal.\n\nEl equipo comienza a sentirse desbordado.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Tomas todas las tareas posibles para que el equipo pueda concentrarse en vender." },
          { letter: "B", text: "Reorganizas rápidamente las prioridades, distribuyes responsabilidades y buscas alternativas para atender la situación." },
          { letter: "C", text: "Les pides que trabajen más rápido porque el día es importante para el resultado." },
          { letter: "D", text: "Esperas instrucciones del jefe de zona antes de tomar cualquier decisión." }
        ],
        reflection: "Cuando estás bajo presión, ¿tu equipo encuentra en ti calma o más presión?",
        behavior: "Resuelve desafíos con determinación y creatividad."
      },
      {
        caseNumber: 2,
        title: "El equipo que dejó de hablar",
        situation: "Notas que dos asesoras tienen un conflicto. Ya no se ayudan entre ellas y comienzan a aparecer comentarios entre el resto del equipo.\n\nLas ventas todavía no se han afectado, pero el ambiente sí.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Les dices que deben dejar sus problemas personales fuera de la tienda." },
          { letter: "B", text: "Hablas individualmente con ellas y luego generas un espacio seguro para construir acuerdos." },
          { letter: "C", text: "Cambias sus horarios para que trabajen menos juntas." },
          { letter: "D", text: "Esperas a que el problema desaparezca solo." }
        ],
        reflection: "¿Qué haces para construir un equipo donde las personas puedan expresar sus diferencias sin perder la confianza?",
        behavior: "Genera un ambiente seguro y de confianza al interior de su equipo."
      },
      {
        caseNumber: 3,
        title: "El cliente es primero",
        situation: "Un cliente llega buscando un producto específico. La asesora identifica que otro producto, de menor precio, responde mucho mejor a su necesidad.\n\nLa tienda necesita aumentar el ticket promedio.",
        question: "¿Qué haces como líder?",
        options: [
          { letter: "A", text: "Le pides que intente vender primero el producto de mayor valor." },
          { letter: "B", text: "Respaldas la recomendación adecuada para la necesidad de la clienta." },
          { letter: "C", text: "Le dices que ofrezca ambos productos y que la clienta decida." },
          { letter: "D", text: "No intervienes porque la venta es responsabilidad de la asesora." }
        ],
        reflection: "¿Qué significa realmente poner al cliente en el centro cuando existen presiones por resultados?",
        behavior: "Entrega valor en cada acción comprendiendo que el cliente es el centro de la estrategia."
      }
    ],
    finalReflection: "Durante esta semana tomaste decisiones frente a situaciones relacionadas con personas, clientes, resultados, presión, conversaciones y cambios.\n\nAhora detente un momento y piensa en tu propio liderazgo: ¿qué comportamiento tuyo está generando hoy un impacto positivo en tu equipo y qué comportamiento necesitas transformar para acercarte cada vez más al liderazgo que queremos vivir en Medipiel?\n\nNo se trata de encontrar un liderazgo perfecto. Se trata de reconocer nuestro impacto, aprender de nuestras decisiones y elegir conscientemente qué queremos hacer diferente. ¿Qué vas a mantener?"
  }
];

// =========================================================================
// 2. MULTI-PARTICIPANT STATE & LOCALSTORAGE
// =========================================================================
const ACTIVE_SESSION_KEY = "medipiel_desafio_liderazgo_v1";
const PARTICIPANTS_REGISTRY_KEY = "medipiel_participants_registry";

const state = {
  currentView: "welcome", // welcome | map | case | reflection | completed
  participantId: null,
  fullName: "",
  startedAt: null,
  activeDay: 1,
  activeCaseIndex: 0, // 0, 1, 2
  unlockedDay: 1, // 1 to 5
  completedDays: [], // [1, 2, ...]
  answers: {}, // { "d1_c1": "B", ... }
  reflections: {}, // { "1": "Texto...", ... }
};

let cloudSyncTimeout = null;

function updateCloudSyncUI(status, message) {
  const pill = document.getElementById("header-cloud-status");
  if (!pill) return;

  if (status === "syncing") {
    pill.className = "header-cloud-pill syncing";
    pill.innerHTML = `<span class="cloud-status-icon">🔄</span><span class="cloud-status-text">${message || "Guardando..."}</span>`;
  } else if (status === "synced") {
    pill.className = "header-cloud-pill synced";
    pill.innerHTML = `<span class="cloud-status-icon">☁️✓</span><span class="cloud-status-text">${message || "En la nube"}</span>`;
  } else {
    pill.className = "header-cloud-pill local-only";
    pill.innerHTML = `<span class="cloud-status-icon">💾</span><span class="cloud-status-text">${message || "Guardado"}</span>`;
  }
}

function scheduleCloudSync(participantData, immediate = false) {
  if (!window.GOOGLE_SHEETS_CONFIG || !window.GOOGLE_SHEETS_CONFIG.isConfigured()) {
    updateCloudSyncUI("local", "Guardado");
    return;
  }

  if (!participantData || !participantData.fullName) return;

  if (cloudSyncTimeout) {
    clearTimeout(cloudSyncTimeout);
    cloudSyncTimeout = null;
  }

  if (immediate) {
    performCloudSync(participantData);
  } else {
    updateCloudSyncUI("syncing", "Guardando...");
    cloudSyncTimeout = setTimeout(() => {
      performCloudSync(participantData);
    }, 1200);
  }
}

async function performCloudSync(participantData) {
  if (!window.GOOGLE_SHEETS_CONFIG || !window.GOOGLE_SHEETS_CONFIG.isConfigured()) return;
  updateCloudSyncUI("syncing", "Guardando...");
  try {
    const res = await window.GOOGLE_SHEETS_CONFIG.syncParticipant(participantData);
    if (res && res.success) {
      updateCloudSyncUI("synced", "En la nube");
    } else {
      updateCloudSyncUI("local", "Guardado");
    }
  } catch (err) {
    console.warn("Aviso: Sincronización en segundo plano con Google Sheets:", err);
    updateCloudSyncUI("local", "Guardado");
  }
}

function saveState(immediateSync = false) {
  try {
    const participantData = {
      id: state.participantId,
      fullName: state.fullName,
      startedAt: state.startedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      activeDay: state.activeDay,
      activeCaseIndex: state.activeCaseIndex,
      unlockedDay: state.unlockedDay,
      completedDays: state.completedDays,
      answers: state.answers,
      reflections: state.reflections
    };

    // Save active session
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(participantData));

    // Synchronize into participants registry
    if (state.fullName && state.participantId) {
      let registry = [];
      const rawReg = localStorage.getItem(PARTICIPANTS_REGISTRY_KEY);
      if (rawReg) {
        registry = JSON.parse(rawReg);
      }

      const idx = registry.findIndex(p => p.id === state.participantId || p.fullName.toLowerCase() === state.fullName.toLowerCase());
      if (idx >= 0) {
        registry[idx] = { ...registry[idx], ...participantData };
      } else {
        registry.push(participantData);
      }

      localStorage.setItem(PARTICIPANTS_REGISTRY_KEY, JSON.stringify(registry));

      // Sincronizar con Google Sheets en la nube
      scheduleCloudSync(participantData, immediateSync);
    }
  } catch (e) {
    console.error("Error guardando progreso:", e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      state.participantId = data.id || null;
      state.fullName = data.fullName || "";
      state.startedAt = data.startedAt || null;
      state.activeDay = data.activeDay || 1;
      state.activeCaseIndex = typeof data.activeCaseIndex === "number" ? data.activeCaseIndex : 0;
      state.unlockedDay = data.unlockedDay || 1;
      state.completedDays = Array.isArray(data.completedDays) ? data.completedDays : [];
      state.answers = data.answers || {};
      state.reflections = data.reflections || {};
    }
  } catch (e) {
    console.error("Error cargando sesión activa:", e);
  }
}

function resetCurrentParticipantProgress() {
  if (state.participantId) {
    // Reset active progress
    state.activeDay = 1;
    state.activeCaseIndex = 0;
    state.unlockedDay = 1;
    state.completedDays = [];
    state.answers = {};
    state.reflections = {};
    saveState();
  } else {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
    state.fullName = "";
  }
  updateHeaderProgress();
  navigateToView("map");
}

function switchUserSession() {
  localStorage.removeItem(ACTIVE_SESSION_KEY);
  state.participantId = null;
  state.fullName = "";
  state.startedAt = null;
  state.activeDay = 1;
  state.activeCaseIndex = 0;
  state.unlockedDay = 1;
  state.completedDays = [];
  state.answers = {};
  state.reflections = {};
  navigateToView("welcome");
}

// =========================================================================
// 3. DOM ELEMENTS
// =========================================================================
const dom = {
  // Header
  mainHeader: document.getElementById("main-header"),
  headerUserBadge: document.getElementById("header-user-badge"),
  headerUserName: document.getElementById("header-user-name"),
  headerDayLabel: document.getElementById("header-day-label"),
  headerProgressPercent: document.getElementById("header-progress-percent"),
  headerProgressFill: document.getElementById("header-progress-fill"),
  btnBackToMap: document.getElementById("btn-back-to-map"),

  // Welcome Screen
  welcomeScreen: document.getElementById("welcome-screen"),
  userFullnameInput: document.getElementById("user-fullname-input"),
  userNameError: document.getElementById("user-name-error"),
  activeUserBanner: document.getElementById("active-user-banner"),
  activeUserDisplayName: document.getElementById("active-user-display-name"),
  btnChangeUser: document.getElementById("btn-change-user"),
  btnStartChallenge: document.getElementById("btn-start-challenge"),
  btnStartChallengeText: document.getElementById("btn-start-challenge-text"),

  // Map Screen
  mapScreen: document.getElementById("map-screen"),
  mapUserGreeting: document.getElementById("map-user-greeting"),
  journeyContainer: document.getElementById("journey-days-container"),
  mapProgressFill: document.getElementById("map-progress-fill"),
  mapProgressText: document.getElementById("map-progress-text"),
  mapBadgeStatus: document.getElementById("map-badge-status"),
  btnOpenSummary: document.getElementById("btn-open-summary"),
  btnRequestReset: document.getElementById("btn-request-reset"),
  btnFooterReset: document.getElementById("btn-footer-reset"),
  btnOpenAdminLogin: document.getElementById("btn-open-admin-login"),

  // Case Screen
  caseScreen: document.getElementById("case-screen"),
  caseDayTag: document.getElementById("case-day-tag"),
  caseStepDots: document.getElementById("case-step-dots"),
  caseStepLabel: document.getElementById("case-step-label"),
  caseNumberBadge: document.getElementById("case-number-badge"),
  caseTitle: document.getElementById("case-title"),
  caseSituationText: document.getElementById("case-situation-text"),
  caseOptionsList: document.getElementById("case-options-list"),
  caseReflectionSection: document.getElementById("case-reflection-section"),
  caseReflectionQuestion: document.getElementById("case-reflection-question"),
  caseBehaviorText: document.getElementById("case-behavior-text"),
  btnNextCaseStep: document.getElementById("btn-next-case-step"),
  btnNextCaseText: document.getElementById("btn-next-case-text"),

  // Daily Reflection
  reflectionScreen: document.getElementById("reflection-screen"),
  dayReflectionTitle: document.getElementById("day-reflection-title"),
  dayReflectionPromptText: document.getElementById("day-reflection-prompt-text"),
  dayReflectionTextarea: document.getElementById("day-reflection-textarea"),
  charCounter: document.getElementById("char-counter"),
  btnCompleteDay: document.getElementById("btn-complete-day"),
  btnCompleteDayText: document.getElementById("btn-complete-day-text"),

  // Completed Screen
  completedScreen: document.getElementById("completed-screen"),
  completedParticipantSubtitle: document.getElementById("completed-participant-subtitle"),
  btnViewAllReflections: document.getElementById("btn-view-all-reflections"),
  btnReturnMapFinal: document.getElementById("btn-return-map-final"),

  // Modals
  celebrationModal: document.getElementById("celebration-modal"),
  celebrationTitle: document.getElementById("celebration-title"),
  celebrationSubtitle: document.getElementById("celebration-subtitle"),
  btnCelebrationContinue: document.getElementById("btn-celebration-continue"),
  btnCelebrationContinueText: document.getElementById("btn-celebration-continue-text"),
  btnCelebrationMap: document.getElementById("btn-celebration-map"),

  summaryModal: document.getElementById("summary-modal"),
  summaryParticipantName: document.getElementById("summary-participant-name"),
  summaryModalContent: document.getElementById("summary-modal-content"),
  btnCloseSummary: document.getElementById("btn-close-summary"),
  btnCloseSummaryFooter: document.getElementById("btn-close-summary-footer"),
  btnPrintSummary: document.getElementById("btn-print-summary"),

  resetModal: document.getElementById("reset-modal"),
  btnConfirmReset: document.getElementById("btn-confirm-reset"),
  btnCancelReset: document.getElementById("btn-cancel-reset"),

  // Admin Login Modal
  btnWelcomeAdmin: document.getElementById("btn-welcome-admin"),
  btnOpenAdminLogin: document.getElementById("btn-open-admin-login"),
  adminLoginModal: document.getElementById("admin-login-modal"),
  adminLoginForm: document.getElementById("admin-login-form"),
  adminUsernameInput: document.getElementById("admin-username-input"),
  adminPasswordInput: document.getElementById("admin-password-input"),
  adminLoginError: document.getElementById("admin-login-error"),
  btnCloseAdminLogin: document.getElementById("btn-close-admin-login")
};

// =========================================================================
// 4. NAVIGATION & VIEWS
function handleHeaderBackClick() {
  if (state.currentView === "map") {
    navigateToView("welcome");
  } else {
    navigateToView("map");
  }
}

function updateHeaderBackButton(viewName) {
  if (!dom.btnBackToMap) return;
  const textSpan = dom.btnBackToMap.querySelector(".btn-back-text");
  if (viewName === "map") {
    if (textSpan) textSpan.textContent = "Inicio";
    dom.btnBackToMap.setAttribute("title", "Volver a la portada de inicio");
    dom.btnBackToMap.setAttribute("aria-label", "Volver a la portada de inicio");
  } else {
    if (textSpan) textSpan.textContent = "Mapa";
    dom.btnBackToMap.setAttribute("title", "Volver al mapa del desafío");
    dom.btnBackToMap.setAttribute("aria-label", "Volver al mapa");
  }
}

function navigateToView(viewName) {
  state.currentView = viewName;

  document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));

  if (viewName === "welcome") {
    dom.mainHeader.classList.add("hidden");
  } else {
    dom.mainHeader.classList.remove("hidden");
  }

  updateHeaderProgress();
  updateHeaderBackButton(viewName);

  if (viewName === "welcome") {
    dom.welcomeScreen.classList.add("active");
    renderWelcomeScreen();
  } else if (viewName === "map") {
    dom.mapScreen.classList.add("active");
    renderMap();
  } else if (viewName === "case") {
    dom.caseScreen.classList.add("active");
    renderCurrentCase();
  } else if (viewName === "reflection") {
    dom.reflectionScreen.classList.add("active");
    renderDailyReflection();
  } else if (viewName === "completed") {
    dom.completedScreen.classList.add("active");
    if (dom.completedParticipantSubtitle) {
      dom.completedParticipantSubtitle.textContent = `¡Felicitaciones, ${state.fullName}! Completaste los 5 días del Desafío de liderazgo.`;
    }
    triggerConfetti(70);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWelcomeScreen() {
  const card = document.getElementById("mockup-interactive-card");
  if (card) {
    card.classList.remove("card-exit-animation");
  }
  initWelcomeInteractiveEffects();

  if (state.fullName) {
    dom.userFullnameInput.value = state.fullName;
    dom.activeUserDisplayName.textContent = state.fullName;
    dom.activeUserBanner.classList.remove("hidden");
    dom.btnStartChallengeText.textContent = "CONTINUAR DESAFÍO";
  } else {
    dom.userFullnameInput.value = "";
    dom.activeUserBanner.classList.add("hidden");
    dom.btnStartChallengeText.textContent = "COMENZAR DESAFÍO";
  }
  dom.userNameError.classList.add("hidden");
}

function updateHeaderProgress() {
  const totalDays = 5;
  const completedCount = state.completedDays.length;
  const percent = Math.round((completedCount / totalDays) * 100);

  if (state.fullName) {
    dom.headerUserName.textContent = state.fullName;
    dom.headerUserBadge.classList.remove("hidden");
  } else {
    dom.headerUserBadge.classList.add("hidden");
  }

  dom.headerDayLabel.textContent = `Día ${state.activeDay} de 5`;
  dom.headerProgressPercent.textContent = `${percent}%`;
  dom.headerProgressFill.style.width = `${percent}%`;

  if (window.GOOGLE_SHEETS_CONFIG && window.GOOGLE_SHEETS_CONFIG.isConfigured()) {
    updateCloudSyncUI("synced", "En la nube");
  } else {
    updateCloudSyncUI("local", "Guardado");
  }
}

// =========================================================================
function findSavedParticipantByName(name) {
  if (!name || typeof name !== "string") return null;
  const clean = name.trim().toLowerCase();
  if (clean.length < 3) return null;

  try {
    const rawReg = localStorage.getItem(PARTICIPANTS_REGISTRY_KEY);
    if (rawReg) {
      const registry = JSON.parse(rawReg);
      const found = registry.find(p => p.fullName && p.fullName.trim().toLowerCase() === clean);
      if (found) return found;
    }
  } catch (e) {
    console.error("Error buscando en registro de participantes:", e);
  }

  return null;
}

function restoreParticipantState(savedData) {
  state.participantId = savedData.id || `part_${Date.now()}`;
  state.fullName = savedData.fullName;
  state.startedAt = savedData.startedAt || new Date().toISOString();
  state.completedDays = Array.isArray(savedData.completedDays) ? savedData.completedDays : [];
  state.unlockedDay = savedData.unlockedDay || (state.completedDays.length > 0 ? Math.min(5, Math.max(...state.completedDays) + 1) : 1);
  state.activeDay = state.unlockedDay;
  state.activeCaseIndex = 0;
  state.answers = savedData.answers || {};
  state.reflections = savedData.reflections || {};
}

function handleStartChallengeClick() {
  let enteredName = dom.userFullnameInput.value.trim();

  // If input is empty but active participant exists, use it
  if (!enteredName && state.fullName) {
    enteredName = state.fullName;
    dom.userFullnameInput.value = state.fullName;
  }

  if (enteredName.length < 3) {
    dom.userNameError.classList.remove("hidden");
    dom.userFullnameInput.focus();
    dom.userFullnameInput.style.borderColor = "var(--danger)";
    const inputCard = document.querySelector(".mockup-user-input-card");
    if (inputCard) {
      inputCard.classList.add("animate-shake");
      setTimeout(() => inputCard.classList.remove("animate-shake"), 400);
    }
    return;
  }

  dom.userNameError.classList.add("hidden");
  dom.userFullnameInput.style.borderColor = "var(--gray-border)";

  // Check if participant already exists in the saved registry
  const existingRecord = findSavedParticipantByName(enteredName);
  if (existingRecord) {
    // Restore their saved progress!
    restoreParticipantState(existingRecord);
    saveState(true);
  } else if (!state.participantId || state.fullName.toLowerCase() !== enteredName.toLowerCase()) {
    // Brand new participant
    state.participantId = `part_${Date.now()}`;
    state.fullName = enteredName;
    state.startedAt = new Date().toISOString();
    state.activeDay = 1;
    state.activeCaseIndex = 0;
    state.unlockedDay = 1;
    state.completedDays = [];
    state.answers = {};
    state.reflections = {};
    saveState(true);
  }

  // Smooth exit transition
  const card = document.getElementById("mockup-interactive-card");
  if (card) {
    card.classList.add("card-exit-animation");
    setTimeout(() => {
      card.classList.remove("card-exit-animation");
      navigateToView("map");
    }, 280);
  } else {
    navigateToView("map");
  }
}

// =========================================================================
// 6. MAP SCREEN
// =========================================================================
function renderMap() {
  const totalDays = 5;
  const completedCount = state.completedDays.length;
  const percent = Math.round((completedCount / totalDays) * 100);

  dom.mapUserGreeting.textContent = state.fullName ? `¡Hola, ${state.fullName}!` : "¡Hola, Líder!";
  dom.mapProgressFill.style.width = `${percent}%`;
  dom.mapProgressText.textContent = `${completedCount} de ${totalDays} días completados (${percent}%)`;

  if (completedCount === totalDays) {
    dom.mapBadgeStatus.textContent = "Completado ✓";
    dom.mapBadgeStatus.className = "status-pill status-finished";
  } else {
    dom.mapBadgeStatus.textContent = "En curso";
    dom.mapBadgeStatus.className = "status-pill status-in-progress";
  }

  dom.journeyContainer.innerHTML = "";

  challengeData.forEach((dayInfo, index) => {
    const isCompleted = state.completedDays.includes(dayInfo.day);
    const isUnlocked = dayInfo.day <= state.unlockedDay;

    const node = document.createElement("div");
    node.className = "journey-node";
    node.style.setProperty("--node-idx", index);
    node.setAttribute("data-day", dayInfo.day);

    let stateClass = "";
    let circleContent = "";
    let badgeHtml = "";
    let actionBtnHtml = "";

    if (isCompleted) {
      stateClass = "node-completed";
      circleContent = "✓";
      badgeHtml = `<span class="node-badge badge-completed">Completado ✓</span>`;
      actionBtnHtml = `<span class="btn btn-secondary btn-icon" style="padding: 6px 14px; font-size: 0.85rem;">Repasar</span>`;
    } else if (isUnlocked) {
      stateClass = "node-available";
      circleContent = `${dayInfo.day}`;
      badgeHtml = `<span class="node-badge badge-active"><span class="badge-dot"></span>¡Disponible!</span>`;
      actionBtnHtml = `<span class="btn btn-primary btn-icon btn-pulse-ready" style="padding: 6px 16px; font-size: 0.85rem;">Comenzar</span>`;
    } else {
      stateClass = "node-locked";
      circleContent = `
        <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      `;
      badgeHtml = `<span class="node-badge badge-locked">Bloqueado (Completa el Día ${dayInfo.day - 1})</span>`;
      actionBtnHtml = ``;
    }

    node.classList.add(stateClass);

    node.innerHTML = `
      <div class="node-circle">${circleContent}</div>
      <div class="node-content">
        <div class="node-tag-row">
          <span class="node-day-title">${dayInfo.title}</span>
          ${badgeHtml}
        </div>
        <p class="node-desc">${dayInfo.subtitle}</p>
      </div>
      <div class="node-action">
        ${actionBtnHtml}
      </div>
    `;

    if (isUnlocked) {
      node.addEventListener("click", () => startDay(dayInfo.day));
    } else {
      node.addEventListener("click", () => showLockedFeedback(dayInfo.day));
    }

    dom.journeyContainer.appendChild(node);
  });
}

function showLockedFeedback(dayNum) {
  const reqDay = dayNum - 1;
  alert(`El Día ${dayNum} se encuentra bloqueado.\n\nDebes responder los 3 casos y escribir la reflexión del Día ${reqDay} para desbloquearlo.`);
}

function startDay(dayNum) {
  state.activeDay = dayNum;
  let firstUnanswered = 0;
  for (let i = 0; i < 3; i++) {
    const key = `d${dayNum}_c${i + 1}`;
    if (!state.answers[key]) {
      firstUnanswered = i;
      break;
    }
  }
  state.activeCaseIndex = firstUnanswered;
  saveState();
  navigateToView("case");
}

// =========================================================================
// 7. STEP-BY-STEP CASE LOGIC
// =========================================================================
function renderCurrentCase() {
  const dayData = challengeData.find(d => d.day === state.activeDay);
  if (!dayData) return;

  const currentCase = dayData.cases[state.activeCaseIndex];
  if (!currentCase) return;

  // Trigger smooth entrance animation
  if (dom.caseContainer) {
    dom.caseContainer.classList.remove("case-animate-out-left");
    dom.caseContainer.classList.remove("case-animate-in-right");
    void dom.caseContainer.offsetWidth; // force reflow
    dom.caseContainer.classList.add("case-animate-in-right");
  }

  dom.caseDayTag.textContent = `DÍA ${state.activeDay}`;
  dom.caseStepLabel.textContent = `Caso ${state.activeCaseIndex + 1} de 3`;
  
  renderStepDots(state.activeCaseIndex);

  dom.caseNumberBadge.textContent = `Caso ${currentCase.caseNumber}`;
  dom.caseTitle.textContent = currentCase.title;
  dom.caseSituationText.textContent = currentCase.situation;

  const answerKey = `d${state.activeDay}_c${currentCase.caseNumber}`;
  const selectedLetter = state.answers[answerKey] || null;

  dom.caseOptionsList.innerHTML = "";
  if (selectedLetter) {
    dom.caseOptionsList.classList.add("has-selection");
  } else {
    dom.caseOptionsList.classList.remove("has-selection");
  }

  currentCase.options.forEach(opt => {
    const optDiv = document.createElement("div");
    optDiv.className = "option-item";
    optDiv.setAttribute("role", "radio");
    optDiv.setAttribute("aria-checked", selectedLetter === opt.letter ? "true" : "false");
    optDiv.setAttribute("tabindex", "0");
    if (selectedLetter === opt.letter) {
      optDiv.classList.add("selected");
    }

    optDiv.innerHTML = `
      <div class="option-letter">${opt.letter}</div>
      <div class="option-text">${opt.text}</div>
    `;

    const handleSelect = () => selectOption(currentCase.caseNumber, opt.letter);

    optDiv.addEventListener("click", handleSelect);
    optDiv.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect();
      }
    });

    dom.caseOptionsList.appendChild(optDiv);
  });

  dom.caseReflectionQuestion.textContent = currentCase.reflection;
  dom.caseBehaviorText.textContent = currentCase.behavior;

  if (selectedLetter) {
    dom.caseReflectionSection.classList.remove("hidden");
    dom.btnNextCaseStep.removeAttribute("disabled");
    dom.btnNextCaseStep.classList.add("btn-pulse-ready");
    updateNextButtonText();
  } else {
    dom.caseReflectionSection.classList.add("hidden");
    dom.btnNextCaseStep.setAttribute("disabled", "true");
    dom.btnNextCaseStep.classList.remove("btn-pulse-ready");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStepDots(activeIndex) {
  const c1 = isCaseAnswered(1);
  const c2 = isCaseAnswered(2);
  const c3 = isCaseAnswered(3);

  dom.caseStepDots.innerHTML = `
    <div class="step-dot ${activeIndex === 0 ? 'active' : (c1 ? 'completed' : '')}">${c1 && activeIndex !== 0 ? '✓' : '1'}</div>
    <div class="step-line ${c1 ? 'completed' : ''}"></div>
    <div class="step-dot ${activeIndex === 1 ? 'active' : (c2 ? 'completed' : '')}">${c2 && activeIndex !== 1 ? '✓' : '2'}</div>
    <div class="step-line ${c2 ? 'completed' : ''}"></div>
    <div class="step-dot ${activeIndex === 2 ? 'active' : (c3 ? 'completed' : '')}">${c3 && activeIndex !== 2 ? '✓' : '3'}</div>
  `;
}

function isCaseAnswered(caseNum) {
  const key = `d${state.activeDay}_c${caseNum}`;
  return !!state.answers[key];
}

function selectOption(caseNumber, letter) {
  const answerKey = `d${state.activeDay}_c${caseNumber}`;
  state.answers[answerKey] = letter;
  saveState();

  dom.caseOptionsList.classList.add("has-selection");

  const options = dom.caseOptionsList.querySelectorAll(".option-item");
  options.forEach(opt => {
    const optLetter = opt.querySelector(".option-letter").textContent.trim();
    if (optLetter === letter) {
      opt.classList.add("selected");
      opt.setAttribute("aria-checked", "true");
    } else {
      opt.classList.remove("selected");
      opt.setAttribute("aria-checked", "false");
    }
  });

  renderStepDots(state.activeCaseIndex);

  dom.caseReflectionSection.classList.remove("hidden");
  dom.btnNextCaseStep.removeAttribute("disabled");
  dom.btnNextCaseStep.classList.add("btn-pulse-ready");
  updateNextButtonText();

  setTimeout(() => {
    dom.caseReflectionSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 120);
}

function updateNextButtonText() {
  if (state.activeCaseIndex === 0) {
    dom.btnNextCaseText.textContent = "Continuar al Caso 2";
  } else if (state.activeCaseIndex === 1) {
    dom.btnNextCaseText.textContent = "Continuar al Caso 3";
  } else {
    dom.btnNextCaseText.textContent = "Ver reflexión del día";
  }
}

function handleNextCaseStep() {
  if (dom.caseContainer) {
    dom.caseContainer.classList.add("case-animate-out-left");
  }

  setTimeout(() => {
    if (state.activeCaseIndex < 2) {
      state.activeCaseIndex++;
      saveState();
      renderCurrentCase();
    } else {
      navigateToView("reflection");
    }
  }, 220);
}

// =========================================================================
// 8. DAILY FINAL REFLECTION
// =========================================================================
function renderDailyReflection() {
  const dayData = challengeData.find(d => d.day === state.activeDay);
  if (!dayData) return;

  dom.dayReflectionTitle.textContent = `Reflexión Día ${state.activeDay}`;
  dom.dayReflectionPromptText.textContent = dayData.finalReflection;
  dom.btnCompleteDayText.textContent = `Completar Día ${state.activeDay}`;

  const savedReflection = state.reflections[state.activeDay] || "";
  dom.dayReflectionTextarea.value = savedReflection;
  dom.charCounter.textContent = `${savedReflection.length} caracteres`;

  validateDayCompletion();
}

function validateDayCompletion() {
  const text = dom.dayReflectionTextarea.value.trim();
  const casesAnswered = [1, 2, 3].every(c => !!state.answers[`d${state.activeDay}_c${c}`]);

  if (casesAnswered && text.length > 5) {
    dom.btnCompleteDay.removeAttribute("disabled");
  } else {
    dom.btnCompleteDay.setAttribute("disabled", "true");
  }
}

function handleCompleteDay() {
  const text = dom.dayReflectionTextarea.value.trim();
  if (!text) return;

  state.reflections[state.activeDay] = text;

  if (!state.completedDays.includes(state.activeDay)) {
    state.completedDays.push(state.activeDay);
    state.completedDays.sort((a, b) => a - b);
  }

  const nextDay = state.activeDay + 1;
  if (nextDay <= 5 && state.unlockedDay < nextDay) {
    state.unlockedDay = nextDay;
  }

  saveState(true);
  updateHeaderProgress();
  showCelebrationModal(state.activeDay);
}

// =========================================================================
// 9. CELEBRATION MODAL & CONFETTI
// =========================================================================
function showCelebrationModal(completedDay) {
  triggerConfetti(70);

  if (completedDay === 5) {
    dom.celebrationTitle.textContent = `¡Felicitaciones, ${state.fullName}!`;
    dom.celebrationSubtitle.textContent = "¡Has completado exitosamente todo el Desafío de Liderazgo de Medipiel!";
    dom.btnCelebrationContinueText.textContent = "Ver Pantalla Final";
  } else {
    dom.celebrationTitle.textContent = `¡Excelente! Has completado el Día ${completedDay}`;
    dom.celebrationSubtitle.textContent = `Has desbloqueado el Día ${completedDay + 1}.`;
    dom.btnCelebrationContinueText.textContent = `Continuar al Día ${completedDay + 1}`;
  }

  dom.celebrationModal.classList.remove("hidden");
}

function handleCelebrationContinue() {
  dom.celebrationModal.classList.add("hidden");

  if (state.activeDay === 5) {
    navigateToView("completed");
  } else {
    state.activeDay = state.activeDay + 1;
    state.activeCaseIndex = 0;
    saveState();
    navigateToView("case");
  }
}

function triggerConfetti(particleCount = 50) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#01606D", "#2DCCD3", "#D5F8F8", "#037C8D", "#F6E05E", "#FFFFFF"];
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2 + (Math.random() - 0.5) * 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 12,
      speedY: Math.random() * -14 - 4,
      gravity: 0.35,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let animationId;
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.speedY += p.gravity;
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.008;

      if (p.opacity > 0 && p.y < canvas.height + 50) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    });

    if (alive) {
      animationId = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationId);
    }
  }

  updateConfetti();
}

// =========================================================================
// 10. SUMMARY MODAL
// =========================================================================
function openSummaryModal() {
  const container = dom.summaryModalContent;
  container.innerHTML = "";

  const todayFormatted = new Date().toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });
  dom.summaryParticipantName.textContent = state.fullName ? `Participante: ${state.fullName} · ${todayFormatted}` : `Fecha: ${todayFormatted}`;

  let hasAnyData = false;

  challengeData.forEach(day => {
    const isDayCompleted = state.completedDays.includes(day.day);
    const dayReflection = state.reflections[day.day] || "";

    const dayBlock = document.createElement("div");
    dayBlock.className = "summary-day-block";

    let casesHtml = "";
    day.cases.forEach(c => {
      const answerKey = `d${day.day}_c${c.caseNumber}`;
      const selectedLetter = state.answers[answerKey];
      
      let answerText = "<em>Sin respuesta aún</em>";
      if (selectedLetter) {
        hasAnyData = true;
        const opt = c.options.find(o => o.letter === selectedLetter);
        answerText = `<strong>Opción ${selectedLetter}:</strong> ${opt ? opt.text : ''}`;
      }

      casesHtml += `
        <div class="summary-case-item">
          <div class="summary-case-title">Caso ${c.caseNumber}: ${c.title}</div>
          <div class="summary-case-answer">${answerText}</div>
        </div>
      `;
    });

    let reflectionHtml = "";
    if (dayReflection) {
      hasAnyData = true;
      reflectionHtml = `
        <div class="summary-reflection-box">
          <h5>💭 Reflexión escrita:</h5>
          <div class="summary-reflection-text">“${escapeHtml(dayReflection)}”</div>
        </div>
      `;
    } else {
      reflectionHtml = `
        <div class="summary-reflection-box" style="background: #F7FAFC; border: 1px dashed #CBD5E0;">
          <h5 style="color: #718096;">💭 Reflexión:</h5>
          <div class="summary-reflection-text" style="color: #A0AEC0;">Pendiente por responder</div>
        </div>
      `;
    }

    dayBlock.innerHTML = `
      <div class="summary-day-header">
        <h4>${day.title} — ${day.subtitle}</h4>
        <span class="status-pill ${isDayCompleted ? 'status-finished' : 'status-in-progress'}">
          ${isDayCompleted ? 'Completado ✓' : 'En progreso'}
        </span>
      </div>
      <div class="summary-cases-list">
        ${casesHtml}
      </div>
      ${reflectionHtml}
    `;

    container.appendChild(dayBlock);
  });

  if (!hasAnyData) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--gray-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 8px;">Aún no has registrado respuestas o reflexiones.</p>
        <p style="font-size: 0.95rem;">Comienza tu recorrido en el Día 1 para ver aquí tu progreso consolidado.</p>
      </div>
    `;
  }

  dom.summaryModal.classList.remove("hidden");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

// =========================================================================
// 11. ADMIN LOGIN MODAL HANDLER
// =========================================================================
const ADMIN_CREDENTIALS_LIST = [
  { user: "saul.munera", pass: "Medipiel2026*" },
  { user: "saul", pass: "Medipiel2026*" },
  { user: "admin", pass: "Medipiel2026*" },
  { user: "saul.munera", pass: "medipiel2026" },
  { user: "admin", pass: "medipiel2026" }
];

function handleAdminModalSubmit(e) {
  e.preventDefault();
  const user = dom.adminUsernameInput.value.trim().toLowerCase();
  const pass = dom.adminPasswordInput.value.trim();

  const match = ADMIN_CREDENTIALS_LIST.some(
    c => c.user.toLowerCase() === user && c.pass === pass
  );

  if (match) {
    sessionStorage.setItem("medipiel_admin_session_auth", "true");
    dom.adminLoginError.classList.add("hidden");
    dom.adminLoginModal.classList.add("hidden");
    window.location.href = "admin.html";
  } else {
    dom.adminLoginError.classList.remove("hidden");
  }
}

// =========================================================================
// 12. EVENT LISTENERS & INITIALIZATION
// =========================================================================
function initEventListeners() {
  // Start & Fullname
  dom.btnStartChallenge.addEventListener("click", handleStartChallengeClick);
  dom.userFullnameInput.addEventListener("input", () => {
    const val = dom.userFullnameInput.value.trim();
    if (val.length >= 3) {
      dom.userNameError.classList.add("hidden");
      dom.userFullnameInput.style.borderColor = "var(--gray-border)";

      const found = findSavedParticipantByName(val);
      if (found) {
        const daysCount = (found.completedDays || []).length;
        const nextDay = found.unlockedDay || (daysCount > 0 ? Math.min(5, Math.max(...found.completedDays) + 1) : 1);
        dom.btnStartChallengeText.textContent = daysCount >= 5 ? "VER DESAFÍO COMPLETADO" : `CONTINUAR DESAFÍO (DÍA ${nextDay})`;
      } else {
        dom.btnStartChallengeText.textContent = "COMENZAR DESAFÍO";
      }
    } else {
      dom.btnStartChallengeText.textContent = state.fullName ? "CONTINUAR DESAFÍO" : "COMENZAR DESAFÍO";
    }
  });
  dom.userFullnameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleStartChallengeClick();
    }
  });

  if (dom.btnChangeUser) {
    dom.btnChangeUser.addEventListener("click", switchUserSession);
  }

  // Navigation
  dom.btnBackToMap.addEventListener("click", handleHeaderBackClick);

  // Step-by-step case
  dom.btnNextCaseStep.addEventListener("click", handleNextCaseStep);

  // Daily Reflection
  dom.dayReflectionTextarea.addEventListener("input", (e) => {
    const val = e.target.value;
    dom.charCounter.textContent = `${val.length} caracteres`;
    state.reflections[state.activeDay] = val;
    saveState();
    validateDayCompletion();
  });

  dom.btnCompleteDay.addEventListener("click", handleCompleteDay);

  // Celebration Modal
  dom.btnCelebrationContinue.addEventListener("click", handleCelebrationContinue);
  dom.btnCelebrationMap.addEventListener("click", () => {
    dom.celebrationModal.classList.add("hidden");
    navigateToView("map");
  });

  // Summary Modal
  dom.btnOpenSummary.addEventListener("click", openSummaryModal);
  dom.btnViewAllReflections.addEventListener("click", openSummaryModal);
  dom.btnCloseSummary.addEventListener("click", () => dom.summaryModal.classList.add("hidden"));
  dom.btnCloseSummaryFooter.addEventListener("click", () => dom.summaryModal.classList.add("hidden"));
  dom.btnPrintSummary.addEventListener("click", () => window.print());

  // Final screen return
  dom.btnReturnMapFinal.addEventListener("click", () => navigateToView("map"));

  // Reset Progress Modal
  const openResetModal = () => dom.resetModal.classList.remove("hidden");
  dom.btnRequestReset.addEventListener("click", openResetModal);
  dom.btnFooterReset.addEventListener("click", openResetModal);

  dom.btnCancelReset.addEventListener("click", () => dom.resetModal.classList.add("hidden"));
  dom.btnConfirmReset.addEventListener("click", () => {
    dom.resetModal.classList.add("hidden");
    resetCurrentParticipantProgress();
  });

  // Admin Login Modal
  const openAdminLoginModal = () => {
    dom.adminUsernameInput.value = "";
    dom.adminPasswordInput.value = "";
    dom.adminLoginError.classList.add("hidden");
    dom.adminLoginModal.classList.remove("hidden");
    dom.adminUsernameInput.focus();
  };

  if (dom.btnOpenAdminLogin) {
    dom.btnOpenAdminLogin.addEventListener("click", openAdminLoginModal);
  }
  if (dom.btnWelcomeAdmin) {
    dom.btnWelcomeAdmin.addEventListener("click", openAdminLoginModal);
  }

  dom.btnCloseAdminLogin.addEventListener("click", () => {
    dom.adminLoginModal.classList.add("hidden");
  });

  dom.adminLoginForm.addEventListener("submit", handleAdminModalSubmit);

  // Close modals on clicking overlay backdrop
  [dom.celebrationModal, dom.summaryModal, dom.resetModal, dom.adminLoginModal].forEach(modal => {
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      });
    }
  });

  // Keyboard escape closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dom.celebrationModal.classList.add("hidden");
      dom.summaryModal.classList.add("hidden");
      dom.resetModal.classList.add("hidden");
      dom.adminLoginModal.classList.add("hidden");
    }
  });

  // Window resize for canvas
  window.addEventListener("resize", () => {
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
}

// =========================================================================
// 13. WELCOME SCREEN INTERACTIVE 3D TILT & AMBIENT SPARKLES
// =========================================================================
function initWelcomeInteractiveEffects() {
  // 1. Ambient Sparkle Particles
  const container = document.getElementById("welcome-particles");
  if (container && container.children.length === 0) {
    const particleCount = 18;
    for (let i = 0; i < particleCount; i++) {
      const dot = document.createElement("div");
      dot.className = "particle-dot";
      
      const size = Math.random() * 5 + 3; // 3px to 8px
      const left = Math.random() * 100; // 0 to 100%
      const top = Math.random() * 80 + 20; // 20% to 100%
      const duration = Math.random() * 6 + 6; // 6s to 12s
      const delay = Math.random() * 8; // 0s to 8s
      const driftX = (Math.random() - 0.5) * 50; // -25px to 25px
      const opacity = Math.random() * 0.4 + 0.35; // 0.35 to 0.75
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;
      dot.style.setProperty("--float-duration", `${duration}s`);
      dot.style.setProperty("--drift-x", `${driftX}px`);
      dot.style.setProperty("--particle-opacity", opacity);
      dot.style.animationDelay = `${delay}s`;
      
      container.appendChild(dot);
    }
  }

  // 2. 3D Card Tilt on Mousemove (Desktop only)
  const welcomeSection = document.getElementById("welcome-screen");
  const card = document.getElementById("mockup-interactive-card");
  
  if (welcomeSection && card && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let isHovering = false;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    let animFrame = null;

    function updateTilt() {
      if (!isHovering) {
        targetRotateX = 0;
        targetRotateY = 0;
      }
      
      currentRotateX += (targetRotateX - currentRotateX) * 0.12;
      currentRotateY += (targetRotateY - currentRotateY) * 0.12;
      
      card.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;

      if (Math.abs(targetRotateX - currentRotateX) > 0.01 || Math.abs(targetRotateY - currentRotateY) > 0.01 || isHovering) {
        animFrame = requestAnimationFrame(updateTilt);
      } else {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        animFrame = null;
      }
    }

    welcomeSection.addEventListener("mousemove", (e) => {
      isHovering = true;
      const rect = welcomeSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;
      
      targetRotateY = percentX * 4.0; // Max 4 deg on Y
      targetRotateX = -percentY * 3.5; // Max 3.5 deg on X
      
      if (!animFrame) {
        animFrame = requestAnimationFrame(updateTilt);
      }
    });

    welcomeSection.addEventListener("mouseleave", () => {
      isHovering = false;
      targetRotateX = 0;
      targetRotateY = 0;
      if (!animFrame) {
        animFrame = requestAnimationFrame(updateTilt);
      }
    });
  }
}

// Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initEventListeners();
  initWelcomeInteractiveEffects();
  navigateToView(state.fullName ? (state.currentView || "map") : "welcome");
});
