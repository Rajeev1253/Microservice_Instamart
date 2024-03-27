import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarLayout from "./layouts/SidebarLayout/Sidebar";
import { RouteObject } from "react-router";
import SuspenseLoader from "./components/SuspenseLoader";
import BaseLayout from "./layouts/BaseLayout";
import Signup from "./pages/signup";
import UserLayout from "./layouts/UserLayout";
import Settings from "./pages/Admin/Settings/setting";
import Myorder from "./pages/User/Order/Myorder";
import UsersLayout from "./layouts/UsersLayout/Header";
// const Loader = (Component)=>(props)=>
// (
//   <Suspense fallback={<SuspenseLoader/>}>
//     <Component {...props} />

//   </Suspense>
// )

const Dashboard = (lazy(()=>import("./pages/Dashboard/index")))
const AdminSettings = (lazy(()=>import("./pages/Admin/Settings/setting")))

const Ticket = (lazy(()=>import("./pages/Admin/Ticket/index")))

const Order = (lazy(()=>import("./pages/Admin/Orders/index")))

const Chatbot = (lazy(()=>import("./pages/Admin/Chatbots/index")))

const Customer = (lazy(()=>import("./pages/Admin/Customers")))

const TicketOrder = (lazy(()=>import("./pages/Admin/Ticket/TicketOrder")))

const AddProduct = (lazy(()=>import("./pages/Dashboard/addProduct")))

const ViewProduct = (lazy(()=>import("./pages/Dashboard/viewProduct")))

const UpdateProduct = (lazy(()=>import("./pages/Dashboard/updateProduct")))

const CloseTicket = (lazy(()=>import("./pages/Admin/Ticket/CloseTicket")))

const OrderList = (lazy(()=>import("./pages/vendor/orderList/index")))
const OrderDetails = (lazy(()=>import("./pages/vendor/orderDetails/index")))
const UserDashboard = (lazy(()=>import("./pages/User/dashboard/dashboard")))



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
        path: '/home',
        element: <div>Homepage</div>
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
        element: <AdminSettings/>
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
     
    ],
  },


];