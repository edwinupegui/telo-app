'use client'

import { Input } from '../atoms/input'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  search: z.string(),
  email: z.string().email('Correo invalido'),
  phone: z
    .string()
    .length(10, 'Debe tener 10 dígitos.')
    .regex(/^3/, 'Debe comenzar con 3.'),
})

export default function TestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
      email: '',
      phone: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          {...form.register('search')}
        />
      </div>
      <div className="mt-4">
        <Input
          type="email"
          placeholder="Ingrese su email..."
          className="mb-2 w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          {...form.register('email')}
        />
        {form.formState.errors.email && (
          <p className="text-red-600">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="mt-4">
        <Input
          type="tel"
          placeholder="Ingrese su numero de celular..."
          className="mb-2 w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          {...form.register('phone')}
        />
        {form.formState.errors.phone && (
          <p className="text-red-600">{form.formState.errors.phone.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
      >
        Enviar
      </button>
    </form>
  )
}
