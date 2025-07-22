// Testando o Newman para executar uma coleção do Postman;

const newman = require('newman');

newman.run({
  collection: require('../postman/collection.json'),
  environment: require('../postman/environment.json'),
  reporters: ['cli', 'html'],
  reporter: {
    html: {
      export: './newman/report.html',
    }
  }
}, (err) => {
  if (err) throw err;
  console.log('Collection executada com sucesso!');
});
