1.- Iniciar proyecto con npm init -y
2.- Instalar dependencias express sequelize pg pg-hstore cors dotenv
3.- instalar dependencias de desarrollo: nodemon morgan -D
4.- Estructura de carpetas: src/  
-/services
-/models
-/controllers
-/routes
-/middlewares
-/seeders
-/tests
-/utils
-/templates
app.js
server.js
5.- crear los scripts : start, dev en package.json
6.- Crear un server básico
7.- Configurar la conexion a bd
8.- Autenticar la bd en app.js
9.-Crear un modelo genérico de usuarios
10.-Crear el init models
11.-Sincronizar la base de datos
12.-Registrar usuarios ---> encriptar las contraseñas-->bcrypt
13.-autenticacion con el login
