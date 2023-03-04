import React from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

const MDXRender: React.FC<MDXRemoteProps> = (context) => (
  <MDXRemote
    {...context}
    components={{
      table: (props) => (<table className="md-table" {...props} />),
    }}
  />);

export default MDXRender;
