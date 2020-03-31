import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import Calendar from "./calendar/Calendar";
import Typography from "@material-ui/core/Typography";
import { pink, green } from "@material-ui/core/colors";

export default function ActivtyModal(props) {
  const classes = useStyles();
  const [viewAll, setViewAll] = useState(false);
  let myEvents = [];

  const formatDate = (dateTime, title) => {
    const date = dateTime.substring(0, dateTime.lastIndexOf(" ") + 1);
    const time =
      " " + dateTime.substring(dateTime.lastIndexOf(" ") + 1, dateTime.length);

    const formattedDate = moment(date).format("YYYY-MM-DD");
    myEvents = [...myEvents, { title: title + time, date: formattedDate }];

    return formattedDate + time;
  };

  useEffect(() => {
    setViewAll(false);
  }, [props]);

  const renderDate = () => {
    return props.data.activity_periods.map((item, index) => {
      const startDate = formatDate(item.start_time, "start");
      const endDate = formatDate(item.end_time, "end");
      return (
        <Fragment key={index}>
          <TextField
            id="datetime-start"
            label="Start Time"
            type="text"
            value={startDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            disabled
          />
          <TextField
            id="datetime-end"
            label="End Time"
            type="text"
            value={endDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            disabled
          />
        </Fragment>
      );
    });
  };

  return (
    <Dialog
      maxWidth="md"
      open={props.open}
      onClose={props.hanndleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">
        <Typography className={classes.green}>
          {"User Name: "}
          <span className={classes.pink}>{props.data.real_name}</span>
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Your Activity Period</DialogContentText>
        {props.data.activity_periods && renderDate()}
        {viewAll && (
          <div className={classes.calender}>
            <Calendar eventsList={myEvents} />
          </div>
        )}
      </DialogContent>
      <DialogActions className={classes.actionButtons}>
        <Button
          onClick={() => setViewAll(!viewAll)}
          variant="outlined"
          color="primary"
        >
          {viewAll ? "Hide Calendar" : "View All"}
        </Button>
        <Button
          onClick={props.hanndleClose}
          variant="outlined"
          color="secondary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

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
    marginTop: theme.spacing(2),
    width: 200
  },
  actionButtons: {
    margin: "1rem 2rem"
  },
  green: {
    color: green[500]
  },
  pink: {
    color: pink[500]
  },
  calender: {
    marginTop: "2rem"
  }
}));
