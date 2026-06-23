import React from 'react';

type MaterialSymbolProps = {
  name: string;
  className?: string;
  /** Display size in px — maps to CSS font-size */
  size?: number;
  /** Stroke weight: 100 (thin) – 700 (bold). Default 400. */
  weight?: number;
  /** 0 = outlined, 1 = filled */
  fill?: 0 | 1;
  /** Fine-tunes contrast/thickness: -50 – 200 */
  grade?: number;
  /**
   * Optical size: 20 – 48. Defaults to size clamped into that range.
   * At large sizes (e.g. 128px), set this to 48 so strokes scale correctly.
   */
  opticalSize?: number;
};

function clampOpsz(size: number) {
  return Math.min(48, Math.max(20, size));
}

export default function MaterialSymbol({
  name,
  className = '',
  size = 24,
  weight = 400,
  fill = 0,
  grade = 0,
  opticalSize,
}: MaterialSymbolProps) {
  const opsz = opticalSize ?? clampOpsz(size);

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}
