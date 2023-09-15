const supertest = require('supertest');
import {app} from '../main';

test('getOpenAI', async () => {
    const response = await supertest((await app).getHttpServer()).get('/openai');
    console.log("Resposta: " + response.body.resposta );
    expect(response.statusCode).toEqual(200);
    expect(response.body.resposta).toEqual("O GET OPEN AI FUNCIONA");
})

test('postOpenAI', async () => {
    const requestBody = {
        description: "A evolução do câncer de mama e sua resposta a tratamentos convencionais é muito variável. Conseguimos identificar padrões preditivos dessa variabilidade a partir de dados clínicos e do seguimento desses pacientes?"
    };

    const response = await supertest((await app).getHttpServer())
    .post('/openai')
    .send(requestBody)

    console.log(response)
    console.log(response.text)
    expect(response.statusCode).toEqual(201); // 201 é o status code típico para uma criação bem-sucedida via POST
    expect(response.text).toBeTruthy()

})