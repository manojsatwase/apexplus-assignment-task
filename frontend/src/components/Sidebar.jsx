import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { id } = useParams();

  const { isEditScenarioActive, isEditVehicleActive } = useSelector((state) => state.editMode);

  const sidebarLinks = [
    { path: '/', title: 'Home' },
    {
      path: isEditScenarioActive ? `/editscenario/${id}` : '/addscenario',
      title: isEditScenarioActive ? 'Edit Scenario' : 'Add Scenario'
    },
    { path: '/allscenario', title: 'All Scenario' },
    {
      path: isEditVehicleActive ? `/editvehicle/${id}` : '/addvehicle',
      title: isEditVehicleActive ? 'Edit Vehicle' : 'Add Vehicle'
    },
  ];


  return (
    <aside className='sidebar'>
      <ul>
        {sidebarLinks?.map((link, index) => (
          <li key={index} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
