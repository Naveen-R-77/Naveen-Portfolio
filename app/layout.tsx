import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Naveen Ramesh | AI Engineer & Full Stack Developer',
  description: 'Professional portfolio of Naveen Ramesh, an AI Engineer and Full Stack Developer.',
  icons: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjMDA3MGYzIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIj5OPC90ZXh0Pgo8L3N2Zz4=',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
