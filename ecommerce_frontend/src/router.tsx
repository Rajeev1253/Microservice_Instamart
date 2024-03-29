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
// const Loader = (Component)=>(props)=>
// (
//   <Suspense fallback={<SuspenseLoader/>}>
//     <Component {...props} />

//   </Suspense>
// )

const Dashboard = (lazy(()=>import("./pages/Dashboard/index")))
const AdminSettings = (lazy(()=>import("./pages/Admin/settingss/setting")))
const Security1 = (lazy(()=>import("./pages/Admin/settingss/security")))
const Persnol = (lazy(()=>import("./pages/Admin/settingss/persnol")))

const Ticket = (lazy(()=>import("./pages/Admin/Ticket/index")))

const Order = (lazy(()=>import("./pages/Admin/Orders/index")))

const Chatbot = (lazy(()=>import("./pages/Admin/Chatbots/index")))

const Customer = (lazy(()=>import("./pages/Admin/Customers")))

const TicketOrder = (lazy(()=>import("./pages/Admin/Ticket/TicketOrder")))

const AddProduct = (lazy(()=>import("./pages/vendor/productDetails")))

const ViewProduct = (lazy(()=>import("./pages/Dashboard/viewProduct")))

const UpdateProduct = (lazy(()=>import("./pages/Dashboard/updateProduct")))

const CloseTicket = (lazy(()=>import("./pages/Admin/Ticket/CloseTicket")))

const OrderList = (lazy(()=>import("./pages/vendor/orderList/index")))
const OrderDetails = (lazy(()=>import("./pages/vendor/orderDetails/index")))
const UserDashboard = (lazy(()=>import("./pages/User/dashboard/dashboard")))


const Login = (lazy(()=>import("./pages/login")))



export const routes: RouteObject[] = [
  {
    path: "",
    element: <React.Suspense fallback={<>...</>}>
    <BaseLayout />
  </React.Suspense>,
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
    element:<React.Suspense fallback={<>...</>}>
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
        path: '/Order',
        element: <Order/>
      },
      {
        path: '/OrderList',
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