class baseControllers {
  constructor(model) {
    this.model = model; 
  }

  index = async (req, res, next) => {
    try {
      const data = await this.model.find();
      res.status(200).json(data);
    } catch (error) {
      res.send({
        message: "notFound",
      });
    }
  };

  show = async (req, res, next) => {
    const { id } = req.params;
    const data = await this.model.findOne({ _id: id });
    res.status(200).json(data);
  };

  store = async (req, res, next) => {
    try {
      const newItem = new this.model(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error creating item", error: error.message });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedItem = await this.model.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ message: "Error updating item", error });
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedItem = await this.model.findByIdAndDelete(id);
      if (!deletedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting item", error });
    }
  };
}

module.exports = baseControllers;
