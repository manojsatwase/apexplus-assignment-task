import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Sidebar";

const Home = lazy(()=> import("./pages/Home"));
const AllScenario = lazy(()=> import("./pages/AllScenario"));
const AddVehicle = lazy(()=> import("./pages/AddVehicle"));
const AddScenario = lazy(()=> import("./pages/AddScenario"));
const EditScenario = lazy(()=> import('./pages/EditScenario'));
const EditVehicle = lazy(()=> import('./pages/EditVehicle'));

const AppLayout = () => {
 
  return (
    <div className="container">
    <Sidebar/>
      <Outlet />
    {/* <Footer /> */}
    <Toaster position="bottom-center" />
    </div>
  );
};

const LazyLoadingComponent = function ({ component: LazyComponent }) {
  return (
    <Suspense fallback={<div>Loading...</div> } >
      <LazyComponent />
    </Suspense> 
  );
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
       {
          path:"/",
          element:<LazyLoadingComponent component={Home} />
       },
       {
        path:"/addscenario",
        element:<LazyLoadingComponent component={AddScenario} />
       },
       {
        path:"/allscenario",
        element:<LazyLoadingComponent component={AllScenario} />
       },{
        path:"/editscenario/:id",
        element:<LazyLoadingComponent component={EditScenario} />
       },
       {
        path:"/addvehicle",
        element:<LazyLoadingComponent component={AddVehicle} />
       }, {
        path:"/editvehicle/:id",
        element:<LazyLoadingComponent component={EditVehicle} />
       },
    ]
  },
  
]);
