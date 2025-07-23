const { exec } = require('child_process');

exec('allure generate ./allure-results --clean -o ./allure-report', (error, stdout, stderr) => {
  if (error) {
    console.error('Erro ao gerar o relatório Allure:', error);
    console.error('stderr:', stderr);
    return;
  }
  console.log('Relatório Allure gerado com sucesso!');
  exec('allure open ./allure-report', (error2, stdout2, stderr2) => {
    if (error2) {
      console.error('Erro ao abrir o relatório Allure:', error2);
      console.error('stderr:', stderr2);
      return;
    }
    console.log('Relatório Allure aberto no navegador!');
  });
});
