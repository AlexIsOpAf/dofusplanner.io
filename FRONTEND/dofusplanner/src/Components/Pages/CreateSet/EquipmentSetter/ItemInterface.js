import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import logo from '../../../Shared/Assets/Xelor.png'

import EquipmentButton from "../../../../Libs/Button/button";
import {BrowserRouter as Router} from "react-router-dom";
import ItemPoolMain from "../../../ItemPool/ItemPoolMain";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: "center",
        // color: '#1f1f1f',
        color: 'primary'
        // backgroundColor: '#414141'
    }
}));

const firstArrayRow = [
    {
        title: 'Hats',
        linkTo: "/equipment/6",
        ID: '6' //Hardcoded or have an enum
    },
    {
        title: 'Amulets',
        linkTo: "/equipment/2",
        ID: '2' //Hardcoded or have an enum
    },
    {
        title: 'Belts',
        linkTo: "/equipment/4",
        ID: '4' //Hardcoded or have an enum
    },
    {
        title: 'Cloaks',
        linkTo: "/equipment/1",
        ID: '1' //Hardcoded or have an enum
    },
];

const secondArray = [
    {
        title: 'Ring 1',
        linkTo: "/equipment/3",
        ID: '3' //Hardcoded or have an enum
    },
    {
        title: 'Shields',
        linkTo: "/equipment/5",
        ID: '5' //Hardcoded or have an enum
    },
    {
        title: 'Boots',
        linkTo: "/equipment/0",
        ID: '0' //Hardcoded or have an enum
    },
    {
        title: 'Ring 2',
        linkTo: "/equipment/3",
        ID: '3' //Hardcoded or have an enum
    },
];

// const thirdArrayRow = [
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
//     {
//         title: 'Trophies',
//         linkTo: "/equipment/99",
//         ID: '99' //Hardcoded or have an enum
//     },
// ];

const ShowItemPool = props => {
    if (props.props.showStandardPage) {
        return null
    }

    return (
        <ItemPoolMain ID={props.props.showIDClicked}/>
    )
};

const StandardItemInterface = props => {
    const classes = useStyles();

    if (!props.showStandard) {
        return null
    }

    return (
        <div className={classes.root}>
            <Router>
                <div style={{height: '30%'}}>
                    <EquipmentButton
                        props={firstArrayRow}
                        handleState={props.handleState}
                        buttonIDChange={props.IdClicked}
                    />
                </div>
                <div style={{height: '30%'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div style={{height: '30%'}}>
                    <EquipmentButton
                        props={secondArray}
                        handleState={props.handleState}
                        buttonIDChange={props.IdClicked}
                    />
                </div>
                {/*<div style={{height: '10%'}}>*/}
                {/*    <EquipmentButton props={thirdArrayRow} />*/}
                {/*</div>*/}
            </Router>
        </div>
    )
};


export default function EquipmentBody(props) {
    return (
        <React.Fragment>
            <StandardItemInterface
                handleState={props.handleState}
                showIDClicked={props.showIDClicked}
                IdClicked={props.buttonIdClicked}
                showStandard={props.showStandardPage}/>
            <ShowItemPool props={props}/>
        </React.Fragment>
    );
}