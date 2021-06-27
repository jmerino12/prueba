# Prueba

_NodeJS + Database_

## Comenzando 🚀

_1.Instalar los modulos npm con npm install_
_2.luego de ellos ejecutar el comando docker build -t prueba-banco-bogota ._
_3. ejecutar comando sudo docker-compose up --build, esto creara un container completo con mysql, phpmyadmin y el proyecto_
_4. ir a localhost:30002 esto abrira phpmyadmin, ingresar con el usuario: bancouser y contraseña bancopass_
_5. seleccionar la BD mydb, importar el archivo sql que se encuentra en al raiz del proyecto_


_NOTA: La conexion con la BD dara error mientras carga mysql completamente ya luego aparecere por ej: Executing (default): SELECT 1+1 AS result DB ONLINE, renombrar .env.example a .env_
