import RootLayout from "@/layout/root/layout.jsx";
import HomePage from "@/pages/home/page.jsx";
import AboutPage from "@/pages/about/page.jsx";
import ServicesPage from "@/pages/services/servicesPage.jsx";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        indent: true,
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
