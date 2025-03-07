import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
  async handle(req: Request, res: Response){
    
    const { order_id, product_id, amount } = req.body;
    
    const additemService = new AddItemService();

    const order = await additemService.execute({
      order_id,
      product_id,
      amount,
    });

    res.json(order);
  }
}

export { AddItemController }