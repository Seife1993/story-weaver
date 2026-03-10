import { useState } from "react";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import ExplorePage from "@/components/ExplorePage";
import LibraryPage from "@/components/LibraryPage";
import StoryDetailPage from "@/components/StoryDetailPage";
import StoryReadingPage from "@/components/StoryReadingPage";
import { stories } from "@/data/stories";

type View =
  | { type: "landing" }
  | { type: "explore" }
  | { type: "library" }
  | { type: "community" }
  | { type: "story-detail"; storyId: string }
  | { type: "story-reading"; storyId: string; chapterId?: string };

const Index = () => {
  const [view, setView] = useState<View>({ type: "landing" });

  const handleNavigate = (page: string) => {
    switch (page) {
      case "landing":
        setView({ type: "landing" });
        break;
      case "explore":
        setView({ type: "explore" });
        break;
      case "library":
        setView({ type: "library" });
        break;
      case "community":
        setView({ type: "community" });
        break;
    }
    window.scrollTo(0, 0);
  };

  const handleStoryClick = (storyId: string) => {
    const story = stories.find((s) => s.id === storyId);
    if (story?.isOwned) {
      setView({ type: "story-reading", storyId });
    } else {
      setView({ type: "story-detail", storyId });
    }
    window.scrollTo(0, 0);
  };

  const handleChapterClick = (storyId: string, chapterId: string) => {
    setView({ type: "story-reading", storyId, chapterId });
    window.scrollTo(0, 0);
  };

  const story = "storyId" in view ? stories.find((s) => s.id === view.storyId) : null;

  if (view.type === "landing") {
    return <LandingPage onEnter={() => handleNavigate("explore")} />;
  }

  const activePage =
    view.type === "explore" || view.type === "story-detail"
      ? "explore"
      : view.type === "library" || view.type === "story-reading"
      ? "library"
      : view.type;

  return (
    <div className="min-h-screen bg-background">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {view.type === "explore" && (
        <ExplorePage onStoryClick={handleStoryClick} />
      )}

      {view.type === "library" && (
        <LibraryPage onStoryClick={handleStoryClick} />
      )}

      {view.type === "community" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
          <h1 className="font-display text-3xl text-foreground mb-2">Community</h1>
          <p className="font-body text-muted-foreground">Coming soon — connect with fellow world-builders.</p>
        </div>
      )}

      {view.type === "story-detail" && story && (
        <StoryDetailPage
          story={story}
          onChapterClick={handleChapterClick}
          onBack={() => handleNavigate("explore")}
        />
      )}

      {view.type === "story-reading" && story && (
        <StoryReadingPage
          story={story}
          initialChapterId={view.chapterId}
          onBack={() => handleNavigate(story.isOwned ? "library" : "explore")}
        />
      )}
    </div>
  );
};

export default Index;
