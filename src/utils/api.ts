export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, options)
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`)
  }
  return response.json()
} 