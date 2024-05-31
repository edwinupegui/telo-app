import React from 'react'

import { Input } from '@nextui-org/react'

import TestForm from '@/components/molecules/test-form'

import { colors, variants } from '@/constants/test.constants'

export default function CommercialPage() {
  return (
    <div className="flex flex-col gap-5">
      <TestForm />

      <div className="flex w-full flex-row flex-wrap gap-4">
        {colors.map((color) => (
          <Input
            key={color}
            type="email"
            color={color}
            label="Email"
            placeholder="Enter your email"
            defaultValue="junior@nextui.org"
            className="max-w-[220px]"
          />
        ))}
        {variants.map((variant) => (
          <Input
            key={variant}
            type="email"
            variant={variant}
            label="Email"
            placeholder="Enter your email"
            defaultValue="junior@nextui.org"
            className="max-w-[220px]"
          />
        ))}
      </div>
    </div>
  )
}
