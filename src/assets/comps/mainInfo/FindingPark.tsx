import CalcRouteThird from "../../Videos/simulatorVideos/CalcRouteThird.mp4";
import ShareParkingFirst from "../../Videos/simulatorVideos/ShareParkingFirst.mp4";
import SearchParkingSecond from "../../Videos/simulatorVideos/SearchParkingSecond.mp4";
import iPhone from "../../Videos/simulatorVideos/iPhone.png";

export default function FindingPark() {
  return (
    <div className="fourth-slide h-screen snap-start w-full flex justify-center items-center">
      <div className="h-1/2 mt-14 w-full xl:flex justify-center items-center">
        <div className="w-1/2">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              src={ShareParkingFirst}
              playsInline
              className="w-7/12 mx-auto mt-4"
              autoPlay={true}
              width={50}
              preload="auto"
              muted
              loop
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              src={SearchParkingSecond}
              className="w-7/12 mx-auto mt-4"
              autoPlay={true}
              width={50}
              muted
              loop
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="w-full flex justify-center items-center relative">
            <div className="w-2/3 h-full absolute">
              <img src={iPhone} className="w-full" alt="iPhone" />
            </div>
            <video
              src={CalcRouteThird}
              className="w-7/12 mx-auto mt-4"
              autoPlay={true}
              width={50}
              muted
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
}
