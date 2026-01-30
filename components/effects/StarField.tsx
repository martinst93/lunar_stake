"use client";

import { generateStars } from "@/utils/helpers";
import { useMemo } from "react";

interface Props {
  count?: number;
}

export default function StarField({ count = 20 }: Props) {
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div className="floating-stars fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
