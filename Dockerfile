# Etapa 1: Construcción con Node.js
FROM node:18 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY package.json package-lock.json* ./
COPY webpack.config.js webpack.prod.js ./
COPY src ./src

# Instala dependencias y construye el proyecto
RUN npm install && npm run build

# Etapa 2: Servidor con Nginx
FROM nginx:latest

# Copia los archivos generados en dist a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
