import { Router } from 'express';
import { fork } from 'child_process';

const router = Router();

router.get("/", async (req, res, next) => {
    console.log('redirect random');
  try {
    let cantidad = req.query.cant || 100000000;
    const computo = fork('./calculo.js', [cantidad]);
    computo.on("message", (data) => {
      computo.send("hola");

      res.json(data);
    });
  } catch (error) {
    next(error);
  }
});

export default router;
