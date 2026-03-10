import { Search, Plus } from "lucide-react";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate("landing")} className="font-display text-xl tracking-wide text-foreground">
            Chronicles
          </button>
          <div className="hidden sm:flex items-center gap-4 font-ui text-sm">
            {["Library", "Explore", "Community"].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`py-1 transition-colors ${
                  activePage === item.toLowerCase()
                    ? "text-foreground border-b-2 border-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Search size={18} />
          </button>
          <button
            onClick={() => onNavigate("library")}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-md bg-accent text-accent-foreground font-ui text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
            Create Story
          </button>
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-ui text-sm font-semibold text-accent-foreground">
            E
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
