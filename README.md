# ColombiaAPI-REST

Repositorio para una API RESTful de los Departamentos y Municipios de Colombia.

## Herramientas de Desarrollo 

- NodeJS con Express
- MongoDB

En el archivo `resources/files/colombia.js` se encuentra el script para crear los datos en la base de datos `MongoDB`. Teniendo instalado el Mongo a nivel de `localhost`, ejecutar un comando `load` para cargar los datos. En el Shell del `mongo` ejecutar:

```bash
>load('path/colombia.js')
```

Se debe reemplazar `path` por la ruta abosulta al archivo. Lo anterior creará una base de datos `colombia` con dos colecciones (`departments`y `towns`). La primera contiene todos los registros o documentos de los Departamentos y la segunda de los municipios.

## Esquemas de los Modelos de la Base de Datos

### Esquema Department

```json
    {
        code: Stting,
        name: String
    }
```

### Esquema Town

```json
    {
        code: String,
        department: String,
        name: String
    }
```

El atributo `department` en `town` asocia el departamento al que pertenece el municipio.

## Instalación y uso

Una vez haya clonado el proyecto, ejecutar.

```bash
npm install
```

Luego para iniciar el Servidor por el puerto 3000

```bash
npm start
```

### Rutas

Todas las rutas especificadas son de tipo `GET`

- __/api/colombia/departments__: Retorna una colección de objetos `JSON` con todos los departamentos de Colombia
- __/api/colombia/towns__:  Retorna una colección de objetos `JSON` con todos los municipios de Colombia
- __/api/colombia/towns/:code__: Se pasa un parámetro que especifica el código del departamento, retorna todos los municipios del departamento.
