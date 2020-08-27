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

const secondArray = [
    {
        title: 'Hats',
        linkTo: "/equipment/6",
        ID: '6' //Hardcoded or have an enum
    },
    {
        title: 'Weapon',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Ring 2',
        linkTo: "/equipment/3",
        ID: '3' //Hardcoded or have an enum
    },
    {
        title: 'Cloaks',
        linkTo: "/equipment/1",
        ID: '1' //Hardcoded or have an enum
    },
    {
        title: 'Pets',
        linkTo: "/equipment/6",
        ID: '6' //Hardcoded or have an enum
    },
];

// {
//     title: 'Belts',
//         linkTo: "/equipment/4",
//     ID: '4' //Hardcoded or have an enum
// },
// {
//     title: 'Amulets',
//         linkTo: "/equipment/2",
//     ID: '2' //Hardcoded or have an enum
// },
// {
//     title: 'Shields',
//         linkTo: "/equipment/5",
//     ID: '5' //Hardcoded or have an enum
// },

const firstArrayRow = [
    {
        title: 'Amulets',
        linkTo: "/equipment/2",
        ID: '2' //Hardcoded or have an enum
    },
    {
        title: 'Shields',
        linkTo: "/equipment/5",
        ID: '5' //Hardcoded or have an enum
    },
    {
        title: 'Ring 1',
        linkTo: "/equipment/3",
        ID: '3' //Hardcoded or have an enum
    },
    {
        title: 'Belts',
        linkTo: "/equipment/4",
        ID: '4' //Hardcoded or have an enum
    },
    {
        title: 'Boots',
        linkTo: "/equipment/0",
        ID: '0' //Hardcoded or have an enum
    },
];

export const thirdArrayRow = [
    {
        title: 'Dofus',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Dofus',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Dofus',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Dofus',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Dofus',
        linkTo: "/equipment/99",
        ID: '99' //Hardcoded or have an enum
    },
    {
        title: 'Dofus',
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

            <EquipmentButton
                style={{flexWrap : 'wrap'}}
                props={firstArrayRow}
                handleState={props.handleState}
                buttonIDChange={props.IdClicked}/>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: 300,
                width: '100%',
                margin: 'auto'
            }}>
                <img style={{margin: 'auto'}} src={require(`../../../Shared/Assets/Equipment-Classes/${props.classImageSource}.png`)}/>
            </div>

            <EquipmentButton
                style={{flexWrap : 'wrap'}}
                props={secondArray}
                handleState={props.handleState}
                buttonIDChange={props.IdClicked}/>
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