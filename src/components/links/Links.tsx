import { Link } from "@/components";

import { type Link as LinkType } from "@/pages/api/links";

type Props = {
  links: LinkType[];
};

export default function Links({ links }: Props) {
  return (
    <div>
      Links:
      {links.map((link) => (
        <Link key={link.url} {...link} />
      ))}
    </div>
  );
}
