
export default function decorate(block) {
    const rows = [...block.children];
  
    const tabList = document.createElement('div');
    tabList.className = 'tabs-list';
    tabList.setAttribute('role', 'tablist');
    tabList.setAttribute('aria-label', 'Content tabs');
  
    const panels = document.createElement('div');
    panels.className = 'tabs-panels';
  
    const tabs = [];
  
    rows.forEach((row, index) => {
      const cells = [...row.children];
  
      // Each row needs a tab title and its content.
      if (cells.length < 2) return;
  
      const title = cells[0].textContent.trim();
      if (!title) return;
  
      const tabId = `sw-tab-${index}`;
      const panelId = `sw-tab-panel-${index}`;
  
      const button = document.createElement('button');
      button.className = 'tabs-button';
      button.type = 'button';
      button.id = tabId;
      button.textContent = title;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', panelId);
      button.setAttribute('aria-selected', 'false');
      button.tabIndex = -1;
  
      const panel = document.createElement('div');
      panel.className = 'tabs-panel';
      panel.id = panelId;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tabId);
      panel.hidden = true;
  
      // Preserve paragraphs, links, and rich content.
      panel.append(...cells[1].childNodes);
  
      button.addEventListener('click', () => {
        activateTab(index);
      });
  
      button.addEventListener('keydown', (event) => {
        let nextIndex = index;
  
        if (event.key === 'ArrowRight') {
          nextIndex = (index + 1) % tabs.length;
        } else if (event.key === 'ArrowLeft') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (event.key === 'Home') {
          nextIndex = 0;
        } else if (event.key === 'End') {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }
  
        event.preventDefault();
        activateTab(nextIndex);
        tabs[nextIndex].button.focus();
      });
  
      tabs.push({ button, panel });
      tabList.append(button);
      panels.append(panel);
    });
  
    function activateTab(activeIndex) {
      tabs.forEach((tab, index) => {
        const isActive = index === activeIndex;
  
        tab.button.setAttribute('aria-selected', String(isActive));
        tab.button.tabIndex = isActive ? 0 : -1;
        tab.panel.hidden = !isActive;
      });
    }
  
    if (tabs.length > 0) {
      activateTab(0);
    }
  
    block.replaceChildren(tabList, panels);
  }
  