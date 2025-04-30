import React from 'react';
import Aside from './Aside';
import VideoSection from './VideoSection';

const Layout1 = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 bg-gray-400 p-2 rounded-xl min-h-[450px]">
      
      {/* Aside */}
      <div className="rounded-xl col-span-1 lg:col-span-2">
        <Aside />
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-xl shadow-md col-span-1 lg:col-span-3 p-4">
        {children}
        <VideoSection />
      </div>

    </div>
  );
};

export default Layout1;