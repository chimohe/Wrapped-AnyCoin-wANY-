FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build contracts and frontend
RUN npx hardhat compile
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Default command: start frontend
CMD ["npm", "run", "start"]