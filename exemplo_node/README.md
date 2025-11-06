Esse repositorio é para caso você esteja perdido na aula do professor Max

O arquivo virá sem a pasta 'node_modules', portanto, sem as dependecias. 

Para instalar as dependencias, basta você digitar 'npm install' que as dependencias já serão automaticamente instaladas

Após a instalação das denpendencias vá no mesmo terminal em que você efetuou a instalação, e digite 'node ./index' ou 'npm run dev' para o servidor ser inicializado.

Diferença entre 'node ./index' e 'npm run dev'

O 'node ./index' irá apenas abrir o servidor de maneira estatica, portanto, qualquer alteração no servidor terá que fechar e abrir o servidor para ele salvar e iniciar o servidor com as suas alteração feitas.

O 'npm run dev' irá abrir o servidor de maneira estatica também, mas diferentemente do 'node ./index', o 'npm run dev' sempre que detectar uma alteração no servidor, ele automaticamente reinicia o servidor — poupando um enorme tempo 