import { useState, useEffect } from "react";
 import MainTheme from "../assets/Star_Wars_Main_Theme.mp3";
 import { useNavigate } from "react-router-dom";


const Intro = () => {
  const theme = new Audio(MainTheme);
  const [show, setShow] = useState(false);
   const navigate = useNavigate();

  
  useEffect(() => {
    document.body.classList.add("page-background");

   
    return () => {
      document.body.classList.remove("page-background");
    };
  }, []);

  const warp = () => {
    setTimeout(() => {
      navigate("/biglogo");
    }, 10000);
  };

  

  return (
    <div className="flex flex-col">
      <div className="flex justify-center align-middle">
        {!show ? (
          <div className="flex flex-col gap-2">
         
            
            
              <h1
                id="along"
                className="leading-none"
                style={{
                  color: "#10f9f1",
                  fontSize: "40px",
                  opacity: 0.8,
                  marginTop: "200px",
                }}
              >
                A long time ago in a galaxy far, <br />
                <span className="mr-80 leading-none">far away ....</span>
              </h1>
            
            <button id='presstart' className="mt-10 text-yellow-400"
            style={{}}
            onClick={() => {
                setShow(true);
                theme.play();
                warp();
              }}
            > Start Game</button>
          </div>
        ) : (
          <div className="flex justify-center align-middle">
            <img
              id="maintitle"
              src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-4-logo-png-transparent.png"
              className="w-2/4 mt-40"
              alt="Star Wars Logo"
            />
          </div>
        )}
      </div>

      <div>
     
      </div>
     
    </div>
    
  );
};

export default Intro;
