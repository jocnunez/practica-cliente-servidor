#!/bin/bash

PROJECT_NAME=practica-cliente-servidor  

# Confirmación del usuario 
echo "Se eliminará todo lo generado con el docker compose up de '$PROJECT_NAME'."
read -p "¿Estás seguro de que quieres continuar? [y/N] " -n 1 -r
echo 
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Operación cancelada."
    exit 1
fi

docker compose -p "$PROJECT_NAME" down --volumes --remove-orphans
docker images -f "label=com.docker.compose.project=$PROJECT_NAME" -q | xargs docker rmi 
docker volume ls -f "label=com.docker.compose.project=$PROJECT_NAME" -q | xargs docker volume rm
docker buildx prune -f

echo ""
echo ""
echo "ATENCIÓN!!!"
echo "Este último comando afectará a TODOS los proyectos de docker que hayas instalado."
echo "Acepta solo si no tienes otros proyectos o si estás seguro de que los puedes volver a levantar"
docker system prune