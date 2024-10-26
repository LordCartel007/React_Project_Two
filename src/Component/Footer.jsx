import React from "react";
// importing icons from react-icons for footer
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#004edf]" size={80} />
);

// Footer component
const Footer = () => {
  const items = [
    { type: "icon ", icon: FaFacebookSquare },
    { type: "icon", icon: FaInstagram },
    { type: "icon", icon: FaTwitterSquare },
    { type: "icon", icon: FaGithubSquare },
    { type: "icon", icon: FaDribbbleSquare },
    {
      type: "section",
      title: "Solutions",
      items: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      type: "section",
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      type: "section",
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    { type: "section", title: "Legal", items: ["Claim", "Policy", "Terms"] },
  ];

  return (
    <div className=" bg-dark">
      <footer className="bg-[#000300] text-white pt-5 pb-5 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col mb-4 md:mb-0">
              <h1 className="text-3xl lg:text-4xl font-bold text-warning pt-5">
                Top Players
              </h1>
              <p className="py-4">
                Lionel Messi is often regarded as the greatest of all time. With
                his mesmerizing dribbling, uncanny vision, and precision
                finishing, he’s a living legend who has rewritten the record
                books.
                <br />
                Pelé, the Brazilian maestro, dazzled the globe with his
                lightning-fast footwork and a knack for finding the back of the
                net. Known as “The King,” he won three World Cups and left an
                indelible mark on football history.
                <br />
                Diego Maradona, the Argentine genius, brought a unique flair to
                the pitch. His infamous “Hand of God” goal and jaw-dropping
                dribbles showcased a blend of creativity and audacity that
                inspired millions. Maradona was not just a player; he was a
                footballing poet
              </p>
              <div className="flex space-x-4 mt-4 text-primary">
                {items.map((item, index) =>
                  item.type === "icon" ? (
                    <SocialIcon key={index} icon={item.icon} />
                  ) : null
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              {items.map((item, index) =>
                item.type === "section" ? (
                  <div key={index}>
                    <h6 className="font-medium text-xl">{item.title}</h6>
                    <ul>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-1 text-sm ">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// exporting footer

export default Footer;
