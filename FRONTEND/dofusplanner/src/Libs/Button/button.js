import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const buildButton = (props) => {
    const imagesToReturn = [];
    Array.from(props.props).map(valueContainer => {
        imagesToReturn.push(
            {
                url: '/static/images/grid-list/camera.jpg', // Leave atm but build when we do something
                title: valueContainer.title,
                width: `${(100 / props.props.length)}%`,
                ID: valueContainer.ID.toString(),
                linkToQueryPage: valueContainer.linkTo
            },
        )
    });
    return imagesToReturn
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        minWidth: 225,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 100,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        margin: theme.spacing(1),
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
        width: '60px',
        height: '60px',
        backgroundPosition: 'center'
        // backgroundPosition: 'center 40%',
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
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const BackgroundImageReturnLink = (image) => {
    const classes = useStyles();
    if (!image) {
        return null
    }

    return (
        <span
            className={classes.imageSrc}
            style={{
                backgroundImage: `url(http://127.0.0.1:8080/static/${image})`,
            }}
        />
    )
};

export default function EquipmentButton(props) {
    const classes = useStyles();

    console.log(props.style);

    return (
        <div className={classes.root} style={props.style}>
            {buildButton(props).map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: '100%',
                    }}
                    onClick={() => props.handleState(false, image.ID)}
                >

                    <BackgroundImageReturnLink image={props.Image} />
                    <span className={classes.imageBackdrop}/>
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {image.title}
                <span className={classes.imageMarked}/>
            </Typography>
          </span>
                </ButtonBase>
            ))}
        </div>
    );
}