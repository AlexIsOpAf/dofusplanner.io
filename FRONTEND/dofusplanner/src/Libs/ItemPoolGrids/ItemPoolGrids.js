import React, {useEffect} from 'react';
import {createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {RETURN_ITEM, RETURN_PICTURE} from "../../Constants/ActionTypes";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Axios from "../../Axios";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minWidth: 200,
        width: '100%',
    },
    // paper: {
    //     height: '50vh',
    //     width: 100,
    //     backgroundColor:
    // },
    image: {
        position: 'relative',
        height: 125,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                // border: '4px solid currentColor', Almost impossible to ratio on small screens -- Revisit
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        // position: 'relative',
        // padding: '2%',
    },
    imageMarked: {
        // height: 3,
        // width: 18,
        // backgroundColor: theme.palette.common.white,
        // position: 'absolute',
        // bottom: -2,
        // left: 'calc(50% - 9px)',
        // transition: theme.transitions.create('opacity'),
    },
    itemDivisor: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px'

    }
}));

const NestedGrid = props => {
    const classes = useStyles();
    let typographyTheme = createMuiTheme();
    typographyTheme = responsiveFontSizes(typographyTheme);


    if (!props.equipment) {
        return null
    }


    const showItem = item => {
        console.log(item);
    };

    const statParser = (value, key) => {
        if ((value.Min > value.Max ||
            value.Min < value.Max) &&
            value.Max === 0
        ) {
            return (
                <div style={{textAlign: 'left'}} key={key}>
                    {value.Min} {key}
                </div>
            )
        } else {
            return (
                <div style={{textAlign: 'left'}} key={key}>
                    {value.Max} {key}
                </div>
            )
        }
    };
    // <img src={logo} className="App-logo" alt="logo"/>

    const returnTypography = item => {
        return (
            <ThemeProvider theme={typographyTheme}>
                <Typography
                    component="span"
                    variant="caption"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    <div style={{paddingBottom: '30%'}}>
                        <Typography component="span" variant="subtitle1" color="inherit">{item.Name}</Typography>
                        <br/>
                        <Typography component="span" variant="subtitle1" color="inherit">{item.Level}</Typography>
                        <br/>
                        <img src={`http://127.0.0.1:8080/static/${item.Image}`} className="App-logo" alt="404"/>
                        <br/>
                    </div>
                    <div style={{justify: 'center'}}>
                        {Object.entries(item.Stats).map(([key, value]) => (
                            statParser(value, key)
                        ))}
                        <span className={classes.imageMarked}/>
                    </div>

                </Typography>

            </ThemeProvider>
        )
    };

    const returnButtonCardWrapper = (itemPassingThrough) => {
        return (
            <React.Fragment>
                <ButtonBase
                    focusRipple
                    key={itemPassingThrough.ID}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: '100%',
                        height: 500
                    }}

                    onClick={() => props.handleState(true, itemPassingThrough.Image)}
                >
                    <span className={classes.imageBackdrop}/>


                    <span className={classes.imageButton}>
                        {returnTypography(itemPassingThrough)}
          </span>
                </ButtonBase>
            </React.Fragment>
        )
    };


    const returnWrapper = itemInEquipArray => {
        return (
            <React.Fragment>
                {returnButtonCardWrapper(itemInEquipArray)}
            </React.Fragment>
        )
    };

    const formRows = () => {
        return (
            <React.Fragment>
                {props.equipment.map(item => (
                    <Grid item xs={4} key={item.Name}>
                        {returnWrapper(item)}
                    </Grid>
                ))}
            </React.Fragment>
        )
    };

    return (
        <React.Fragment>
            {formRows()}
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    ...state.equipment,
    ...state.picture
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({type: RETURN_ITEM})
});

const BuildDynamicCards = props => {
    if (!props.equipmentArray) {
        return null
    }

    const dynamicCardContent = [];
    for (let i = 0; i < props.equipmentArray.length; i++) {
        if (props.equipmentArray.length > 2) {
            dynamicCardContent.push(
                <Grid container item xs={12} spacing={1} key={props.equipmentArray[i].ID}>
                    <NestedGrid equipment={props.equipmentArray.slice(i, i + 3)} handleState={props.onButtonClick} />
                </Grid>
            );
            i += 2;
            continue;
        } else {
            dynamicCardContent.push(
                <Grid container item xs={12} spacing={1}>
                    <NestedGrid equipment={props.equipmentArray.slice(i, i - (props.equipmentArray.length - 1))} handleState={props.onButtonClick} />
                </Grid>
            );
            break;
        }
    }
    return dynamicCardContent
};

const ItemPoolButtonGenerator = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.onLoad();
    });


    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <BuildDynamicCards onButtonClick={props.handleState}  equipmentArray={props.equipment}/>
            </Grid>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPoolButtonGenerator);