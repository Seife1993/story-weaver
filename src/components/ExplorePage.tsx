import { useState } from "react";
import { Heart } from "lucide-react";
import { stories, genres, featuredCollection } from "@/data/stories";

interface ExplorePageProps {
  onStoryClick: (storyId: string) => void;
}

const ExplorePage = ({ onStoryClick }: ExplorePageProps) => {
  const [activeGenre, setActiveGenre] = useState("All");

  const publicStories = stories.filter((s) => !s.isOwned);
  const filtered =
    activeGenre === "All"
      ? publicStories
      : publicStories.filter(
          (s) => s.genre.toLowerCase().replace(/\s/g, "-") === activeGenre.toLowerCase().replace(/\s/g, "-")
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-2">Explore Worlds</h1>
      <p className="font-body text-muted-foreground mb-6">Discover stories from the community</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGenre(g)}
            className={`font-ui text-sm px-4 py-1.5 rounded-full border transition-colors ${
              activeGenre === g
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <h2 className="font-display text-xl mb-4">Trending Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {filtered.map((story) => (
          <button
            key={story.id}
            onClick={() => onStoryClick(story.id)}
            className="text-left group"
          >
            <div className="flex gap-4">
              <img
                src={story.image}
                alt={story.title}
                className="w-32 h-40 sm:w-40 sm:h-48 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between py-1">
                <div>
                  <span className="font-ui text-xs font-semibold text-primary tracking-wider">
                    {story.genreLabel}
                  </span>
                  <h3 className="font-body text-lg font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1 line-clamp-2">
                    {story.description}
                  </p>
                </div>
                <div className="flex items-center justify-between font-ui text-sm text-muted-foreground">
                  <span>by {story.author}</span>
                  <span className="flex items-center gap-1">
                    <Heart size={14} /> {story.likes}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <h2 className="font-display text-xl mb-4">Community Picks</h2>
      <div className="bg-accent rounded-lg p-6 sm:p-8">
        <span className="font-ui text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
          Featured Collection
        </span>
        <h3 className="font-body text-xl sm:text-2xl font-semibold text-accent-foreground mt-4 mb-2">
          {featuredCollection.title}
        </h3>
        <p className="font-body text-sm text-accent-foreground/80 max-w-xl mb-4">
          {featuredCollection.description}
        </p>
        <button className="font-ui text-sm border border-accent-foreground text-accent-foreground rounded-md px-4 py-2 hover:bg-accent-foreground hover:text-accent transition-colors">
          Browse Collection
        </button>
      </div>
    </div>
  );
};

export default ExplorePage;
