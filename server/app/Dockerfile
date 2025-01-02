# Use the base image for Go 1.23
FROM golang:1.23 AS build

# Install air for live reloading
RUN go install github.com/air-verse/air@latest

# Set the working directory inside the container
WORKDIR /app

# Copy the go.mod and go.sum files to the working directory
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source code to the working directory
COPY . .

# Expose the port that the application will use
EXPOSE 3000

# Command to run the application with air for live reloading
CMD ["air"]