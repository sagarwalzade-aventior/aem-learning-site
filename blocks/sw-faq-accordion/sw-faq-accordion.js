
export default function decorate(block) {
    const rows = [...block.children];
    const faqList = document.createElement('div');
    faqList.className = 'faq-accordion-list';
  
    rows.forEach((row, index) => {
      const cells = [...row.children];
  
      // Each row contains a question and its answer.
      if (cells.length < 2) return;
  
      const questionText = cells[0].textContent.trim();
      if (!questionText) return;
  
      const item = document.createElement('div');
      item.className = 'faq-accordion-item';
  
      // Create the question button.
      const button = document.createElement('button');
      button.className = 'faq-accordion-question';
      button.type = 'button';
      button.textContent = questionText;
      button.setAttribute('aria-expanded', 'false');
  
      // Create the answer panel.
      const answer = document.createElement('div');
      answer.className = 'faq-accordion-answer';
      answer.id = `faq-answer-${index}`;
      answer.hidden = true;
  
      // Inner wrapper preserves formatting and supports animation.
      const answerContent = document.createElement('div');
      answerContent.className = 'faq-accordion-answer-content';
      answerContent.append(...cells[1].childNodes);
      answer.append(answerContent);
  
      button.setAttribute('aria-controls', answer.id);
  
      button.addEventListener('click', () => {
        const isExpanded =
          button.getAttribute('aria-expanded') === 'true';
  
        if (isExpanded) {
          // Animate closing.
          button.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
          answer.style.opacity = '1';
  
          // Ensure the browser registers the starting height.
          void answer.offsetHeight;
  
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
  
          answer.addEventListener(
            'transitionend',
            (event) => {
              if (
                event.propertyName === 'max-height' &&
                button.getAttribute('aria-expanded') === 'false'
              ) {
                answer.hidden = true;
              }
            },
            { once: true },
          );
        } else {
          // Animate opening.
          button.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
          answer.style.maxHeight = '0px';
          answer.style.opacity = '0';
  
          // Measure the answer's natural height.
          const targetHeight = answer.scrollHeight;
  
          requestAnimationFrame(() => {
            answer.style.maxHeight = `${targetHeight}px`;
            answer.style.opacity = '1';
          });
  
          answer.addEventListener(
            'transitionend',
            (event) => {
              if (
                event.propertyName === 'max-height' &&
                button.getAttribute('aria-expanded') === 'true'
              ) {
                // Allow content of any height after opening.
                answer.style.maxHeight = 'none';
              }
            },
            { once: true },
          );
        }
      });
  
      item.append(button, answer);
      faqList.append(item);
    });
  
    block.replaceChildren(faqList);
  }
  