import React from 'react'
import { Button } from 'react-bootstrap'

function Login({user,setUser}) {
  return (
    <div>
      <Button onClick={() => setUser(!user)} >
        {user ? "deconnecter" : "connect"}
      </Button>
    </div>
  );
}

export default Login;


