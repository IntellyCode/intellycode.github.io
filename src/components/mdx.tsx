import type { ComponentProps } from 'react'

export const mdxComponents = {
  table: (props: ComponentProps<'table'>) => (
    <div className="table-wrap">
      <table {...props} />
    </div>
  ),
}
