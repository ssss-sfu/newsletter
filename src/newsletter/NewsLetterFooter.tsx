import "./NewsLetterFooter.css";

import IMAGE_LINKS from "../img/imageLinks";

export default function NewsLetterFooter() {
  return (
    <div className="newsletterfooter">
      <img
        id="newsletterfooter-banner"
        src={IMAGE_LINKS.FOOTER_BANNER}
        alt="SSSS Newsletter Footer Banner"
      />
      <p className="mt-s">
        <a href="https://www.sfussss.org/">https://www.sfussss.org/</a>
      </p>
      <p className="mt-s">
        12450 102 Ave Unit 250, SUR 4016, Galleria 4 Surrey, BC V3T 0A3
      </p>
      <p className="mt-s">
        Get in touch: <a href="mailto:ssss-exec@sfu.ca">ssss-exec@sfu.ca</a>
      </p>

      <div className="newsletterfooter-icons mt-s">
        <a href="https://www.instagram.com/ssss.sfu/">
          <img src={IMAGE_LINKS.INSTAGRAM} alt="SSSS Instagram" />
        </a>
        <a className="ml-s" href="https://discord.gg/XZUd7amxPq">
          <img src={IMAGE_LINKS.DISCORD} alt="SSSS Discord" />
        </a>
        <a className="ml-s" href="https://www.linkedin.com/company/ssss-sfu/">
          <img src={IMAGE_LINKS.LINKEDIN} alt="SSSS LinkedIn" />
        </a>
      </div>
    </div>
  );
}
