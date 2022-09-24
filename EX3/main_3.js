let users = [
    {
        id: 1,
        name: 'Dau',
    },
    {
        id: 2,
        name: 'Xuan',
    },
    {
        id: 3,
        name: 'Thai',
    },
    {
        id: 4,
        name: 'Son',
    }
];

let comments = [
    {
        id: 1,
        content: 'Day la comment thu 1',
        user_id: 1,
    },
    {
        id: 2,
        content: 'Day la comment thu 2',
        user_id: 2,
    },
    {
        id: 3,
        content: 'Day la comment thu 3',
        user_id: 3,
    },
    {
        id: 4,
        content: 'Day la comment thu 4',
        user_id: 4,
    }
];

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000)
    });
};

function getUsersByIDs(userIDs) {
    return new Promise(function (resolve) {
        let result = users.filter(function (user) {
            return userIDs.includes(user.id);
            // console.log(userIDs.includes(user.id));
        });
        setTimeout(resolve(result), 1000);
    })
};







// Test function

getComments()
    .then(function (comments) {
        // console.log(comments);
        let userIDs = comments.map(function (comment) {
            return comment.user_id;
        });
        return getUsersByIDs(userIDs)
            .then(function (users) {
                // console.log(user);
                return {
                    user: users,
                    comment: comments,
                }
            });
        // console.log(userIDs);
    })
    .then(function (data) {
        console.log(data)
        let commentBlock = document.getElementById('comment-block');
        let html = '';
        data.comment.forEach(function (comment) {
            let user = data.user.find(function (user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })

;


