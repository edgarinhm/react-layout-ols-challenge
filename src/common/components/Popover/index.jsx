import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Popover.css";

const Popover = ({
  trigger,
  content,
  position = "bottom",
  triggerType = "hover",
  offset = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  const handleMouseEnter = () => {
    if (triggerType === "hover") {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerType === "hover") {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    if (triggerType === "click") {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        triggerType === "click" &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [triggerType]);

  const getPopoverPosition = () => {
    if (!triggerRef.current) return {};

    const positions = {
      top: {
        top: -offset,
        transform: "translateY(-100%)",
      },
      bottom:
        position === "bottomCenter"
          ? {
              top: `calc(100% + ${offset}px)`,
              left: "50%",
              transform: "translateX(-50%)",
            }
          : {
              top: "100%",
              transform: `translateY(${offset}px)`,
            },
      left: {
        top: 0,
        right: `calc(100% + ${offset}px)`,
      },
      right: {
        top: 0,
        left: `calc(100% + ${offset}px)`,
      },
    };

    return positions[position] || positions.bottom;
  };

  return (
    <div
      className="popover-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={triggerRef}
    >
      {trigger}
      {isVisible && (
        <div ref={popoverRef} className="popover" style={getPopoverPosition()}>
          {content}
        </div>
      )}
    </div>
  );
};

Popover.propTypes = {
  trigger: PropTypes.node,
  content: PropTypes.node,
  position: PropTypes.string,
  triggerType: PropTypes.string,
  offset: PropTypes.number,
};

export default Popover;
