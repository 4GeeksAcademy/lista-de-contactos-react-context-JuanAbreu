import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light px-4">
    <Link to="/" className="navbar-brand fw-bold text-primary">
        <i className="fa-solid fa-address-book me-2"></i>
        Contact Manager
    </Link>
    <Link to="/add">
        <button className="btn btn-primary">
            <i className="fa-solid fa-plus me-2"></i>
            Add New Contact
        </button>
    </Link>
</nav>
	);
};