import ArticleHeading from "./ArticleHeading";
import ArticleLink from "./ArticleLink";
import ArticleSubheading from "./ArticleSubheading";
import BehaviorPanel from "./BehaviorPanel";

const Behavior = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 -mb-4">
        <ArticleHeading>Behavior</ArticleHeading>
        <ArticleLink>Cat Behavior</ArticleLink>
      </div>
      <div className="space-y-4">
        <BehaviorPanel />
        <p>
          Outdoor cats are active both day and night, although they tend to be
          slightly more active at night.<sup>[91]</sup> Domestic cats spend the
          majority of their time in the vicinity of their homes but can range
          many hundreds of meters from this central point. They establish{" "}
          <a>territories</a> that vary considerably in size, in one study
          ranging 7-28 ha (17-69 acres).<sup>[92]</sup> The timing of cats&apos;
          activity is quite flexible and varied but being low-light predators,
          they are generally <a>crepuscular</a>, which means they tend to be
          more active near dawn and dusk. However, house cats&apos; behavior is
          also influenced by human activity and they may adapt to their
          owners&apos; sleeping patterns to some extent.<sup>[93][94]</sup>
        </p>
        <p>
          Cats conserve energy by sleeping more than most animals, especially as
          they grow older. The daily duration of sleep varies, usually between
          12 and 16 hours, with 13 and 14 being the average. Some cats can sleep
          as much as 20 hours. The term &quot;cat nap&quot; for a short rest
          refers to the cat&apos;s tendency to fall asleep (lightly) for a brief
          period. While asleep, cats experience short periods of{" "}
          <a>rapid eye movement sleep</a> often accompanied by muscle twitches,
          which suggests they are dreaming.<sup>[95]</sup>
        </p>
        <p>
          A common misconception is that a cat&apos;s behavioral and personality
          traits correspond to its coat color. These traits instead depend on a
          complex interplay between genetic and environmental factors.
          <sup>[96]</sup>
        </p>
        <ArticleSubheading>Sociability</ArticleSubheading>
        <p>
          The social behavior of the domestic cat ranges from widely dispersed
          individuals to <a>feral cat colonies</a> that gather around a food
          source, based on groups of co-operating females.<sup>[97][98]</sup>{" "}
          Within such groups, one cat is usually dominant over the others.
          <sup>[99]</sup> Each cat in a colony holds a distinct territory, with
          sexually active males having the largest territories, which are about
          10 times larger than those of female cats and may overlap with several
          females&apos; territories. These territories are marked by{" "}
          <a>urine spraying</a>, by rubbing objects at head height with
          secretions from facial glands, and by <a>defecation</a>.
          <sup>[82]</sup>
          Between these territories are neutral areas where cats watch and greet
          one another without territorial conflicts. Outside these neutral
          areas, territory holders usually chase away stranger cats, at first by
          staring, hissing, and <a>growling</a>, and, if that does not work, by
          short and violent, noisy attacks. Though cats do not have a social
          survival strategy or <a>herd behavior</a>, they always hunt alone.
          <sup>[100]</sup>
        </p>
      </div>
    </div>
  );
};

export default Behavior;
