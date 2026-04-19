# AI Rules

## HTML Formatting
- **Absolute Single-line Paragraphs**: The text content inside every `<p>`, `<a>`, `<div>` and `<span>` tag MUST be on a single, continuous line.
- **Zero Newlines/Tabs in Tags**: Do not inject ANY newlines (`\n`) or tab characters (`\t`) inside a `<p>`, `<a>`, `<div>` or `<span>` tag. The closing `</p>`, `</a>`, `</div>` or `</span>` must be on the same physical line as the opening tag.
- **Formatting Violation**: Any attempt to wrap text or add internal indentation within a tag is a direct violation of project standards. No exceptions.

## Technical Constraints & Standards
- **Strict Vanilla Stack**: Use only vanilla HTML, CSS, and JS. Do not introduce external libraries (React, Tailwind, jQuery, etc.) or build tools.
- **External Asset Icons**: Prefer external SVG files in the `assets/` directory rather than inlining them in HTML.
- **Theme Consistency**: All new UI components must respect the light/dark mode system using CSS variables defined in `style.css`.
- **Global Layout Consistency**: Maintain identical mastheads and footers across all pages.
- **Asset Preloading/Prefetching**: All new assets (images, SVGs, scripts, etc.) MUST be added to the `<head>` of ALL HTML files as either `preload` (for critical, immediately visible assets) or `prefetch` (for secondary assets) to ensure optimal performance.
