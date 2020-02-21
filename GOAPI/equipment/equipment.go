package equipment

import (
	"github.com/gorilla/mux"
	"log"
	"net/http"
)


/* Main Handler function that redirects to the correct sub handler */
/* I.e: /equipment/{hats}/ Will redirect to the hat handler */

func EquipmentHandler (w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	typeId := vars["type"]
	log.Print("Type ID: " + typeId)
	w.Write([]byte("Hello"))
}