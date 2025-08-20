// components/HoverDropdown.tsx
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Plus } from 'lucide-react';

export default function HoverDropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;          // <Link /> ઇલેમેન્ટ્સ
  onNavigate?: () => void;            // વૈકલ્પિક: ક્લિક પછી close
}) {
  const [open, setOpen] = useState(false);

  /*  spring: opacity + translateY  */
  const spring = useSpring({
    opacity: open ? 1 : 0,
    transform: open
      ? 'translateY(0)'
      : 'translateY(-8px)',
    config: { tension: 250, friction: 30 },
  });

  /*  mouse enter / leave – hover ખોલે/બંધ કરે  */
  const handleEnter = () => setOpen(true);
  const handleLeave = () => setOpen(false);

  return (
    <div
      className="relative text-base"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        className="w-full flex items-center justify-between"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}   // fallback (click on touch devices)
      >
        <span className="font-normal">{title}</span>
        <Plus
          className={`transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        />
      </button>

      {/* Dropdown content */}
      {open && (
        <animated.div
          style={spring}
          className="absolute left-0 mt-2 w-full bg-white rounded shadow-md z-10"
        >
          {children}
        </animated.div>
      )}
    </div>
  );
}
