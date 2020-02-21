package database

import (
	"context"
	"encoding/json"
	"fmt"
	_ "github.com/AlexIsOpAf/dofusplanner.io/equipment"
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

const query = `{"$eq" : "200"}`

var filter = bson.M{"Name": bson.M{"$eq": "Ilyzaelle Shield"}}

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

func ShowCollections() error {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	collection := MongoDB.Database("dofusPlannerio").Collection("shields")

	cursor, err := collection.Find(ctx, filter)
	if err != nil {
		return err
	}

	for cursor.Next(ctx) {
		var p Equipment
		if err := cursor.Decode(&p); err != nil {
			return err
		}

		fmt.Println(p.Name)
		fmt.Printf("\nMongoFields: %+v\n", p.Stats["1"]["Min"])
	}

	return nil

}

//db.createUser({user: "myUserAdmin",pwd: passwordPrompt(),roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]})
