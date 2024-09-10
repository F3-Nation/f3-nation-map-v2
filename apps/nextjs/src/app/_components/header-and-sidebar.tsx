import Image from "next/image";
import Link from "next/link";

import {
  BreakPoints,
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
} from "@f3/shared/app/constants";
import { RERENDER_LOGS } from "@f3/shared/common/constants";
import { cn } from "@f3/ui";
import { ThemeToggle } from "@f3/ui/theme";

import { Responsive } from "~/utils/responsive";
import { DrawerFilterWrapper } from "./map/drawer-filter-wrapper";
import { DrawerSomeFilters } from "./map/drawer-some-filters";
import { MapSearchBox } from "./map/map-searchbox-desktop";
import SelectedItem from "./map/selected-item";

const SHOW_THEME_TOGGLE = false;
export const HeaderAndSidebar = (props: { children: React.ReactNode }) => {
  RERENDER_LOGS && console.log("HeaderAndSidebar rerender");
  return (
    <>
      <Responsive minWidth={BreakPoints.LG}>
        <div
          className={cn(
            `absolute bottom-0 left-0 flex flex-col items-stretch bg-background`,
          )}
          style={{ width: SIDEBAR_WIDTH, top: HEADER_HEIGHT }}
        >
          <div className="flex w-full flex-row justify-center">
            <DrawerSomeFilters />
          </div>
          <DrawerFilterWrapper />
        </div>
        <div
          className={cn(
            `absolute left-0 right-0 top-0 flex items-center justify-center border-b-2 border-ring bg-background px-2`,
          )}
          style={{ height: HEADER_HEIGHT }}
        >
          <Link href="https://f3nation.com/" className="absolute left-4">
            <Image src="/f3_logo.png" alt="F3 Logo" width={64} height={64} />
          </Link>
          <div className="relative w-2/5">
            <MapSearchBox hideLogo className="" />
            <p className="mt-1 w-full text-center text-xs">
              Search F3’s network of 4,368 free, peer-led workouts for men
            </p>
          </div>

          <div className="absolute right-4">
            <ThemeToggle />
          </div>
        </div>
        <div
          className="min-h-dvh"
          style={{
            paddingLeft: SIDEBAR_WIDTH,
            paddingTop: HEADER_HEIGHT,
          }}
        >
          {props.children}
          <SelectedItem />
        </div>
      </Responsive>
      <Responsive maxWidth={BreakPoints.LG}>
        {props.children}
        {process.env.NODE_ENV === "development" && SHOW_THEME_TOGGLE ? (
          <div className="absolute right-4 top-4" style={{ zIndex: 1000 }}>
            <ThemeToggle />
          </div>
        ) : null}
      </Responsive>
    </>
  );
};
