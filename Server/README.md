# Instucciones para el servidor

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
