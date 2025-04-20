import React from 'react';
import Aside from './Aside';
import VideoSection from './VideoSection';

const Layout1 = ({ children }) => {
  return (
    <div className="max-w-[1268px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 p-4 rounded-xl min-h-[450px]">
      <div className="rounded-xl col-span-1 lg:col-span-2">
        <Aside />
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md col-span-1 lg:col-span-3">
        {children}
        <VideoSection />
      </div>
    </div>
  );
};

export default Layout1;