import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="md:flex-row md:justify-between md:p-10 md:gap-10 mt-10 flex flex-col bg-white  p-3">
        <div className="md:grid md:grid-rows-2 md:grid-flow-col md:gap-x-5    flex flex-col">
          <div className="md:row-span-2 md:mx-0  mx-auto text-xl">
            <FontAwesomeIcon icon={faShareNodes} />
          </div>
          <div className="md:text-4xl md:text-left font-bold  text-2xl text-center ">
            Signup for our newsletter
          </div>
          <div className="md:text-xl md:text-left text-base text-center">
            The best of Business news in your inbox
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-4  sm:items-center md:mt-0  mt-5 gap-5 flex flex-col ">
          <div className="sm:col-span-3">
            <input
              type="email"
              placeholder="Email Adress "
              className="px-2 py-3"
              style={{ width: "calc(100% - 1rem)" }}
            />
          </div>
          <div className="sm:col-span-1 md:px-6 flex justify-center items-center py-3 border-2 border-slate-950 w-full text-center">
            Subscribe
          </div>
        </div>
      </div>

      <div className="mt-10 w-full h-1 block border-2 border-slate-950"></div>
      <div className="sm:text-left mt-10 flex flex-wrap gap-10  justify-evenly text-center">
        <div className="sm:w-auto  w-full flex flex-col gap-3">
          <div className="text-xl font-medium"> About </div>
          <span>One of the top blog website </span>
        </div>
        <div className="sm:w-auto w-full flex flex-col gap-3">
          <div className="text-xl font-medium">Comapany</div>
          <div className="flex flex-col gap-1">
            <span>About us </span>
            <span>Contact us</span>
            <span>Advertise</span>
          </div>
        </div>
        <div className="sm:w-auto w-full flex flex-col gap-3">
          <div className="text-xl font-medium">Legal</div>
          <div className="flex flex-col gap-1">
            <span>Privacy policy </span>
            <span>Term of service</span>
            <span>Code of conduct</span>
          </div>
        </div>
        <div className="sm:w-auto w-full flex flex-col gap-3">
          <div className="text-xl font-medium">Follow us </div>
          <div className="flex flex-col gap-1">
            <span>Facebook </span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
