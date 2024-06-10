import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="bg-slate-50 min-h-screen">
        <main className="px-2 md:px-40 lg:px-[300px] xl:px-[300px] 2xl:px-[400px] container mx-auto">
          <div className="">
            {/* nested routes rendered here, in Outlet */}
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default AppLayout;
