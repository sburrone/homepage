import { GlowContainer } from "./GlowContainer.tsx";
import Link from "./Link.tsx";

const App = () => {
  return (
    <div
      className={
        "dark:bg-dark-surface not-dark:bg-light-surface h-dvh w-dvw flex flex-col justify-center items-center dark:text-dark-on-surface not-dark:text-light-on-surface"
      }
    >
      <GlowContainer
        className={
          "text-center text-4xl font-bold w-200 max-w-9/10  border-fresh rounded-xl font-display tracking-wider"
        }
        spanClassName={
          "w-full h-full dark:bg-dark-primary-container light:bg-light-primary-container dark:text-dark-on-primary-container light:text-light-on-primary-container px-40 py-4"
        }
      >
        nicholas.party
      </GlowContainer>

      <div className={"flex flex-col gap-8 w-200 max-w-9/10 mt-10"}>
        <Link
          href={"https://cluedo.nicholas.party"}
          backgroundImageUrl={"detectivenotes.webp"}
        >
          <div
            className={
              "rounded-xl backdrop-blur-sm hover:backdrop-brightness-80 w-full h-52 font-detective flex items-center justify-center transition-all text-4xl text-[#6fdba9]"
            }
            style={{ WebkitTextStroke: `2px #005236` }}
          >
            Detective Notes
          </div>
        </Link>

        <Link href={"https://packingplanner.nicholas.party"}>
          <div
            className={
              "font-bold box-border  dark:bg-[#1f1f1f] not-dark:bg-[#ffffff] border-b-8 dark:border-b-[#e6e6e6] rounded-xl backdrop-blur-sm hover:backdrop-brightness-80 w-full h-52 font-packing flex items-center justify-center transition-all text-4xl light:text-black dark:text-white"
            }
          >
            <span className={"text-[#5294ff]"}>V</span>
            aligiatore
          </div>
        </Link>

        <Link href={"https://shoppinglist.nicholas.party"}>
          <div
            className={
              "box-border border-2 border-[#fda600] font-bold rounded-xl backdrop-blur-sm hover:backdrop-brightness-80 w-full h-52 flex items-center justify-center transition-all text-4xl light:text-black dark:text-white"
            }
          >
            Lista della spesa
          </div>
        </Link>
      </div>
    </div>
  );
};

export default App;
