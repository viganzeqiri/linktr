import { type Link } from "@/pages/api/links";

type Props = Link;

export default function Tree({ platform, url }: Props) {
  return (
    <div>
      platform: {platform}
      url: {url}
    </div>
  );
}
