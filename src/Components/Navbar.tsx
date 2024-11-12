import { useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import JustAPotato from "../assets/JustAPotato Profile.jpg";

export const NavBar = () => {
  return (
    <div className="website-nav-bar-root-container">
      <div className="hidden md:flex flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            src={JustAPotato}
            className="max-h-[50px] max-w-[100px] rounded-2xl"
          />
        </div>
        <div className="flex items-center">
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-end justify-end">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="w-[35px] h-[35px] inline-flex items-center justify-center outline-none hover:opacity-95">
              <img src={JustAPotato} className="rounded-3xl" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              side="bottom" // Changed to "bottom" to match the placement of the arrow in the second image
              align="start" // Aligns the dropdown to the left of the trigger
              className="p-2 bg-white text-black rounded-lg shadow-lg z-[150]"
            >
              <DropdownMenu.Item className="flex flex-row">
                <a
                  className="flex flex-row cursor-pointer hover:underline hover:underline-offset-8 gap-2 text-black "
                  href="https://www.linkedin.com/in/gabriel-koh-24389322a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linked In
                </a>
                <LinkedInLogoIcon />
              </DropdownMenu.Item>
              <DropdownMenu.Item className="flex flex-row">
                <a
                  className="flex flex-row cursor-pointer hover:underline hover:underline-offset-8 gap-2 text-black "
                  href="https://github.com/PotatoKoh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My GitHub
                </a>
                <GitHubLogoIcon />
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};
