# C4P65G2_API_GATEWAY

Desarrollada en Apollo y GraphQL

# Para ejecutar la app en local desde VS code

```
npm -y init
npm i apollo-server graphql
npm i --save axios
npm install apollo-datasource-rest
npm i --save lodash
npm i node-fetch
```

# Para desplegar la app en Heroku

```
heroku login
```

Se inicia sesion en la web de Heroku

```
heroku create nombre_app
heroku container:login
heroku container:push web -a nombre_app
heroku container:release web -a nombre_app
heroku open -a nombre_app
```
