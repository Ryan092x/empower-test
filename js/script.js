var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  grabCursor: true,
  fade: true,
  pagination: {
    el: ".swp1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-slider1",
    prevEl: ".swiper-button-prev-slider1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var swiper4 = new Swiper(".coluna", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: "true",
  fade: true,
  speed:800,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: 'slide',
  allowTouchMove: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 2,
    },
    470: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 4,
    },
    980: {
      slidesPerView: 3,
    },
  }, 
});

var swiper3 = new Swiper(".eventos-cards", {
  slidesPerView: 1,
  grabCursor: true,
  fade: true,
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: ".swp2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-slider2",
    prevEl: ".swiper-button-prev-slider2",
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

function search() {
  let input = document.getElementById('searchbar').value.trim().toLowerCase();
  let cards = document.querySelectorAll('.card');
  let noResults = document.getElementById('no-results'); // Div para exibir quando não houver resultados

  let matchesCount = 0; // Contador para o número de cartões correspondentes
  cards.forEach(card => {
    let name = card.querySelector('.name').textContent.toLowerCase();
    let description = card.querySelector('.description').textContent.toLowerCase();
    let matches = name.includes(input) || description.includes(input);
    if (matches) {
      card.style.display = 'block';
      matchesCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (matchesCount === 0) {
    noResults.style.display = 'block'; // Exibe a mensagem de nenhum resultado encontrado
  } else {
    noResults.style.display = 'none'; // Esconde a mensagem se houver resultados
  }

  swiper1.update(); // Atualiza o Swiper
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('buscarButton').addEventListener('click', search);

  // Captura o evento "submit" do formulário
  document.querySelector('.buscar-palestrante').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (ou seja, enviar e atualizar a página)
    search(); // Chama a função de busca quando o formulário é enviado
  });
});

// Perguntas Frequentes

function togglePergunta(pergunta) {
  var perguntaAtual = pergunta.parentNode;
  var todasPerguntas = document.getElementsByClassName('pergunta');
  
  for (var i = 0; i < todasPerguntas.length; i++) {
    if (todasPerguntas[i] !== perguntaAtual) {
      todasPerguntas[i].classList.remove('active');
    }
  }

  perguntaAtual.classList.toggle('active');
}