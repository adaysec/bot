// Bot creado por Aday Marrero
const Discord = require('discord.js');
const bot = new Discord.Client();

// Inicio
bot.on('ready', () => {
  console.log('El bot fsociety esta conectado!');
});

// info
bot.on('message', message => {
  if(message.content === '$info')
  {
    message.channel.send('♼ Creador: Aday Marrero \n \n Youtube: https://goo.gl/xM9Mst \n Instagram: https://www.instagram.com/adayxec/ \n Twitter: https://twitter.com/adaysec \n Github: https://github.com/adaysec');
  }
})
// Hacker
bot.on('message', message => {
  if(message.content === '$hacker')
  {
    message.channel.send('Persona con grandes conocimientos de informática que se dedica a acceder ilegal o legalmente a sistemas informáticos (webs, servidores, routers, etc..)  y a manipularlos.');
  }
})
// lammer
bot.on('message', message => {
  if(message.content === '$lammer')
  {
    message.channel.send('Persona que presume de conocimientos informaticos que no tiene y ni siquiera intenta aprenderlos!');
  }
})
// carder
bot.on('message', message => {
  if(message.content === '$carder')
  {
    message.channel.send('Persona que usa las tarjetas de crédito que no son suyas (robadas), para realizar pagos a sistemas de compra a distancia y cometer actos fraudulentos!');
  }
})
// cracker
bot.on('message', message => {
  if(message.content === '$cracker')
  {
    message.channel.send('Navegante de Internet que intenta piratear programas o introducir virus en otros ordenadores de la red!');
  }
})
// script kiddies
bot.on('message', message => {
  if(message.content === '$scriptkiddie')
  {
    message.channel.send('Es un término, originado en el mundo de los hackers de sombrero negro para referirse a los “hackers” inmaduros.  Los script Kiddies son aquellos hackers informáticos que no tienen conocimientos profundos de programación y seguridad informática!');
  }
})
// hacktivistas
bot.on('message', message => {
  if(message.content === '$hacktivista')
  {
    message.channel.send('Un hacktivista utiliza las mismas herramientas y técnicas de un hacker, pero lo hace con el fin de interrumpir los servicios y brindar atención a una causa política o social!');
  }
})
// sqlmap
bot.on('message', message => {
  if(message.content === '$sqlmap')
  {
    message.channel.send('Es una herramienta desarrollada en python para realizar inyección de código sql automáticamente. Su objetivo es detectar y aprovechar las vulnerabilidades de páginas webs!');
  }
})
// zenmap
bot.on('message', message => {
  if(message.content === '$zenmap')
  {
    message.channel.send('Zenmap es una aplicación gráfica para manejar Nmap: un escáner de puertos que nos puede dar mucha información acerca de una máquina!');
  }
})
// metasploit
bot.on('message', message => {
  if(message.content === '$metasploit')
  {
    message.channel.send('Metasploit es un proyecto de código abierto para la seguridad informática, que proporciona información acerca de vulnerabilidades de seguridad y ayuda en tests de penetración!');
  }
})
// armitage
bot.on('message', message => {
  if(message.content === '$armitage')
  {
    message.channel.send('Armitage es un Administrador Gráfico de Ciber Ataques para Metasploit que sirve para visualizar gráficamente tus objetivos, el mismo programa te recomienda que exploit usar, expone las opciones avanzadas del framework donde podemos iniciar un análisis con Nmap, e incluso se puede usar el módulo de Brute Force para sacar username/password!');
  }
})
// nmap
bot.on('message', message => {
  if(message.content === '$nmap')
  {
    message.channel.send('Es una herramienta de código abierto para exploración de red y auditoría de seguridad!');
  }
})
// routersploit
bot.on('message', message => {
  if(message.content === '$routersploit')
  {
    message.channel.send('Es un framework que nos permitirá comprobar la seguridad de nuestros routers, puntos de acceso, NAS y otros dispositivos embebidos. Este framework es completamente gratuito y de código libre, por lo que podremos modificarlo para que cumpla con nuestras necesidades!');
  }
})
// bettercap
bot.on('message', message => {
  if(message.content === '$bettercap')
  {
    message.channel.send('Bettercap es un interceptor/sniffer/registrador para LANs con switch. Soporta direcciones activas y pasivas de varios protocolos (incluso aquellos cifrados, como SSH y HTTPS). También hace posible la inyección de datos en una conexión establecida y filtrado al vuelo aun manteniendo la conexión sincronizada gracias a su poder para establecer un Ataque Mitm!');
  }
})
// wifiphisher
bot.on('message', message => {
  if(message.content === '$wifiphisher')
  {
    message.channel.send('Es una herramienta de seguridad que montajes automatizados para requisitos particulares víctima de phishing ataques contra clientes Wi-Fi para obtener credenciales o infectar a las víctimas con malware.Es sobre todo un ataque de ingeniería social que a diferencia de otros métodos no incluyen ninguna fuerza bruta!');
  }
})
// zirikatu
bot.on('message', message => {
  if(message.content === '$zirikatu')
  {
    message.channel.send('Es una herramienta que nos permite generar Payloads, para nuestras pruebas de penetracion, hackeos o creación de backdoors!');
  }
})
// exploit
bot.on('message', message => {
  if(message.content === '$exploit')
  {
    message.channel.send('Exploit es una palabra inglesa que significa explotar o aprovechar, y que en el ámbito de la informática es un fragmento de software, fragmento de datos o secuencia de comandos o acciones, utilizada con el fin de aprovechar una vulnerabilidad de seguridad!');
  }
})
// shell
bot.on('message', message => {
  if(message.content === '$shell')
  {
    message.channel.send('En informática, el shell o intérprete de órdenes o intérprete de comandos es el programa informático que provee una interfaz de usuario para acceder a los servicios del sistema operativo!');
  }
})
// programacion
bot.on('message', message => {
  if(message.content === '$programación')
  {
    message.channel.send('El propósito de la programación es crear programas que exhiban un comportamiento deseado. El proceso de escribir códigos requiere frecuentemente conocimientos en varias áreas distintas!');
  }
})
// algoritmos
bot.on('message', message => {
  if(message.content === '$algoritmo')
  {
    message.channel.send('Un algoritmo es un conjunto prescrito de instrucciones o reglas bien definidas, ordenadas y finitas que permite llevar a cabo una actividad mediante pasos sucesivos que no generen dudas a quien deba hacer dicha actividad.!');
  }
})
// phishing
bot.on('message', message => {
  if(message.content === '$phishing')
  {
    message.channel.send('Estafa que tiene como objetivo obtener a través de internet datos privados de los usuarios, especialmente para acceder a sus cuentas o datos bancarios, mediante el engaño o la ingenieria soical!');
  }
})
// backdoor
bot.on('message', message => {
  if(message.content === '$backdoor')
  {
    message.channel.send('Un backdoor (puerta trasera en castellano) es un programa malicioso de ordenador usado para proporcionar al atacante un acceso remoto al PC comprometido y no autorizado!');
  }
})
// ddos
bot.on('message', message => {
  if(message.content === '$ddos')
  {
    message.channel.send('En seguridad informática, un ataque de denegación de servicio, también llamado ataque DoS, es un ataque a un sistema de pc´s o red que causa que un servicio o recurso sea inaccesible a los usuarios!');
  }
})
// vpn
bot.on('message', message => {
  if(message.content === '$vpn')
  {
    message.channel.send('Es una tecnología de red de pc´s que permite una extensión segura de la red de área local sobre una red pública o no controlada como Internet.!');
  }
})
// firewall
bot.on('message', message => {
  if(message.content === '$firewall')
  {
    message.channel.send('Un cortafuegos (firewall) es una parte de un sistema o una red que está diseñada para bloquear el acceso no autorizado, permitiendo al mismo tiempo comunicaciones (UDP, TCP, HTTPS, etc..) para que los atacantes no tengan posibilidad de dañarte el sistema o red!');
  }
})
// mitm
bot.on('message', message => {
  if(message.content === '$mitm')
  {
    message.channel.send('Es un ataque en el que se adquiere la capacidad de leer, insertar y modificar a voluntad. El atacante debe ser capaz de observar e interceptar mensajes entre las dos víctimas los mensajes entre dos partes sin que ninguna de ellas conozca que el enlace entre ellos ha sido violado!');
  }
})
// ip
bot.on('message', message => {
  if(message.content === '$ip')
  {
    message.channel.send('Una dirección IP es un número que identifica, de manera lógica y jerárquica, a una Interfaz en red (elemento de comunicación/conexión) de un dispositivo, web o servidor!');
  }
})
// dns
bot.on('message', message => {
  if(message.content === '$dns')
  {
    message.channel.send('Es un sistema de nomenclatura jerárquico descentralizado para dispositivos conectados a redes IP como Internet o una red privada. Este sistema asocia información variada con nombre de dominio asignado a cada uno de los participantes!');
  }
})
// xss
bot.on('message', message => {
  if(message.content === '$xss')
  {
    message.channel.send('Es un tipo de inseguridad informática o agujero de seguridad típico de las aplicaciones Web, que permite a una tercera persona inyectar en páginas web visitadas por el usuario código JavaScript!');
  }
})
// sqlinyection
bot.on('message', message => {
  if(message.content === '$sqlinyection')
  {
    message.channel.send('Es un método de infiltración de código intruso que se vale de una vulnerabilidad informática presente en una aplicación en el nivel de validación de las entradas para realizar operaciones sobre una base de datos!');
  }
})
// lfi
bot.on('message', message => {
  if(message.content === '$lfi')
  {
    message.channel.send('Esta vulnerabilidad existente solamente en páginas dinámicas en PHP que permite el enlace de archivos remotos situados en otros servidores a causa de una mala programación de la página que contiene funciones de inclusión de archivos!');
  }
})
// malware
bot.on('message', message => {
  if(message.content === '$malware')
  {
    message.channel.send('Es un tipo de software que tiene como objetivo infiltrarse o dañar una pc o sistema de información. El término malware es muy utilizado por profesionales de la informática para referirse a una variedad de software hostil, intrusivo o molesto!');
  }
})
// linux
bot.on('message', message => {
  if(message.content === '$linux')
  {
    message.channel.send('3 Distrivuciones linux diseñadas principalmente para la auditoría y seguridad informática en general: ParrotSec, KaliLinux y WifiSlax!');
  }
})
// parrotsec
bot.on('message', message => {
  if(message.content === '$parrotsec')
  {
    message.channel.send('★ PARROTSEC: https://www.parrotsec.org/download.fx');
  }
})
// kalilinux
bot.on('message', message => {
  if(message.content === '$kalilinux')
  {
    message.channel.send('★ KALILINUX: https://www.kali.org/downloads/');
  }
})
// wifislax
bot.on('message', message => {
  if(message.content === '$wifislax')
  {
    message.channel.send('★ WIFISLAX: http://www.wifislax.com/category/download/');
  }
})

// help
bot.on('message', message => {
  if(message.content === '$help')
  {
    message.channel.send('☠ LISTA DE COMANDOS: \n \n ✘ Tipos de personas: \n $hacker \n $hacktivista \n $cracker \n $carder \n $scriptkiddie \n $lammer \n \n ✘ Scripts mas usados: \n $sqlmap \n $zenmap \n $metasploit \n $armitage \n $zirikatu \n $nmap \n $routersploit \n $bettercap \n $wifiphisher \n \n ✘ Diccionario: \n $programación \n $exploit \n $phishing \n $algoritmo \n $malware \n $shell \n $ddos \n $mitm \n $xss \n $sqlinyection \n $lfi \n \n ✘ Informática: \n $ip \n $vpn \n $dns \n $firewall \n $linux \n \n ✘ Sistemas Operativos: \n $parrotsec \n $kalilinux \n $wifislax \n \n $info ➳ Información sobre el creador.');
  }
})

// Jugando a...
bot.on('ready', function () {
bot.user.setGame('ser hacker');
});

// Login con token
client.login(process.env.BOT_TOKEN);
