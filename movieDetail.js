// movieDetail.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const movieKey = params.get('movie'); // e.g. "Fantastic 4"

  const movieData = {
  "Fantastic 4": {
    year: "2025",
    rating: "7.2/10",
    duration: "2h 10m",
    genres: "Action, SciFi, Superhero",
    description: "Marvels First Family faces a cosmic threat while learning to work together as a team.",
    whereToWatch: "Check major platforms like Disney+, Prime Video, and Apple TV depending on your region.",
    whatToKnow: "Part of the MCU-era Fantastic Four; expect lighter tone, team chemistry focus, and some setup for future Marvel stories.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/pAsmrKyMqaA" title="Fantastic 4 Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
    criticScore: "72%",
    audienceScore: "88%",
    consensus: "A fresh spin on Marvels First Family that works best when it leans into team chemistry.",
    cast: [
      { name: "Reed Actor", role: "Reed Richards" },
      { name: "Sue Actor", role: "Sue Storm" }
    ]
  },
  "Sinners": {
    year: "2025",
    rating: "7.8/10",
    duration: "1h 55m",
    genres: "Horror, Thriller, Mystery",
    description: "Twin brothers returning to their Mississippi hometown confront a deadly supernatural evil tied to their past.",
    whereToWatch: "Look for it on Max and common digital stores like Prime Video and Apple TV, availability may vary.",
    whatToKnow: "Leans more into slow-burn atmosphere than jump scares; good pick if you like character-driven horror.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/tAzAhDNdehs" title="Sinners Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/sinners-2025-poster.jpg",
    banner: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/sinners-2025-poster.jpg",
    criticScore: "78%",
    audienceScore: "84%",
    consensus: "Moody direction and strong performances keep this small‑town horror mystery tense.",
    cast: [
      { name: "Lead Actor", role: "Brother 1" },
      { name: "Lead Actress", role: "Brother 2" }
    ]
  },
  "Weapons": {
    year: "2025",
    rating: "7.5/10",
    duration: "2h 5m",
    genres: "Mystery, Horror, Thriller",
    description: "A small town is shaken when an entire classroom of children vanishes in the middle of the night.",
    whereToWatch: "Typically found on Max or digital rental platforms like Prime Video and Apple TV.",
    whatToKnow: "Very slow-burn and mystery heavy; better if you like unsettling mood over constant scares.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Weapons Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://www.dvd-trailers.gr/dvd/weapons_2025.jpg",
    banner: "https://www.dvd-trailers.gr/dvd/weapons_2025.jpg",
    criticScore: "75%",
    audienceScore: "80%",
    consensus: "Slow‑burn suspense that pays off with a chilling final act.",
    cast: []
  },
  "Chainsaw Man": {
    year: "2025",
    rating: "8.6/10",
    duration: "1h 45m",
    genres: "Animation, Action, Horror",
    description: "Denji returns in a bloody, high stakes battle when a mysterious girl named Reze pulls him into a new devil conflict.",
    whereToWatch: "Most likely on anime-focused platforms or via digital purchase, depending on region and license.",
    whatToKnow: "Continues the Reze arc from the manga; expect high gore, dark humor, and emotional beats.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/eyonP1AgC0k" title="Chainsaw Man Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BZmMzNGVhODktYmU5MS00MDg1LThlNTEtNTMyYTg5MDA0Njk4XkEyXkFqcGc@._V1_FMjpg_UX1920_.jpg",
    criticScore: "86%",
    audienceScore: "92%",
    consensus: "Hyper‑stylish action and surprisingly tender moments make this arc a standout.",
    cast: []
  },
  "Kpop Demon Hunters": {
    year: "2025",
    rating: "7.9/10",
    duration: "1h 50m",
    genres: "Animation, Fantasy, Music",
    description: "A K‑pop girl group balances global stardom with a secret life fighting demons that target their fans.",
    whereToWatch: "Check major streamers and anime platforms; availability can shift by country.",
    whatToKnow: "Leans into idol-anime energy with flashy music sequences; good for fans of K-pop and supernatural action.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Kpop Demon Hunters Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://www.animeclick.it/immagini/anime/KPop_Demon_Hunter/cover/KPop_Demon_Hunter-cover.jpg",
    banner: "https://www.animeclick.it/immagini/anime/KPop_Demon_Hunter/cover/KPop_Demon_Hunter-cover.jpg",
    criticScore: "79%",
    audienceScore: "90%",
    consensus: "Colorful, kinetic, and full of catchy tracks, even if the plot is familiar.",
    cast: []
  },
  "Superman": {
    year: "2025",
    rating: "8.2/10",
    duration: "2h 20m",
    genres: "Superhero, Action, Adventure",
    description: "Clark Kent struggles to live as both a hopeful reporter and the worlds most powerful hero in a new DC Universe.",
    whereToWatch: "Expect it on Max and usual digital stores after the theatrical window.",
    whatToKnow: "Intended as a new starting point for the DC Universe; emphasizes optimism and Clark’s dual life.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/5lGO-iLr-Vo" title="Superman Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/superman-2025-poster.jpeg",
    banner: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/superman-2025-poster.jpeg",
    criticScore: "82%",
    audienceScore: "89%",
    consensus: "A hopeful reintroduction that nails both Clark Kent and the Man of Steel.",
    cast: []
  },
  "Good Will Hunting": {
    year: "1997",
    rating: "8.3/10",
    duration: "2h 6m",
    genres: "Drama, Romance",
    description: "A troubled janitor at MIT with a genius level IQ confronts his past with help from a toughlove therapist.",
    whereToWatch: "Older catalog title; usually rotates between major platforms like Netflix, Prime Video, and Max, plus digital purchase.",
    whatToKnow: "Dialogue-heavy, emotional drama; good if you want character study and themes of trauma, class, and potential.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/PaZVjZEFkRs" title="Good Will Hunting Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://www.themoviedb.org/t/p/original/j9Z7P7BGHXn0I0uPiiyalC6efwe.jpg",
    banner: "https://www.themoviedb.org/t/p/original/j9Z7P7BGHXn0I0uPiiyalC6efwe.jpg",
    criticScore: "83%",
    audienceScore: "94%",
    consensus: "Warm, funny, and deeply affecting, powered by outstanding performances.",
    cast: []
  },
  "Little Women": {
    year: "1994",
    rating: "7.3/10",
    duration: "1h 58m",
    genres: "Drama, Historical, Family",
    description: "The March sisters come of age, navigating love, loss, and independence during and after the American Civil War.",
    whereToWatch: "Commonly available on major streaming services or digital rental, but rotates frequently.",
    whatToKnow: "More classical adaptation style; strong cozy-family vibe and period detail, lighter pacing than modern remakes.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/87e6Yb5BlpU" title="Little Women Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/littlwomen1994_onesheet_1400x2100.png?itok=GnH0F5mV",
    banner: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/littlwomen1994_onesheet_1400x2100.png?itok=GnH0F5mV",
    criticScore: "73%",
    audienceScore: "85%",
    consensus: "A warm, faithful adaptation that lets its ensemble cast shine.",
    cast: []
  },
  "Whiplash": {
    year: "2014",
    rating: "8.5/10",
    duration: "1h 47m",
    genres: "Drama, Music",
    description: "An ambitious jazz drummer enters a brutal psychological battle of wills with an abusive instructor.",
    whereToWatch: "Often appears on platforms like Netflix or Prime Video and is widely available to rent or buy digitally.",
    whatToKnow: "Very intense and stressful; focus is obsession and abuse more than feel-good music.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/7dVj8M1jyR8" title="Whiplash Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://media-cache.cinematerial.com/p/500x/yjhxpdlm/whiplash-movie-cover.jpg?v=1456350025",
    banner: "https://media-cache.cinematerial.com/p/500x/yjhxpdlm/whiplash-movie-cover.jpg?v=1456350025",
    criticScore: "85%",
    audienceScore: "94%",
    consensus: "Intense, electrifying, and anchored by two Whiplash is about an ambitious young jazz drummer, Andrew Neiman (Miles Teller), at a prestigious music conservatory who gets recruited into a top jazz band led by the ruthless and abusive instructor Terence Fletcher (J.K. Simmons), exploring themes of artistic obsession, perfectionism, and the extreme, often harmful, lengths people go to achieve greatness. performances.",
    cast: []
  },
  "Fantastic Mr. Fox": {
    year: "2009",
    rating: "7.9/10",
    duration: "1h 27m",
    genres: "Animation, Comedy, Adventure",
    description: "A sly fox pulls one last heist against three nasty farmers, risking his family and animal community.",
    whereToWatch: "Rotates between services; often found on Disney+, Max, or other major platforms, plus digital purchase.",
    whatToKnow: "Very Wes Anderson in style: dry humor, storybook visuals, and quirky dialogue.",
    trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/n2igjYFojUo" title="Fantastic Mr. Fox Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`,
    poster: "https://image.tmdb.org/t/p/original/aRUHnkFHd2EnbgDiflRAlQWsu4T.jpg",
    banner: "https://image.tmdb.org/t/p/original/aRUHnkFHd2EnbgDiflRAlQWsu4T.jpg",
    criticScore: "79%",
    audienceScore: "92%",
    consensus: "Wes Andersons stop‑motion caper is quirky, charming, and visually delightful.",
    cast: []
  }
};


  const data = movieData[movieKey];
  if (!data) return;
  
  

  const bannerEl = document.getElementById('heroBanner');
  const detailTitle   = document.getElementById('detailTitle');
  const detailPoster  = document.getElementById('detailPoster');
  const detailMeta    = document.getElementById('detailMeta');
  const detailCritic  = document.getElementById('detailCritic');
  const detailAudience= document.getElementById('detailAudience');
  const detailDesc    = document.getElementById('detailDescription');
  const detailTrailer = document.getElementById('detailTrailer');
  const detailConsensus = document.getElementById('detailConsensus');
  const castList      = document.getElementById('detailCast');
  const detailWhere     = document.getElementById('detailWhere');

if (detailWhere) {
  detailWhere.textContent =
    data.whereToWatch || 'Streaming and ticket info will go here.';
}

if (detailConsensus) {
  detailConsensus.textContent =
    data.whatToKnow || data.consensus || 'Critic consensus, highlights, and longer review text.';
}   

  
  detailTitle.textContent = movieKey;
  detailPoster.src = data.poster || '';
  if (bannerEl && (data.banner || data.poster)) {
    bannerEl.style.backgroundImage = `url('${data.banner || data.poster}')`;
  }

  detailMeta.textContent =
    `${data.year} · ${data.duration} · ${data.genres}`;
  detailCritic.textContent   = data.criticScore   || data.rating || '';
  detailAudience.textContent = data.audienceScore || '';
  detailDesc.textContent     = data.description   || '';
  detailTrailer.innerHTML    = data.trailer       || '';
  detailConsensus.textContent = data.consensus || '';

  if (castList) {
    castList.innerHTML = '';
    (data.cast || []).forEach(person => {
      const li = document.createElement('li');
      li.textContent = `${person.name} — ${person.role}`;
      castList.appendChild(li);
    });
  }
});
