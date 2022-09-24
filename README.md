# pruebafullstack
#¿Puede usar GET en lugar de PUT para crear un nuevo recurso, por qué o por qué no? 
Get se utiliza para obtener recursos y PUT para crear un nuevo recurso. Por lo tanto, No se puede usar GET para crear un recurso. 

#¿Qué son pruebas de integración?

Las pruebas de integración se realizan para verificar que los componentes del programa  
esten unidos e interactuen de manera eficiente.

#¿Cuál es la diferencia entre HTTP y HTTPS?

La principal diferencia entre HTTP y HTTPS es la seguridad. 
El protocolo HTTPS impide que terceros puedan interceptar 
la información confidencial que se transfiere entre el cliente y el servidor web a 
través de Internet. 
#¿Qué es un API y cuáles funciones tiene?
Un api es un intermediario que permite que los programas se comuniquen yy trabajen con la ifnormacion
disponible que ha sido creada por otros desarrolladores.


Funciones y ventajas:
1. Integración 
Las API se utilizan para integrar nuevas aplicaciones con los sistemas de software existentes. 
2. Innovación 
Sectores enteros pueden cambiar con la llegada de una nueva aplicación.
3. Ampliación
Las API presentan una oportunidad única para que las empresas satisfagan las necesidades de sus clientes en diferentes plataformas.
4. Facilidad de mantenimiento
La API actúa como una puerta de enlace entre dos sistemas. Cada sistema está obligado a hacer cambios internos para que la API no se vea afectada. De este modo, cualquier cambio futuro que haga una de las partes en el código no afectará a la otra.

-La distribuidora de libros podría realizar cambios en sus sistemas internos sin afectar a los clientes, 
siempre y cuando el comportamiento de la API fuera el mismo.

-Con una API disponible de forma pública, los desarrolladores, podrían desarrollar una aplicación para ayudar a los clientes a encontrar los libros que necesiten. Esto podría dar como resultado mayores ventas u otras oportunidades comerciales.

#¿Qué es un commit y un rollback?
Un commit se utiliza para terminar un trabajo y confirma los cambios en la base datos realizados por 
esa unidad de trabajo.
Un rollback se utiliza para restituir los cambios que se han hecho en la base de datos dentro de una transacción.

#¿Qué es un índice y cuáles tipos existen?

Un indice es un objeto de base de datos diseñado para mejorar el rendimiento de las consultas.
Los tipos de indices son:
Indice cluster: Estos ordenan y almacenan las filas de datos de la tabla o vista de acuerdo con {
los valores de la clave del indice. Solo puede haber un indice cluster por cada tabla. 
Indice No agrupado: tienen una estructura separada de las filas de datos. Un índice no clúster contiene los valores de clave de índice
no clúster y cada entrada de valor de clave tiene un puntero a la fila de datos que contiene el valor clave.

#¿Diferencia procedimiento almacenado  y una función?

Una diferencia es que las funciones siempre retornan un valor, mientras que un procedimiento almacenado puede que retorne un valor o puede que no lo haga. 
Otra diferencia muy importante para los desarrolladores es que los procedimientos almacenados pueden ser invocados desde el entorno de desarrollo.

#¿Qué es un ORM? Un ORM es una herramienta de software que automatiza el mapeo entre el modelo de datos y el esquema entidad-relación. Algunas ventajas son:
1. Agiliza el desarrollo y reduce la cantidad de código al automatizar el mapeo permitiendo generar las clases entidad a partir de una base de datos existente, o viceversa. 
2. Independiza la aplicación del tipo de base de datos (SQL Server, Oracle, MySQL… ), permitiendo la obtención de datos usando objetos y métodos sin escribir consultas SQL.
#¿Cómo encontrarías las consultas que más consumen en una aplicación?

1. Utilizando alguna herramienta de monitoreo como Dynatrace. En caso de no tener la herramienta se puede revisar en tiempo de ejecución el consumo de memoria en el server. 
2. Ejecutando y documentando pruebas de rendimiento en la aplicación. 
3. Verificando los procedimientos almacenados que son consumidos por la aplicación. 
