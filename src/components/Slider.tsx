import React, {useEffect, useRef, useState} from "react";

let allTabs = [
    {
        id: "me",
        name: "me",
    },
    {
        id: "experience",
        name: "timeline",
    },
    {
        id: "projects",
        name: "projects",
    },
    // {
    //     id: "skills",
    //     name: "skills",
    // },
];

interface SlidingTabBarProps {
    activeTabIndex: number;
    setActiveTabIndex: (index: number) => void;
}

export const SlidingTabBar: React.FC<SlidingTabBarProps> = ({ activeTabIndex, setActiveTabIndex }) => {
    const tabsRef = useRef<(HTMLElement | null)[]>([]);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    useEffect(() => {
        if (activeTabIndex === null) {
            return;
        }

        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }, [activeTabIndex]);

    return (
        <div className="flew-row relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm scale-150">
      <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
            {allTabs.map((tab, index) => {
                const isActive = activeTabIndex === index;

                return (
                    <button
                        key={index}
                        ref={(el) => {
                            tabsRef.current[index] = el;
                        }}
                        className={`${
                            isActive ? `` : `hover:text-neutral-300`
                        } my-auto cursor-pointer select-none rounded-full px-4 text-center font-medium text-white`}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        {tab.name}
                    </button>
                );
            })}
        </div>
    );
};
