import SideNavigation from "./sidenavigation/page";

export default function Layout({ children }) {
  return (
    <div className="md:flex lg:gap-23 gap-8">
      <SideNavigation />
      <div className="md:mt-0 mt-4 sm:mt-10">{children}</div>
    </div>
  );
}
