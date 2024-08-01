const express = require('express');

const router = express.Router()

module.exports = router;

const Quest = require('../models/Quest');
const User = require('../models/User');

router.get('/getAllQuests', async (req, res) => {
    try{
        const quests = await Quest.find();
        res.json(quests)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/postQuest', async (req, res) => {
    const quest = new Quest({
        questName: req.body.questName,
        questDescription: req.body.questDescription,
        questPoints: req.body.questPoints,
        tags: req.body.tags,
        screens: req.body.screens
    })

    try {
        const savedQuest = await quest.save();
        res.status(200).json(savedQuest)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

})

router.get('/getOneQuest/:id', async (req, res) => {
    try{
        const quest = await Quest.findById(req.params.id);
        res.json(quest)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/updateQuest/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Quest.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/deleteQuest/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedQuest = await Quest.findByIdAndDelete(id)
        res.status(200).json(deletedQuest)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.get('/getAllUsers', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/postUser', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        points: req.body.points
    })

    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }

})

router.get('/getOneUser/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id)
        res.status(200).json(deletedUser)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})