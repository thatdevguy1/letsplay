import React from "react";
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
function Share() {
  const URL = "http://www.imgur.com";
  return (
    <div className="share">
      <h1>SHARE</h1>
      <div className="minified-url-wrapper">
        <p>{URL}</p>
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
