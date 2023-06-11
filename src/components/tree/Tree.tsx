import { Header, Links, SocialLinks } from "@/components";

import { type Links as LinksType } from "@/pages/api/links";

type Props = LinksType;

export default function Tree({ others, social }: Props) {
  return (
    <div>
      <Header />

      <main>
        <Links links={others} />
      </main>

      <SocialLinks links={social} />
    </div>
  );
}
