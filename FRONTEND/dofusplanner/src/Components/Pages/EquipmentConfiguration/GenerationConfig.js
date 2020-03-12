import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";

// import logo from '../../Shared/Assets/Carousel-Classes/0.jpg'

const characterClasses = {
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
};

const tutorialSteps = [
    {label: "Ecaflip", imgPath: require("../../Shared/Assets/Carousel-Classes/0.jpg")},
    {label: "Eniripsa", imgPath: require("../../Shared/Assets/Carousel-Classes/1.jpg")},
    {label: "Iop", imgPath: require("../../Shared/Assets/Carousel-Classes/2.jpg")},
    {label: "Cra", imgPath: require("../../Shared/Assets/Carousel-Classes/3.jpg")},
    {label: "Feca", imgPath: require("../../Shared/Assets/Carousel-Classes/4.jpg")},
    {label: "Sacrier", imgPath: require("../../Shared/Assets/Carousel-Classes/5.jpg")},
    {label: "Sadida", imgPath: require("../../Shared/Assets/Carousel-Classes/6.jpg")},
    {label: "Osamoda", imgPath: require("../../Shared/Assets/Carousel-Classes/7.jpg")},
    {label: "Enutrof", imgPath: require("../../Shared/Assets/Carousel-Classes/8.jpg")},
    {label: "Sram", imgPath: require("../../Shared/Assets/Carousel-Classes/9.jpg")},
    {label: "Xelor", imgPath: require("../../Shared/Assets/Carousel-Classes/10.jpg")},
    {label: "Pandawa", imgPath: require("../../Shared/Assets/Carousel-Classes/11.jpg")},
    {label: "Rogue", imgPath: require("../../Shared/Assets/Carousel-Classes/12.jpg")},
    {label: "Masqueraider", imgPath: require("../../Shared/Assets/Carousel-Classes/13.jpg")},
    {label: "Foggernaut", imgPath: require("../../Shared/Assets/Carousel-Classes/14.jpg")},
    {label: "Eliotrope", imgPath: require("../../Shared/Assets/Carousel-Classes/15.jpg")},
    {label: "Huppermage", imgPath: require("../../Shared/Assets/Carousel-Classes/16.jpg")},
    {label: "Ouginak", imgPath: require("../../Shared/Assets/Carousel-Classes/17.jpg")},
];


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        margin: 'auto'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        // height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.common.black,
    },
    img: {
        // height: 255,
        // maxWidth: 400,
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
    },
    textButtonRoot: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const ButtonText = (props) => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.textButtonRoot}>
                {Object.entries(characterClasses).map(([key, value]) => (
                    <Button onClick={() => props.activeKey(parseInt(key))} style={{color: 'white'}}>{value}</Button>
                ))}
            </div>
        </div>
    );
};


export default function GenerationConfig() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleChange = (newKey) => {
        setActiveStep(newKey)
    };


    return (
        <div>
            <div className={classes.root}>
                <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath}
                    alt={tutorialSteps[activeStep].label}
                />
            </div>
            <div style={{textAlign: 'center'}}>
                <ButtonText activeKey={handleChange}/>
            </div>
            <div style={{paddingTop: '2%'}}>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                    endIcon={<Icon>send</Icon>}
                    component={Link} to={`equipment/${activeStep}`}
                >
                    Generate
                </Button>
            </div>
        </div>

    );
}