


<h1 align="center">DH MEU PORTIFÓLIO</h1>

## Prática integradora - Design Pattern MVC 
### Objetivo 
<div>
Bem, agora temos que reorganizar um pouco nosso código e seguir melhorando a
arquitetura do site, agregando padrões do MVC como o Model, View e Controller que nos
permite, entre outras coisas, estruturar um site mais limpo.
Nos seguintes desafios, construiremos passo a passo um site baseado em MVC.
Bom trabalho!
</div>

### Micro desafio - Passo 1 

- [X] Criaremos um novo projeto baseado na arquitetura MVC, portanto, em um diretório
vazio. Por exemplo: "meu-portfolio-mvc". Executaremos o seguinte comando: npm init -y
- Lembre-se que este comando inicializa o arquivo package.json, ou seja, o arquivo em
formato json onde especificamos as informações de configuração de nosso projeto.
Para nosso site vamos definir que o ponto de entrada para a aplicação é o arquivo app.js,
ao invés de index.js como era por padrão

<hr>

### Micro desafio - Passo 2 



- [X] npm install express
- Quando executamos este comando, ele gera, por um lado, uma referência dentro de
nosso arquivo package.json para nos informar que vamos usar o Express neste projeto
e, por outro lado, cria uma pasta chamada node_modules, onde todas as dependências
de pacotes de terceiros que precisamos para executar nosso projeto serão armazenadas.
Esta pasta não é carregada em Git*.
- (*) Se estamos clonando um projeto do GitHub que já foi criado com o Express, o que
precisamos fazer, uma vez terminado o processo de clonagem, é entrarmos na pasta do
projeto e executar npm install. Este comando, tomando o arquivo package.json como
referência, instalará na pasta node_modules tudo o que precisamos para executar o
projeto localmente no nosso computador.

<hr>

### Micro desafio - Passo 3


- [X] Dentro da IDE, criamos nosso ponto de acesso, ou seja, o arquivo app.js. Nele, indicamos
que usaremos o Express com a seguinte linha:
- const express = require('express');
Como require(express) nos retorna uma função, devemos chamá-la.
- const app = express();
Agora, na constante app, teremos todos os métodos do framework disponíveis.

<hr>

### Micro desafio - Passo 4
- [X] Agora já estamos prontos para configurar nosso servidor.

