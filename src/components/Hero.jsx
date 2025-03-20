const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
         style={{
           backgroundImage:
             "url(./assets/pexels-thngocbich-636237.jpg)",
          }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-3xl">
              Welcome to the Notes App!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
