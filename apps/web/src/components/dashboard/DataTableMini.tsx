interface DataTableMiniColumn<T extends Record<string, unknown>> {
  key: keyof T
  label: string
  align?: 'left' | 'right'
  render?: (value: T[keyof T], row: T) => React.ReactNode
}

interface DataTableMiniProps<T extends Record<string, unknown>> {
  columns: Array<DataTableMiniColumn<T>>
  rows: T[]
}

export default function DataTableMini<T extends Record<string, unknown>>({
  columns,
  rows,
}: DataTableMiniProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gold-dark">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-3 py-2 text-left font-ui text-[10px] uppercase tracking-[0.08em] text-gold-muted"
                style={{ textAlign: column.align ?? 'left' }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border-subtle">
              {columns.map((column) => {
                const value = row[column.key]
                return (
                  <td
                    key={`${String(column.key)}-${rowIndex}`}
                    className="px-3 py-2 font-body text-[13px] text-text-primary"
                    style={{ textAlign: column.align ?? 'left' }}
                  >
                    {column.render ? column.render(value, row) : String(value ?? '')}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
