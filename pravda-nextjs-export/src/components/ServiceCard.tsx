
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  price: string
  features: string[]
  href: string
  badge?: string
  popular?: boolean
  className?: string
}

export function ServiceCard({
  title,
  description,
  price,
  features,
  href,
  badge,
  popular = false,
  className
}: ServiceCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      popular && "border-yellow-500 shadow-lg",
      className
    )}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-yellow-500 text-black px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Най-популярен
          </Badge>
        </div>
      )}
      
      {badge && !popular && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{badge}</Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
        <div className="pt-2">
          <span className="text-3xl font-bold text-yellow-500">{price}</span>
          <span className="text-gray-400 ml-1">/месец</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button asChild className="w-full bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
            <Link href={href} className="flex items-center justify-center gap-2">
              Научете повече
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
