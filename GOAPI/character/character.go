package character

import (
	"github.com/gorilla/mux"
	"net/http"

	"github.com/AlexIsOpAf/dofusplanner.io/database"
	"github.com/AlexIsOpAf/dofusplanner.io/model"
)

/* Variables we need::
* Race = typeId - So we know what race we're getting
* Level of character = level - We sort by level of the character descending in equipment
*
 */
func CharacterHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	level := vars["level"]
	raceSelected, err := model.GetCharRaceInstance(vars["race"])

	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		_, _ = w.Write([]byte(` { "message": "` + err.Error() + `" }`))
		return
	}






}
