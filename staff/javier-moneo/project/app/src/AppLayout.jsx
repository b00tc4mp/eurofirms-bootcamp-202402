import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="bg-slate-50 px-2 md:px-40 lg:px-[300px] xl:px-[300px] 2xl:px-[400px] container mx-auto">
        <div className="">
          {/* nested routes rendered here, in Outlet */}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
