import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import {NextRequest,NextResponse} from 'next/server'
import { sendEmail } from '@/helpers/mailHelper';

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token} = reqBody
        console.log("Token",token)

        const user = await User.findOne({verifyToken:token,
            verifyTokenExpiry:{$gt:Date.now()}
        })
        if(!user){
            return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
        }
        console.log(user)
        user.isVerified=true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()
        await sendEmail({
            email: user.email,
            emailType: 'VERIFY',
            userId: user._id
        })
        return NextResponse.json({ 
            message: "Email verified Successfully" ,
            success:true
        }, { status: 500 });

        
    } catch (error: unknown) { // Changed 'Error' to 'unknown'
        // Handle the error safely
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        // Fallback for non-Error cases
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}