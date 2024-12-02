'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="mb-4 leading-7" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  ul: (props: any) => <ul className="mb-4 list-disc list-inside" {...props} />,
  ol: (props: any) => <ol className="mb-4 list-decimal list-inside" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  code: (props: any) => <code className="rounded bg-muted px-1 py-0.5 font-mono text-sm" {...props} />,
  pre: (props: any) => <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4" {...props} />,
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
} 