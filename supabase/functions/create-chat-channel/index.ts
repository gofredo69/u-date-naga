import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { StreamChat } from 'npm:stream-chat'

serve(async (req) => {
  try {
    // 1. Get the newly created match from the Supabase trigger
    const payload = await req.json()
    const match = payload.record 

    const user1 = match.user1_id
    const user2 = match.user2_id
    const matchId = match.id

    // 2. Initialize Stream Chat securely using the keys we saved earlier
    const apiKey = Deno.env.get('STREAM_API_KEY')!
    const apiSecret = Deno.env.get('STREAM_API_SECRET')!
    const serverClient = StreamChat.getInstance(apiKey, apiSecret)

    // 3. Generate a private messaging channel exclusively for these two users
    const channel = serverClient.channel('messaging', `match-${matchId}`, {
      members: [user1, user2],
      created_by_id: user1, 
    })

    await channel.create()

    return new Response(JSON.stringify({ success: true, message: "Chat channel created!" }), { 
      headers: { "Content-Type": "application/json" },
      status: 200 
    })

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { 
      headers: { "Content-Type": "application/json" },
      status: 400 
    })
  }
})
