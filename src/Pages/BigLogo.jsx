import Scroller from "../components/Scroller"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BigLogo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("page-background");

   
    return () => {
      document.body.classList.remove("page-background");
    };
  }, []);

  const warp2 = () => {
    setTimeout(() => {
      navigate("/homebase");
    }, 20000);
  };


  warp2()
  return (
<Scroller/>
  )
}

export default BigLogo