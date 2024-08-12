import PartnerImg from "./PartnerImg";

export default function Partners() {
  const partners = [
    // "../Partners/Logos/AppleLogo.png",
    "../Partners/Logos/GoogleLogo.png",
    "../Partners/Logos/appwrite.png",
    "../Partners/Logos/EDA2.png",
    "../Partners/Logos/OpenAI.png",
  ];

  return (
    <div className="w-full absolute snap-start left-0 top-full ">
      <div className="owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer h-28 min-h-fit flex items-center">
          <div className="owl-stage">
            {partners.map((partner) => {
              return <PartnerImg partner={partner} key={partner} />;
            })}
          </div>
        </div>
        <div className="owl-nav disabled"></div>
      </div>
    </div>
  );
}
