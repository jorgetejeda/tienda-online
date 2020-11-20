# Instucciones

El respositorio consta de dos proyectos cada uno con su GIT. 

El servidor y el cliente deberán instalarse las dependencias de manera individual.

## Instalación

### Base de datos

En la raíz del proyecto se encuentra una archivo **database.sql** el cual contiene el script de para generar la base de datos

### Servidor
Dentro de la carpeta **Server** corremos en consola 

```bash
composer install
```
Una vez instalada abrimos en el navegador en el puerto en el cual estén corriendo apache.
Para probar las rutas podemos instalar la extensión de chrome [ChromeiQl](https://chrome.google.com/webstore/detail/chromeiql/fkkiamalmpiidkljmicmjfbieiclmeij/related). 

Una vez instalado copiamos la url de donde esta corriendo nuestro servidor, hacemos click en nuestra extension **ChromeiQL** y pegamos nuestra url y hacemos click en botón **Set endpoint**
y podemos comenzar a realizar las consultas a grapqhl.

### Client
Dentro de la carpeta **Website** corremos en consola
```bash
npm install
```
Una vez termine corremos el siguiente comando
```bash
npm run dev
```
Se nos abrirá el navegador con el puerto **3001**

#### Nota
Aun queda por corregir los mutations y querys que envián parametros al servidor

