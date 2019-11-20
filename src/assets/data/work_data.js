import imageviewer from "../images/work/imageviewer.png";
import github from "../images/work/github.png";
import todoList from "../images/work/todoList.png";
import chatapp from "../images/work/chatapp.png";
import weatherforecast from "../images/work/weatherforecast.png";
import postnotes from "../images/work/reactLogo.png";
import booklets from "../images/work/booklets.png";
import resturantfinder from "../images/work/resturantfinder.png";

export default [
  {
    name: "GitHub Rest Api fetch",
    info:
      " An app where you provide keyword to get github repositories for that and you are able to sort based on name, url and owner of that repositories.",
    img: github,
    alt: "chatapp",
    codeLink: "https://github.com/Shailendra9k/GitHub-REST-API",
    demoLink: "https://repositories.netlify.com/"
  },
  {
    name: "Todo-List",
    info: " Create your todo list tobe organized.",
    img: todoList,
    alt: "chatapp",
    codeLink: "https://github.com/Shailendra9k/to-do-starter",
    demoLink: "https://todolist-starter.herokuapp.com/"
  },
  {
    name: "Convoker - chat application",
    info:
      " A web chat application where you can chat with others in real time. Sockets.io used with react libraries.To use the demo, at least two hosts are required in different devices with same URL.",
    img: chatapp,
    alt: "chatapp",
    codeLink: "https://github.com/sachenae/convoke",
    demoLink: "https://convoker04.herokuapp.com/"
  },
  {
    name: "Weather Forecast - Graph",
    info:
      "A react application which shows weather forecast for five days for any searched place. This app fetches data from weather API and displays using graph and google Maps.To use the demo, just type in and hit submit button.",
    img: weatherforecast,
    alt: "weatherforecast",
    codeLink: "https://github.com/sachenae/weather_graph",
    demoLink: "https://weather-forecast39.herokuapp.com/"
  },
  {
    name: "Post Notes App",
    info:
      " An application to recieve notes from user and save it to remote API and fetched again when required.Redux is used for state management and Redux-router is used for navigation.",
    img: postnotes,
    alt: "postnotes",
    codeLink: "https://github.com/sachenae/React_redux_router",
    demoLink: ""
  },
  {
    name: "Web Image Viewer",
    info:
      "Web application to view, edit, delete, upload and save images directly to MongoDB.NodeJS and Express were used to manage various requests and responses between view and controller.",
    img: imageviewer,
    alt: "imageviewer",
    codeLink: "https://github.com/sachenae/Image-viewer",
    demoLink: ""
  },
  {
    name: "Booklets-Initial",
    info:
      "Financial record keeping app which handles saving user inputted dataabout each transaction with details. Spring MVC and SQL with servlets used for backend.HTML and CSS used for view.",
    img: booklets,
    alt: "booklets",
    codeLink: "https://github.com/sachenae/booklets-initial",
    demoLink: "https://booklets-app.herokuapp.com/"
  },
  {
    name: "Resturant Finder",
    info:
      "Simple location viewing app which renders location of resturants in the google map and displays informations on different user events. Data is taken from local json file for now but can also be requested from target API.",
    img: resturantfinder,
    alt: "resturantfinder",
    codeLink: "https://github.com/sachenae/resturants-finder",
    demoLink: "https://findresturants.herokuapp.com/"
  }
];
