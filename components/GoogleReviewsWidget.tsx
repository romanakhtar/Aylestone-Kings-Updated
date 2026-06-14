export function GoogleReviewsEmbed() {
  return (
    <div
      className="elfsight-app-011ced7d-617a-4510-a14b-0d352dd0ddca"
      data-elfsight-app-lazy
    />
  )
}

type GoogleReviewsWidgetProps = {
  showHeading?: boolean
}

export default function GoogleReviewsWidget({ showHeading = true }: GoogleReviewsWidgetProps) {
  if (!showHeading) {
    return (
      <div className="mt-16">
        <GoogleReviewsEmbed />
      </div>
    )
  }

  return (
    <section className="py-16 bg-[#E4E4E4]" aria-labelledby="google-reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="google-reviews-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F0D3E] mb-4"
          >
            What Our Customers Say
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#06A0A6]" aria-hidden="true" />
        </div>
        <GoogleReviewsEmbed />
      </div>
    </section>
  )
}
