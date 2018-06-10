
const users = [
    {
        id: 'a1',
        name: 'Jesús Olazagoitia',
        email: 'jesus.designer@gmail.com',
        password: '1234'
    },
    {
        id: 'a2',
        name: 'Antonio Luis Palomares',
        email: 'antonii@yahoo.es',
        password: '1234'
    }
];

module.exports = {
    getAll: getAll,
    add: add
}

function add(user) {
    users.push(user);
    return getAll();
}
function getAll() {
    return Promise.resolve(users);
}