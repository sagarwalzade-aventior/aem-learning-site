
export default function decorate(block) {
    const rows = [...block.children];
    const grid = document.createElement("div");
    grid.className = "blog-cards-grid";
  
    rows.forEach((row) => {
      const cells = [...row.children];
  
      if (cells.length < 4) return;
  
      const [imageCell, titleCell, descriptionCell, linkCell] = cells;
  
      const card = document.createElement("article");
      card.className = "blog-card";
  
      // Image
      const imageWrapper = document.createElement("div");
      imageWrapper.className = "blog-card-image";
  
      // Case 1: An image or picture is inserted directly
      const existingImage = imageCell.querySelector("img");
  
      if (existingImage) {
        const picture = existingImage.closest("picture");
  
        if (picture) {
          imageWrapper.append(picture);
        } else {
          imageWrapper.append(existingImage);
        }
      } else {
        // Case 2: A URL is pasted as text or as a hyperlink
        const imageLink = imageCell.querySelector("a");
        const imageUrl = (
          imageLink?.href || imageCell.textContent
        ).trim();
  
        if (imageUrl && /^https?:\/\//i.test(imageUrl)) {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = titleCell.textContent.trim();
          img.loading = "lazy";
          img.onerror = () => {
            imageWrapper.classList.add("blog-card-image-error");
          };
  
          imageWrapper.append(img);
        }
      }
  
      // Card content
      const body = document.createElement("div");
      body.className = "blog-card-body";
  
      const title = document.createElement("h3");
      title.className = "blog-card-title";
      title.textContent = titleCell.textContent.trim();
  
      const description = document.createElement("div");
      description.className = "blog-card-description";
      description.append(...descriptionCell.childNodes);
  
      const linkWrapper = document.createElement("div");
      linkWrapper.className = "blog-card-link";
      linkWrapper.append(...linkCell.childNodes);
  
      body.append(title, description, linkWrapper);
      card.append(imageWrapper, body);
      grid.append(card);
    });
  
    block.replaceChildren(grid);
  }
  