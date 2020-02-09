package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/stock/csco", getStock)
	http.ListenAndServe(":9200", router)
}

func getStock(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"labels":["30-01-2020","31-01-2020","01-02-2020","02-02-2020","03-02-2020","04-02-2020"],"data":[47.24,45.97,46.53,47.62,48.45,48.69]}`))
}
