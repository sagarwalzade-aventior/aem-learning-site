
export default function decorate(block) {
  // Read the rows provided by the document.
  const rows = [...block.children];

  // Create a container for the cards.
  const grid = document.createElement('div');
  grid.className = 'feature-cards-grid';

  rows.forEach((row) => {
    const cells = [...row.children];

    // Skip rows without content.
    if (cells.length === 0) return;

    // First cell = card title; second cell = description.
    const titleText = cells[0].textContent.trim();
    const descriptionText = cells[1]?.textContent.trim() || '';

    const card = document.createElement('article');
    card.className = 'feature-cards-card';

    const title = document.createElement('h2');
    title.textContent = titleText;

    const description = document.createElement('p');
    description.textContent = descriptionText;

    card.append(title, description);
    grid.append(card);
  });

  // Replace the original block content with our card layout.
  block.replaceChildren(grid);
}
