import logo from "./logo.svg";
import "./App.scss";
import Search from "./components/Search";
import Courses from "./components/Courses";
import { useState } from "react";

function App() {
  const courses = [
    {
      name: "HTML y CSS",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria",
      color: "rgb(47, 164, 171)",
    },
    {
      name: "Javascript",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web",
      color: "rgb(222, 145, 3)",
    },
    {
      name: "Terminal",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png",
      desc:
        "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos",
      color: "rgb(113, 44, 125)",
    },
    {
      name: "Git y Github",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png",
      desc:
        "La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios",
      color: "rgb(15, 29, 68)",
    },
    {
      name: "React",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/react.png",
      desc:
        "Conocé una de las librerías más populares del mercado para crear aplicaciones web robustas y performantes",
      color: "rgb(18, 117, 220)",
    },
    {
      name: "API Context",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/api-context.png",
      desc:
        "Context provee una forma de pasar datos a través del árbol de componentes en React sin tener que pasar props manualmente en cada nivel",
      color: "rgb(197, 111, 208)",
    },
  ];
  const [filterCourses, setFilterCourses] = useState(courses);

  function handleFilter(inputValue) {
    if (inputValue == "") {
      setFilterCourses(inputValue);
    }

    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilterCourses(filtered);
  }

  return (
    <div className="App">
      <Search className="inputText" handleCallback={handleFilter} />
      <Courses className="cardsContainer" filterCourses={filterCourses} />
    </div>
  );
}

export default App;
