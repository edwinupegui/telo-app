import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../atoms/card'
import { Button } from '@nextui-org/react'

interface DeferredPrompt extends Event {
  prompt(): void
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface AppState {
  showInstallButton: boolean
  deferredPrompt: DeferredPrompt | null
}

export default function InstallAppCard() {
  const [isInstallApp, setInstallApp] = useState<boolean>(false)

  const [state, setState] = useState<AppState>({
    showInstallButton: false,
    deferredPrompt: null,
  })

  useEffect(() => {
    const beforeInstallPromptHandler = (event: Event) => {
      event.preventDefault()
      const deferredPrompt = event as DeferredPrompt
      setState({ showInstallButton: true, deferredPrompt })
    }

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler)

    const appInstalledHandler = () => {
      setInstallApp(true)
      setState({ showInstallButton: false, deferredPrompt: null })
    }

    window.addEventListener('appinstalled', appInstalledHandler)

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler,
      )
      window.removeEventListener('appinstalled', appInstalledHandler)
    }
  }, [])

  useEffect(() => {
    setInstallApp(state.showInstallButton)
  }, [state.showInstallButton])

  const handleInstallClick = () => {
    if (state.deferredPrompt) {
      state.deferredPrompt.prompt()
      state.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setInstallApp(true)
        }
        setState({ showInstallButton: false, deferredPrompt: null })
      })
    }
  }

  if (!isInstallApp || !state.showInstallButton) {
    return null
  }

  return (
    <div className="mt-auto md:m-4">
      <Card>
        <CardHeader>
          <CardTitle>TeloApp</CardTitle>
          <CardDescription>
            Mejora la experiencia de tarabajo, instala TeloApp en tu
            dispositivo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={handleInstallClick}>
            Instalar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
