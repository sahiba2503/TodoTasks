import { useNavigate } from "react-router-dom"

function SideNavbar() {
    let navigate = useNavigate();
  return (
    <div className="sideNavbarItems">
      <li onClick={()=>navigate("/View/Active")}>Active</li>
      <li onClick={()=>navigate("/View/Progress")}>Progress</li>
      <li onClick={()=>navigate("/View/Done")}>Done</li>
      <li onClick={()=>navigate("/View/Backlog")}>Backlog</li>
      <li onClick={()=>navigate("/View/Expire")}>Expire</li>
    </div>
  )
}

export default SideNavbar
