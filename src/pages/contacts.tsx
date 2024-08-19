import SetTitle from "../utils/title";
import { motion } from "framer-motion";

const input = (type: string, name: string, placeholder: string) => {
  return (
    <div className="flex m-2 md:w-full box-border">
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent w-full text-sm md:text-md box-border outline-none dark:border-gray-700 border-slate-300 border-2 border-solid rounded-md focus:border-slate-900 dark:focus:border-white p-2 md:p-4"
      />
    </div>
  );
};

const Contacts = () => {
  SetTitle("Reach me out", "contacts");
  const longitude = 121.60355963623054;
  const latitude = 13.928109212658477;
  const locationName = "United Landing Homeowners Association Phase 1";
  const location = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56562.28002960655!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i3000!2i1800!4f13.1!3m3!1m2!1s0x33bd4b578caf4ccd%3A0x2be1e905c862fe1!2s${encodeURIComponent(locationName)}!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sen!`;

  return (
    <div className="w-full h-full box-border p-3">
      <motion.div
        initial={{
          boxSizing: "border-box",
          marginTop: "100%",
        }}
        animate={{
          marginTop: 0,
        }}
        className="w-full h-1/3 md:aspect-[16/4] box-border"
      >
        <iframe
          className="w-full h-full box-border rounded-md dark:grayscale dark:invert transition transition-100 ease-in"
          src={location}
          title={locationName}
          referrerPolicy=""
          loading="lazy"
          allowFullScreen={false}
        />
      </motion.div>

      <form
        action="https://formsubmit.co/weryses19@gmail.com"
        method="POST"
        className="w-full h-full box-border overflow-y-scroll"
      >
        <h1 className="text-md md:text-xl pl-6 spartan mt-4">Contact Form</h1>
        <div className="flex flex-col w-full h-full box-border">
          <div className="flex flex-col md:flex-row w-full box-border">
            {input("email", "email", "Email")}
            {input("text", "name", "Full Name")}
          </div>
          <div className="m-2">
            <textarea
              required
              className="w-full box-border outline-none text-sm md:text-md rounded-md bg-transparent p-2 md:p-4 border-2 border-slate-300 dark:border-gray-700 border-solid focus:border-slate-900 dark:focus:border-white resize-none"
              placeholder="Your message"
              name="content"
            />
          </div>
          <div className="flex justify-end">
            <input
              type="submit"
              className="px-4 py-2 border-slate-300 dark:border-gray-700 border-2 border-solid rounded-lg mr-2 text-sm md:text-lg"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
