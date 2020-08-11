const HEDWIG_VENDOR_PERMISSIONS = process.env.REACT_APP_HEDWIG_VENDOR_PERMISSIONS.split(
  ';'
)
const OBTAIN_TOKEN_WORKER = process.env.REACT_APP_OBTAIN_TOKEN_WORKER
const SQUARE_CLIENT_ID = process.env.REACT_APP_SQUARE_CLIENT_ID
const SQUARE_CONNECTION_BASE_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://connect.squareup.com/'
      : 'https://connect.squareupsandbox.com/'

export {
  HEDWIG_VENDOR_PERMISSIONS,
  OBTAIN_TOKEN_WORKER,
  SQUARE_CONNECTION_BASE_URL,
  SQUARE_CLIENT_ID
}
