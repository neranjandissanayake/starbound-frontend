import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/PageComponents/Sidebar/ProfileSidebar/ProfileSidebar';
import Footer from '../components/PageComponents/Footer';
import Header from '../components/PageComponents/Header/Header';
import { SidebarItem } from '../components/PageComponents/Sidebar/ProfileSidebar/SidebarItem';
import sidebarMenuItems from '../lists/sidebarMenuItems';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '../components/Common/Loading'; // <-- make sure this import is correct

const ProfileLayout: React.FC = () => {
  const { role, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !role) {
      setError(null); // Clear any existing error
    }
  }, [loading, role]);

  // Filter sidebar items based on the role (admin or customer)
  const filteredMenuItems = sidebarMenuItems.filter((item) => {
    if (item.type === 'all') {
      return true;
    }
    return item.type === role;
  });

  return (
    <>
      <Header layout="profile" />
      <div className="profile-content">
        <div className="flex items-start justify-between">
          <Sidebar>
            {filteredMenuItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                to={item.to}
                alert={item.alert}
                subLinks={item.subLinks}
              />
            ))}
          </Sidebar>
          <div className="flex flex-col w-full pl-0 md:space-y-4">
            {loading ? (
              <div className="flex justify-center items-center h-full py-20">
                <LoadingSpinner />
              </div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileLayout;
