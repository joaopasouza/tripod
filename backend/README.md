# BackEnd

- AdonisJS version: 4.1
- MySQL version: 5.7

## Setup

1. Configurando o servidor MySQL:
Devemos criar um banco de dados chamado **rocket**, ou o nome de sua preferência.

2. Configurando o projeto:
Renomear o arquivo **.env.example** para **.env** e editá-lo com o seguinte conteúdo:

```bash
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=Ci3F6t1M5lleja4joeKluMJdB78xPxmb
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=rocket
HASH_DRIVER=bcrypt
```

3. Instalar as dependêcias de projeto
Execute o seguinte comando na raíz do projeto:
```bash
$ npm install
```

4. Migrações
Rode o seguinte comando para executar migrações de inicialização.
```bash
adonis migration:run
```

5. Executar o projeto
```bash
adonis serve --dev
```
