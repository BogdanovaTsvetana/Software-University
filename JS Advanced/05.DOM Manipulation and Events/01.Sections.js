function create(words) {
   let contentElement = document.getElementById('content');

   words.forEach(word => {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';

      divElement.addEventListener('click', e => {
         //let p = e.target.tagName === 'P' ? e.target : e.target.children[0];
         let p = e.currentTarget.children[0];
         p.style.display = 'block';
      })

      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement);
   })
}