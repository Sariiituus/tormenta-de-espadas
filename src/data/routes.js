import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import Gallery from "../components/Gallery/Gallery";
import galleryData from "../components/Gallery/GalleryData";

export function getRoutes(datosHome, datosInfo, galleryData) {
  return {
    routesPublicWebsite: [
      {
        name: "Home",
        path: "/",
        element: <Home datos={datosHome} />
      },
      {
        name: "Info",
        path: "/info",
        element: <Info datos={datosInfo} />
      },
      {
        name: "Galería",
        path: "/gallery",
        element: <Gallery galleryData={galleryData} />
      },
      {
        name: "Formulario",
        path: "/form",
        element: <Home datos={datosHome} />
      },
      {
        name: "Login",
        path: "/login",
        element: <Home datos={datosHome} />
      }
    ],
    routesPrivateWebsite: [
      {
        name: "Home",
        path: "/",
        element: <Home datos={datosHome} />
      },
      {
        name: "Info",
        path: "/info",
        element: <Info datos={datosInfo} />
      },
      {
        name: "Galería",
        path: "/gallery",
        element: <Home datos={datosHome} />
      },
      {
        name: "Edita tu personaje",
        path: "/edit",
        element: <Home datos={datosHome} />
      },
      {
        name: "Quiz",
        path: "/quiz",
        element: <Home datos={datosHome} />
      },
      {
        name: "Logout",
        path: "/logout",
        element: <Home datos={datosHome} />
      }
    ]
  }
}
