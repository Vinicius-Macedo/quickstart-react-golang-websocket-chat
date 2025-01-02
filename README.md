# Go WebSocket Quickstart

This project is a quickstart template for building a real-time chat application using React, Golang, and WebSocket. The current implementation includes a general chat feature. Future improvements will include enhanced design, user management, and chat history with a database.

## Project Structure

- **server/app**: Contains the Golang WebSocket server.
- **client/spa**: Contains the React single-page application.
- **server/nginx**: Contains the Nginx configuration for serving the application.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/Vinicius-Macedo/quickstart-react-golang-websocket-chat.git
  cd quickstart-react-golang-websocket-chat
  ```

2. Start the application using Docker Compose:
  ```sh
  docker-compose up --build
  ```

3. Open your browser and navigate to `http://localhost`.

## Development

### Running the Application

- The Golang WebSocket server runs on port `3000`.
- The React application is served by Nginx on port `80`.

## Future Improvements

- Enhanced design and UI/UX.
- User authentication and management.
- Chat history with database integration.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
