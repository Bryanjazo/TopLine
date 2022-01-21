import React from "react";
import InstagramEmbed from "react-instagram-embed";

export default function InstagramFeed() {
  return (
    <div>
      <h1>Hello</h1>
      <InstagramEmbed
        url="https://www.instagram.com/p/CY-K4XEvKzp/"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}
