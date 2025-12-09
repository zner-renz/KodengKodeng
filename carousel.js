// carousel.js
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".item");
  const total = items.length;

  let angle = 0;
  const step = 360 / total;

  // Movie data (still useful for the detail page or later features)
  const movieData = {
    "Fantastic 4": {
      year: "2025",
      rating: "7.2/10",
      duration: "2h 10m",
      genres: "Action, SciFi, Superhero",
      description: "Marvels First Family faces a cosmic threat while learning to work together as a team.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/pAsmrKyMqaA" title="Fantastic 4 Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Sinners": {
      year: "2025",
      rating: "7.8/10",
      duration: "1h 55m",
      genres: "Horror, Thriller, Mystery",
      description: "Twin brothers returning to their Mississippi hometown confront a deadly supernatural evil tied to their past.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/tAzAhDNdehs" title="Sinners Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Weapons": {
      year: "2025",
      rating: "7.5/10",
      duration: "2h 5m",
      genres: "Mystery, Horror, Thriller",
      description: "A small town is shaken when an entire classroom of children vanishes in the middle of the night.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Weapons Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Chainsaw Man": {
      year: "2025",
      rating: "8.6/10",
      duration: "1h 45m",
      genres: "Animation, Action, Horror",
      description: "Denji returns in a bloody, high stakes battle when a mysterious girl named Reze pulls him into a new devil conflict.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/eyonP1AgC0k" title="Chainsaw Man Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Kpop Demon Hunters": {
      year: "2025",
      rating: "7.9/10",
      duration: "1h 50m",
      genres: "Animation, Fantasy, Music",
      description: "A K‑pop girl group balances global stardom with a secret life fighting demons that target their fans.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Kpop Demon Hunters Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Superman": {
      year: "2025",
      rating: "8.2/10",
      duration: "2h 20m",
      genres: "Superhero, Action, Adventure",
      description: "Clark Kent struggles to live as both a hopeful reporter and the worlds most powerful hero in a new DC Universe.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/5lGO-iLr-Vo" title="Superman Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Good Will Hunting": {
      year: "1997",
      rating: "8.3/10",
      duration: "2h 6m",
      genres: "Drama, Romance",
      description: "A troubled janitor at MIT with a genius level IQ confronts his past with help from a toughlove therapist.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/PaZVjZEFkRs" title="Good Will Hunting Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Little Women": {
      year: "1994",
      rating: "7.3/10",
      duration: "1h 58m",
      genres: "Drama, Historical, Family",
      description: "The March sisters come of age, navigating love, loss, and independence during and after the American Civil War.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/87e6Yb5BlpU" title="Little Women Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Whiplash": {
      year: "2014",
      rating: "8.5/10",
      duration: "1h 47m",
      genres: "Drama, Music",
      description: "An ambitious jazz drummer enters a brutal psychological battle of wills with an abusive instructor.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/7dVj8M1jyR8" title="Whiplash Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    },
    "Fantastic Mr. Fox": {
      year: "2009",
      rating: "7.9/10",
      duration: "1h 27m",
      genres: "Animation, Comedy, Adventure",
      description: "A sly fox pulls one last heist against three nasty farmers, risking his family and animal community.",
      trailer: `<iframe width="100%" height="200" src="https://www.youtube.com/embed/n2igjYFojUo" title="Fantastic Mr. Fox Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`
    }
  };

  // Position items around the circle + add click handler
  items.forEach((item, i) => {
    const rotate = step * i;
    const rad = rotate * (Math.PI / 180);
    const x = Math.sin(rad) * 300;
    const z = Math.cos(rad) * 300;
    item.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotate}deg)`;
    item.style.transition = "transform 0.8s ease";

    // When clicked, go to movie.html with a query param
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title"); // e.g. "Fantastic 4"
      const encoded = encodeURIComponent(title);
      window.location.href = `movie.html?movie=${encoded}`;
    });
  });

  // Rotate with code (used by wheel)
  function rotateCarousel(direction) {
    angle += direction * step;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }

  // Mouse wheel rotates carousel
  carousel.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      rotateCarousel(1);
    } else if (e.deltaY < 0) {
      rotateCarousel(-1);
    }
  });
});
