## Tecnología utilizada

El grupo seleccionará una tecnología del lado del servidor => NodeJS.

En el lado del cliente se deberá usar adecuadamente javascript => VueJS.

Puede usarse tecnología de peticiones asíncronas para mejorar la interacción con el usuario.

El grupo seleccionará una tecnología de gestor de bases de datos para gestionar la persistencia => MongoDB

## Requisitos Funcionales:

1. El kiosco diseña diferentes colecciones de cromos y en cada momento puede tener varias activas []

2. El diseño de una colección de cromos supone diseñar el álbum de la misma y el conjunto de cromos que la forman, así como el precio del álbum y de cada cromo []

3. El kiosco pone a la venta tanto un álbum para cada colección como copias de los cromos que componen cada colección.
   El número de copias de cada cromo es limitado y controlado por el kiosco []

4. Cada cromo de cada colección puede tener distintos atributos, pero al menos deberá tener:

   a. Un nombre del cromo [OK]
   
   b. Una imagen asociada []
   
   c. Un precio en puntos [OK]

5. El kiosco admitirá socios que serán usuarios identificados unívocamente [OK]

6. El kiosco tendrá una página web donde registrarse [OK]

    a. Cada socio podrá estar realizando una o más colecciones de cromos []
  
    b. Cada colección de cada usuario podrá estar en los siguientes estados: 
    
         1. no iniciada []
         2. completada parcialmente []
         3. finalizada []
  
    c. Cada socio tendrá una cuenta de puntos con un saldo en cada momento [OK]
  
    d. Cada socio tendrá su página personal en el que podrá realizar:
  
         I. Ver el estado de todas sus colecciones mediante la visualización del álbum correspondiente []
    
         II. Ver el estado de su cuenta de puntos []
    
         III. Adquirir cromos si tiene un saldo suficiente para adquirir los cromos []
    
         IV. La compra supone que una copia del cromo que tiene el kiosco pasa al álbum correspondiente del usuario y se visualizará en él []
    
         V. Ganar puntos mediante la realización de alguna actividad como responder preguntas, resolver pasatiempos, resolver captchas, etc. []
    
         VI. Podrán existir múltiples actividades y como mínimo habrá dos []
    
         VII. Cuando un socio registrado se conecta al kiosco se mantendrá la sesión durante al menos 30' después de la última acción realizada por el socio.
   
         VIII. El kiosco tendrá páginas públicas para publicitarse y páginas privadas a las que sólo podrá acceder los usuarios registrados.
    
         IX. Todas las actividades de administración del kiosco tales como dar de alta una colección, definir el número de cromos que la componen con sus atributos asociados, generar copias de cromos, podrán ser realizados mediante páginas web. Por supuesto estas tareas sólo podrán realizarlas los usuarios que estén registrados como administradores del kiosco.
    
         X. Una colección una vez creada no se podrá dar de baja, pero tendrá dos estados, activa y agotada. En el estado activo, los socios pueden adquirir cromos. Para ello el kiosco generará copias de los cromos que los socios podrán adquirir. Una colección agotada ya no permitirá que los socios adquieran cromos.
    
         XI. La aplicación además de tener las páginas web indicadas, deberá tener todas aquellas que permitan que el kiosco funcione adecuadamente.

## Requisitos adicionales a realizar de forma voluntaria

1. Usar para la aplicación web únicamente https e Implementar un método de sistema de firma digital mediante clave pública-privada para que los cromos estén firmados tanto por el kiosco como por los usuarios del mismo. El kiosco tendrá una clave privada para firmar las copias de los cromos y mediante la clave pública correspondiente los usuarios podrán comprobar que el cromo ha sido generado por el kiosco. 

2. Así mismo los usuarios cuando se registren deberán adjuntar una clave pública. 

3. Cuando el usuario compre un cromo, el kiosco codificará un identificador único asociado a esa copia del cromo usando la clave pública del usuario correspondiente y se lo entregara al usuario. 

4. Cuando se quiera comprobar que un álbum ha sido completado de forma correcta por un usuario, este deberá adjuntar todas los identificadores asociados a las copias de los  cromos de su álbum descodificados mediante su clave privada.  
Instrucciones para la composición del grupo

## Requisitos de entrega

La aplicación se entregará conteniendo lo siguiente:

      a. al menos dos colecciones de cromos y cada una de ellas con al menos 10 cromos. 
  
      b. Al menos 5 copias de cada cromo puestas a la venta [OK] 
  
      c. Al menos dos usuarios de la aplicación con su nombre de usuario y contraseña de acceso. 
  
      d. Al menos un usuario administrador [OK]
  
      e. Los datos (nombre y contraseña) de los usuarios  y del administrador deberán ir en un fichero de texto denominado usuarios.txt en directorio raíz del proyecto donde aparecerá también el fichero Leeme.txt descrito más adelante
  
      f. Deberán existir al menos dos actividades para ganar puntos.  

Contendrá un fichero de texto Leeme.txt describiendo el despliegue y los requisitos necesarios para realizarlo. 
En este fichero también aparecerá la referencia de GitHub del proyecto.

