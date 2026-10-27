
export default function decorate(block) {
    const rows = [...block.children];
    const content = document.createElement('div');
    content.className = 'cta-banner-content';
  
    rows.forEach((row, index) => {
      const cells = [...row.children];
      if (!cells.length) return;
  
      const cell = cells[0];
      const text = cell.textContent.trim();
  
      if (!text) return;
  
      if (index === 0) {
        const heading = document.createElement('h2');
        heading.className = 'cta-banner-title';
        heading.append(...cell.childNodes);
        content.append(heading);
      } else if (index === 1) {
        const description = document.createElement('div');
        description.className = 'cta-banner-description';
        description.append(...cell.childNodes);
        content.append(description);
      } else {
        // Additional rows can contain a button link.
        const actions = document.createElement('div');
        actions.className = 'cta-banner-actions';
        actions.append(...cell.childNodes);
  
        actions.querySelectorAll('a').forEach((link) => {
          link.classList.add('cta-banner-button');
        });
  
        content.append(actions);
      }
    });
  
    // Also support a link placed in the description row.
    content.querySelectorAll('.cta-banner-description a').forEach((link) => {
      link.classList.add('cta-banner-button');
    });
  
    block.replaceChildren(content);
  }
  