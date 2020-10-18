import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Manage dashboard"
          title="Analytics"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Statistics
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Orders Processed"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Orders Routed Away"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Efficiency"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Ratings"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Popularity Measure"
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Graphics
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Business Heatmap"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Order Fraction Completed"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Orders Rerouter by Hour"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
