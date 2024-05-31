import RootLayout from '@/components/templates/Layou'

export default function HomeLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout>{children}</RootLayout>
}
