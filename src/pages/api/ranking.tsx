import connect from '../../utils/database'

export default async (req, res) => {
    const { db } = await connect();

    const users = await db
        .collection('users')
        .find({})
        .sort({ currentExperience: -1 })
        .limit(10)
        .toArray()

    res.json(users)
}