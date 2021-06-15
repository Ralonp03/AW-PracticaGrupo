# KIOSKO VENTUR 🛒

----------------------------------------------------------------
Este repositorio contiene todo lo necesario para desplegar el proyecto en modo desarrollo.
Se divide en dos carpetas, una correspondiente a la parte del cliente y otra correspondiente a la parte del servidor.

## CLIENTE 🙋‍♂️

El cliente está desarrollado con el framework Vue en su versión 3.

```md
| + public
  |- favicon.ico
  | - index.html
| + src
| + assets
| + router
  | - index.js
| + services
  | - api.js
| + store
  | - store.js
| + views
- App.vue
- main.js
```

- Assets : contiene todo lo referente a imágenes utilizadas en los diferentes componentes.
- router : contiene las rutas de la aplicación.
- services : contiene las llamadas a la api.
- store : Contiene el objeto conocido como store en Vuex para mantener un estado mínimo en la aplicación.
- view : Contiene los distintos componentes utilizados para desarrollar la aplicación.
- App.vue : Es el punto de entrada de nuestra aplicación.
- main.js : Este script se enlaza con el index, encontrado en la carpeta public, donde instanciando un div con id="App" es el punto de montaje de toda la aplicación SPA.

### Despliegue del cliente

Para iniciar el proyecto en modo desarrollo, abrimos una consola en el editor de código de preferencia en la raíz del proyecto. Después entramos en la carpeta cliente haciendo uso de `cd client` o `cd ./client` e iniciamos el cliente con `npm run serve` . Tras ejecutar este comando, veremos que en la consola se inicia el compilado del código y al terminar nos muestra dos URL. 
Seleccionamos la primera, bien podemos hacer `ctrl + click` sobre la URL o escribirla en el navegador de preferencia. 
La URL que se ha de usar debe ser `http://localhost:8080`.

## SERVIDOR 💻

La tecnología seleccionada para el desarrollo del servidor ha sido NodeJS haciendo uso del módulo Express.
Para la base de datos se ha seleccionado MongoDB, una base de datos NoSQL orientada a documentos, bastante útil cuando nos manejamos con objetos JSON.

Dentro del servidor encontramos:
```
+ controllers
+ database
+ models
- package-lock.json
- package.json
- server.js
```

- controllers : contiene todos los controladores para manejar los diferentes endpoints de la aplicación.
- database : contiene el script de conexión a la base de datos. 
    Para poder establecer la conexión se plantean dos formas:
    - En el fichero connection.js se encuentra la url de conexión al cluster de Mongo Atlas.
            ```md
                mongodb+srv://${user}:${password}@cluster0.hp7pp.mongodb.net/kiosko?authSource=admin&replicaSet=atlas-alyq91-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
            ```
            Sustituir user y password por albert y practicaAW respectivamente.
            
     - Creando un archivo .env con el siguiente contenido en la raiz del proyecto como indican las buenas prácticas:
            ```md
                DB_USER=albert
                DB_PASS=practicaAW
                SECRET=practicaAW
            ```
- models : Contiene todos los modelos que forman los 'Schemas' para interctuar con las 'collections' presentes en la base de datos.

### Despliegue del servidor

Para iniciar el servidor en modo desarrollo, abrimos una consola en el editor de código de preferencia en la raiz del proyecto. 
Después entramos en la carpeta server haciendo uso de `cd server` o `cd ./server` e iniciamos el servidor con `npm run dev` o `npm start`. 
Tras ejecutar este comando, veremos que en la consola aparece el puerto en que esta corriendo el servidor y si todo ha salido bien, que la conexión a la base de datos ha sido satisfactoria.
En la terminal del servidor, se pueden visualizar todas las peticiones que se tramitan cuando un usuario navega por la aplicación.

## Base de datos 📝

La base de datos se ha estructurado de la siguiente manera:

Se disponen de 4 'collections' : 

    - cards : Contiene los diferentes objetos que representan una carta.
    
    - collections : Contiene los diferentes objetos que representan una colección.
    
    - events : Contiene los diferentes objetos que representan un evento.
    
    - users : Contiene los diferentes objetos que representan un usuario.
    
Si se desea visualizar graficamente el estado de la base de datos en tiempo real, durante el desarrollo de este proyecto se ha utlizado la herramienta MongoDBCompass. 
En la ventana principal habría que escribir la misma URL que se encuentra en el archivo de conexión y hacer click en connect. 
Al entrar en el cluster, la base de datos utilizada es la nombrada como kiosko.

# Github del proyecto
[Kiosko Ventur](https://github.com/Ralonp03/AW-PracticaGrupo.git)
