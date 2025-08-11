import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = (formData.get('name') || '').toString().trim()
    const email = (formData.get('email') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: 'error', message: 'Please fill out all fields.' },
        { status: 400 }
      )
    }

    // Here you could send to email/webhook/DB
    // For now we just return success
    return NextResponse.json({
      status: 'success',
      message: `Thanks ${name}! Your message has been sent.`
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
