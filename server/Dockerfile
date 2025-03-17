FROM node:23
WORKDIR /app/
COPY package.json .
COPY . .
RUN npm install
EXPOSE 8000
CMD ["node", "index.js"]