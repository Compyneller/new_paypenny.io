import React from "react";

const AllSocialLinks = () => {
  return (
    <div className="d-flex w-100 justify-content-between align-items-center socials__links">
      <a target="_blank" href="https://www.facebook.com/www.paypenny.io/">
        <i id="facebookIcon" className="ri-facebook-circle-line"></i>
      </a>
      <a target="_blank" href="https://in.pinterest.com/Paypennyca/">
        <i className="ri-pinterest-line"></i>
      </a>
      <a target="_blank" href="https://www.reddit.com/user/paypenny-io">
        <i className="ri-reddit-line"></i>{" "}
      </a>
      <a target="_blank" href="https://www.tumblr.com/blog/paypenny">
        <i className="ri-tumblr-fill"></i>{" "}
      </a>
      <a
        target="_blank"
        href="https://instagram.com/paypennyca?igshid=YmMyMTA2M2Y="
      >
        <i id="instagramIcon" className="ri-instagram-line"></i>
      </a>
      <a
        target="_blank"
        href="https://twitter.com/payPENNY2?s=20&t=4Im5hEodXE-dLog1P9eO-g"
      >
        <i id="twitterIcon" className="ri-twitter-line"></i>
      </a>
      <a target="_blank" href="https://medium.com/@admin_17494">
        <i className="ri-medium-line"></i>
      </a>
    </div>
  );
};

export default AllSocialLinks;
