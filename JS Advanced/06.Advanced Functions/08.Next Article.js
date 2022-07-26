function getArticleGenerator(articles) {
    let articlesList = articles;
    let divEl = document.getElementById(`content`);

    return function () {
        if (articlesList.length === 0) {
            return;
        }

        let firstArt = articlesList.shift();
        let articleEl = document.createElement('article');
        articleEl.textContent = firstArt;
        divEl.appendChild(articleEl);
    }
}