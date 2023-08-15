#proyecto virtualizacion RUBIKO-

*clona el repositorio : https://github.com/zarolilla/proyecto-rubiko.git
*crea la imagen del contenedor estando dentro de la carpeta  con :docker build -t rubiko-basic-docker
*ejecuta el contenedor: " docker run -p 5050:5000 rubiko-basic-docker  
accediendo a http://localhost:5050/health desde el navegador respondera con 'ok'.
prueba postman : haciendo peticion GET a http://localhost:5050/health respondera 'ok'.

*parte (avanzado) crea la imagen del contedor pasando la variable de entorno greeating:
" docker run -p 5050:5000 -e GREETINGS="Hello Rubiko Tech!" rubiko-basic-docker " y como resultado a la peticion get en http://localhost:5050/health respondera 'Hello Rubiko Tech!' 

#usnado docker-compose:
*clona el repositorio :
*Estando en la carpeta del proyecto levanta los dos servicios con el comando  "docker-compose up" levantara el servicio WEB y el servicio CURL y el contenedor respondera a http://localhost:5050/healt con el mensaje de la variable de entorno greating



