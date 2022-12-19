const users = 'https://jsonplaceholder.typicode.com/users'


const userElement = (text) => {
    const liUser = document.createElement('li')
    const liUser_anchor = document.createElement('a')
    liUser_anchor.href = '#'
    liUser_anchor.textContent = text
    liUser.append(liUser_anchor)
    return liUser
}

const dataContainer = document.querySelector('#data-container')

const getTodoByIds = (ids) => {
const requests = ids.map(id => fetch(`${users}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            return Promise.all(dataResults);
        }).then((usersWithId) => {
            console.log(usersWithId)
            usersWithId.forEach(userItem => {
                const userHtml = userElement(userItem.name)
                dataContainer.append(userHtml)
            })
    }).catch((error) => {
        console.log(error)
    })
}

getTodoByIds([5, 6, 2, 1])


