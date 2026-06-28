import { isValidId } from "../src/isValidId.js"

// --- Manual Baseline Cases ---
test("accepts a positive integer string as a valid ID", () => {
  expect(isValidId("3")).toBe(true)
})

test("rejects a non-numeric string", () => {
  expect(isValidId("abc")).toBe(false)
})

test("rejects zero as an edge case", () => {
  expect(isValidId("0")).toBe(false)
})

// --- AI-Generated Additional Edge Cases ---
test("rejects a negative integer string", () => {
  expect(isValidId("-5")).toBe(false)
})

test("rejects a decimal/floating-point numeric string", () => {
  expect(isValidId("4.2")).toBe(false)
})

test("rejects a completely empty string", () => {
  expect(isValidId("")).toBe(false)
})

test("accepts a pure numeric literal value", () => {
  expect(isValidId(10)).toBe(true)
})

test("accepts boolean true because it casts to 1", () => {
  expect(isValidId(true)).toBe(true) 
})