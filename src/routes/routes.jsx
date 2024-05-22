import RootLayout from "@/layout/root/layout.jsx";
import HomePage from "@/pages/home/page.jsx";
import AboutPage from "@/pages/about/page.jsx";
import ServicesPage from "@/pages/services/Services.jsx";
// import ServicesPage from "@/pages/services/servicesPage.jsx";
import layoutAction from "@/layout/root/action.js";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    action: layoutAction,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
    ],
  },
];

export default routes;
