# CPCFI's web-page

### [CPCFI Page](https://www.cpcfi.unam.mx/)

## Jamboard : https://jamboard.google.com/d/1lQRf_GdMP8vkUtWzrQr6nmXYrHVM9WrN8Y0sjkkfB_0/edit?usp=sharing


### Developers:
- Aleksei: alekseigarcia47@gmail.com
- JP: juanpsfi3023@gmail.com
- Fredin: afred7817@gmail.com

--------------------------------


## Secciones 

- [CPCFI's web-page](#cpcfis-web-page)
    - [CPCFI Page](#cpcfi-page)
  - [Jamboard : https://jamboard.google.com/d/1lQRf\_GdMP8vkUtWzrQr6nmXYrHVM9WrN8Y0sjkkfB\_0/edit?usp=sharing](#jamboard--httpsjamboardgooglecomd1lqrf_gdmp8vkutwzrqr6nmxyrhvm9wrn8y0sjkkfb_0edituspsharing)
    - [Developers:](#developers)
  - [Secciones](#secciones)
  - [Tecnologías usadas:](#tecnologías-usadas)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Contenido de las carpetas](#contenido-de-las-carpetas)
  - [Instalación](#instalación)
  - [Modo desarrollo](#modo-desarrollo)
    - [Inicializando nuestra base de datos de desarrollo](#inicializando-nuestra-base-de-datos-de-desarrollo)


## Tecnologías usadas:
- Nextjs 
- Typescript
- Nodejs
- PostgreSQL
- SASS
- Framer Motion
- Docker
- Prisma
- tRPC

## Estructura de carpetas 
```graphql
  .web-page
  ├── prisma
  │   ├── migrations
  │   │  └── [..]
  │   └──schema.prisma
  │
  ├── public
  │
  ├── sql
  │   └── [..]
  |
  │
  ├── src
  |   ├── assets
  |   |   └── [..]
  |   |
  |   ├── components
  |   |   ├── ui
  |   |   |   └── [..]
  |   |   |
  |   |   ├── about
  |   |   |   └── [..]
  |   |   |
  |   |   ├── compiler
  |   |   |   └── [..]
  |   |   |
  |   │   └── [..]
  |   |
  |   ├── context
  |   |   ├── UI
  |   |   |   └── [..]
  |   |   |
  |   |   ├── Modal
  |   |   |   └── [..]
  |   |   |
  |   │   └── [..]
  |   │
  |   ├── data
  |   │
  |   ├── env 
  |   │
  |   ├── layouts
  |   │
  |   ├── models
  |   │
  |   ├── pages
  |   │   ├── _app.tsx  # <-- add `withTRPC()`-HOC here
  |   |   |
  |   │   ├── api
  |   │   │   └── trpc
  |   │   │       └── [trpc].ts  # <-- tRPC HTTP handler
  |   │   └── [..]
  |   |   
  |   │
  |   ├── server
  |   │   ├── api
  |   |   │   ├── routers
  |   |   │   │   ├── testtimonie.ts            # <-- sub routers
  |   |   │   │   └── [..]
  |   |   |   |
  |   |   |   ├── root.ts           # <-- main app router
  |   |   |   |
  |   |   |   └── trpc.ts           # <-- procedure creator and config server 
  |   │   |
  |   │   ├── auth.ts               # <-- Nextauth config
  |   │   |
  |   │   └── db.ts                 # <-- Create connection to db
  |   |     
  |   ├── utils
  |   │       └── api.ts             # <-- Client entry TRPC
  |   |
  |   └── [..]
```


## Contenido de las carpetas

- assets :
    - Esta carpeta se encarga de almacenar cualquier recurso gráfico, ya sea imágenes, videos, gifs, svg, etc.
- components : 
    - Esta carpeta se encarga de almacenar cualquier componente que puedan requerir cada una de nuestas páginas, cada componente contiene su archivo de stilos,  antes de generar algún nuevo componente tratar de refactorizar alguno existente.
    - La carpeta contiene subcarpetas si existen componentes para alguna página en específico. 
      - Ej.
        - *ui* : Contiene componentes generales de UI
        - *landing* : Contiene componentes especificos de la landing page
  - context :   
    - Almacena todos los contextos de la aplicación
    - Crear una carpeta por cada contexto que vaya a tener la     aplicación, utilizar reducers e interfaces para el tipado de los dispatch.
    - Estructura de una subcarpeta en **context**, recordar que si la extensión es **.tsx** el *nombre_contexto* es *Camel Case*, si es la función **reducer**, no poner mayúscula al inicio de *nombre_contexto*, usar archivo de barril:
      - [nombre_contexto]Context.tsx 
      - [nombre_contexto]Provider.tsx
      - [nombre_contexto]Reducer.ts
      - index.ts
      - Ej.
        - EntriesContext.tsx
        - EntriesProvider.tsx
        - entriesReducer.ts
        - index.ts

  - data : 
    - Almacena archivos json o en algun otro formato para obtener información
  - utils:
    - Proporciona un espacio donde almacenar funciones que no este directamente asociadas con react
  - layouts:
    - Almacena cada una de las layouts que se lleguen a utilizar en la web
  - models :
    - Almacena las interfaces de ts para petición a API o bases de datos
  - pages :
    - Carpeta nativa de Nextjs, cada archivo con extensión **.tsx** es una ruta
  - pulic : 
    - Contiene recursos que nos interesan sean de fácil acceso y sean publicos 
  - services : 
    - Dentro de services se almacenan funciones que conectan con servicios como base de datos o servicios de terceros.

## Instalación

Existen dos opciones para obtener el código fuente:

*Nota: Descargar/clonar los archivos dentro de una carpeta llamada web-page*

1. Descargar el .zip del código mediante el siguiente link:
  
    [Descargar Repositorio](https://github.com/cpcfi/web-page/archive/refs/heads/main.zip)
1. Clonar el repositorio de github mediante el comando
   
    ```sh
    git clone https://github.com/cpcfi/web-page.git
    ```

Una vez teniendo el código fuente dentro de la carpeta **web-page**, seguir los siguientes pasos para establecer el entorno de desarrollo.

1. Entrar a la carpeta.
  
    ```sh
    cd web-page
    ```
2.  Ejecutar el comando para instalar los modulos de node.
   
    ```sh
    yarn
    ```

En este punto ya tenemos nuestro entorno de desarrollo listo.

## Modo desarrollo

Para desplegar el proyecto en su modo desarrollo solo debemos ejecutar el comando.

```sh
yarn dev
```

Esto creará un servidor temporal en *LOCALHOST*

[Click para ver el proyecto](http://localhost:3000/) 

### Inicializando nuestra base de datos de desarrollo

Para poder acceder a la base de datos de desarrollo y tener el mismo esquema que la base de datos de producción se deberá tener instalado `postgreSQL` y preferiblemente tener `pgAdmin4` v6.

Una vez instalada estas dos herramientas se deberá acceder a `pgAdmin4`, saldrá una ventana emergente pidiendo la contraseña maestra que antes definimos al instalar `postgreSQL`.

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres1.png)

Esto nos dará acceso a la aplicación y a la visualización de  nuestros grupos de servidores, por defecto solo existirá un grupo de servidores denominado `Servers`

Dentro de nuestro grupo de servidores llamado `Servers` podremos ver el servidor llamado `PostgreSQL 15` daremos click para acceder a este servidor, por defecto, estaremos ingresando mediante el usuario `postgres`cuya contraseña debimos definir dentro de la instalación de `postgreSQL`.

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres2.png)




Al introducir la contraseña accederemos a nuestro servidor que contiene las ***bases de datos***,***los roles/usuarios*** y los llamados ***Tablespaces***.

Lo único que deberemos hacer es dar click derecho sobre el icono **Databases**, ir a la opción create y crear una base de datos.

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres3.png)

Deberá cumplir con las siguientes características:

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres_db_1.png)

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres_db_2.png)

Posterior a que se haya seguido el anterior esquema daremos click en el botón azul ***SAVE***

Una vez seguido todo el proceso anterior terminaremos con una base de datos que lleva por nombre `cpcfi_dev`.

Para tenerla en el mismo esquema que nuestra base de datos de producción deberemos:

1. Dirigirse al proyecto **web-page**
2. Dentro de nuestro archivo *.env* cambiar la variable **DATABASE_URL** a la siguiente linea:
   - ```sh 
      DATABASE_URL="postgresql://postgres:[password_del_usuario_postgres]@localhost:5432/cpcfi_dev?schema=public"
    ```
3. Ejecutar los siguientes comandos:
  ```sh
    npx prisma generate
    npx prisma db push
  ```
Esto sincronizará automáticamente los esquemas de tablas en nuestra base de datos,sin embargo no tendrá datos para visualizar.

Por el momento, solo es necesario tener información en nuestra tabla `testimonies_aux` por lo que para poder llenarla utilizaremos el script llamado `info.sql` que se encuentra dentro de nuestra carpeta `sql` esto agregrá un solo testimonio, lo cuál es suficiente para el correcto funcionamiento de la aplicación.

Para ejecutar nuestro script deberemos acceder a `pgAdmin4` y acceder a nuestra base de datos `cpcfi_dev > Schemas > public > Tables` si todo el proceso anterior se realizó de una manera exitosa deberemos poder ver la tabla  `testimonies_aux`, le daremos click derecho y a selecionaremos la opción `Query tool`, despúes de todo este proceso se deberá ver nuestro administrador de la siguiente manera. 

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/postgres_db_3.png)

Deberemos darle click al botón con icono de *carpeta*, el cual se encuentra en la esquina superior izquierda de nuestra pestaña `Query tool`.

Al hacer esto nos abrirá una pestaña del explorador de archivos de nuestro sistema operativo, deberemos buscar nuestro archivo `info.sql` y posteriormente una vez cargado el archivo dentro de nuestro administrador daremos click al botón con icono de *play*, deberemos ver un mensaje igual a este:

```sh
INSERT 0 1

Query returned successfully in 64 msec.
```


Para poder verificar la información deberemos volver abrir una nueva ventana de `Query tool` mediante el siguiente botón:

![Clave maestra](https://github.com/cpcfi/web-page/blob/main/imgRepo/btn_1.png)

El cual se encuentra en la parte superior de `pgAdmin 4`

Podremos ejecutar el siguiente código:

```sql
SELECT * FROM public.testimonie_aux
```


Esto deberá mostrar las tuplas añadidas desde nustro archivo `info.sql`


Terminando esta sección se debe tener funcionando la base de datos de desarrollo.
