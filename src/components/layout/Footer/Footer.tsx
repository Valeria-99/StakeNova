export const Footer = (): JSX.Element => {
  
  const socialIcons = [
    { src: "/component-267-1.svg", alt: "Component" },
    { src: "/component-267.svg", alt: "Component" },
    { src: "/component-267-2.svg", alt: "Component" },
    { src: "/component-268.svg", alt: "Component" },
    { src: "/component-267-3.svg", alt: "Component" },
    { src: "/frame-10.svg", alt: "Frame" },
    { src: "/frame-13.svg", alt: "Frame" },
    { src: "/frame-14.svg", alt: "Frame" },
  ];

  const footerLinks = [
    { icon: "/frame-17.svg", text: "Terms of Use" },
    { icon: "/frame-18.svg", text: "Privacy Policy" },
    { icon: "/frame-21.svg", text: "Protocol disclaimer" },
    { icon: "/frame-15.svg", text: "Docs" },
    { icon: "/frame-16.svg", text: "Support" },
  ];

  return (
    <footer className="flex flex-col w-full items-start gap-6 px-56 py-12 border-t border-jet">
      <div className="flex items-center justify-between w-full">
        <img
          className="h-12"
          alt="Stakenova Logo"
          src="/frame-1000007613.svg"
        />

        <nav
          className="inline-flex items-center gap-4"
          aria-label="Social media links"
        >
          {socialIcons.map((icon, index) => (
            <a
              key={`social-${index}`}
              href="#"
              className="w-10 h-10 hover:opacity-80 transition-opacity"
              aria-label={icon.alt}
            >
              <img className="w-10 h-10" alt={icon.alt} src={icon.src} />
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 w-full">
        <div className="flex items-center flex-1">
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-1">
              <span className="[font-family:'Inter',Helvetica] font-light text-platinum text-2xl leading-6">
                ©
              </span>

              <span className="text-platinum text-base tracking-[0.32px] leading-6 [font-family:'Lexend',Helvetica] font-normal">
                Stakenova, 2025
              </span>
            </div>

            <span className="text-platinum text-lg tracking-[0.72px] leading-7 [font-family:'Lexend',Helvetica] font-normal">
              //
            </span>
          </div>

          <nav
            className="inline-flex items-center gap-1"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link, index) => (
              <a
                key={`footer-link-${index}`}
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 hover:opacity-80 transition-opacity"
              >
                <img className="w-6 h-6" alt="" src={link.icon} />

                <span className="[font-family:'Lexend',Helvetica] font-normal text-moon text-base tracking-[0.32px] leading-6 whitespace-nowrap">
                  {link.text}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};