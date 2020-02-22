package equipment

import (
	"encoding/json"
	_ "fmt"
	"github.com/AlexIsOpAf/dofusplanner.io/database"
	"github.com/AlexIsOpAf/dofusplanner.io/model"
	"github.com/gorilla/mux"
	"net/http"
)

var DBTypes = map[string]string{
	"0": "boots",
	"1": "cloaks",
	"2": "amulets",
	"3": "rings",
	"4": "belts",
	"5": "shields",
	"6": "hats",
}

/* Variables we need::
* Type of equipment = typeId - So we know what collection we're getting
* Level of character = level - We sort by level of the character descending
*
*/
func TypeEquipmentHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	typeId := vars["type"]
	collectionName, err := model.GetCollectionInstance(typeId)

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

	equipment, err := database.ShowCollection(collectionName)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

	/* Convert stats to numbers */
	for i := 0; i < len(equipment); i ++ {
		equipment[i].Stats , err = buildStats(equipment[i].Stats)
		if err != nil {
			equipment = append(equipment[:i] , equipment[i + 1:]...)
		}
	}


	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}

	_ = json.NewEncoder(w).Encode(equipment)

}

/* Helper function to build stats */
func buildStats(stats map[string]map[string]int) (map[string]map[string]int,error) {
	statReturn := map[string]map[string]int{}
	for k , v := range stats {
		statKey, err := model.GetStatInstance(k)
		if err != nil {
			return nil, err
		}
		statReturn[statKey] = v
	}
	return statReturn, nil
}

