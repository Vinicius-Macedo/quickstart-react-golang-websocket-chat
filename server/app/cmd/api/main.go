package main

import (
	"app/cmd/internal/handlers"
	"app/cmd/internal/routes"
	"fmt"
)

func main() {

	fmt.Println("Starting channel listener")
	go handlers.ListenToWsChannel()

	fmt.Println("Starting server on :3000")

	err := routes.Routes()
	if err != nil {
		panic(err)
	}

}
