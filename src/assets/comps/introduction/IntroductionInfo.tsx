import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video from "/Videos/introVidReduced.mp4";
import {
  faCompass,
  faMobileScreenButton,
  faParking,
  faPeopleArrows,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import Partners from "./Partners";
import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function IntroductionInfo() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="second-slide grid items-start text-start h-fit min-h-screen snap-start w-full xl:p-0 gap-10"
    >
      <div dir="ltr" className="relative w-full h-fit overflow-hidden">
        <Partners />
      </div>
      <div className="h-fit mb-10 xl:flex mx-auto w-full xl:w-4/5 items-center justify-center gap-10 p-5 bg-black bg-opacity-70 rounded-xl lg:w-[90%]">
        <div className="w-full grid gap-10 lg:mt-0 justify-center xl:h-full">
          <div className="flex justify-between items-center gap-3 w-full text-balance my-auto text-center  rounded-3xl order-last sm:order-first py-14 sm:p-0 bg-opacity-50 h-full">
            <div className="flex flex-col justify-center xl:justify-around items-center sm:w-full px-4 gap-4 2xl:w-4/5 xl:h-full mx-auto">
              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faParking}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>{t("features.firstFeature.title")}</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      {t("features.firstFeature.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faStreetView}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>{t("features.secFeature.title")}</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      {t("features.secFeature.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>{t("features.thirdFeature.title")}</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      {t("features.thirdFeature.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCompass}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>{t("features.fourthFeature.title")}</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      {t("features.fourthFeature.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-4 w-2/3 mx-auto sm:w-full hover:bg-indigo-950 p-3 duration-300  rounded-2xl">
                <div className="bg-indigo-900 px-2 py-3 min-w-max w-1/5 rounded-xl justify-center items-center">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    size="2x"
                    className="min-w-14"
                  />
                </div>

                <div className="flex flex-col text-start">
                  <div>
                    <h2>{t("features.fifthFeature.title")}</h2>
                  </div>
                  <div className="text-xs opacity-80">
                    <p className="capitalize">
                      {t("features.fifthFeature.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:block">
          <a
            href="https://youtu.be/D4Kqnb4NbXY?si=kMx8FW3rqdO0A1Qa"
            target="_blank"
          >
            <LazyLoadComponent
              children={
                <video
                  src={video}
                  className="mx-auto mt-32 lg:mt-10 w-3/5 xl:w-full rounded-2xl"
                  autoPlay={true}
                  preload="auto"
                  muted
                  loop
                />
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
}
