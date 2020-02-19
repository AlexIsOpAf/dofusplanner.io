package database

import (
	"encoding/json"
	"io/ioutil"
)

type MongoDB struct {
	collection string
}

type Config struct {
	User  string `json:"user"`
	Pwd   string `json:"pwd"`
	Roles struct {
		Role string `json:"role"`
		DB   string `json:"db"`
	} `json:"roles"`
}

func (config *Config) ReadInDBConfig() error {
	file, _ := ioutil.ReadFile("config/LocalDBConfig.json")
	err := json.Unmarshal(file, config)

	if err != nil {
		return err
	}
	return nil
}
