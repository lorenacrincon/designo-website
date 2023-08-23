import React from "react";
import phone from "../../../assets/images/home/desktop/image-hero-phone.png";
import passionate from "../../../assets/images/home/desktop/illustration-passionate.svg";
import resourceful from "../../../assets/images/home/desktop/illustration-resourceful.svg";
import friendly from "../../../assets/images/home/desktop/illustration-friendly.svg";

function Home() {
  return (
    <>
      <header>
        <div className="relative container home-header pt-20 pb-80">
          <div className="font-jost text-white text-center flex flex-col justify-center items-center px-6 gap-6">
            <div className="space-y-4">
              <h1 className="home-title font-medium">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
            </div>
            <div>
              <button className="white-btn ">LEARN MORE</button>
            </div>
          </div>
          <div className="absolute top-90">
            <img src={phone} alt="Phone" />
          </div>
        </div>
      </header>
      <main className="font-jost">
        <section>
          <div className="py-28 mx-6 flex flex-col justify-center items-center text-center gap-7">
            <div className="box web-design-box py-[90px] space-y-2">
              <h3 className="box-title">WEB DESIGN</h3>
              <p className="box-subtitle">VIEW PROJECTS</p>
            </div>
            <div className="box app-design-box py-[90px] space-y-2">
              <h3 className="box-title">APP DESIGN</h3>
              <p className="box-subtitle">VIEW PROJECTS</p>
            </div>
            <div className="box graphic-design-box py-[90px] space-y-2">
              <h3 className="box-title">GRAPHIC DESIGN</h3>
              <p className="box-subtitle">VIEW PROJECTS</p>
            </div>
          </div>
        </section>
        <section>
          <div className="mx-6 flex flex-col justify-center items-center text-center gap-7">
            <div>
              <img
                className="mx-auto illustration-bg"
                src={passionate}
                alt="passionate"
              />
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
            <div>
              <img
                className="mx-auto illustration-bg"
                src={resourceful}
                alt="friendly"
              />
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
            <div>
              <img
                className="mx-auto illustration-bg"
                src={friendly}
                alt="friendly"
              />
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
