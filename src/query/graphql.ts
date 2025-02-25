import { gql } from "graphql-request";

export const GET_ALL_ORDERS_BY_OWNER = gql`
  query getOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAt
      orderDirection: desc
      where: { owner: $owner }
    ) {
      id
      owner
      inputToken
      outputToken
      inputAmount
      minReturn
      status
      createdTxHash
      createdAt
      updatedAt
      secret
      witness
      bought
      cancelledTxHash
      executedTxHash
    }
  }
`;

export const GET_ALL_OPEN_ORDERS_BY_OWNER = gql`
  query getOpenOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAt
      orderDirection: desc
      where: { owner: $owner, status: open }
    ) {
      id
      owner
      inputToken
      outputToken
      inputAmount
      minReturn
      status
      createdTxHash
      createdAt
      updatedAt
      secret
      witness
    }
  }
`;

export const GET_ALL_PAST_ORDERS_BY_OWNER = gql`
  query getPastOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAt
      orderDirection: desc
      where: { owner: $owner, status_not: open }
    ) {
      id
      owner
      inputToken
      outputToken
      inputAmount
      minReturn
      status
      createdTxHash
      createdAt
      updatedAt
      secret
      witness
      bought
      cancelledTxHash
      executedTxHash
    }
  }
`;

export const GET_ALL_EXECUTED_ORDERS_BY_OWNER = gql`
  query getExecutedOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAt
      orderDirection: desc
      where: { owner: $owner, status: executed }
    ) {
      id
      owner
      inputToken
      outputToken
      inputAmount
      minReturn
      status
      createdTxHash
      createdAt
      updatedAt
      secret
      witness
      bought
      executedTxHash
    }
  }
`;

export const GET_ALL_CANCELLED_ORDERS_BY_OWNER = gql`
  query getCancelledOrdersByOwner($owner: String) {
    orders(
      first: 1000
      orderBy: updatedAt
      orderDirection: desc
      where: { owner: $owner, status: cancelled }
    ) {
      id
      owner
      inputToken
      outputToken
      inputAmount
      minReturn
      status
      createdTxHash
      createdAt
      updatedAt
      secret
      witness
      cancelledTxHash
    }
  }
`;
