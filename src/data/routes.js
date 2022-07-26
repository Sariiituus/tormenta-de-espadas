import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import Gallery from "../components/Gallery/Gallery";

import Login from "../components/login/Login";
import Form from "../components/register-form/Form";

import Quiz from "../components/Quiz/Quiz";
import questions from "../components/Quiz/QuizQuestions";
import CharacterProfile from "../components/CharacterProfile/CharacterProfile";


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
        name: "Quiz",
        path: "/quiz",
        element: <Quiz questions={questions} />
      },
      {
        name: "Formulario",
        path: "/form",
        element: <Form/>
      },
      {
        name: "Login",
        path: "/login",
        element: <Login datos={datosHome} />
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
        element: <Gallery galleryData={galleryData} />
      },
      {
        name: "Página de personaje",
        path: "/character-profile",
        element: <CharacterProfile characterProfile={CharacterProfile} />
      },
      {
        name: "Quiz",
        path: "/quiz",
        element: <Quiz questions={questions} />
      }
    ]
  }
}
