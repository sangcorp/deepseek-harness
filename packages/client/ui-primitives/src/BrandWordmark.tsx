import type { IconProps } from './icons/props.ts'

/**
 * Render the full SangAI Harness brand wordmark.
 * @param props.size - height in px (default 24).
 * @param props.className - extra class for layout placement.
 * @returns the wordmark component.
 */
export function BrandWordmark({ size = 24, className }: IconProps) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        height: `${size}px`,
        color: 'currentColor',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <img
        src="/sangai-logo.jpg"
        width={size}
        height={size}
        alt="SangAI"
        style={{ borderRadius: '6px', objectFit: 'cover', flex: 'none' }}
      />
      <span
        style={{
          fontWeight: 700,
          fontSize: '15px',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
          color: 'var(--dsw-alias-label-primary, currentColor)',
        }}
      >
        SangAI Harness
      </span>
    </div>
  )
}
