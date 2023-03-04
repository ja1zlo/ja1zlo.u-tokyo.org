import React from "react";
import Head from "next/head";

const siteTitle = "JA1ZLO Web";

const Title: React.FC<{ children: string } | { title: string }> = (props) => {
  const title = "children" in props ? props.children : props.title;
  const realTitle = title === "" ? siteTitle : `${title} - ${siteTitle}`;
  return (
    <Head>
      <title>{realTitle}</title>
    </Head>
  );
};
export default Title;
