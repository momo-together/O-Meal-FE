import Link from "next/link";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";

interface NavigationLinkProps {
  navigateUrl: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

const NavigationLink = ({ name, Icon, navigateUrl }: NavigationLinkProps) => {
  return (
    <Link href={navigateUrl} className="flex items-center justify-between rounded-2xl bg-bg-white px-5 py-4" aria-label={`${name}으로 이동`}>
      <div className="flex items-center gap-4">
        <Icon aria-hidden="true" className="h-6 w-6 text-gray-900" />
        <span className="typo-body1 text-primary-text">{name}</span>
      </div>
      <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
    </Link>
  );
};

export default NavigationLink;
