import React from 'react'
import ReactDOM from 'react-dom'

import Alert from '../common/Alert'

export const backToLoginPage = () => {
  window.location.href = `/login`
}

const showServerInternalErrorModal = () => {
  const $root = document.getElementById('message-root')
  ReactDOM.render(<Alert></Alert>, $root)
}

const showSessionExpiredModal = () => {
  const $root = document.getElementById('message-root')
  ReactDOM.render(<Alert></Alert>, $root)
}

const redirectTo404Page = () => {
  window.location.href = `/404.html`
}

const redirectTo502Page = () => {
  window.location.href = '/502.html'
}

const showPhoneNumberNotFoundModal = () => {
  const $root = document.getElementById('message-root')
  ReactDOM.render(<Alert></Alert>, $root)
}

export {
  showServerInternalErrorModal,
  showSessionExpiredModal,
  redirectTo404Page,
  redirectTo502Page,
  showPhoneNumberNotFoundModal,
}
