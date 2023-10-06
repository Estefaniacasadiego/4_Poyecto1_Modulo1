// Lista de talentos (ejemplo)
const talentList = document.getElementById('talent-list');

const talents = [
  {
    ciudad: 'Bogotá',
   disfruta: 'Paquete de vacaciones todo incluido en Bogotá, para una corta visita a Bogotá, Colombia. Obtendras una gran introducción de Colombia, nuestras costumbres, nuestra historia y conflicto armado, lo positivo y negativo de Bogotá y Colombia. Buscamos que tu visita sea una experiencia emocionante, algo fuera de lo convencional, de forma comoda y segura. Nosotros nos encargaremos de todo tu solo de disfrutar, conocer y divertirte.',
   clima: 'Frio',
    price: 390
  },
  {
    ciudad: 'Cartagena',
    disfruta: 'Se hará una caminata por el hermoso centro histórico colonial de Cartagena rodeado por una muralla hecha para proteger las principales zonas de la ciudad antigua de intentos de ataques de los galeones y barcos ingleses y Francés. Esta ciudad amuralla también fue construida como uno de los lugares y puertos mas estratégicos de la colonia española.  El cliente tendrá la oportunidad de tomar un recorrido caminando para visitar los principales atractivos arquitectónicos e históricos de la ciudad amurallada de Cartagena.',
   clima: 'Calido',
    price: 220
  },
  {
    ciudad: 'Medellin',
    disfruta: 'Completa introducción, visitando sitios turísticos y atractivos muy interesantes durante nuestro city tour en Medellin. Disfrutaras, aprenderás y te sorprenderás con la verdadera historia de Medellin. Desde la reciente y cruda historia de Medellin, sus transformaciones positivas e innovadoras y visitaras algunos iconicos lugares del personaje mas temido en Colombia en los 80s y 90s.',
   clima: 'Templado',
    price: 420
  },
   {
    ciudad: ' Zipaquirá y Guatavita',
   disfruta: 'Este tour es una gran combinación de dos de las más reconocidas y famosas atracciones fuera de Bogotá. Visita a la laguna de Guatavita rodeada de historia y leyendas indígenas, por ser un centro de ceremonias con piezas de oro. Visitaras la Catedral de sal mas grande del mundo.',
   clima: 'Frio',
    price: 190
  },
  {
    ciudad: 'Santa Marta',
    disfruta: '"La Perla del Caribe" recibió este apodo muy merecido por sus hermosas playas, su brisa refrescante y su mar único. En Santa Marta podrás caminar por las hermosas calles del centro histórico. Podrás comer los platos típicos que contienen pescado, banano verde o "guineo" y arroz con coco. Si visitas Santa Marta, recuerda aprovechar las noches para salir a comer o a tomar algo. La vida nocturna de la ciudad es única, y la brisa refrescará cada lugar al que entres. ',
   clima: 'Calido',
    price: 290
  },

];

  const talentTemplate = (talent) => {
    return `
      <ul class="talent-card">
        <h2>${talent.ciudad}</h2>
        <p>${talent.disfruta}</p>
        <p><strong>Clima:</strong> ${talent.clima}</p>
        <p><strong>Precio:</strong> USD $${talent.price.toFixed(2)}</p>
      </ul>
    `;
  };

  const renderTalents = (talentArray) => {
    talentList.innerHTML = '';
    talentArray.forEach((talent) => {
      const card = document.createElement('ul');
      card.classList.add('talent-card');
      card.innerHTML = talentTemplate(talent);
      talentList.appendChild(card);
    });
  };

// Evento para la búsqueda en tiempo real
const searchInput = document.getElementById('search_ed');

const filterTalents = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTalents = talents.filter((talent) => {
    return talent.ciudad.toLowerCase().includes(searchTerm); // Change 'name' to 'ciudad'
  });
  renderTalents(filteredTalents);
};

searchInput.addEventListener('input', filterTalents);

// Eventos para los filtros
const filterButtons = document.querySelectorAll('.filter-button_ed');

filterButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter;
    let filteredTalents;
    if (filter === 'Todos') {
      filteredTalents = talents;
    } else {
      filteredTalents = talents.filter((talent) => {
        return talent.clima === filter;
      });
    }
    renderTalents(filteredTalents);
  });
});




renderTalents(talents);