function attachEvents() {
    let btnLoadPostsEl = document.getElementById('btnLoadPosts');
    btnLoadPostsEl.addEventListener('click', loadPostsHandler);
    let postsSelectEl = document.getElementById('posts');
    let btnViewPostEl = document.getElementById('btnViewPost');
    let postTitleEl = document.getElementById('post-title');
    let postBodyEl = document.getElementById('post-body');

    function loadPostsHandler() {
        fetch(`http://localhost:3030/jsonstore/blog/posts`)
            .then(res => res.json())
            .then(postsInfo => {
                //console.log(postsInfo)
                /*
                    {
                    "-MSbypx-13fHPDyzNRtf": {
                        "body": "Lorem ips... dolorem itaque!",
                        "id": "-MSbypx-13fHPDyzNRtf",
                        "title": "Unit Testing And Modules"
                    }, ....      */

                Object.entries(postsInfo).forEach(p => {
                    let key = p[0];
                    let title = p[1].title;
                    let optionElement = createOptionEl(key, title);
                    postsSelectEl.appendChild(optionElement);
                });

                btnViewPostEl.addEventListener('click', e => {
                    let id = postsSelectEl.value;
                    let body = postsInfo[id].body;
                    let postTitle = postsInfo[id].title;
                    // console.log(body, postTitle)
                    // {
                    //     "-MSgyQMjBNfYjW2m6r97": {
                    //         "id": "-MSgyQMjBNfYjW2m6r97",
                    //         "postId": "-MSbypx-13fHPDyzNRtf",
                    //         "text": "A very interesting post!"
                    //     },  ... 
                    fetch(`http://localhost:3030/jsonstore/blog/comments`)
                        .then(res => res.json())
                        .then(commentsInfo => {

                            let commentsPerTitle = [];

                            Object.entries(commentsInfo).filter(x => id === x[1].postId).forEach(c => {
                                let comment = c[1].text;
                                let commentId = c[1].id;
                                commentsPerTitle.push({
                                    comment,
                                    commentId
                                });
                            });

                            postTitleEl.textContent = postTitle;
                            postBodyEl.textContent = body;

                            let postCommentsUlEl = document.getElementById('post-comments');
                            postCommentsUlEl.textContent = '';

                            commentsPerTitle.forEach(c => {
                                let liEl = document.createElement('li');
                                liEl.id = c.commentId;
                                liEl.textContent = c.comment;
                                postCommentsUlEl.appendChild(liEl);
                            });
                    });
                 });
             })
    }

    function createOptionEl(value, title) {
        let optionEl = document.createElement('option');
        optionEl.value = value;
        optionEl.textContent = title.toUpperCase();
        return optionEl;
    }
}

attachEvents();
