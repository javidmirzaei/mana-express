import { NextFunction, Request, Response } from "express";

export type ControllerType = {
  index: (req: Request, res: Response, next: NextFunction) => Promise<any>;
  show: (req: Request, res: Response, next: NextFunction) => Promise<any>;
  store: (req: Request, res: Response, next: NextFunction) => Promise<any>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<any>;
  delete: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}
