import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ClemensRauLanding from './ClemensRauLanding.jsx'

describe('ClemensRauLanding', () => {
  test('renders heading and default actor section', () => {
    render(<ClemensRauLanding />)
    expect(screen.getByText(/Clemens Rau/i)).toBeInTheDocument()
    expect(screen.getByText(/Sedcard & Referenzen/i)).toBeInTheDocument()
  })

  test('submits contact form via AJAX once', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) })
    render(<ClemensRauLanding />)
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Tester' } })
    fireEvent.change(screen.getByLabelText(/E-Mail/i), { target: { value: 't@t.de' } })
    fireEvent.change(screen.getByLabelText(/Nachricht/i), { target: { value: 'Hallo!' } })
    fireEvent.click(screen.getByRole('button', { name: /Senden/i }))
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
  })
})
