'use client'

import { useState } from 'react'

import {
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react'

import Orders from '@/components/molecules/test-orders'

import { colors } from '@/constants/test.constants'
import { Colors } from '@/types/test.type'

export default function BillingPage() {
  const [selectedColor, setSelectedColor] = useState<Colors>('default')
  return (
    <div className="flex flex-col gap-5">
      <Orders />
      <div className="flex flex-col gap-3">
        <Table
          color={selectedColor}
          selectionMode="single"
          defaultSelectedKeys={['2']}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <RadioGroup
          label="Selection color"
          orientation="horizontal"
          value={selectedColor}
          onValueChange={setSelectedColor as (value: string) => void}
        >
          {colors.map((color) => (
            <Radio
              key={color}
              color={color}
              value={color}
              className="capitalize"
            >
              {color}
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
