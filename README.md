# crudConNodeJS y MongoDB

## Librerías usadas 
* Express JS
* Nomdemon
* Dotenv (para creacíon de arvichos .env)
* Mongoosee para la conexión con MongoDB

### Prueba realizada con Thuner Client

## Funcionalidad ver todos los productos (GET)
* Ir a Thunder Client
* Petición **GET**
* ir a la barra de direcciones agregar la dirección establecida en la programación con Express JS
  
  ![image](https://github.com/BraianFG/crudConNode/assets/55467665/413172c0-1dfb-44fc-9c72-dfe7fefa78f4)

  ![image](https://github.com/BraianFG/crudConNode/assets/55467665/7ec29386-b9eb-40a6-8a09-1bc373d2bf57)

## Funcionalidad ver producto por nombre (GET por nombre)
* Ir a Thunder Client
* Petición **GET**
* ir a la barra de direcciones agregar la dirección establecida en la programación con Express JS /nombre / nombre del producto,o sea, http://localhost:3008/computacion/nombre/nombreDelProducto

![image](https://github.com/BraianFG/crudConNode/assets/55467665/08852167-803e-417f-bdaa-10cc977fa6a7)

![image](https://github.com/BraianFG/crudConNode/assets/55467665/120c7155-6220-4869-902b-3c25a575e504)

  
## Funcionalidad de agregar (POST)
* Ir a Thunder Client
* Petición **POST**
* Body
* JSON
*  **IMPORTANTE AGREGARLE ID PORQUE VA A SER MUY NECESARIO PARA ELIMINAR PRODUCTO**

  ![image](https://github.com/BraianFG/crudConNode/assets/55467665/9ea42d7e-5e79-477f-9c55-01efccf3dca0)

## Funcionalidad editar precio (PUT) 
* Ir a Thunder Client
* Petición **GET**
* Una vez teniendo la respuesta copiar un artículo
* Body
* JSON y ahí pegar el producto copiado

![image](https://github.com/BraianFG/crudConNode/assets/55467665/db9a5a7f-63df-436b-89af-0278bbbcb3be)

![image](https://github.com/BraianFG/crudConNode/assets/55467665/a4522d00-8192-43ef-a496-355f76f22452)

**Sólo cambia el precio,NO SE CAMBIA EL NOMBRE NI CATEGORÍA**

## Funcionalidad eliminar (DELETE)
* Ir a Thunder Client
* Petición **DELETE**
* En la barra de dirección copiar la ruta **http://localhost:3008/id/idcreado**

  ![image](https://github.com/BraianFG/crudConNode/assets/55467665/cf379cb1-acdd-4ff7-9e14-6d807ee1b122)
