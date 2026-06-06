import { Fragment } from "react"
import Link from "next/link"
import JsonLd from "@/components/seo/JsonLd"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { buildBreadcrumbJsonLd, type BreadcrumbItem as CrumbItem } from "@/lib/seo/breadcrumbs"
import { cn } from "@/lib/utils"

type PageBreadcrumbsProps = {
  items: CrumbItem[]
  pageUrl: string
  className?: string
  /** When false, omit BreadcrumbList JSON-LD (e.g. when rendered separately in page structured data). */
  includeJsonLd?: boolean
}

export default function PageBreadcrumbs({
  items,
  pageUrl,
  className,
  includeJsonLd = true,
}: PageBreadcrumbsProps) {
  return (
    <>
      {includeJsonLd ? <JsonLd data={buildBreadcrumbJsonLd(items, pageUrl)} /> : null}
      <Breadcrumb className={cn(className)}>
        <BreadcrumbList className="text-sm text-[#2E3C44]">
          {items.map((item, index) => (
            <Fragment key={`${item.name}-${index}`}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="text-[#06A0A6] hover:text-[#0F0D3E] hover:underline underline-offset-2 font-medium"
                    >
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-[#0F0D3E] font-medium">
                    {item.name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 ? (
                <BreadcrumbSeparator className="text-gray-400" />
              ) : null}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  )
}
