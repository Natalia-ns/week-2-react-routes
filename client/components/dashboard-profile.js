import React from 'react'

import { Link, useParams } from 'react-router-dom'

const DashboardProfile = () => {
  const { username } = useParams()
  return (
    <div>
      <div id="title"> Profile </div>
      <div id="username"> {username} </div>
      <Link to="/dashboard/main"> Go To Main </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
