import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/assets/pexels-thngocbich-636237.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-3xl">
              Welcome to the Notes App!
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800"
              onClick={() => navigate("/all-notes")}
            >
              Show All Notes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
