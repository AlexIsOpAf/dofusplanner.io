package character

import (
	"fmt"
	"github.com/gorilla/mux"
	"net/http"

	//"github.com/AlexIsOpAf/dofusplanner.io/database"
	//"github.com/AlexIsOpAf/dofusplanner.io/model"
)

type CharacterClass struct {
	ID                  int               `json:"ID" bson:"ID"`
	Items               map[string]string `json:"Items" bson:"Items"`
	Name                string            `json:"Name" bson:"Name"`
	Race                string            `json:"Race" bson:"Race"`
	PersonCollection    int               `json:"PersonCollection" bson:"PersonCollection"`
	CharacteristicStats characterStats    `json:"CharacteristicStats" bson:"CharacteristicStats"`
	Level               int               `json:"Level" bson:"Level"`
}

type characterStats struct {
	Vitality     int
	Agility      int
	Chance       int
	Strength     int
	Intelligence int
	Wisdom       int
}

/* Variables we need::
* Race = typeId - So we know what race we're getting
* Level of character = level - We sort by level of the character descending in equipment
*
 */

func CharHandler(charRouter *mux.Router) {
	s := charRouter.PathPrefix("/char/").Subrouter()
	s.HandleFunc("/{ID}", charCreationHandler)
	s.HandleFunc("/{ID}/{itemTypeID}/{itemID}", charAppendItemHandler)

	//vars := mux.Vars(r)
	//level := vars["level"]
	//raceSelected, err := model.GetCharRaceInstance(vars["race"])
	//
	//if err != nil {
	//	w.WriteHeader(http.StatusNotFound)
	//	_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
	//	return
	//}

}

func charCreationHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("I've been called 2")
}

func charAppendItemHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("I've been called 3")
}
