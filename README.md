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
    git revert (el string del log)

que hacer cuando te surge un conflicto

<<<<<<<<<<< HEAD (Current Change) este es cambio modificado cambio actual



--------------------------------------------------------------



>>>>>>>>>>>>>> parent of 23de4d (Incoming Change) este es el cambio lo que estaba en el commit


para hacer esto te apareceran las siguientes opciones 
 Accept incomingg Change (te quedas con los cambios de abajo)
 Accept current change (te quedas con los cambios de arriba)
 Accept Both Changes (son todos los cambios tanto arriba como abajo)
 