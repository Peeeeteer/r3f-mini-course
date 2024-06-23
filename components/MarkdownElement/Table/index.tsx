export const Table = {
  Table: ({ children }: { children: any }) => (
    <table className="table-fixed text-white border">{children}</table>
  ),
  Thead: ({ children }: { children: any }) => (
    <thead className="">{children}</thead>
  ),
  Tbody: ({ children }: { children: any }) => (
    <tbody className="text-white">{children}</tbody>
  ),
  Tr: ({ children }: { children: any }) => (
    <tr className="text-white">{children}</tr>
  ),
  Th: ({ children }: { children: any }) => (
    <th className="text-white px-4 py-3 text-start font-medium  border">
      {children}
    </th>
  ),
  Td: ({ children }: { children: any }) => (
    <td className="text-white px-4 py-3 text-start font-medium  border">
      {children}
    </td>
  ),
};
