import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:02:00",
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:12:00",
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:22:00",
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:26:00",
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:31:00",
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'FirstName LastName'
    },
    createdAt: "2020-10-18T14:37:00",
    status: 'delivered'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order Ref
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Time
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.customer.name}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('h:mm:ss a')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
