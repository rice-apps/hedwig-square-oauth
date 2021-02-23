const HEDWIG_VENDOR_PERMISSIONS = process.env.REACT_APP_HEDWIG_VENDOR_PERMISSIONS.split(
  ';'
)
const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL
const SQUARE_CLIENT_ID = process.env.REACT_APP_SQUARE_CLIENT_ID
const SQUARE_CONNECTION_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://connect.squareup.com/'
    : 'https://connect.squareupsandbox.com/'

export {
  HEDWIG_VENDOR_PERMISSIONS,
  GRAPHQL_URL,
  SQUARE_CONNECTION_BASE_URL,
  SQUARE_CLIENT_ID
}
