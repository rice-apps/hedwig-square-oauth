import React from "react";

import {
    SQUARE_CONNECTION_BASE_URL,
    SQUARE_CLIENT_ID,
    HEDWIG_VENDOR_PERMISSIONS,
} from "./config";

const SQUARE_AUTH_PAGE = `${SQUARE_CONNECTION_BASE_URL}oauth2/authorize?client_id=${SQUARE_CLIENT_ID}&scope=${HEDWIG_VENDOR_PERMISSIONS.join(
    "+",
)}&state=82201dd8d83d23cc8a48caf52ba4f4fb`;

function OAuthLink() {
    return (
        <div>
            <a href={SQUARE_AUTH_PAGE}>
                Click here to grant Hedwig permission to access your Square
                account!
            </a>
        </div>
    );
}

export default OAuthLink;
