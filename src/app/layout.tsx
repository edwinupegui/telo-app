import RootLayout from '@/components/templates/Layout'

export default function HomeLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout>{children}</RootLayout>
}
