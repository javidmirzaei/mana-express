import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { ControllerType } from '@ManaTypes';

export class baseControllers implements ControllerType {
  protected model: Model<any>;

  constructor(model: Model<any>) {
    if (!model) {
      throw new Error('Model is required');
    }
    this.model = model;
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.model.find();
      res.status(200).json(data);
    } catch (error) {
      res.send({
        message: "notFound",
      });
    }
  };

  async show(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const data = await this.model.findOne({ _id: id });
    res.status(200).json(data);
  };

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const newItem = new this.model(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error: any) {
      res
        .status(400)
        .json({ message: "Error creating item", error: error.message });
    }
  };

  async update(req: Request, res: Response, next: NextFunction) {
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

  async delete(req: Request, res: Response, next: NextFunction) {
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

