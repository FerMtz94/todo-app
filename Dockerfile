# Build stage
FROM oven/bun:latest AS build
WORKDIR /app
COPY package.json ./
COPY bun.lockb ./
COPY src ./
RUN bun install
COPY . .
RUN bun run build

# Production stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]