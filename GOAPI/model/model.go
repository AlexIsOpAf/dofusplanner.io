package model

import "errors"


var CharacterRace = map[string]string {
	"0": "Ecaflip",
	"1": "Eniripsa",
	"2": "Iop",
	"3": "Cra",
	"4": "Feca",
	"5": "Sacrier",
	"6": "Sadida",
	"7": "Osamoda",
	"8": "Enutrof",
	"9": "Sram",
	"10": "Xelor",
	"11": "Pandawa",
	"12": "Rogue",
	"13": "Masqueraider",
	"14": "Foggernaut",
	"15": "Eliotrope",
	"16": "Huppermage",
	"17": "Ouginak",
}



/* We will build these from the DB from config so we keep the referential integrity */
/* But for now we can hard code these */
var DBTypes = map[string]string{
	"0": "boots",
	"1": "cloaks",
	"2": "amulets",
	"3": "rings",
	"4": "belts",
	"5": "shields",
	"6": "hats",
}

/* We will build these from the DB from config so we keep the referential integrity */
/* But for now we can hard code these */
var StatTypes = map[string]string{
	"0":   "Initiative",
	"1":   "Vitality",
	"2":   "Pods",
	"3":   "Strength",
	"4":   "Intelligence",
	"5":   "Agility",
	"6":   "Chance",
	"7":   "Critical Resistance",
	"8":   "Pushback Resistance",
	"9":   "Power",
	"10":  "Power (Traps)",
	"11":  "Static Neutral Resistance",
	"12":  "Static Earth Resistance",
	"13":  "Static Fire Resistance",
	"14":  "Static Water Resistance",
	"15":  "Static Air Resistance",
	"16":  "Wisdom",
	"17":  "Prospecting",
	"18":  "Lock",
	"19":  "Dodge",
	"20":  "Critical Damage ",
	"21":  "Pushback Damage ",
	"22":  "Damage (Traps)",
	"23":  "Neutral Resistance",
	"24":  "Earth Resistance",
	"25":  "Fire Resistance",
	"26":  "Water Resistance",
	"27":  "Air Resistance",
	"28":  "Mp reduction",
	"29":  "Ap reduction",
	"30":  "Mp Resistance",
	"31":  "Ap Resistance",
	"32":  "Heal",
	"33":  "Critical hits",
	"34":  "Reflect Damage ",
	"35":  "Spell Damage ",
	"36":  "Ranged Damage ",
	"37":  "Ranged Resistance",
	"38":  "Weapon Damage ",
	"39":  "Melee Damage ",
	"40":  "Melee Resistance",
	"41":  "Damage",
	"42":  "Summon",
	"43":  "Range",
	"44":  "Mp",
	"45":  "Ap",
	"46":  "Neutral Damage ",
	"47":  "Earth Damage ",
	"48":  "Fire Damage ",
	"49":  "Water Damage ",
	"50":  "Air Damage ",
	"51":  "Weapon neutral Damage ",
	"52":  "Weapon earth Damage ",
	"53":  "Weapon fire Damage ",
	"54":  "Weapon water Damage ",
	"55":  "Weapon air Damage ",
	"56":  "Hunting weapon",
	"57":  "Hp restored",
	"58":  "Neutral steal",
	"59":  "Water steal",
	"60":  "Earth steal",
	"61":  "Fire steal",
	"62":  "Air steal",
	"63":  "Weapon remove ap target",
	"64":  "Vitality",
	"65":  "Strength",
	"66":  "Intelligence",
	"67":  "Agility",
	"68":  "Chance",
	"69":  "Critical Resistance",
	"70":  "Pushback Resistance",
	"71":  "Wisdom",
	"72":  "Prospecting",
	"73":  "Lock",
	"74":  "Dodge",
	"75":  "Critical Damage",
	"76":  "Pushback Damage",
	"77":  "Neutral Resistance",
	"78":  "Earth Resistance",
	"79":  "Fire Resistance",
	"80":  "Water Resistance",
	"81":  "Air Resistance",
	"82":  "Mp reduction",
	"83":  "Ap reduction",
	"84":  "Mp Resistance",
	"85":  "Ap Resistance",
	"86":  "Heal",
	"87":  "Critical Hits",
	"88":  "Spell Damage",
	"89":  "Ranged Damage",
	"90":  "Ranged Resistance",
	"91":  "Weapon Damage",
	"92":  "Melee Damage",
	"93":  "Melee Resistance",
	"94":  "Range",
	"95":  "Mp",
	"96":  "Ap",
	"97":  "Neutral Damage",
	"98":  "Earth Damage",
	"99":  "Fire Damage",
	"100": "Water Damage",
	"101": "Air Damage",
	"102": "Initiative",
	"103": "Pods",
}


func GetCollectionInstance(mIndex string) (string, error) {
	_, ok := DBTypes[mIndex]
	if ok {
		return DBTypes[mIndex], nil
	}
	return "", errors.New("collection type not resolved")
}

func GetStatInstance(mIndex string) (string, error) {
	_, ok := StatTypes[mIndex]
	if ok {
		return StatTypes[mIndex], nil
	}
	return "", errors.New("stat type does not exist")
}

func GetCharRaceInstance(mIndex string) (string, error) {
	_, ok := CharacterRace[mIndex]
	if ok {
		return CharacterRace[mIndex], nil
	}
	return "", errors.New("race does not exist")
}

