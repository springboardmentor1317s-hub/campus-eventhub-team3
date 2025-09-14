const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const event = await Event.create({ title, description, date, location, createdBy: req.user.id });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name college");
    res.json(events);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });

    if (event.participants.includes(req.user.id)) {
      return res.status(400).json({ msg: "Already registered" });
    }

    event.participants.push(req.user.id);
    await event.save();
    res.json({ msg: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
