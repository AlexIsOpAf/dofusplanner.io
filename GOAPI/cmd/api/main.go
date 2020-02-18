package main

import (
	"github.com/AlexIsOpAf/dofusplanner.io/equipment"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	/* READ IN DB OPTIONS FROM ENVIRONMENT */
		// GET DB

	/* START WEB SERVER with address hosted on environment - development or production */
		/* IF DEVELOPMENT SERVER - RUN DOCKER ISH*/
		/* IF DOCKER IS NOT RUNNING - BREAK */

	/* START */
	r := mux.NewRouter()
	r.HandleFunc("/equipment/{type}", equipment.EquipmentHandler)

	/* We should have a lot of multiplexer going to different parts of page */
	/* And then in those multiplexer's we should have sub routes pointing the right way */
	http.Handle("/equipment/", r)
	r.Use(loggingMiddleware)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func (w http.ResponseWriter, r* http.Request) {
		log.Println(r.RequestURI)
		next.ServeHTTP(w,r)
	})
}