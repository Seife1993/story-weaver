interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-start justify-center px-6 sm:px-12 lg:px-24 max-w-3xl">
      <h1 className="font-display text-5xl sm:text-7xl tracking-wide text-foreground mb-8">
        Chronicles
      </h1>
      <div className="flex gap-3 mb-10">
        <div className="w-24 h-16 bg-card rounded-sm" />
        <div className="w-24 h-16 bg-foreground rounded-sm" />
        <div className="w-24 h-16 bg-primary rounded-sm" />
      </div>
      <p className="font-body text-3xl sm:text-5xl leading-tight text-foreground mb-6 text-balance">
        Where fictional worlds come alive through collaborative storytelling
      </p>
      <p className="font-body text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
        Create and share visually engaging stories about your favorite fictional worlds, 
        complete with character bios, settings, and custom illustrations.
      </p>
      <button
        onClick={onEnter}
        className="font-ui text-sm border border-foreground rounded-full px-6 py-3 text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        Start Exploring
      </button>
    </div>
  );
};

export default LandingPage;
