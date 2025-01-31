import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <main
      style={{
        backgroundImage: `URL('src/assets/iPhone 16 - 4.png')`,
        backgroundSize: "contain",
        height: "100%",
        width: "400px",
        position: "absolute",
        top: "50%",
        left : "50%",
        transform : "translate(-50%, -50%)",
        overflow: "hidden"
      }}
    >
      <section className="game w-[400px] ">
        <Outlet />
      </section>
    </main>
  );
};
