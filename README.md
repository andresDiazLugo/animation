# animation
instruction
- crear ramas
    git checkout -b development
- ir a una rama
    git checkout -b main
- a que ramas vas a subir los cambios
    git push origin main
- ver las ramas
    git branch
- ver los logs o commits
    git logs
- revertir un commit o volver a un commit pero sin perder el historial
<<<<<<< HEAD
    git revert ()

-si vos no estas actualizado y haces un push te va a surgir un error
 es por eso tienes que hacer un pull, para eso usamos los sigueintes comandos
  git pull origin development
 
 cuando hagas esto te va a surgir conflictos de esta manera
 <<<<<<<<<<<<<<< HEAD (Current Change) son los cambios actuales de tu computadora
djasjdkjasdjsalk


>>>>>>>>>>>>>>>>>>>>>>d23974e03297490327490(Incoming Change) son los cambios actualizados de ota persona que toco el codigo

