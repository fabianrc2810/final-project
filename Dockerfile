# Usar la imagen base de Node.js
FROM node:current-alpine3.20

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
