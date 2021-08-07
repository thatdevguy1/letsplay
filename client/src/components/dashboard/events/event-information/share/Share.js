import React, { useRef } from "react";
import { toast } from "react-toastify";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import "./Share.scss";

//Need to modify social media shares to include a message / hashtag
function Share({ eventId }) {
  console.log("The location prop is: ", eventId);
  const URL = `localhost:3000/event-information?id=${eventId}`;
  const URLele = useRef(null);

  const copyUrl = () => {
    URLele.current.select();
    URLele.current.setSelectionRange(0, 9999);
    document.execCommand("copy");
    toast(`${URL} copied to clipboard`);
  };

  return (
    <div className="share">
      <h1>SHARE</h1>
      <div className="minified-url-wrapper" onClick={copyUrl}>
        <input ref={URLele} value={URL} readOnly />
      </div>
      <div className="share-button-wrapper">
        <FacebookShareButton url={URL}>
          <FacebookIcon size={45} round={true} />
        </FacebookShareButton>
        <LinkedinShareButton url={URL}>
          <LinkedinIcon size={45} round={true} />
        </LinkedinShareButton>
        <RedditShareButton url={URL}>
          <RedditIcon size={45} round={true} />
        </RedditShareButton>
        <TwitterShareButton url={URL}>
          <TwitterIcon size={45} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={URL}>
          <WhatsappIcon size={45} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default Share;
