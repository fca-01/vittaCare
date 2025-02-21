import { cn } from "@/lib/utils";



export function Title({ as: Tag = 'h1', children, className = '', size = 'md' }: { children: React.ReactNode, as?: React.ElementType, className?: string, size?: 'sm' | 'md' | 'lg' }) {
  return (
    <Tag className={cn(`font-light text-[#102e16] text-center md:text-start font-sans`, size === 'sm' && 'text-2xl md:text-4xl', size === 'md' && 'text-3xl md:text-5xl', size === 'lg' && 'text-4xl md:text-6xl', className)}>
      {children}
    </Tag>
  )
}

export function FancyTitle({ children, className = '', size = 'md' }: { children: React.ReactNode, className?: string, size?: 'sm' | 'md' | 'lg' }) {
  return (
    <span className="font-normal text-[#102e16] text-center md:text-start">
      <span className={cn(`italic font-normal font-serif ${className}`, size === 'sm' && 'text-2xl md:text-4xl', size === 'md' && 'text-3xl md:text-5xl', size === 'lg' && 'text-4xl md:text-6xl')}>{children}</span>
    </span>
  )
}

export function Description({ children, className = '', width = 'md' }: { children: React.ReactNode, className?: string, width?: 'sm' | 'md' | 'lg' }) {
  return (
    <p className={cn(`text-base md:text-lg text-wrap  text-[#102e16] font-sans pb-2 ${className}`, width === 'sm' && 'w-fit', width === 'md' && 'w-full', width === 'lg' && 'md:w-[45vw]')}>
      {children}
    </p>
  )
}