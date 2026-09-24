# Portfolio Personal - Trabajo Practico 1- Sofia Celeste Suarez
Este proyecto es un portfolio personal desarrollado como  trabajo practico 1 de React, el portfolio está desarrollado como una aplicación de una sola página y está dividido en diferentes componentes reutilizables.

En este se presenta: 
Información personal
Habilidades
Tecnologías
Proyectos (ficticios)

Divido en los siguientes componentes:

App: componente principal que organiza los demás componentes de la aplicación.

Header: navegación hacia las diferentes partes de la pagina.

Hero: informacion.

About: presentacion.

Skills: tecnologías y conocimientos, este componente contiene un array con mis habilidades y utiliza map() para recorrerlo, por cada habilidad se genera un componente Skill, al que le pasa el nombre y la imagen mediante props.

Skill: este componente recibe esas props y muestra la información de cada una de mis habilidades.

Proyects: Proyectos(ficticios), al igual que Skills, este componente contiene un array con los datos de mis proyectos y utiliza map() para recorrerlo, por cada proyecto genera un componente Project, al que le pasa los datos mediante props. 

Project: este componente recibe esas props y muestra la información del proyecto, ademas utiliza useState para controlar si se muestra la vista previa o la información completa de cada proyecto.

Footer: medios de contacto.

## Tecnologías utilizadas
React
Vite
JavaScript
HTML
CSS
Bootstrap 

## Instalación
Para ejecutar el proyecto de manera local, primero se debe clonar el repositorio, en la consola debe escribir el siguiente comando:
git clone https://github.com/suarezsofia541-alt/Suarez-Sofia-Celeste-Programacion-IV.git

Luego ingresar a la carpeta del proyecto:
cd Suarez-Sofia-Celeste-Programacion-IV

Instalar las dependencias:
npm install

## Ejecución
Para iniciar el servidor:
npm run dev

Luego abrir en el navegador la dirección que muestra Vite en la terminal.

## Repositorio
URL del repositorio: 
https://github.com/suarezsofia541-alt/Suarez-Sofia-Celeste-Programacion-IV

