import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function MaxWidthDialog(props) {
  console.log(props.data);
  const classes = useStyles();

  const formatDate = dateTime => {
    const date = dateTime.substring(0, dateTime.lastIndexOf(" ") + 1);
    const time = dateTime.substring(
      dateTime.lastIndexOf(" ") + 1,
      dateTime.length - 2
    );
    console.log(date);
    console.log(time);
    const formattedDate = moment(date + " " + time).format("YYYY-MM-DDTHH:mm");
    return formattedDate;
  };
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={props.open}
        onClose={props.hanndleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          User Name: {props.data.real_name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Your Activity Period</DialogContentText>
          {props.data.activity_periods &&
            props.data.activity_periods.map((item, index) => {
              const startDate = formatDate(item.start_time);
              const endDate = formatDate(item.end_time);
              return (
                <Fragment key={index}>
                  <TextField
                    id="datetime-start"
                    label="Start Time"
                    type="datetime-local"
                    value={startDate}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <TextField
                    id="datetime-end"
                    label="End Time"
                    type="datetime-local"
                    value={endDate}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Fragment>
              );
            })}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.hanndleClose}
            variant="outlined"
            color="secondary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
