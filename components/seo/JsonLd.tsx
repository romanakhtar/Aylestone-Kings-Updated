/**
 * Renders a single JSON-LD script tag. Pass a complete schema.org root object (including @context where required).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
