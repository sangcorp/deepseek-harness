import type { IconProps } from './icons/props.ts'

/**
 * Render the SangAI logo.
 * @param props.size - width/height in px (default 24).
 * @param props.className - extra class for layout placement.
 * @returns the logo img element.
 */
export function FishLogo({ size = 24, className }: IconProps) {
  return (
    <img
      src="/sangai-logo.jpg"
      width={size}
      height={size}
      className={className}
      alt="SangAI"
      style={{ borderRadius: '6px', objectFit: 'cover', display: 'inline-block', verticalAlign: 'middle' }}
    />
  )
}
