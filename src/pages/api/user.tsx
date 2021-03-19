import { NextApiRequest, NextApiResponse } from 'next';

import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

interface SuccessResponseType {
    avatar: string;
    name: string;
    level: string;
    currentExperience: number;
    challengesFinished: number;
}

export default async (req: NextApiRequest, res: NextApiResponse<ErrorResponseType | SuccessResponseType>): Promise<void> => {
    if (req.method === 'POST') {
        const { avatar, name, level, currentExperience, challengesFinished } = req.body

        if (!avatar || avatar === undefined || avatar === null ||
            !name || name === undefined || name === null ||
            !level || level === undefined || level === null ||
            !currentExperience || currentExperience === undefined || currentExperience === null ||
            !challengesFinished || challengesFinished === undefined || challengesFinished === null) {
            res.status(400).json({ error: 'Missing a paramenter' })
            return
        }

        const { db } = await connect()

        const response = await db.collection('users').insertOne({
            avatar,
            name,
            level,
            currentExperience,
            challengesFinished
        })
        res.status(200).json(response.ops[0])
    }
    else {
        res.status(400).json({ error: 'Wrong Method' })
    }
}