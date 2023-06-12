import type { NextApiRequest, NextApiResponse } from "next";

export type Link = {
  label: string;
  url: string;
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type Links = {
  others: Link[];
  social: SocialLink[];
};

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<Links>
) {
  res.status(200).json({
    others: [
      {
        label: "BEST Of LeBron James Rim-Rocking DUNKS | NBA Career",
        url: "https://www.youtube.com/watch?v=xKdMUAr6_vQ&ab_channel=NBA",
      },
      {
        label: "LeBron James' Ridiculous Court Vision 👀",
        url: "https://www.youtube.com/watch?v=t8tnELrsoeU&ab_channel=NBA",
      },
      {
        label: "Lebron James’ Top 10 Assists from the 2020-21 NBA Season!",
        url: "https://www.youtube.com/watch?v=FvVu9rxP6ms&ab_channel=NBA",
      },
      {
        label: "LeBron James' BEST Career Denials!",
        url: "https://www.youtube.com/watch?v=ChNy36HvR8o&ab_channel=NBA",
      },
      {
        label: "Final 6:10 of Game 7 of the 2016 NBA Finals (Extended Version)",
        url: "https://www.youtube.com/watch?v=WPLmAQFyVIA&ab_channel=NBA",
      },
      {
        label:
          "LeBron James' high school team upsets No. 1 Oak Hill Academy (2002) | ESPN Archive",
        url: "https://www.youtube.com/watch?v=2nC9z57MuaI&ab_channel=ESPNThrowback",
      },
      {
        label: "LeBron James' First NBA Game",
        url: "https://www.youtube.com/watch?v=MJ9NiKO5Bnk&ab_channel=SacramentoKings",
      },
      {
        label:
          "Rookie LeBron James Earns First Win vs. Pistons (23 Points, 9 Assists)",
        url: "https://www.youtube.com/watch?v=o3MElOUKH4o&ab_channel=RyanVanDusen",
      },
      {
        label: "LeBron James Highlights Best Chase down Block's of his Career",
        url: "https://www.youtube.com/watch?v=yJ7njZCzG74&ab_channel=GuardSkillAcademy",
      },
      {
        label:
          "The best of LeBron James and Dwyane Wade with the Heat | NBA Highlights",
        url: "https://www.youtube.com/watch?v=Um-oQj5xfkw&ab_channel=ESPN",
      },
      {
        label: "LeBron James and Dwyane Wade’s Top 25 Plays As Teammates",
        url: "https://www.youtube.com/watch?v=NTN2gD9LJnU&ab_channel=NBA",
      },
    ],
    social: [
      { platform: "Facebook", url: "https://www.facebook.com/LeBron/" },
      { platform: "Twitter", url: "https://twitter.com/KingJames" },
      { platform: "Instagram", url: "https://www.instagram.com/kingjames/" },
    ],
  });
}
