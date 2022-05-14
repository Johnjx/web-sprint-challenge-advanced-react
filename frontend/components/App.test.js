import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from './AppClass'

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe("MVP Tests", () => {
  beforeEach(() =>{
    render(<AppClass />)
  })

  test("Renders coordinate headings", () => {
    const coordinate = screen.getByText(/coordinate/i)
    const movementDetail = screen.getByText(/you moved/i)

    expect(coordinate).toBeVisible()
    expect(movementDetail).toBeVisible()
  })

  test("Renders keypad buttons", () => {
    const resetButton = screen.getByText(/reset/i)
    const leftButton = screen.getByText(/left/i)
    const rightButton = screen.getByText(/right/i)
    const upButton = screen.getByText(/up/i)
    const downButton = screen.getByText(/down/i)

    expect(resetButton).toBeTruthy()
    expect(leftButton).toBeTruthy()
    expect(rightButton).toBeTruthy()
    expect(upButton).toBeTruthy()
    expect(downButton).toBeTruthy()
  })

  test("Nav links are visible on the page", () => {
    const functionalLink = screen.queryByText(/functional/i)
    const classLink = screen.queryByText(/class-based/i)
  })

  test("Typing on email input is successful", () => {
    const emailInput = screen.getByPlaceholderText("type email")
    fireEvent.change(emailInput, { target: { value: 'jay@jay.com' } })
    
    expect(emailInput).toHaveValue("jay@jay.com")
  })

  test("Submit button is in the document", () => {
    const submitButton = screen.getByPlaceholderText("type email").nextSibling
    expect(submitButton).toBeInTheDocument()
  })
})