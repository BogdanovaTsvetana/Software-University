function solution() {
    let mainSectionEl = document.getElementById('main');
    
    fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        .then(res => res.json())
        .then(list => {
            // console.log(list)
            /* 
            [
                {
                    "_id": "ee9823ab-c3e8-4a14-b998-8c22ec246bd3",
                    "title": "Scalable Vector Graphics"
                },    ....  
             */
            list.forEach(t => {
                let title = t.title;
                let id = t._id;
                createArticle(title, id);
            })
        })

    function createArticle(title, id) {
        let accordionDivEl = createEl('div', 'accordion', '')  // to append at the end
        let headDivEl = createEl('div', 'head', accordionDivEl);
        let spanEl = createEl('span', '', headDivEl, title);

        let buttonEl = createEl('button', 'button', headDivEl, 'More');
        buttonEl.id = id;
        buttonEl.addEventListener('click', revealMore);

        let extraDivEl = createEl('div', 'extra', accordionDivEl); 
        let pEl = createEl('p', '', extraDivEl);

        mainSectionEl.appendChild(accordionDivEl);
    }

    function revealMore(e) {
        let buttonEl = e.target;
        buttonEl.textContent = buttonEl.textContent === 'Less' ? 'More' : 'Less';
        let extraDivEl = buttonEl.parentElement.nextElementSibling;
        //console.log(extraDivEl)
        extraDivEl.style.display = extraDivEl.style.display === 'block' ? 'none' : 'block';

        let idArticle = buttonEl.id;
        // console.log(idArticle);
        let pEl = extraDivEl.querySelector('p');

        // {
        // "_id": "ee9823ab-c3e8-4a14-b998-8c22ec246bd3",
        // "title": "Scalable Vector Graphics",
        // "content": "Scalable Vector (SVG) is an....."
        // }       

        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${idArticle}`)
            .then(res => res.json())
            .then(a => {
                pEl.textContent = a.content;
            })
    }

    function createEl(type, className, parent, text) {
        let element = document.createElement(type);

        if (className) {
            element.classList.add(className);
        }

        if(text) {
            element.textContent = text;
        }

        if(parent) {
            parent.appendChild(element);
        }

        return element;
    }
}

solution()

