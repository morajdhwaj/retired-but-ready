import React from "react";
import { LuDot } from "react-icons/lu";
const Spotted = () => {
  return (
    <div>
      <div className="mt-5">
        <p className="text-lg ">
          Weekly news round-up: 2022 Hyundai Venue launched, More details on
          Mahindra Scorpio-N, New Toy mid-size SUV spotted
        </p>
        <div className="flex items-center">
          <p className="text-xs ">Nikhil Puthran</p>
          <p>
            <LuDot />
          </p>
          <p className="text-sm">18h ago</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, transparent, rgba(0, 0, 0, 0.7)), url('https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%", // full screen width
          height: "70vh", // full screen height
          borderRadius: 10,
        }}
        className="p-5 text-white font-medium flex flex-col justify-between mt-5 "
      >
        <h2 className="text-xs md:text-lg">
          Weekly news round-up: 2022 Hyundai Venue launched more details on
          Mahindra Scropio-N
        </h2>
        <p className="text-xs font-normal">18 June 2022 13:42</p>
      </div>
      <div className="mt-5">
        <p className="text-base font-normal">
          In the week gone by we had covered the launch of one of the most
          awaited compact SUVs in the country. Additionally, we also covered a
          series of spy shots for upcoming new cars. Read below to learn more
          about the top stories in India last week.
        </p>
        <p className="text-[#8444dd] mt-5 font-semibold text-lg">
          Toyota's new mid-size SUV leaked ahead of debut
        </p>
        <p>
          The front design of the Toyota's upcoming mid-size SUV was leaked on
          the web ahead of its debut in the country on 1 July. It is believed
          that the upcoming vehicle might be called the Urban Cruiser Hyryder, a
          name that was trademarked by the company last year. The feature list
          in the Toyota's mid-size SUV is likely to include an electric sunroof,
          a Heads-Up Display (HUD), a 360-degree camera, connected car
          technology, and a large touchscreen infotainment system.
        </p>
        <p className="text-[#8444dd] mt-5 font-semibold text-lg">
          2022 Maruti Suzuki Vitara Brezza - What to expect?
        </p>
        <p>
          The 2022 Maruti Suzuki Vitara Brezza will be launched in India on 30
          June 2022. The bookings for the vehicle will commence soon and the
          vehicle has already started reaching across Maruti Suzuki dealerships
          in the country. The vehicle will get a fresh set of cosmetic and
          feature updates which are expected to help the brand in fiercely
          competing with its rivals. Mechanically, the vehicle is expected to
          continue being powered by the existing engine option.
        </p>
        <p className="text-[#8444dd] mt-5 font-semibold text-lg">
          2022 Hyundai Venue launched in India; prices start at Rs 7.53 lakh
        </p>
        <p>
          Post much wait, Hyundai India launched the 2022 Venue in the country.
          The updated model has been introduced at an introductory starting
          price of Rs 7.53 lakh. The vehicle is available in three engines and
          four gearbox options. Further, it now offers several first-in-segment
          features and over 60 connected car features.
        </p>
      </div>
      <div className="flex gap-2 mt-2 font-medium">
        <p>For More</p>
        <p className="text-[#8444dd]">#news,</p>
        <p className="text-[#8444dd]">#review,</p>
        <p className="text-[#8444dd]">#Video</p>
        <p>and information about cars,visit</p>
        <p className="text-[#8444dd]">CarWale.com</p>
      </div>
    </div>
  );
};

export default Spotted;
