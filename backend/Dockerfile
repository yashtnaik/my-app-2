# Use node image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the backend
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
