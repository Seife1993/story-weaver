import { Plus, ArrowRight } from "lucide-react";
import { stories } from "@/data/stories";

interface LibraryPageProps {
  onStoryClick: (storyId: string) => void;
}

const LibraryPage = ({ onStoryClick }: LibraryPageProps) => {
  const ownedStories = stories.filter((s) => s.isOwned);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-1">Your Worlds</h1>
      <p className="font-body text-muted-foreground mb-8">{ownedStories.length} stories in progress</p>

      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {ownedStories.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="text-left group"
          >
            <div className="relative mb-3">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-2 left-2 flex gap-1.5">
                <span className="font-ui text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                  {story.genreLabel.charAt(0) + story.genreLabel.slice(1).toLowerCase()}
                </span>
                <span className="font-ui text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">
                  {story.status}
                </span>
              </div>
            </div>
            <h3 className="font-body text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {story.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-1">{story.description}</p>
            <div className="font-ui text-xs text-muted-foreground flex justify-between">
              <span>{story.chapters.length} chapters</span>
              <span>Last edited {story.lastEdited}</span>
            </div>
          </button>
        ))}

        <button className="border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center py-12 hover:border-muted-foreground transition-colors group">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 group-hover:bg-card transition-colors">
            <Plus size={24} className="text-muted-foreground" />
          </div>
          <span className="font-ui text-sm font-semibold text-foreground">Start New Story</span>
          <span className="font-ui text-xs text-muted-foreground">Create a new world from scratch</span>
        </button>
      </div>

      {/* Mobile list */}
      <div className="sm:hidden space-y-6">
        {ownedStories.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="block w-full text-left border-b border-border pb-4"
          >
            <h3 className="font-body text-2xl text-foreground flex items-center gap-2">
              {story.title} <ArrowRight size={20} />
            </h3>
            <p className="font-ui text-sm text-muted-foreground">
              {story.chapters.length} chapters · Last edited {story.lastEdited}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
