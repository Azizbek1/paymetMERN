import "./AdminMain.scss";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand
  } from 'mdb-react-ui-kit';


const AdminMain = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="admin">
      <MDBNavbar light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
              height="30"
              alt=""
              loading="lazy"
            />
            AdminPanel
          </MDBNavbarBrand>
			<ul className="admin__nav">
				<li className="admin__item">
					<button onClick={handleLogout}  className="btn btn-danger">Chiqish</button>
				</li>
			</ul>


        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default AdminMain;
