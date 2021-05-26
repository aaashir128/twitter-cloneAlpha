import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterHashtagButton,
  TwitterFollowButton,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__search" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>what's happening</h2>

        {/* <TwitterTweetEmbed tweetId={"1067094924124872705"} /> */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ImranKhanPTI"
          options={{ height: 300 }}
        />

        <TwitterHashtagButton tag={"cybersecurity"} />

        <TwitterFollowButton screenName={"muftitaqiusmani"} />

        <TwitterMomentShare momentId={"650667182356082688"} />

        <TwitterDMButton id={1364031673} />

        <TwitterVideoEmbed id={"560070183650213889"} />

        <TwitterOnAirButton id={"560070183650213889"} />

        <TwitterShareButton
          url={"facebook.com/ExtremeCommerce/"}
          options={{ text: "Ecommerce made easy", via: "sunnyali" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
