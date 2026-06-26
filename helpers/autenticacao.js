const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json');

const obterToken = async (username, senha) => {
    const bodyLogin = { ...postLogin };
    bodyLogin.username = username || bodyLogin.username;
    bodyLogin.senha = senha || bodyLogin.senha;

    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);

    return respostaLogin.body.token;
}

module.exports = {
    obterToken
}