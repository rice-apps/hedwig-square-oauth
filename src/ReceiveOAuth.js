import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { OBTAIN_TOKEN_WORKER } from "./config";

function ReceiveOAuth() {
    const searchParams = new URLSearchParams(window.location.search);
    const [result, setResult] = useState(
        <div>
            Something went wrong. You must{" "}
            <Link to="/onboard">sign up here</Link> with your Square account to
            see this page.
        </div>,
    );

    useEffect(async () => {
        let changedResult;

        if (window.location.search === "") {
            changedResult = (
                <div>
                    Sorry, you must <Link to="/onboard">sign up here</Link> with
                    your Square account to see this page.
                </div>
            );
        } else if (searchParams.has("error")) {
            changedResult = (
                <div>
                    Sorry! Signup failed with code ${searchParams.get("error")}{" "}
                    for reason ${searchParams.get("error_description")}. If you
                    believe this is a mistake,{" "}
                    <Link to="/onboard">please sign up again here</Link>.
                </div>
            );
        } else if (searchParams.has("code")) {
            const data = {
                accessCode: searchParams.get("code"),
            };
            const workerResponse = fetch(OBTAIN_TOKEN_WORKER, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (workerResponse.status === 200) {
                changedResult = (
                    <div>
                        Thanks for signing up with Hedwig! Your vendor page will
                        be ready shortly.
                    </div>
                );
            } else if (workerResponse.status === 405) {
                changedResult = (
                    <div>
                        Please don't attempt to use anything other than POST. Go
                        back to{" "}
                        <Link to="/onboard">the onboarding endpoint</Link>.
                    </div>
                );
            } else {
                changedResult = (
                    <div>
                        Your access code is invalid. Please attempt{" "}
                        <Link to="/onboard">reauthorization here</Link>.
                    </div>
                );
            }
        } else {
            changedResult = (
                <div>
                    Sorry, but an unknown error has occurred. Please go{" "}
                    <Link to="/onboard">here</Link> to sign up again.
                </div>
            );
        }

        setResult(changedResult);
    }, [searchParams]);

    return result;
}

export default ReceiveOAuth;
