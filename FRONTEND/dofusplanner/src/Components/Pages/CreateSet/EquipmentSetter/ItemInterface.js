import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import EquipmentButton from "../../../../Libs/Button/button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
        // margin: theme.spacing(2),
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
    {
        title: 'Shields',
        linkTo: "/equipment/5",
        ID: '5' //Hardcoded or have an enum
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

export const thirdArrayRow = [
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Trophies',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
];

const StandardItemInterface = props => {
    const classes = useStyles();

    if (!props.showStandard) {
        return null
    }

    return (
        <div className={classes.root}>

            {/*<EquipmentButton*/}
            {/*    props={thirdArrayRow}*/}
            {/*    handleState={props.handleState}*/}
            {/*    buttonIDChange={props.IdClicked}*/}
            {/*/>*/}


            <EquipmentButton
                props={firstArrayRow}
                handleState={props.handleState}
                buttonIDChange={props.IdClicked}/>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: 300,
                width: '100%',
            }}>
                <img src={require(`../../../Shared/Assets/Equipment-Classes/${props.classImageSource}.png`)}/>
            </div>

            <EquipmentButton
                props={firstArrayRow}
                handleState={props.handleState}
                buttonIDChange={props.IdClicked}/>



                {/*<EquipmentButton*/}
                {/*    props={thirdArrayRow}*/}
                {/*    handleState={props.handleState}*/}
                {/*    buttonIDChange={props.IdClicked}*/}
                {/*/>*/}



            {/*<img src={require(`../../../Shared/Assets/Equipment-Classes/${props.classImageSource}.png`)}/>*/}


            {/*<div>*/}
            {/*    <EquipmentButton*/}
            {/*        props={thirdArrayRow}*/}
            {/*        handleState={props.handleState}*/}
            {/*        buttonIDChange={props.IdClicked}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div style={{flexDirection: 'column'}}>*/}

            {/*<EquipmentButton*/}
            {/*    props={secondArray}*/}
            {/*    handleState={props.handleState}*/}
            {/*    buttonIDChange={props.IdClicked}*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<div style={{height: '30%'}}>*/}
            {/*    <img src={require(`../../../Shared/Assets/Equipment-Classes/${props.classImageSource}.png`)}*/}
            {/*         className="App-logo" alt="logo"/>*/}
            {/*</div>*/}

            {/*<div style={{height: '30%'}}>*/}
            {/*    <EquipmentButton*/}
            {/*        props={secondArray}*/}
            {/*        handleState={props.handleState}*/}
            {/*        buttonIDChange={props.IdClicked}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div style={{height: '10%'}}>*/}
            {/*    <EquipmentButton props={thirdArrayRow} />*/}
            {/*</div>*/}
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
                showStandard={props.showStandardPage}
                classImageSource={props.imageSource}
            />
        </React.Fragment>
    );
}