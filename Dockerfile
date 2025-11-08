# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run Stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
# Next.js bind to 0.0.0.0 to allow host access
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
