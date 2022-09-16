import ReactDom from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";


function Pagina() {
  return (
    <div>
      <NavBar />
      <Corpo />
      <FundoMobile/>
    </div>
  )
}


ReactDom.render(<Pagina />, document.querySelector(".root"));