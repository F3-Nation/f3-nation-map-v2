"use client";

import { memo } from "react";
import L from "leaflet";
import isNumber from "lodash/isNumber";
import ReactDOMServer from "react-dom/server";
import { Marker } from "react-leaflet";

import { CLOSE_ZOOM, SHORT_DAY_ORDER } from "@f3/shared/app/constants";
import { safeParseInt } from "@f3/shared/common/functions";
import { cn } from "@f3/ui";

import type { RouterOutputs } from "~/trpc/types";
import { mapStore } from "~/utils/store/map";
import { selectedItemStore } from "~/utils/store/selected-item";

export const MemoGroupMarker = memo(
  ({
    group,
    show,
  }: {
    group: RouterOutputs["location"]["getAllLocationMarkers"][number];
    show: boolean;
  }) => {
    const mapRef = mapStore.use.ref();
    const { lat, lon, events, id } = group;
    if (!show || lat === null || lon === null) return null;
    return (
      <Marker
        position={[lat, lon]}
        eventHandlers={{
          mousemove: (e) => {
            const eventIdString = Array.from(
              (e.originalEvent.target as HTMLDivElement)?.classList,
            )
              // Use a class name to find the event id
              .find((className) => className.startsWith("leaflet-eventid-"))
              ?.split("-")[2];
            const eventId = safeParseInt(eventIdString);
            // Only send eventId if it is a valid number
            selectedItemStore.setState({
              locationId: id,
              ...(isNumber(eventId) ? { eventId } : {}),
            });
          },
          click: (e) => {
            const eventIdString = Array.from(
              (e.originalEvent.target as HTMLDivElement)?.classList,
            )
              // Use a class name to find the event id
              .find((className) => className.startsWith("leaflet-eventid-"))
              ?.split("-")[2];
            const eventId = safeParseInt(eventIdString);
            selectedItemStore.setState({
              locationId: id,
              eventId,
            });
            mapRef.current?.setView(
              { lat, lng: lon },
              Math.max(mapStore.get("zoom"), CLOSE_ZOOM),
              { animate: mapStore.get("zoom") === CLOSE_ZOOM },
            );
          },
        }}
        icon={L.divIcon({
          iconSize: [events.length * 30, 30],
          iconAnchor: [(events.length * 30) / 2, 30 + 15],
          className: "",
          html: ReactDOMServer.renderToString(
            <div className="flex flex-col">
              <div className="flex flex-row">
                {...events
                  .sort((a, b) => (a.dayOfWeek ?? 0) - (b.dayOfWeek ?? 0))
                  .map((marker, markerIdx, markerArray) => {
                    const dotw = marker.dayOfWeek;
                    const isStart = markerIdx === 0;
                    const isEnd = markerIdx === markerArray.length - 1;
                    const dayText = dotw !== null ? SHORT_DAY_ORDER[dotw] : 0;
                    return (
                      <button
                        key={markerIdx + "-" + id}
                        className={cn(
                          "flex-1 cursor-pointer border-b-[0.5px] border-t-[0.5px] bg-foreground py-2 text-center text-background",
                          // Use a class name to find the event id
                          `leaflet-eventid-${marker.id}`,
                          {
                            "border-b-0": events.length === 1,
                            "border-l-[0.5px]": isStart,
                            "border-r-[0.5px]": isEnd,
                            "rounded-r-full": isEnd,
                            "rounded-l-full": isStart,
                          },
                        )}
                      >
                        {dayText}
                      </button>
                    );
                  })}
              </div>
              <svg
                viewBox="0 0 40 40"
                className="-mt-[12px] w-[31px] self-center"
              >
                <path
                  className={cn("fill-foreground")}
                  d={
                    events.length === 1
                      ? "M34 10 L26 24.249 Q20 34.641 14 24.249 L6 10"
                      : "M34 14.5 L26 24.249 Q20 34.641 14 24.249 L6 14.5"
                  }
                  stroke="none"
                />
                <path
                  d={
                    events.length === 1
                      ? "M34 10 L26 24.249 Q20 34.641 14 24.249 L6 10"
                      : "M34 15 L26 24.249 Q20 34.641 14 24.249 L6 15"
                  }
                  stroke="background"
                  strokeWidth={0.5}
                  fill="none"
                />
              </svg>
            </div>,
          ),
        })}
      ></Marker>
    );
  },
  (prev, next) =>
    prev.show === next.show &&
    prev.group.id === next.group.id &&
    prev.group.events.length === next.group.events.length,
);

MemoGroupMarker.displayName = "MemoGroupMarker";
