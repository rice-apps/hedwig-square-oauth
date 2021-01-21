import { useState, useEffect } from 'react';

import { OBTAIN_TOKEN_WORKER } from './config'
import { MessageBox, MessageLink } from './ReceiveOAuth.styles'

function ReceiveOAuth () {
  const searchParams = new URLSearchParams(window.location.search)
  const [result, setResult] = useState(
    <MessageBox>
      <div>
        Something went wrong. You must{' '}
        <MessageLink to='/onboard'>sign up here</MessageLink> with your Square
        account to see this page.
      </div>
    </MessageBox>
  )

  useEffect(() => {
    async function checkWithWorker () {
      let changedResult = (
        <MessageBox>
          <div>
            Sorry, but an unknown error has occurred. Please go{' '}
            <MessageLink to='/onboard'>here</MessageLink> to sign up again.
          </div>
        </MessageBox>
      )

      if (window.location.search === '') {
        changedResult = (
          <MessageBox>
            <div>
              Sorry, you must{' '}
              <MessageLink to='/onboard'>sign up here</MessageLink> with your
              Square account to see this page.
            </div>
          </MessageBox>
        )
      } else if (searchParams.has('error')) {
        changedResult = (
          <MessageBox>
            <div>
              Sorry! Signup failed with code ${searchParams.get('error')} for
              reason ${searchParams.get('error_description')}. If you believe
              this is a mistake,{' '}
              <MessageLink to='/onboard'>please sign up again here</MessageLink>
              .
            </div>
          </MessageBox>
        )
      } else if (searchParams.has('code')) {
        const data = {
          accessCode: searchParams.get('code')
        }

        changedResult = (
          <MessageBox>
            <div>
              Your access code is invalid. Please attempt{' '}
              <MessageLink to='/onboard'>reauthorization here</MessageLink>.
            </div>
          </MessageBox>
        )

        const workerResponse = await window.fetch(OBTAIN_TOKEN_WORKER, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if (workerResponse.status === 200) {
          changedResult = (
            <MessageBox>
              <div>
                Thanks for signing up with Hedwig! Your vendor page will be
                ready shortly.
              </div>
            </MessageBox>
          )
        } else if (workerResponse.status === 405) {
          changedResult = (
            <MessageBox>
              <div>
                Please don't attempt to use anything other than POST. Go back to{' '}
                <MessageLink to='/onboard'>the onboarding endpoint</MessageLink>
                .
              </div>
            </MessageBox>
          )
        }
      }

      setResult(changedResult)
    }

    checkWithWorker()
  }, [searchParams])

  return result
}

export default ReceiveOAuth
