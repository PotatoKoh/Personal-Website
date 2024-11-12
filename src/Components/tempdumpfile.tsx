import { useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import JustAPotato from "../assets/JustAPotato Profile.jpg";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex flex-row w-full sticky top-0 z-50 items-center justify-between pb-3 bg-[#242424] px-20">
      <div className="flex items-center">
        <img
          src={JustAPotato}
          className="max-h-[50px] max-w-[100px] rounded-2xl"
        />
      </div>
      <div className="flex items-center">
        <div className="flex space-x-4">
          {/*Link to home page starts here*/}
          <a
            className="flex flex-row cursor-pointer hover:underline hover:underline-offset-8 gap-2 text-white"
            href="https://www.linkedin.com/in/gabriel-koh-24389322a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked In
            <LinkedInLogoIcon />
          </a>

          <a
            className="flex flex-row cursor-pointer hover:underline hover:underline-offset-8 gap-2 text-white"
            href="https://github.com/PotatoKoh"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
            <GitHubLogoIcon />
          </a>
          {/*Link to FAQ page starts here*/}

          {/*Link to About us page starts here*/}
          <p className="website-nav-bar-links" onClick={() => navigate("/")}>
            About Me
          </p>
          {/*Link to About us page ends here*/}
        </div>
      </div>
      <div className="website-nav-bar-mobile-container">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="website-nav-bar-dropdown-button-icon-mobile">
              <img src={JustAPotato} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="website-nav-bar-dropdown-container-mobile"
              sideOffset={5}
            >
              <DropdownMenu.Item
                className="navbar-dropdown-separator"
                onClick={() => navigate("/")}
              >
                Home
              </DropdownMenu.Item>
              <DropdownMenu.Separator className=" flex h-[0.05vw] " />
              <DropdownMenu.Item
                className="navbar-dropdown-separator"
                onClick={() => navigate("/faq")}
              >
                FAQ
              </DropdownMenu.Item>
              <DropdownMenu.Separator className=" flex h-[0.05vw] " />
              <DropdownMenu.Item
                className="navbar-dropdown-separator"
                onClick={() => navigate("/about-us")}
              >
                About
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
