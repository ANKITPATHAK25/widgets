import { useState, useEffect } from "react";
import "./styles.css";

// Fetch menu height
const getMenuHeight = () =>
  getComputedStyle(document.body).getPropertyValue("--widget-2-menu-height");

const items = [
  {
    name: "Home",
    content: "Vivamus...",
  },
  // Add more items here
];

const buttons = [
  {
    name: "Home",
    icon: "home", // Material icon
  },
  // Add more buttons here
];

export const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  // Effect to set the menu height when component mounts
  useEffect(() => {
    const height = getMenuHeight();
    setMenuHeight(height);
  }, []);

  const toggleMenuBlock = (index) => setActiveBlock(index);

  return (
    <section className="page widget-2-page">
      <div className="widget-2-card">
        <div className="buttons">
          {buttons.map((item, index) => (
            <button
              key={item.name}
              className={index === activeBlock ? "active" : ""}
              onClick={() => toggleMenuBlock(index)}
            >
              <span className="material-symbols-outlined">
                {item.icon || item.name}
              </span>
              {item.name}
            </button>
          ))}
        </div>

        <div className="wrapper">
          <div
            className="content"
            style={{
              transform: `translateY(calc(0px - ${menuHeight} * ${activeBlock}))`,
            }}
          >
            {items.map((item) => (
              <div key={item.name} className="block">
                <h2>{item.name}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget;
