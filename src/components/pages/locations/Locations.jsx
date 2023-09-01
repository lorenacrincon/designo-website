import PageTitle from "../../common/PageTitle";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import GetInTouch from "../../common/GetInTouch";
import { Reveal } from "../../common/Animations";

function Locations() {
  const pageTitle = "Designo / Our Locations";

  return (
    <>
      <PageTitle title={pageTitle} />
      <main className="relative z-10 max-w-6xl mx-auto ">
        <Reveal>
          <section className="mb-80 relative z-10">
            <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-8">
              <div className="order-last">
                <MapContainer
                  center={[43.64415216708339, -79.39463595974301]}
                  zoom={14}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[43.64415216708339, -79.39463595974301]}>
                    <Popup>
                      <b>Designo Central Office</b>
                      <br /> 3886 Wellington Street Toronto, Ontario M9C 3J5
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div
                className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
              >
                <p className="location-title  font-medium peach-text">Canada</p>
                <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
                  <p className="paragraph-text dark-text">
                    <span className="font-medium">Designo Central Office</span>
                    <br /> 3886 Wellington Street <br />
                    Toronto, Ontario M9C 3J5
                  </p>
                  <p className="paragraph-text dark-text">
                    <span className="font-medium">Contact</span>
                    <br /> P : +1 253-863-8967 <br />M : contact@designo.co
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-8">
              <div>
                <MapContainer
                  center={[-30.3294471519584, 149.79057089813188]}
                  zoom={14}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[-30.3294471519584, 149.79057089813188]}>
                    <Popup>
                      <b>Designo AU office </b>
                      <br /> 19 Balonne Street New South Wales 2443
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div
                className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
              >
                <p className="location-title  font-medium peach-text">
                  Australia
                </p>
                <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
                  <p className="paragraph-text dark-text">
                    <span className="font-medium">Designo AU Office</span>
                    <br />
                    19 Balonne Street
                    <br />
                    New South Wales 2443
                  </p>
                  <p className="paragraph-text dark-text">
                    <span className="font-medium">Contact</span>
                    <br />P : (02) 6720 9092
                    <br />M : contact@designo.au
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white font-jost overflow-hidden md:mx-10 md:mb-20 xl:flex xl:gap-8 xl:mb-0 ">
              <div className="order-last">
                <MapContainer
                  center={[53.732913347520324, -1.3277937216111786]}
                  zoom={14}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[53.732913347520324, -1.3277937216111786]}>
                    <Popup>
                      <b>Designo UK Office</b>
                      <br />
                      13 Colorado Way Rhyd-y-fro SA8 9GA
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div
                className="talent-bg text-center py-16 px-6 space-y-6  md:mt-8 md:px-20
          md:py-24 md:rounded-[15px] md:text-start xl:mt-0 xl:flex-grow"
              >
                <p className="location-title font-medium peach-text">
                  United Kingdom
                </p>
                <div className="md:flex md:flex-row md:justify-start md:items-end md:gap-32">
                  <p className="paragraph-text dark-text space-y-5">
                    <span className="font-medium">Designo UK Office</span>
                    <br />
                    13 Colorado Way
                    <br />
                    Rhyd-y-fro SA8 9GA
                  </p>
                  <p className="paragraph-text dark-text space-y-5">
                    <span className="font-medium">Contact</span>
                    <br />P : 078 3115 1400
                    <br />M : contact@designo.uk
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <section className="relative z-10">
          <GetInTouch />
        </section>
      </main>
    </>
  );
}

export default Locations;
