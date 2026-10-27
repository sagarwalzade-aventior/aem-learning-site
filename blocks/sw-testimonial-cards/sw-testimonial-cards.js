const STAR_PATH = 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';

function parseRating(value) {
  const text = value.trim();
  if (!text) return null;

  const glyphs = text.match(/[★⭐]/g);
  if (glyphs?.length) return Math.min(5, glyphs.length);

  const match = text.match(/\d+(\.\d+)?/);
  if (!match) return null;

  const rating = Number(match[0]);
  if (Number.isNaN(rating)) return null;
  return Math.min(5, Math.max(0, rating));
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function starIcon(state) {
  const star = document.createElement('span');
  star.className = `testimonial-cards-star is-${state}`;
  star.innerHTML = `
    <svg class="testimonial-cards-star-base" viewBox="0 0 24 24" aria-hidden="true"><path d="${STAR_PATH}"></path></svg>
    <svg class="testimonial-cards-star-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="${STAR_PATH}"></path></svg>
  `;
  return star;
}

function starRating(rating) {
  const stars = document.createElement('div');
  stars.className = 'testimonial-cards-stars';
  stars.setAttribute('role', 'img');
  stars.setAttribute('aria-label', `Rated ${rating} out of 5`);

  for (let index = 1; index <= 5; index += 1) {
    let state = 'empty';
    if (rating >= index) state = 'full';
    else if (rating >= index - 0.5) state = 'half';
    stars.append(starIcon(state));
  }

  return stars;
}

function readCard(row) {
  const cells = [...row.children];
  const quote = cells[0]?.textContent.trim() || '';
  if (!quote) return null;

  let name = cells[1]?.textContent.trim() || '';
  let role = cells[2]?.textContent.trim() || '';
  let ratingText = cells[3]?.textContent.trim() || '';

  if (!ratingText && /^[0-5](\.5)?$/.test(role)) {
    ratingText = role;
    role = '';
  }

  return {
    quote,
    name,
    role,
    rating: parseRating(ratingText),
  };
}

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'testimonial-cards-card';

  const mark = document.createElement('span');
  mark.className = 'testimonial-cards-mark';
  mark.setAttribute('aria-hidden', 'true');
  mark.textContent = '“';
  card.append(mark);

  if (item.rating !== null) card.append(starRating(item.rating));

  const quote = document.createElement('blockquote');
  quote.className = 'testimonial-cards-quote';
  quote.textContent = item.quote;
  card.append(quote);

  if (item.name || item.role) {
    const footer = document.createElement('footer');
    footer.className = 'testimonial-cards-meta';

    if (item.name) {
      const avatar = document.createElement('span');
      avatar.className = 'testimonial-cards-avatar';
      avatar.setAttribute('aria-hidden', 'true');
      avatar.textContent = initials(item.name);
      footer.append(avatar);
    }

    const person = document.createElement('div');
    if (item.name) {
      const name = document.createElement('p');
      name.className = 'testimonial-cards-name';
      name.textContent = item.name;
      person.append(name);
    }
    if (item.role) {
      const role = document.createElement('p');
      role.className = 'testimonial-cards-role';
      role.textContent = item.role;
      person.append(role);
    }
    footer.append(person);
    card.append(footer);
  }

  return card;
}

function chevron(direction) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', direction === 'prev'
    ? 'M15.5 19.5 8 12l7.5-7.5'
    : 'M8.5 4.5 16 12l-7.5 7.5');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-width', '1.8');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.append(path);
  return svg;
}

export default function decorate(block) {
  const items = [...block.children].map(readCard).filter(Boolean);
  if (!items.length) {
    block.replaceChildren();
    return;
  }

  const slider = document.createElement('div');
  slider.className = 'testimonial-cards-slider';
  slider.setAttribute('role', 'region');
  slider.setAttribute('aria-roledescription', 'carousel');
  slider.setAttribute('aria-label', 'Testimonials');

  const viewport = document.createElement('div');
  viewport.className = 'testimonial-cards-viewport';

  const track = document.createElement('div');
  track.className = 'testimonial-cards-track';
  items.forEach((item) => track.append(createCard(item)));
  viewport.append(track);
  slider.append(viewport);

  const cards = [...track.children];
  let index = 0;

  const dots = [];
  let controls;

  function show(next) {
    index = (next + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    cards.forEach((card, cardIndex) => {
      const active = cardIndex === index;
      card.setAttribute('aria-hidden', active ? 'false' : 'true');
      card.classList.toggle('is-active', active);
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle('is-active', active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  if (cards.length > 1) {
    controls = document.createElement('div');
    controls.className = 'testimonial-cards-controls';

    const previous = document.createElement('button');
    previous.type = 'button';
    previous.className = 'testimonial-cards-nav';
    previous.setAttribute('aria-label', 'Previous testimonial');
    previous.append(chevron('prev'));

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'testimonial-cards-nav';
    next.setAttribute('aria-label', 'Next testimonial');
    next.append(chevron('next'));

    const dotList = document.createElement('div');
    dotList.className = 'testimonial-cards-dots';

    cards.forEach((_, cardIndex) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'testimonial-cards-dot';
      dot.setAttribute('aria-label', `Show testimonial ${cardIndex + 1} of ${cards.length}`);
      dot.addEventListener('click', () => show(cardIndex));
      dots.push(dot);
      dotList.append(dot);
    });

    previous.addEventListener('click', () => show(index - 1));
    next.addEventListener('click', () => show(index + 1));

    let startX = 0;
    viewport.addEventListener('pointerdown', (event) => {
      startX = event.clientX;
    });
    viewport.addEventListener('pointerup', (event) => {
      const delta = event.clientX - startX;
      if (delta > 48) show(index - 1);
      else if (delta < -48) show(index + 1);
    });

    controls.append(previous, dotList, next);
    slider.append(controls);
  }

  block.replaceChildren(slider);
  show(0);
}
