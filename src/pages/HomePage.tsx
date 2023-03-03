import { signInWithPopup } from "firebase/auth"
import { Providers, auth } from "../config/firebase"

import { useNavigate } from 'react-router-dom';

export default function Home () {

  const navigate = useNavigate();

  

  const handleSignIn = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if (response.user) {
      navigate('/data')
    }
  }
  


  return (
    <div>
      This is a library database.
      { !auth.currentUser ?
      <button type='button' onClick={handleSignIn}>sign IN</button>
      :
      <p>You are signed in.</p>
      }
    </div>
  )
}