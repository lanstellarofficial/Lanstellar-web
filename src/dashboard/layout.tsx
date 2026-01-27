import { useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white font-inter">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <aside className="flex-shrink-0 lg:sticky lg:top-0 lg:h-screen z-20">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex-shrink-0 sticky top-0 z-10">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </header>

        <main className="w-full bg-white">
          <div className="w-full px-4 md:px-10 py-5">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

