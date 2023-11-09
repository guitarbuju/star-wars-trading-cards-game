import "./scroller.css";

const Scroller = () => {
  return (
    <section className="containerx">
      <div className="wrapper">
        <div className="scroll-text ">
        <h2 className="scroll-title mb-8">Episode IV</h2>
          <h1 className="scroll-title mb-8">A NEW HOPE</h1>
          <p className=" mb-8 " >
            It is a period of civil war.
            Rebel spaceships, striking
            from a hidden base, have won 
            their first victory against the 
            evil Galactic Empire.
          </p>

          <p className=" mb-8" style={{ whiteSpace: 'pre-line' }}>
            During the battle, Rebel spies managed to steal secret plans to the
            Empire&apos;s ultimate weapon, the DEATH STAR, an armored space
            station with enough power to destroy an entire planet.
          </p>

          <p className=" mb-8" style={{ whiteSpace: 'pre-line' }}>
            Pursued by the Empire&apos;s sinister agents, Princess Leia races
            home aboard her starship, custodian of the stolen plans that can
            save her people and restore freedom to the galaxy....
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scroller;
