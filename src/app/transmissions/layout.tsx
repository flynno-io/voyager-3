import SideNav from "@/ui/transmissions/sidenav";
import VoyagerLogo from "@/ui/voyager-logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className={`bg-blog-hero flex h-72 items-end justify-end bg-cover`}>
        <VoyagerLogo className={`px-2 text-white`} />
      </div>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="m-6 flex-grow md:m-4 md:overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
