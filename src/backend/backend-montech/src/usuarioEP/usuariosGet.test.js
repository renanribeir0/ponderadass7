const supertest = require('supertest');
const { app } = require('../main');

test('getUsuarios', async () => {
    const response = await supertest((await app).getHttpServer()).get('/usuarioEP');
    console.log("Resposta: " + response.body.resposta);
    expect(response.status).toEqual(200);
    expect(response.body.resposta).toEqual("O GET Usuarios FUNCIONA");
});
