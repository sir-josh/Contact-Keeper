const express = require('express');
const router = express.Router();

// @route   GET    api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res)=>{
    res.send('Get user contacts');
});

// @route   POST    api/contacts
// @desc    Add new contacts
// @access  Private
router.post('/', (req, res)=>{
    res.send('Add contacts');
});

// @route   PUt    api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res)=>{
    res.send('Update a contact');
});

// @route   DELETE    api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res)=>{
    res.send('Delete contact');
});

module.exports = router;