package routes

import (
	"app/cmd/internal/handlers"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func Routes() error {
	r := chi.NewRouter()
	r.Get("/", handlers.IndexHandler)
	r.Get("/ws", handlers.WsEndpointHandler)
	return http.ListenAndServe(":3000", r)
}
