const frisby = require('frisby');

it('should return status 400', ()=> {
    return frisby.get('http://localhost:4040/getBitcoinInfo')
    .expect('status', 400);
});

it('should return status 200 with json response', ()=> {
    return frisby.fetch('http://localhost:4040/getBitcoinInfo', {"currency": "usd"})
    .expect('status', 200);
});
