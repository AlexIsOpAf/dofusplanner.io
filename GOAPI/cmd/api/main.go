package main

import (
	"fmt"
	"github.com/AlexIsOpAf/dofusplanner.io/equipment"
	"log"
	"net/http"

	"github.com/AlexIsOpAf/dofusplanner.io/database"
	"github.com/AlexIsOpAf/dofusplanner.io/character"
	"github.com/gorilla/mux"
)

func main() {

	/* READ IN DB OPTIONS FROM ENVIRONMENT */
	/* ATM We will hardcode reading in from one config file*/
	// GET DB
	dbConfig := database.Config{}
	err := dbConfig.ReadInDBConfig()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(dbConfig.User, dbConfig.Pwd, dbConfig.Roles.DB, dbConfig.Roles.Role)

	err = database.ConnectToDB()

	if err != nil {
		log.Fatal(err)
	}

	err = database.PingDatabase()

	if err != nil {
		log.Fatal(err)
	}

	log.Println("Connected To Database Successfully!..")

	/* START WEB SERVER with address hosted on environment - development or production */
	/* IF DEVELOPMENT SERVER - RUN DOCKER ISH*/
	/* IF DOCKER IS NOT RUNNING - BREAK */

	///* START */
	r := mux.NewRouter()
	w := mux.NewRouter()
	char := mux.NewRouter()

	r.HandleFunc("/equipment/{type}", equipment.TypeEquipmentHandler)
	char.HandleFunc("/char/{race}/{level}" , character.CharacterHandler)

	w.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("assets/static"))))



	http.Handle("/equipment/", r)
	http.Handle("/static/", w)
	http.Handle("/char/", char)

	r.Use(loggingMiddleware, setCorsHeaders)
	w.Use(loggingMiddleware, setCorsHeaders)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Content-Type", "image/png")
		w.Header().Set("Accept-Encoding", "gzip, deflate, br")


		log.Println(r.RequestURI)
		next.ServeHTTP(w, r)
	})
}

func setCorsHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func (w http.ResponseWriter, r* http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			return
		}
		next.ServeHTTP(w,r)
	})
}

/* Have additional Middleware for Auth & CORS */
