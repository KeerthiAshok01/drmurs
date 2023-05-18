// import zd from "../../assets/images/login.mp4";
import zd from "../../assets/images/z_comp.mp4";

export default function Loader() {
  return (
    <>
      <div
        className="d-flex align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <video width="100%" height="auto" autoPlay="autoplay" muted>
          <source src={zd} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
