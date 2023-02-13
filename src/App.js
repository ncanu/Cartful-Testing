import './App.css';
import {BrowserRouter, Routes, Route, Outlet, Link} from "react-router-dom";

import Question from "./Question";
import Results from "./Results";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {

    const Layout = () => {
        return (
            <>
                <div className="nav">
                    <div className="links">
                    </div>

                    <div className="header-title">The Coffee Shop</div>

                    <div className="logout">
                        <a className="button-dark" href="">
                            <FontAwesomeIcon icon="bars" color="#FFFFFF"/>
                        </a>
                    </div>
                </div>

                <Outlet />
            </>
        )
    };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Question />} />
            <Route path="results" element={<Results />} />

            <Route path="*" element={<Question />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );


  // return <Question/>;
}

export default App;
