package handlers

import "net/http"

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(`{"message": "Hello World"}`))
}
