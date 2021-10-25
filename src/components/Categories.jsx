import React, {useState} from "react";

export default function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null);

    const selectActiveItem = (index) => {
        setActiveItem(index);
    };
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? "active" : ""}
                    onClick={() => selectActiveItem(null)}
                >
                    Все
                </li>
                {items &&
                items.map((item, index) => (
                    <li
                        className={activeItem === index ? "active" : ""}
                        onClick={() => selectActiveItem(index)}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
