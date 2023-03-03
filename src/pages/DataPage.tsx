import Table from "../components/Data"
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase"
import { useNavigate } from 'react-router-dom';

export default function DataPage () {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate('/');
  }
  return (
    <div>
      <button type='button' onClick={handleSignOut}>sign OUT</button>
      <Table />
    </div>
  )
}
