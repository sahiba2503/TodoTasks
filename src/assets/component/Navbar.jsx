import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  return (
    <div className='navbaritems'>
      <button onClick={() => navigate("/Manage")}>Manage</button>
      <button onClick={() => navigate("/View")}>View</button>
    </div>
  );
}

export default Navbar;
