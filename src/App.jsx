import logo from "./assets/logo.png";
import segitiga from "./assets/segitiga.svg";
import cantonaDepan from "./assets/images/cantona-depan.png";
import cantonaBelakang from "./assets/images/cantona-belakang.png";

function App() {
  return (
    <div className="bg-[#005eaa] w-full relative">
      <div className="font-glacial text-3xl text-[#ffde59] flex justify-center pt-6">
        <img src={logo} alt="Logo LectSportWear" className="w-14 h-14" />
        <h1
          className="[text-shadow:_2px_3.5px_1px_rgb(0_0_0_/_1)] self-end"
          style={{
            zIndex: 2,
          }}
        >
          ectSportWear
        </h1>
      </div>
      <img
        src={segitiga}
        alt="Segitiga bawah kiri"
        className="absolute bottom-0 left-0 w-72 md:w-auto"
        style={{
          zIndex: 0,
        }}
      />
      <img
        src={segitiga}
        alt="Segitiga atas kanan"
        className="absolute top-0 right-0 rotate-180 w-72 md:w-auto"
        style={{
          zIndex: 0,
        }}
      />
      <div
        className="flex flex-col md:flex-row justify-center gap-10 md:gap-28 mt-12 relative"
        style={{
          zIndex: 2,
        }}
      >
        <div className="font-glacial text-center space-y-2 mt-6">
          <p className="text-white text-xl">Jersey Holder</p>
          <h2 className="text-[#ffdc50] text-7xl font-bold italic font-anton">
            SANIA <br /> NADHIRA
          </h2>
          <p className="text-white">“Ingat Jersey Ingat LectSportWear”</p>
        </div>
        <div className="flex justify-center">
          <img src={cantonaDepan} alt="cantona" className="w-44 md:w-64" />
          <img src={cantonaBelakang} alt="cantona" className="w-44 md:w-64" />
        </div>
      </div>
      <div className="relative mx-28 mt-10 md:mt-2 flex flex-col md:flex-row justify-between">
        <div className="font-glacial text-white pb-2 md:pb-20">
          <p>Instagram : @niadiracans</p>
          <p>Dibeli pada tanggal : 17 Oktober 2024</p>
        </div>
        <div className="bg-black text-white py-4 px-14 flex flex-col items-center justify-center gap-1 font-anton">
          <p className="font-bold text-xl">MANCHESTER UNITED</p>
          <p className="font-bold text-xl">
            7 <span className="font-light text-sm">eric</span> CANTONA
          </p>
          <div className="drawer drawer-end relative">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button text-[#ffde59] w-full cursor-pointer underline italic"
              >
                READ FULL BIO +
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 md:w-[500px] p-6 font-glacial">
                <h2 className="font-bold text-5xl">ERIC CANTONA</h2>
                <p className="mt-4 text-base italic">
                  Alejandro Balde, born in Barcelona to Guinean and Dominican
                  parents, is a fast and explosive full back who joined Barça in
                  2011 at the age of eight after coming up through ranks at
                  Espanyol.
                  <br />
                  <br />
                  He is of the 2003 generation, but has always played a year
                  above. He won the league at U10 A, B and C, U12 A and C, U 14
                  A and B, A16 A and B levels, and quickly made the jump to the
                  Barça Atlètic squad. Balde made hs debut for the first towards
                  the end of the 2021/22 season and the following campaign,
                  2022/23, he quickly made the left back spot his own in Xavi
                  Hernández's team.
                  <br />
                  <br />
                  Part of the La Liga and Spanish Super Cup winning squad in
                  2022/23, in the summer of 2023 he became an official first
                  team player.
                  <br />
                  <br />
                  Balde made his debut for the Spanish national side in the
                  World Cup in Qatar in 2022, making four appearances in the
                  tournament.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
