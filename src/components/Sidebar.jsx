import { NavLink } from "react-router-dom";
import AkademiLogo from "../assets/images/logo/AkademiLogo.svg";
import Home from "../assets/images/icons/Home.svg";
import Finance from "../assets/images/icons/Finance.svg";
import Students from "../assets/images/icons/Student.svg";
import Teachers from "../assets/images/icons/Teacher.svg";
import User from "../assets/images/icons/User.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img
          src={AkademiLogo}
          alt="Logo da Akademi"
          className="sidebar__logo"
        />
        <h1 className="sidebar__title">Akademi</h1>
      </div>
      <nav className="sidebar__nav">
        <NavLink to="Dashboard" className="sidebar__link">
          <img src={Home} alt="" className="sidebar__icon" />
          Dashboard
        </NavLink>
        <NavLink to="Students" className="sidebar__link">
          <img src={Students} alt="" className="sidebar__icon" />
          Students
        </NavLink>
        <NavLink to="AddStudents" className="sidebar__link">
          <img src={Students} alt="" className="sidebar__icon" />
          Add Students
        </NavLink>
        <NavLink to="Teachers" className="sidebar__link">
          <img src={Teachers} alt="" className="sidebar__icon" />
          Teachers
        </NavLink>
        <NavLink to="Finance" className="sidebar__link">
          <img
            src={Finance}
            alt="ícone mão segurando uma moeda"
            className="sidebar__icon"
          />
          Finance
        </NavLink>
        <NavLink to="User" className="sidebar__link">
          <img src={User} alt="ícone de usuário" className="sidebar__icon" />
          User
        </NavLink>
      </nav>
    </aside>
  );
}
