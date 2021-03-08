import { NextApiRequest, NextApiResponse } from 'next';
import { useSession } from 'next-auth/client'

import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

interface SuccessResponseType {
    name: string;
    email: string;
    currentExperience: number;
    challengesFinished: number;
}

export default async (req: NextApiRequest, res: NextApiResponse<ErrorResponseType | SuccessResponseType>): Promise<void> => {
    if (req.method === 'POST') {
        const { name, email, currentExperience, challengesFinished } = req.body

        if (!name || name === undefined || name === null ||
            !email || email === undefined || email === null ||
            !currentExperience || currentExperience === undefined || currentExperience === null ||
            !challengesFinished || challengesFinished === undefined || challengesFinished === null) {
            res.status(400).json({ error: 'Missing a paramenter' })
            return
        }

        const { db } = await connect()

        const response = await db.collection('users').insertOne({
            name,
            email,
            currentExperience,
            challengesFinished
        })
        res.status(200).json(response.ops[0])
    }
    else {
        res.status(400).json({ error: 'Wrong Method' })
    }
}