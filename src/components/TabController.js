import React, { useState } from "react";
import Tab from "./Tab";

const TabController = props => {
  const [currentTab, setCurrentTab] = useState(1);
  // checks if the single Tab component is active, which will add the 'active' class
  // inside of the child component.
  const checkIfCurrent = tabID => (currentTab === tabID ? true : false);

  return (
    <section className="tab-wrapper">
      <button
        className={checkIfCurrent(1) ? "tab-btn btnActive" : "tab-btn"}
        onClick={() => setCurrentTab(1)}
      >
        Tab 1
      </button>
      <button
        className={checkIfCurrent(2) ? "tab-btn btnActive" : "tab-btn"}
        onClick={() => setCurrentTab(2)}
      >
        Tab 2
      </button>
      <button
        className={checkIfCurrent(3) ? "tab-btn btnActive" : "tab-btn"}
        onClick={() => setCurrentTab(3)}
      >
        Tab 3
      </button>
      <button
        className={checkIfCurrent(4) ? "tab-btn btnActive" : "tab-btn"}
        onClick={() => setCurrentTab(4)}
      >
        Tab 4
      </button>

      <>
        <Tab tabID={1} isActive={checkIfCurrent(1)}>
          <p>Tab 1</p>
          <p>
            Here's the party!{" "}
            <span role="img" aria-label="party-emoji">
              🎉
            </span>
          </p>
        </Tab>
        <Tab tabID={2} isActive={checkIfCurrent(2)}>
          <p>Tab 2</p>
          <p>
            I'm over the moon{" "}
            <span role="img" aria-label="rocket-emoji">
              🚀
            </span>
          </p>
        </Tab>
        <Tab tabID={3} isActive={checkIfCurrent(3)}>
          <p>Tab 3</p>
          <p>
            This tab is{" "}
            <span role="img" aria-label="fire-emoji">
              🔥
            </span>
          </p>
        </Tab>
        <Tab tabID={3} isActive={checkIfCurrent(4)}>
          <p>Tab 4</p>
          <p>
            Such a cool one{" "}
            <span role="img" aria-label="fist-emoji">
              👊
            </span>
          </p>
        </Tab>
      </>
    </section>
  );
};

export default TabController;
