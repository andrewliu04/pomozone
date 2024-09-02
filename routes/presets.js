const express = require('express');
const auth = require('../middleware/auth');
const Preset = require('../models/Preset');

const router = express.Router();

// creating a timer preset
router.post('/', auth, async (req, res) => {
  const { name, workDuration, breakDuration } = req.body;

  try {
    const newPreset = new Preset({
      name,
      workDuration,
      breakDuration,
      user: req.user.id,
    });

    const preset = await newPreset.save();
    res.json(preset);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// get all presets for  user
router.get('/', auth, async (req, res) => {
  try {
    const presets = await Preset.find({ user: req.user.id });
    res.json(presets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// delete a preset
router.delete('/:id', auth, async (req, res) => {
  try {
    const preset = await Preset.findById(req.params.id);

    if (!preset) return res.status(404).json({ msg: 'No preset found' });
    if (preset.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

    await Preset.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Preset removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
