import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {TestContext} from "./contexts/TestContext";

/// a voir
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        alignItems: "center",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export default function SimpleAccordion() {
    /*
    const listeCompte = context.test.map(number =>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>Compte : {number.username_account}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Username : {number.username_account}
                    Password : {number.password_account}
                    Description : {number.description}
                </Typography>
            </AccordionDetails>
        </Accordion>

    )
    */
    const classes = useStyles();
    const context = useContext(TestContext);
    console.log("lol")
    console.log()


    return (
        <div className={classes.root}>
            "lol"
        </div>
    );
}