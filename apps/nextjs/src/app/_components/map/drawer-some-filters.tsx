"use client";

import Image from "next/image"; // Next.js Image component for optimized image rendering.

import { RERENDER_LOGS } from "@f3/shared/common/constants";
import { useTheme } from "@f3/ui/theme";

import type { FiltersType } from "~/utils/store/filter";
import { filterStore, isAnyFilterActive } from "~/utils/store/filter";
import AllFiltersSvgComponent from "../SVGs/allFilters"; // SVG component imports for different filter options.
import AmSvgComponent from "../SVGs/AM";
import PmSvgComponent from "../SVGs/PM";
import TodaySvgComponent from "../SVGs/today";
import TomorrowSvgComponent from "../SVGs/tomorrow";

// Defining items for the filter options with their names and corresponding SVG components or image paths.

// The main component for the map drawer.
export const DrawerSomeFilters = () => {
  RERENDER_LOGS && console.log("DrawerSomeFilters rerender");
  const filters = filterStore.useBoundStore();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Function to toggle the state of a filter when clicked.
  const handleFilterClick = (
    filterName: keyof FiltersType,
    newState?: boolean,
  ) => {
    if (filterName === "allFilters") {
      filterStore.setState({ allFilters: !filters.allFilters });
    } else {
      filterStore.setState({
        [filterName]: newState ?? !filters[filterName],
      });
    }
  };
  const filterItems = [
    { name: "today" as const, img: TodaySvgComponent },
    { name: "tomorrow" as const, img: TomorrowSvgComponent },
    {
      name: "am" as const,
      img: AmSvgComponent,
      onClick: () => {
        handleFilterClick("am");
        handleFilterClick("pm", false);
      },
    },
    {
      name: "pm" as const,
      img: PmSvgComponent,
      onClick: () => {
        handleFilterClick("pm");
        handleFilterClick("am", false);
      },
    },
    {
      name: "all filters" as const,
      img: AllFiltersSvgComponent,
      onClick: () => handleFilterClick("allFilters"),
      active: isAnyFilterActive(filters),
    },
  ];

  return (
    <div className="mt-2 max-w-sm self-center overflow-hidden px-2">
      {/* Grid layout for filter options */}
      <div className="flex flex-row flex-wrap gap-4">
        {/* Mapping over each filter item to create its visual representation */}
        {filterItems.map((item, index) => (
          <button
            key={index} // React key for list rendering.
            className="flex cursor-pointer flex-col items-center"
            onClick={item.onClick ?? (() => handleFilterClick(item.name))} // Toggle filter state on click.
          >
            {/* Container for the filter icon, changes appearance based on filter state */}
            <div
              className={`rounded-lg border p-2 ${
                item.active ?? filters[item.name]
                  ? isDark
                    ? "border-gray-300 bg-gray-300"
                    : "border-gray-600 bg-gray-600"
                  : "border-gray-400 bg-background"
              }`}
            >
              {/* Centering container for the filter icon */}
              <div className="flex h-7 w-full items-center justify-center">
                {/* Conditional rendering of either an SVG component or an image based on the item type */}
                {typeof item.img === "string" ? (
                  <Image
                    className="max-h-full w-auto object-contain"
                    src={item.img}
                    alt={item.name}
                  />
                ) : (
                  <item.img
                    className="h-full w-full"
                    fillcolor={
                      item.active ?? filters[item.name]
                        ? isDark
                          ? "#000000"
                          : "#FFFFFF" // Fill color for active state.
                        : isDark
                          ? "#FFFFFF"
                          : "#4b5563" // Default fill color for inactive state.
                    }
                  />
                )}
              </div>
            </div>
            {/* Name of the filter below its icon */}
            <p className="text-xs text-foreground">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
