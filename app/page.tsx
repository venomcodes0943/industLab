import AutoPlayCarosal from "@/components/AutoPlayCarosal";
import Header from "@/components/Header";
import BgImage from "@/public/hero.jpg";
import Image from "next/image";
import MImage from "@/public/manufacturing+automation.jpg";
import OImage from "@/public/oil+&+gas+production+automation.jpeg";
import CImage from "@/public/control-circuits-troubleshooting.jpg";
import IImage from "@/public/industrial.jpeg";
import Link from "next/link";
import AImage from "@/public/iStock_87858973_SMALL-min.jpg";
import ControldedCarosal from "@/components/ControldedCarosal";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="z-[100000] relative w-full text-white scroll-smooth "
        style={{
          backgroundImage: `url('${BgImage.src}')`, // Use the 'src' property
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "brightness(0.5)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="absolute top-0 w-full -z-10 h-screen bg-[#0000004d]"></div>

        <header className="z-[10000000] fixed top-0 w-full p-3 bg-black">
          <Header />
        </header>
        <div className="pt-20 md:pt-0 z-50 text-center w-full  lg:pt-24">
          <p className="text-3xl font-medium">YOU KNOW YOUR PROCESS,</p>
          <strong className="tracking-wider text-3xl lg:text-[64px] pb-2 leading-[0.96]">
            WE KNOW HOW TO <br /> AUTOMATE
          </strong>
          <p className="text-2xl my-3 lg:my-6">
            Special Equipment Turn Key Solutions
          </p>
          <p className="text-2xl my-4 lg:my-6">PLC Programming</p>
          <p className="text-2xl my-4 lg:my-6">HMI Configurations</p>
          <p className="text-2xl my-4 lg:my-6">Design and Fabrication</p>
          <a href="tel:+923704961427" className="text-2xl py-4 lg:my-6">
            +92 370 4961427
          </a>
        </div>
        <center>
          <button className="mt-6 bg-black px-2 md:px-6 rounded-full text-sm md:text-lg font-semibold py-2">
            Work with Mahim Automation on your Next Big Idea!
          </button>
        </center>
      </div>
      <section
        id="about"
        className="py-24 px-2 md:px-8 md:max-w-[956px] mx-auto"
      >
        <div className="py-3 uppercase text-lg md:text-[25px] text-[#4a4a4a] font-semibold mx-auto text-center">
          Mahim Automation specializes in delivering cutting-edge industrial
          automation and control solutions designed to streamline your
          manufacturing processes, enhance efficiency, and minimize reliance on
          human operators. Our tailored automated systems empower businesses to
          achieve precision, productivity, and seamless operations.
        </div>
        <strong className="block uppercase text-[#4a4a4a] pt-2 text-lg md:text-[25px] text-center">
          Best in class Industrial Automation Solutions
        </strong>
        <div className=" h-[0.1px] my-12 bg-[#4a4a4a48] mx-auto"></div>
        <div className="py-1">
          <AutoPlayCarosal />
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap lg:justify-center mt-6">
          <Image src={MImage} alt="ads" width={500} height={500} />
          <div className="mt-2 lg:mt-0 lg:px-4">
            <div className="text-3xl lg:text-5xl uppercase text-black font-bold ">
              manufacturing
            </div>
            <button className="bg-black text-white uppercase px-8 py-2 rounded-full mt-4">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap items-center lg:justify-between mt-6">
          <Image src={"/oil.avif"} alt="ads" width={500} height={500} />
          <div className="mt-2 lg:mt-0 lg:px-4">
            <div className="text-3xl lg:text-5xl uppercase text-black font-bold ">
              oil & gas
            </div>
            <button className="bg-black text-white uppercase px-8 py-2 rounded-full mt-4">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap lg:justify-center mt-6">
          <Image src={CImage} alt="ads" width={500} height={500} />
          <div className="mt-2 lg:mt-0 lg:px-4">
            <div className="text-3xl lg:text-5xl uppercase text-black font-bold ">
              ELECTRICAL Control PANELS
            </div>
            <button className="bg-black text-white uppercase px-8 py-2 rounded-full mt-4">
              Learn more
            </button>
          </div>
        </div>
        <div
          className="py-8 bg-cover bg-center flex items-center justify-center my-14 h-[85vh]"
          style={{
            backgroundImage: `url(${IImage.src})`,
          }}
        >
          <div className="text-white">
            <div className="text-4xl md:text-6xl tracking-wide text-center uppercase font-bold">
              industrial <br /> automation <br /> project in mind?
            </div>
            <div className="pt-3 text-xl text-center">
              Work with Mahim Automation on your next big idea!
            </div>
            <center>
              <button className="px-6 py-2 rounded-full tracking-wider hover:bg-white/65 mt-8 bg-white uppercase text-black">
                request a qoute
              </button>
            </center>
          </div>
        </div>
        <div className="p-4 mb-6">
          <div className="text-center text-[#4a4a4a] font-semibold text-[25px] uppercase py-2">
            Manufacturing Automation & Intelligence
          </div>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-8">
            Mahim Industrial Automation collaborates with manufacturers across
            the globe to revolutionize industrial processes by reducing waste,
            minimizing manual labor, enhancing product quality, and scaling
            automation systems for sustainable growth. Our expertise spans
            machine automation, robotics, engineering consulting, machine vision
            and tactile solutions, innovative product designs, and prototyping.
            From designing to installation, Mahim Automation handles every
            aspect of the process. <br /> We specialize in crafting custom
            control panels tailored to our customers' unique requirements. As a
            leading engineering solutions provider, we deliver bespoke
            electrical control panels and products designed to optimize your
            operations and drive efficiency.
          </p>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-8">
            From control panel design to installation, we at IndustLabs cover
            every aspect of the process. We are experts at creating control
            panels that fit our customers need. We are an engineering solutions
            company providing custom electrical control panels and products.
          </p>
        </div>
        <div className="py-2 max-w-[755px] mx-auto">
          <div className="text-bold text-lg uppercase text-center font-semibold text-[#1a1a1ae6]">
            Mahim Industrial Automation Provides The Best In Class Industrial
            Automation Solutions
          </div>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-6 mx-auto">
            We are your one stop shop for all Industrial Automation needs. We
            can design a solution, manufacture all control hardware, and install
            and support the solution afterwards.
          </p>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-6 mx-auto">
            We manufacture Industrial Equipment at scale. Whether you need a
            single control system for your manufacturing process or you are an
            OEM manufacturer who needs Control Systems produced at the same
            scale as your business, we are your partner.
          </p>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-6 mx-auto">
            We provide Field Service for manufacturers and OEM systems. We can
            provide 24 x 7 emergency services and in many cases can be onsite
            within 2 hours.
          </p>
          <p className="text-sm py-2 text-[#1a1a1ab3] tracking-wide leading-6 mx-auto">
            We leverage our own in-house knowledge of process automation to keep
            our lead times low on our electrical control panels. We can
            manufacture control systems for our OEM partners at the scale of
            your business.
          </p>
        </div>
        {/* <div className="text-2xl text-bold py-3 uppercase text-center font-semibold text-[#1a1a1ae6]">
          Our Work
        </div>
        <div className="mt-6">
          <div className="text-xl md:text-2xl text-bold py-3 uppercase text-center font-semibold text-[#1a1a1ae6] tracking-wider">
            Here Is What Customers Are Saying About Industlabs industrial
            automation solutions
          </div>
          <p className="text-7xl text-[#4a4a4a] text-center">&ldquo;</p>
        </div>
        <p className="text-sm md:text-base text-center py-2 tracking-wide leading-6 mx-auto">
          We had been trying to develop the next generation industrial
          automation product for our customers that switched from legacy relay
          control panel to a PLC panel with an HMI allowing our customers remote
          access and alerting to our product. After years of R&D and hiring
          multiple new engineers, still there was no finished product IndustLabs
          was able to develop our automatic control systems and deliver within 3
          weeks. This product will be show cased at our upcoming trade show in
          October.
        </p>
        <div className="text-center md:text-lg pt-4 text-[#4a4a4a]">
          — AIR FILTRATION INDUSTRY &quot;Company name protected by NDA&quot;
        </div> */}
        {/* <div className="mt-12">
          <p className="text-7xl text-[#4a4a4a] text-center">&ldquo;</p>
          <div className="text-sm md:text-base -mt-4 text-center">
            We lost our primary services engineer in the Permian Basin region.
            While we we’re working hard to replace him IndustLabs picked up the
            slack and spent days helping our customers with new installation
            both over the phone and on-site. It was a life saver for us.
          </div>
        </div>
        <div className="text-center md:text-lg pt-4 text-[#4a4a4a]">
          — OIL & GAS PRODUCER ODESSA, TEXAS &quot;Company name protected by
          NDA&quot;
        </div>

        <div className="mt-12">
          <p className="text-7xl text-[#4a4a4a] text-center">&ldquo;</p>
          <div className="text-sm md:text-base -mt-4 text-center">
            We have seen 3X production growth with IndustLabs with there
            industrial automation solutions. Our factory floor runs more
            efficient and we get to focus on what we know best - our product.
            The team at IndustLabs know exactly what you will need in terms of
            automating your manual product lines.
          </div>
        </div>
        <div className="text-center md:text-lg pt-4 text-[#4a4a4a]">
          — FOOD MANUFACTURER BAKING INDUSTRY &quot;Company name protected by
          NDA&quot;
        </div> */}

        {/* <div className="mt-12">
          <p className="text-7xl text-[#4a4a4a] text-center">&ldquo;</p>
          <div className="text-sm md:text-base -mt-4 text-center">
            We are a competing Industrial Automation company and we were on-site
            with a customer in Ft. Worth at 2 AM trying to get their production
            line back up. We finally had to call IndustLabs who we have
            partnered with on larger projects. They were onsite within the hour
            and had their production line back up and running before the 5 AM
            production line was scheduled to start. To take it a step further,
            the customer has tried reaching out to IndustLabs directly and they
            have turned down business to maintain our partnership. We really
            appreciate it.
          </div>
        </div> */}
        {/* <div className="text-center md:text-lg pt-4 text-[#4a4a4a]">
          — SYSTEM INTEGRATOR &quot;Company name protected by NDA&quot;
        </div> */}
        <div className=" h-[0.1px] my-14 bg-[#4a4a4a48] mx-auto"></div>
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10">
          <div className="w-[440px]">
            <div
              className="relative h-64 bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${AImage.src})`,
              }}
            >
              <div className="absolute top-0 w-full bg-[#0000001a] h-full"></div>
              <div className="z-20 text-bold uppercase font-bold text-xl text-white">
                About us
              </div>
            </div>
            <p className=" text-[#4a4a4a] text-sm text-center py-3 leading-7">
              Find out about IndustLabs Industrial Automation mission, our
              methods, and the results of our automation, remote monitoring,
              control panel manufacturing, programmable logic controllers,
              automated equipment, and engineering services.
            </p>
            <center>
              <Link href={"#"} className="text-[#4a4a4a]">
                Learn More →
              </Link>
            </center>
          </div>
          <div className="w-[440px]">
            <div
              style={{
                backgroundImage: `url(${CImage.src})`,
              }}
              className="relative h-64 bg-cover bg-center flex items-center justify-center"
            >
              <div className="absolute top-0 w-full bg-[#0000001a] h-full"></div>
              <div className="z-30 text-center text-bold uppercase font-bold text-xl text-white">
                industrial <br /> automation <br /> project? take <br /> action
              </div>
            </div>
            <p className="text-[#4a4a4a] text-sm text-center py-3 leading-7">
              Find out about IndustLabs Industrial Automation mission, our
              methods, and the results of our automation, remote monitoring,
              control panel manufacturing, programmable logic controllers,
              automated equipment, and engineering services.
            </p>
            <center>
              <Link href={"#"} className="text-[#4a4a4a]">
                Learn More →
              </Link>
            </center>
          </div>
        </div>
        <div className=" h-[0.1px] my-14 bg-[#4a4a4a48] mx-auto"></div>
        <center>
          <button className="px-6 bg-black text-white py-3 text-center text-2xl">
            Work with Mahim Automation on your Next Big Idea!
          </button>
        </center>
      </section>
      <div id="contact-us" className="py-4 bg-[#1172A9] text-white px-4">
        <div className="text-center text-2xl py-2">Get In Touch With Us</div>
        <p className="text-center">
          Please fill out the form below and we will be in touch soon.
        </p>
        <form className="md:max-w-[956px] mx-auto">
          <div className="mb-2">
            <label className="block py-1" htmlFor="company">
              Company <span className="text-xs">(required)</span>{" "}
            </label>
            <input
              id="company"
              className="text-black w-full border border-[#79787881] py-2 px-2"
              type="text"
            />
          </div>
          <p className="block py-2">
            Name <span className="text-xs">(required)</span>{" "}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="mb-2 w-full">
              <label className="block text-xs" htmlFor="fname">
                First Name
              </label>
              <input
                id="fname"
                className="text-black w-full border border-[#79787881] py-2 px-2"
                type="text"
              />
            </div>
            <div className="mb-2 w-full">
              <label className="block text-xs" htmlFor="lname">
                Last Name
              </label>
              <input
                id="lname"
                className="text-black w-full border border-[#79787881] py-2 px-2"
                type="text"
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="block py-1" htmlFor="phone">
              Phone <span className="text-xs">(required)</span>{" "}
            </label>
            <input
              id="phone"
              className="text-black w-full border border-[#79787881] py-2 px-2"
              type="text"
            />
          </div>
          <div className="mb-2">
            <label className="block py-1" htmlFor="email">
              Email <span className="text-xs">(required)</span>{" "}
            </label>
            <input
              id="email"
              className="text-black w-full border border-[#79787881] py-2 px-2"
              type="email"
            />
          </div>
          <div className="text-xl pt-1">Check All That Apply</div>
          <div className="flex items-center flex-wrap gap-x-2">
            <div className="mb-1">
              <input type="checkbox" name="" id="automation" />
              <label htmlFor="automation" className="pl-2">
                Automation
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Process Automation" />
              <label htmlFor="Process Automation" className="pl-2">
                Process Automation
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Solar" />
              <label htmlFor="Solar" className="pl-2">
                Solar
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="VFD" />
              <label htmlFor="VFD" className="pl-2">
                VFD
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Elextrical Control Panel" />
              <label htmlFor="Elextrical Control Panel" className="pl-2">
                Elextrical Control Panel
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Custom Electrical Panel" />
              <label htmlFor="Custom Electrical Panel" className="pl-2">
                Custom Electrical Panel
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="IIoT" />
              <label htmlFor="IIoT" className="pl-2">
                IIoT
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Motor Control Center" />
              <label htmlFor="Motor Control Center" className="pl-2">
                Motor Control Center
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="MCC Building" />
              <label htmlFor="MCC Building" className="pl-2">
                MCC Building
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="MCC Building" />
              <label htmlFor="MCC Building" className="pl-2">
                MCC Building
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Shopping Containers" />
              <label htmlFor="Shopping Containers" className="pl-2">
                Shopping Containers
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Need Assessment" />
              <label htmlFor="Need Assessment" className="pl-2">
                Need Assessment
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="PLC Training" />
              <label htmlFor="PLC Training" className="pl-2">
                PLC Training
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Smart Manufacturing" />
              <label htmlFor="Smart Manufacturing" className="pl-2">
                Smart Manufacturing
              </label>
            </div>
            <div className="mb-1">
              <input type="checkbox" name="" id="Other" />
              <label htmlFor="Other" className="pl-2">
                Other
              </label>
            </div>
          </div>

          <div className="mb-2">
            <label className="block py-1" htmlFor="message">
              Message <span className="text-xs">(required)</span>{" "}
            </label>
            <textarea
              id="message"
              name="message"
              className="text-black w-full sm:w-3/4 lg:w-[99%] h-40 p-4"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <center>
            <button className="uppercase tracking-widest bg-black px-6 py-3">
              SUBMIT
            </button>
          </center>
        </form>
        {/* <div className="relative md:max-w-[956px] mx-auto py-12">
          <ControldedCarosal />
        </div> */}
      </div>
      <footer className="bg-[#1F1F1F] py-4 text-white">
        <center>
          <Link className="px-2 text-xs uppercase font-semibold" href={"#home"}>
            Home
          </Link>
          <Link
            className="px-2 text-xs uppercase font-semibold"
            href={"#about"}
          >
            About
          </Link>
          <Link
            className="px-2 text-xs uppercase font-semibold"
            href={"#contact-us"}
          >
            Contact Us
          </Link>
        </center>
        <div className="text-center uppercase pt-2 ">
          Mahim Automation, <br />
          Badar Colony Faisalabad, Pakistan <br />
          info@mahimautomation.com
        </div>

        <div className="flex justify-center my-6 items-center space-x-4 transition">
          <a
            href="https://www.facebook.com/share/15joeY4c3z/"
            target="_blank"
            className="p-4 bg-white hover:bg-gray-400 group rounded-full transition"
          >
            <FaFacebookF className="text-gray-700 group-hover:text-black transition" />
          </a>
          <a

            href="mailto:info@mahimautomation.com"
            className="p-4 bg-white hover:bg-gray-400 group rounded-full transition"
          >
            <FaEnvelope className="text-gray-700 group-hover:text-black transition" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
