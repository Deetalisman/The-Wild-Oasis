import SideNavigation from "./sidenavigation/page";

export default function Layout({ children }) {
  return (
    <div className="flex gap-30">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}
