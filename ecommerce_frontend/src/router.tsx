import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout/Sidebar";
import { RouteObject } from "react-router";
import SuspenseLoader from "./components/SuspenseLoader";
import BaseLayout from "./layouts/BaseLayout";
import Signup from "./pages/signup";
import UserLayout from "./layouts/UserLayout";
import Myorder from "./pages/User/Order/Myorder";
import UsersLayout from "./layouts/UsersLayout/Header";
import Security from "./pages/Admin/settingss/security";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Navigate } from "react-router-dom";
// const Loader = (Component)=>(props)=>
// (
//   <Suspense fallback={<SuspenseLoader/>}>
//     <Component {...props} />

//   </Suspense>
// )

const Loader = (Component:any) => (props:any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
const Dashboard = Loader(lazy(()=>import("./pages/Dashboard/index")))
const AdminSettings =  Loader(lazy(()=>import("./pages/Admin/settingss/setting")))
const Security1 =  Loader(lazy(()=>import("./pages/Admin/settingss/security")))
const Persnol =  Loader(lazy(()=>import("./pages/Admin/settingss/persnol")))

const Ticket =  Loader(lazy(()=>import("./pages/Admin/Ticket/index")))

const Order =  Loader(lazy(()=>import("./pages/Admin/Orders/index")))

const Chatbot =  Loader(lazy(()=>import("./pages/Admin/Chatbots/index")))

const Customer =  Loader(lazy(()=>import("./pages/Admin/Customers")))

const TicketOrder =  Loader(lazy(()=>import("./pages/Admin/Ticket/TicketOrder")))

const AddProduct =  Loader(lazy(()=>import("./pages/vendor/productDetails")))

const ViewProduct =  Loader(lazy(()=>import("./pages/Dashboard/viewProduct")))

const UpdateProduct =  Loader(lazy(()=>import("./pages/Dashboard/updateProduct")))

const CloseTicket =  Loader(lazy(()=>import("./pages/Admin/Ticket/CloseTicket")))

const OrderList =  Loader(lazy(()=>import("./pages/vendor/orderList/index")))
const OrderDetails =  Loader(lazy(()=>import("./pages/vendor/orderDetails/index")))
const UserDashboard =  Loader(lazy(()=>import("./pages/User/dashboard/dashboard")))


const Login = (lazy(()=>import("./pages/login")))
interface ProtectedProps  { 
  children: React.ReactNode
}

const Protected = (props : ProtectedProps) => {
  // console.log("protected")
  // const user = useSelector((state: RootState)=> state?.user?.user);
  const token = localStorage.getItem('token');
  return token? <>{props.children}</> :  <Navigate to="/signup" />;
};
const Private = (props : ProtectedProps) => {
  const token = localStorage.getItem('token');
  const user = useSelector((state: RootState)=> state?.auth?.users);
  // return token && user?.user !== 'ADMIN' ? <Navigate to="/" /> : <>{props.children}</>;
};
const Public = (props : ProtectedProps) => {
  const user = useSelector((state: RootState)=> state?.auth?.users);
  // return Object.keys(user).length === 0 && user?.role !== 'USER' ? <Navigate to="/" /> : <>{props.children}</>;
};
const LoggedIn = (props : ProtectedProps) => {
  // const user = useSelector((state: RootState)=> state?.user?.user);
  const token = localStorage.getItem('token');
  return token ? <Navigate to="/" /> : <>{props.children}</>;
};




export const routes: RouteObject[] = [
  {
    path: "",
    element:    <Suspense fallback={<SuspenseLoader />}>
      <BaseLayout />
  </Suspense>,
    

    children: [
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: '/login',
        element:<Login/>
      },
    ],
  },
  {
    path: "",
    element:<React.Suspense fallback={<SuspenseLoader/>}>
    <SidebarLayout />
  </React.Suspense>,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
        children: [
          {
            path:"addProduct",
            element:<AddProduct/>
          },
          {
            path:"viewProduct",
            element:<ViewProduct/>
          },
          {
            path:"updateProduct",
            element:<UpdateProduct/>
          }
        ]
      },
      {
        path: '/settings',
        element: <AdminSettings/>,
        children: [
          {
            path: 'persnol',
            element:<Persnol/>
            
          },
          {
            path: 'security',
            element: <Security1/>
     
          
          },
          {
            path: 'tax',
            
          },{
            path: 'plans',
  
          },
          {
            path: 'shops',
            
          },


        ]
      },
      {
        path: '/ticket',
        element: <Ticket/>,
        children: [
          {
            path:"open",
            element:<Ticket/>
          },
          {
            path:"ticketorder",
            element:<TicketOrder/>
          },
          {
            path:"closeticket",
            element:<CloseTicket/>
          }
        ]
      },
      {
        path: '/customers',
        element: <Chatbot/>
      },
      {
        path: '/Orders',
        element: <OrderList/>
      },
      
      {
        path: '/OrderDetails',
        element: <OrderDetails/>
      },
    ],

  },
  {
    path: "/user",
    element: <React.Suspense fallback={<>...</>}>
    <UserLayout />
  </React.Suspense>,
    children: [
      {
        path: "order",
        element: <Myorder/>,
      },
      {
        path: 'dashboard',
        element: <UserDashboard/>
      },
    ],
  },
  {
    path: "/users",
    element: <React.Suspense fallback={<>...</>}>
    <UsersLayout />
  </React.Suspense>,
    children: [
      {
        path: "dashboard",
        element: <UserDashboard/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
     
    ],
  },


];