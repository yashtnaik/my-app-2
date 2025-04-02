# Use Node.js for the frontend
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the frontend port
EXPOSE 5173

# Start the frontend
CMD ["npm", "run", "dev"]
