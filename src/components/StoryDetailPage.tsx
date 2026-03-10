import { ArrowRight } from "lucide-react";
import { Story } from "@/data/stories";

interface StoryDetailPageProps {
  story: Story;
  onChapterClick: (storyId: string, chapterId: string) => void;
  onBack: () => void;
}

const StoryDetailPage = ({ story, onChapterClick, onBack }: StoryDetailPageProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <button onClick={onBack} className="font-ui text-sm text-muted-foreground hover:text-foreground mb-6 flex items-center gap-1">
        ← Back
      </button>

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight size={18} className="text-muted-foreground" />
          </div>
          <h1 className="font-display text-4xl text-foreground mb-4">{story.title}</h1>
          <div className="font-ui text-sm text-muted-foreground space-y-1 mb-6">
            <div className="flex gap-8">
              <div><span className="text-foreground font-medium">Author</span><br />{story.author}</div>
              <div><span className="text-foreground font-medium">Genre</span><br />{story.genreLabel}</div>
            </div>
          </div>
          <p className="font-body text-foreground leading-relaxed mb-8">{story.description}</p>

          {story.chapters.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-ui text-sm font-semibold text-muted-foreground uppercase tracking-wider">Chapters</h3>
              {story.chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => onChapterClick(story.id, ch.id)}
                  className="block w-full text-left group"
                >
                  <p className="font-body text-lg text-foreground group-hover:text-primary transition-colors">
                    {ch.title} <ArrowRight size={16} className="inline ml-1" />
                  </p>
                  <p className="font-ui text-xs text-muted-foreground">{ch.wordCount} words · {ch.lastEdited}</p>
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <img src={story.image} alt={story.title} className="w-full h-[500px] object-cover rounded-md" />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <h1 className="font-display text-3xl text-foreground mb-2">{story.title}</h1>
        <p className="font-ui text-sm text-muted-foreground mb-4">
          {story.chapters.length} chapters · Last edited {story.lastEdited}
        </p>
        <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <p className="font-body text-foreground leading-relaxed mb-6">{story.description}</p>

        {story.chapters.length > 0 && (
          <div className="space-y-3">
            {story.chapters.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => onChapterClick(story.id, ch.id)}
                className="block w-full text-left font-body text-foreground hover:text-primary transition-colors"
              >
                Chapter {i + 1}: {ch.title} →
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDetailPage;
