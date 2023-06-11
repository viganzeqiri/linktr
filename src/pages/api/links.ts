import type { NextApiRequest, NextApiResponse } from "next";

export type Link = {
  platform: string;
  url: string;
};

export type Links = {
  others: Link[];
  social: Link[];
};

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Links>
) {
  res.status(200).json({
    others: [
      { platform: "Twitter", url: "https://twitter.com/user" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/user" },
      { platform: "GitHub", url: "https://github.com/user" },
    ],
    social: [
      { platform: "Twitter", url: "https://twitter.com/user" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/user" },
      { platform: "GitHub", url: "https://github.com/user" },
    ],
  });
}
