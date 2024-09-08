import OverviewPanel from "./OverviewPanel";
import { MdEdit } from "react-icons/md";

const Overview = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:block">
      <OverviewPanel />
      <div className="space-y-4">
        <p>
          The <b>cat</b> (<b>Felis catus</b>), commonly referred to as the{" "}
          <b>domestic cat</b> or <b>house cat</b>, is the only{" "}
          <a>domesticated species</a> in the family <a>Felidae</a>. Recent
          advances in <a>archaeology</a> and <a>genetics</a> have shown that the{" "}
          <a>domestication of the cat</a> occurred in the <a>Near East</a>{" "}
          around 7500 <a>BC</a>. It is commonly kept as a <a>house pet</a> and{" "}
          <a>farm cat</a>, but also ranges freely as a <a>feral cat</a> avoiding
          human contact. It is valued by humans for companionship and its
          ability md:ml-4 to kill <a>vermin</a>. Its retractable <a>claws</a>{" "}
          are adapted to killing <a>small prey</a> like <a>mice</a> and{" "}
          <a>rats</a>. It has a strong, flexible body, quick <a>reflexes</a>,
          sharp teeth, and its <a>night vision</a> and <a>sense of smell</a> are
          well developed. It is a<a>social species</a>, but a solitary hunter
          and a <a>crepuscular predator</a>. <a>Cat communication</a> includes
          vocalizations like <a>meowing</a>, <a>purring</a>, trilling, hissing,
          <a>growling</a>, and grunting as well as <a>cat body language</a>. It
          can hear sounds too faint or too high in <a>frequency</a> for{" "}
          <a>human ears</a>, such as those made by <a>small mammals</a>. It also
          secretes and perceives <a>pheromones</a>.
        </p>
        <p>
          Female domestic cats can have <a>kittens</a> from <a>spring</a> to
          late <a>autumn</a> in <a>temperate zones</a> and throughout the year
          in <a>equatorial regions</a>, with <a>litter</a> sizes often ranging
          from two to five kittens. Domestic cats are bred and shown at events
          as registered <a>pedigreed cats</a>, a hobby known as <a>cat fancy</a>
          . <a>Animal population control</a> of cats may be achieved by{" "}
          <a>spaying</a> and <a>neutering</a>, but their proliferation and the
          abandonment of pets has resulted in large numbers of feral cats
          worldwide, contributing to the extinction of <a>bird</a>,{" "}
          <a>mammal</a> and <a>reptile</a> species.
        </p>
        <p>
          As of 2017, the domestic cat was the second most popular pet in the{" "}
          <a>United States</a>, with 95.6 million cats owned and around 42
          million households owning at least one cat. In the{" "}
          <a>United Kingdom</a>, 26% of adults have a cat, with an estimated
          population of 10.9 million pet cats as of 2020. As of 2021, there were
          an estimated 220 million owned and 480 million stray cats in the
          world.
        </p>
        <div className="flex items-center gap-0.5 border-b">
          <h2>Etymology and Naming</h2>
          <button className="icon-button-sm mb-0.5 text-gray-500">
            <MdEdit size={12} />
          </button>
        </div>
        <p>
          The origin of the English word cat, <a>Old English</a> <i>catt</i>, is
          thought to be the <a>Late Latin</a> word cattus, which was first used
          at the beginning of the 6th century.<sup>[4]</sup> The Late Latin word
          may be derived from an unidentified <a>African language</a>.
          <sup>[5]</sup> The Nubian word kaddîska &apos;wildcat&apos; and{" "}
          <a>Nobiin</a> <i>kadīs</i> are possible sources or cognates.
          <sup>[6]</sup>
        </p>
        <p>
          The forms might also have derived from an ancient Germanic word that
          was absorbed into Latin and then into Greek, Syriac, and Arabic.
          <sup>[7]</sup> The word may be derived from Germanic and Northern
          European languages, and ultimately be borrowed from Uralic, cf.{" "}
          <a>Northern Sámi</a> <i>gáđfi</i>, &apos;female <a>stoat</a>&apos;,{" "}
          <a>Hungarian</a> <i>hölgy</i>, &apos;lady, female stoat&apos;; from{" "}
          <a>Proto-Uralic</a> *<i>käďwä</i>, &apos;female (of a furred
          animal)&apos;.<sup>[8]</sup>
        </p>
      </div>
    </div>
  );
};

export default Overview;
