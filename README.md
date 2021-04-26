<p align="center">
    <img alt="" src="https://claroefinancas.com.br/assets/images/claro-logo.png" width="200" />
</p>
<p align="center"> 
	<strong>Portal ERP Claro</strong> 
</p>

<p align="center">
Este projeto é responsável pelo gerenciamento dos produtos ofertados pela Claro.
</p>
<br>
<p align="center">
  <img alt="" src="https://img.shields.io/static/v1?label=node&message=14.10.1&color=red&style=for-the-badge">
  <img alt="" src="https://img.shields.io/static/v1?label=npm&message=7.5.2&color=green&style=for-the-badge">
  <img alt="" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">   
  <img alt="" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img alt="" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> 
  <img alt="" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  
  <img alt="" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</p>
<br>


## 🛠  Tecnologias Utilizadas
---

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [NodeJS](https://reactjs.org)
- [ReactJS](https://reactjs.org)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint Staged](https://github.com/okonet/lint-staged)

> Veja o arquivo [package.json](https://bitbucket.whitelabel.com.br/projects/CLAR/repos/claro-erp-frontend/browse/package.json)

<br>

## 🚀  Instalação
---

Você pode colocar o projeto em seu ambiente de desenvolvimento local com as seguintes etapas:

```bash
# Instale o nodejs-cli
$ apt-get install nodejs

# Instale o firebase-cli
$ npm install -g firebase-tools

# Instale o nvm-cli
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
$ nvm install v14.10.1 # instale a versão utilizada no projeto
$ nvm use v14.10.1

# Clone este repositório
$ git clone ssh://git@bitbucket-int.whitelabel.com.br:7999/clar/claro-erp-frontend.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```
<br>


## 🎲 Deploy
---


Para efetuar um deploy nos ambientes de Homologação e Produção, é necessário a permissão no console do [Firebase Hosting](https://console.firebase.google.com). Abaixo, estão os links de cada ambiente:

- [Homologação](https://console.firebase.google.com/project/my-project-89257-301517/hosting/sites)
- [Produção](https://console.firebase.google.com/project/fs-portal-claro-erp/hosting/sites)

Após a permissão nos projetos acima, execute os seguintes comandos:

```bash
# Logar no firebase-cli
$ firebase login 

# Para efetuar um deploy no ambiente de homologação, execute:
$ npm run deploy:homol

# Para efetuar um deploy no ambiente de produção, execute:
$ npm run deploy:prod

```
<br>
---

Copyright FS© 2021