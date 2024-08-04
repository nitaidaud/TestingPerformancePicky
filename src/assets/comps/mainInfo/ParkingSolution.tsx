import {
  faCompass,
  faMobileScreenButton,
  faParking,
  faPeopleArrows,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ParkingSolution() {
  return (
    <div className="fifth-slide w-full m-auto h-full py-24 xl:p-32 flex items-center justify-center animate-block tracking-normal snap-center">
      <div className="grid sm:grid-cols-2 gap-2 h-full mx-auto w-full 2xl:w-2/3 px-5">

        <div className="flex justify-between items-center gap-3 w-full text-balance h-full text-center bg-indigo-950 rounded-3xl order-last sm:order-first py-14 sm:p-0 bg-opacity-50">

          <div className="flex flex-col justify-center items-start sm:w-full px-4 2xl:w-4/5 gap-10 lg:gap-16 h-full mx-auto">

            <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full">

              <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">

                <FontAwesomeIcon icon={faParking} size="2x" className="min-w-14"/>
              </div>

              <div className="flex flex-col text-start">
                <div>
                  <h2>Easy Way To Park</h2>
                </div>
                <div className="text-xs opacity-80">
                  <p className="capitalize">
                    Picky takes the stress out of parking
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full">
            
              <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                <FontAwesomeIcon icon={faStreetView} size="2x" className="min-w-14" />
              </div>

              <div className="flex flex-col text-start">
                <div>
                  <h2>Find Parking Around You</h2>
                </div>
                <div className="text-xs opacity-80">
                  <p className="capitalize">
                    Picky providing real-time information on available parking
                    spaces
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full">
              <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                <FontAwesomeIcon icon={faPeopleArrows} size="2x" className="min-w-14" />
              </div>

              <div className="flex flex-col text-start">
                <div>
                  <h2>Sharing Parkings</h2>
                </div>
                <div className="text-xs opacity-80">
                  <p className="capitalize">
                    Choose Between A Lot Of available Parkings
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full">
              <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                <FontAwesomeIcon icon={faCompass} size="2x" className="min-w-14" />
              </div>

              <div className="flex flex-col text-start">
                <div>
                  <h2>Explore Your Next Park</h2>
                </div>
                <div className="text-xs opacity-80">
                  <p className="capitalize">
                    guiding you to the closest and most convenient spots
                    effortlessly
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full">
              <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                <FontAwesomeIcon icon={faMobileScreenButton} size="2x" className="min-w-14" />
              </div>

              <div className="flex flex-col text-start">
                <div>
                  <h2>User Friendly Interface</h2>
                </div>
                <div className="text-xs opacity-80">
                  <p className="capitalize">
                    The app's user-friendly interface ensures a smooth
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 bg-opacity-50 rounded-3xl h-full w-full mx-auto py-20">
          <img
            width={"100%"}
            height={"100%"}
            loading="lazy"
            src="..\..\Images\parkingSolutionImg.png"
            alt="introduction image"
          />
        </div>
      </div>
    </div>
  );
}
