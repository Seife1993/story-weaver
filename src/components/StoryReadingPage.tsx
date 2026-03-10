import { useState } from "react";
import { Story, Chapter } from "@/data/stories";

interface StoryReadingPageProps {
  story: Story;
  initialChapterId?: string;
  onBack: () => void;
}

const StoryReadingPage = ({ story, initialChapterId, onBack }: StoryReadingPageProps) => {
  const [activeTab, setActiveTab] = useState<"read" | "characters" | "settings" | "comments">("read");
  const [activeChapterId, setActiveChapterId] = useState(
    initialChapterId || story.chapters[0]?.id || ""
  );

  const activeChapter = story.chapters.find((c) => c.id === activeChapterId);
  const tabs = ["Read", "Characters", "Settings", "Comments"] as const;

  return (
    <div className="animate-fade-in">
      {/* Sub-nav */}
      <div className="border-b border-border bg-background sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase() as typeof activeTab)}
              className={`font-ui text-sm py-3 border-b-2 transition-colors ${
                activeTab === tab.toLowerCase()
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="font-ui text-sm text-muted-foreground hover:text-foreground mb-6">
          ← Back to {story.isOwned ? "Library" : "Explore"}
        </button>

        {activeTab === "read" && (
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chapter sidebar */}
            <div className="md:w-56 shrink-0">
              <h3 className="font-ui text-sm font-semibold text-foreground mb-3">Chapters</h3>
              <div className="space-y-1">
                {story.chapters.map((ch, i) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChapterId(ch.id)}
                    className={`w-full text-left font-ui text-sm px-3 py-2 rounded transition-colors ${
                      activeChapterId === ch.id
                        ? "bg-card border-l-2 border-primary text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {i + 1}. {ch.title}
                  </button>
                ))}
                <button className="w-full text-left font-ui text-sm px-3 py-2 text-muted-foreground hover:text-foreground border border-dashed border-border rounded mt-2">
                  + Add Chapter
                </button>
              </div>

              <div className="mt-8 bg-card rounded-lg p-4">
                <h4 className="font-ui text-sm font-semibold text-foreground mb-3">Story Stats</h4>
                <div className="space-y-2 font-ui text-sm">
                  {[
                    ["Total Words", story.totalWords.toLocaleString()],
                    ["Chapters", story.chapters.length],
                    ["Characters", story.characters.length],
                    ["Settings", story.settings.length],
                  ].map(([label, value]) => (
                    <div key={String(label)} className="flex justify-between">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chapter content */}
            {activeChapter && <ChapterContent chapter={activeChapter} />}
          </div>
        )}

        {activeTab === "characters" && (
          <div className="max-w-2xl space-y-6">
            {story.characters.map((char) => (
              <div key={char.name} className="bg-card rounded-lg p-6">
                <h3 className="font-body text-xl font-semibold text-foreground">{char.name}</h3>
                <span className="font-ui text-xs text-primary font-semibold uppercase tracking-wider">{char.role}</span>
                <p className="font-body text-muted-foreground mt-2">{char.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="max-w-2xl space-y-6">
            {story.settings.map((setting) => (
              <div key={setting.name} className="bg-card rounded-lg p-6">
                <h3 className="font-body text-xl font-semibold text-foreground">{setting.name}</h3>
                <p className="font-body text-muted-foreground mt-2">{setting.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "comments" && (
          <div className="max-w-2xl">
            <p className="font-body text-muted-foreground italic">No comments yet. Be the first to share feedback.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ChapterContent = ({ chapter }: { chapter: Chapter }) => {
  return (
    <div className="flex-1 max-w-3xl">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">{chapter.title}</h2>
        <p className="font-ui text-sm text-muted-foreground">
          {chapter.wordCount.toLocaleString()} words · Last edited {chapter.lastEdited}
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-8">
        {chapter.content.map((paragraph, i) => {
          const isQuote = paragraph.startsWith('"') && paragraph.endsWith('"') && paragraph.length < 120;
          
          if (isQuote) {
            return (
              <div key={i} className="break-inside-avoid my-6 py-4 border-y border-primary/30">
                <p className="font-body text-lg italic text-primary text-center">{paragraph}</p>
              </div>
            );
          }

          return (
            <p key={i} className="font-body text-foreground leading-relaxed mb-4 text-[15px]">
              {paragraph}
            </p>
          );
        })}

        {chapter.illustration && (
          <div className="break-inside-avoid my-4">
            <img
              src={chapter.illustration}
              alt="Chapter illustration"
              className="w-full rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryReadingPage;
