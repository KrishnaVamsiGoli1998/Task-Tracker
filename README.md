# Task Tracker

Frontend application for the Scalable Microservices Application.

## Features

- User-friendly interface for task management
- Real-time notifications
- Analytics dashboard
- Task creation and assignment

## Prerequisites

- Docker Desktop
- Node.js (for development)
- Kubernetes (optional, for k8s deployment)

## Quick Start

### Using Pre-built Docker Image

1. Import the Docker image:

   ```
   cd docker-image
   .\import.ps1
   ```

2. Start the application:
   ```
   cd ..
   docker-compose up -d
   ```

### Building from Source

1. Build and start the application:
   ```
   docker-compose up -d --build
   ```

### Kubernetes Deployment

1. Apply the Kubernetes configuration:

   ```
   kubectl apply -f k8s-deployment.yaml
   ```

2. Check the deployment status:

   ```
   kubectl get deployments
   kubectl get pods
   kubectl get services
   ```

3. Access the application:

   ```
   kubectl get service task-tracker
   ```

   The application will be available at the EXTERNAL-IP address on port 3000.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## Docker Commands

- Build the image:

  ```
  docker build -t task-tracker .
  ```

- Run the container:

  ```
  docker run -p 3000:3000 task-tracker
  ```

- Save the image:

  ```
  docker save task-tracker:latest -o task-tracker.tar
  ```

- Load the image:
  ```
  docker load -i task-tracker.tar
  ```

## API Integration

This frontend application integrates with the following microservices:

- Task Service (Port: 4001)
- Notification Service (Port: 4002)
- Analytics Service (Port: 4003)
- Audit Service (Port: 4004)

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
