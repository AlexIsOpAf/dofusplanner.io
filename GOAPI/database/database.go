package database

import (
	"context"
	"encoding/json"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"io/ioutil"
	"time"
)

var MongoDB *mongo.Client

type Config struct {
	User  string `json:"user"`
	Pwd   string `json:"pwd"`
	Roles struct {
		Role string `json:"role"`
		DB   string `json:"db"`
	} `json:"roles"`
}
var mOptions = options.Find()

type Equipment struct {
	ID         int                       `json:"ID" bson:"ID"`
	Type       int                       `json:"Type" bson:"Type"`
	Level      int                       `json:"Level" bson:"Level"`
	Image      string                    `json:"Image" bson:"Image"`
	Name       string                    `json:"Name" bson:"Name"`
	Stats      map[string]map[string]int `json:"Stats" bson:"Stats"`
	Conditions string                    `json:"Conditions" bson:"Conditions"`
}



func (config *Config) ReadInDBConfig() error {
	file, _ := ioutil.ReadFile("config/LocalDBConfig.json")
	err := json.Unmarshal(file, config)

	if err != nil {
		return err
	}
	return nil
}

func ConnectToDB() (err error) {
	MongoDB, err = mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:localpassword@localhost/dofusPlannerio?authSource=dofusPlannerio"))

	if err != nil {
		return err
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = MongoDB.Connect(ctx)
	return nil
}

func PingDatabase() error {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	err := MongoDB.Ping(ctx, readpref.Primary())
	if err != nil {
		return err
	}
	return nil
}

func ShowCollection(collectionName string) ([]Equipment ,error) {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	// .Collection(func Lookup(TypeID)  )
	collection := MongoDB.Database("dofusPlannerio").Collection(collectionName)

	var equipmentContainer []Equipment

	// Sort by `_id` field descendin
	mOptions.SetSort(bson.D{{"Level", -1}})

	// Limit by 10 documents only
	mOptions.SetLimit(30)

	cursor, err := collection.Find(ctx, bson.M{}, mOptions)
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var p Equipment
		if err := cursor.Decode(&p); err != nil {
			return nil, err
		}
		equipmentContainer = append(equipmentContainer, p)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}


	return equipmentContainer, nil

}

//db.createUser({user: "myUserAdmin",pwd: passwordPrompt(),roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]})
