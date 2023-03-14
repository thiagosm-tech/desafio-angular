# Imagem base
FROM node:16-alpine3.16 as desafio-angular

# Define qual o diretório de trabalho
WORKDIR /app

# Copiar o package.json para preparar o ambiente
COPY package.json /app

# Instalar as dependências do projeto
RUN npm install --silent

# Copia os arquivos do projeto
COPY . .

# Gera o build de produção do projeto
RUN npm run build

FROM nginx:alpine

VOLUME var/cache/nginx

COPY --from=desafio-angular app/dist/desafio-angular usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/dafault.conf