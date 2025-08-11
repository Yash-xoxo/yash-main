'use server'

export type SendMessageState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function sendMessage(prevState: SendMessageState, formData: FormData): Promise<SendMessageState> {
  // Simulate processing
  await new Promise((r) => setTimeout(r, 600))

  const name = (formData.get('name') || '').toString().trim()
  const email = (formData.get('email') || '').toString().trim()
  const message = (formData.get('message') || '').toString().trim()

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill out all fields.' }
  }

  // Here you could send to email/webhook/DB
  // For now we just return success
  return {
    status: 'success',
    message: `Thanks ${name}! Your message has been sent.`
  }
}
